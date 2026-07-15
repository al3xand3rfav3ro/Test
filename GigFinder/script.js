const concerts = [

{
    artist: "Metallica",
    city: "Milan",
    price: 60,
    date: "12 Aug 2026",
    spotify: "https://open.spotify.com/search/Metallica"
},

{
    artist: "Architects",
    city: "Berlin",
    price: 35,
    date: "22 Sep 2026",
    spotify: "https://open.spotify.com/search/Architects"
},

{
    artist: "Bring Me The Horizon",
    city: "London",
    price: 80,
    date: "3 Oct 2026",
    spotify: "https://open.spotify.com/search/Bring+Me+The+Horizon"
},

{
    artist: "Sleep Token",
    city: "Paris",
    price: 45,
    date: "15 Nov 2026",
    spotify: "https://open.spotify.com/search/Sleep+Token"
}

];

const bookmarks = [];

function displayConcerts(list) {

    const concertList = document.getElementById("concert-list");

    concertList.innerHTML = "";

    list.forEach(concert => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${concert.artist}</h3>

            <p><strong>City:</strong> ${concert.city}</p>

            <p><strong>Date:</strong> ${concert.date}</p>

            <p><strong>Price:</strong> €${concert.price}</p>

            <button class="bookmark-btn">Bookmark</button>

            <button class="spotify-btn">Spotify</button>
        `;

        const bookmarkButton =
            card.querySelector(".bookmark-btn");

        bookmarkButton.addEventListener("click", function () {
            addBookmark(concert);
        });

        const spotifyButton =
            card.querySelector(".spotify-btn");

        spotifyButton.addEventListener("click", function () {
            window.open(concert.spotify, "_blank");
        });

        concertList.appendChild(card);

    });

}

displayConcerts(concerts);
