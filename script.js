/* ===========================================
   ❤️ HAPPY BIRTHDAY LOVE WEBSITE ❤️
   PART 1
   Video Slider + Photo Slider + Secret Love
===========================================*/


/* ================= VIDEO SLIDER ================= */

const videos = [
    "video.mp4"
];

let videoIndex = 0;

function showVideo() {

    const video = document.getElementById("video");

    if (!video) return;

    video.src = videos[videoIndex];
    video.load();
}

function nextVideo() {

    videoIndex++;

    if (videoIndex >= videos.length) {
        videoIndex = 0;
    }

    showVideo();
}

function prevVideo() {

    videoIndex--;

    if (videoIndex < 0) {
        videoIndex = videos.length - 1;
    }

    showVideo();
}



/* ================= PHOTO SLIDER ================= */

const photos = [

    "photo1.jpeg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpeg",
    "photo5.jpeg",
    "photo6.jpeg",
    "photo7.jpeg",
    "photo8.jpeg",
    "photo9.jpeg"

];

let photoIndex = 0;

function showPhoto() {

    const photo = document.getElementById("photo");

    if (!photo) return;

    photo.src = photos[photoIndex];
}

function nextPhoto() {

    photoIndex++;

    if (photoIndex >= photos.length) {
        photoIndex = 0;
    }

    showPhoto();
}

function prevPhoto() {

    photoIndex--;

    if (photoIndex < 0) {
        photoIndex = photos.length - 1;
    }

    showPhoto();
}



/* Auto Slide Every 5 Seconds */

setInterval(() => {

    nextPhoto();

}, 5000);



/* ================= SECRET LOVE ================= */

function openLove() {

    const password = document
        .getElementById("pass1")
        .value
        .trim()
        .toLowerCase();

    const message = document.getElementById("loveMsg");
    const hint = document.getElementById("hint");

    if (password === "jaan") {

        message.classList.remove("hidden");

        hint.innerHTML =
            "💖 Welcome to my heart, my love ❤️";

    }

    else {

        hint.innerHTML =
            "💡 Hint: What do you lovingly call your partner? ❤️";

    }

}
/* ===========================================
   ❤️ PART 2
   Love Letter + Gift Box + Floating Kisses
===========================================*/


/* ================= LOVE LETTER ================= */

function openLetter() {

    const password = document
        .getElementById("pass2")
        .value
        .trim()
        .toLowerCase();

    const letter = document.getElementById("letter");

    if (password === "18 april") {

        letter.classList.remove("hidden");

    } else {

        letter.innerHTML = `
        ❤️ Hint: Our Special Proposing Date ❤️
        `;

        letter.classList.remove("hidden");

    }

}



/* ================= GIFT BOX ================= */

function openGift() {

    const box = document.querySelector(".gift-box");

    const surprise =
        document.getElementById("giftSurprise");

    const title =
        document.getElementById("giftTitle");

    const text =
        document.getElementById("giftText");


    if (!box) return;

    if (box.classList.contains("open")) return;


    box.classList.add("open");


    setTimeout(() => {

        if (title) title.style.display = "none";

        if (text) text.style.display = "none";

    }, 500);


    setTimeout(() => {

        surprise.classList.remove("hidden");

        createGiftMagic();

    }, 1200);

}



/* ================= GIFT MAGIC ================= */

function createGiftMagic() {

    for (let i = 0; i < 25; i++) {

        let rose = document.createElement("div");

        rose.innerHTML =
        Math.random() > 0.5 ? "🌹" : "❤️";

        rose.style.position = "fixed";

        rose.style.left =
            Math.random() * 100 + "%";

        rose.style.bottom = "-80px";

        rose.style.fontSize =
            (25 + Math.random() * 20) + "px";

        rose.style.zIndex = "9999";

        rose.style.pointerEvents = "none";

        rose.style.animation =
            "kissMove 6s linear";

        document.body.appendChild(rose);

        setTimeout(() => {

            rose.remove();

        }, 6000);

    }

}



/* ================= FLOATING KISSES ================= */

function createKiss() {

    let kiss = document.createElement("div");

    kiss.className = "kiss-float";

    const emojis = [

        "💋",
        "❤️",
        "💕",
        "💖",
        "🌹"

    ];

    kiss.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    kiss.style.left =
        Math.random() * 100 + "%";

    kiss.style.fontSize =
        (25 + Math.random() * 20) + "px";

    kiss.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.body.appendChild(kiss);

    setTimeout(() => {

        kiss.remove();

    }, 9000);

}


/* Every 1.5 Second */

setInterval(createKiss, 1500);
/* ===========================================
   ❤️ PART 3
   LOVE MAP + SPIDERFY SETUP
===========================================*/

document.addEventListener("DOMContentLoaded", function () {

    const mapElement = document.getElementById("loveMap");

    if (!mapElement) return;

    if (typeof L === "undefined") {
        console.log("Leaflet not loaded");
        return;
    }

    /* ================= MAP ================= */

    const map = L.map("loveMap", {

        zoomControl: true,
        scrollWheelZoom: true

    }).setView([32.76982, 74.81392], 15);



    L.tileLayer(

        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",

        {

            maxZoom: 19,
            attribution: "© OpenStreetMap"

        }

    ).addTo(map);



    setTimeout(() => {

        map.invalidateSize();

    }, 500);



    /* ================= HEART ICON ================= */

    const heartIcon = L.divIcon({

        className: "memory-marker",

        html: `
        <div style="
            font-size:38px;
            filter:drop-shadow(0 0 8px hotpink);
        ">
        ❤️
        </div>
        `,

        iconSize: [40,40],

        iconAnchor: [20,20]

    });



    /* ================= SPIDERFY ================= */

    const oms = new OverlappingMarkerSpiderfier(map, {

        keepSpiderfied: true,

        nearbyDistance: 25

    });



    /* ================= MEMORIES ================= */

    const memories = [
        /* ================= MEMORIES ================= */

const memories = [

{
    lat:32.76982,
    lng:74.81392,

    title:"❤️ Our Love Story Began",

    place:"YCET Jammu",

    date:"18 April 2020",

    photos:[
        "1.jpeg",
        "2.jpeg",
        "3.jpeg"
    ],

    message:`
    This was the day our love story began. ❤️
    We both knew there was something special between us,
    but neither of us had the courage to say it.

    I still remember your hairband...
    I started playing with it just to find an excuse
    to hold your hand.

    That beautiful feeling is something
    I'll never forget.
    `
},

{
    lat:32.76982,
    lng:74.81392,

    title:"❤️ Our First Meeting",

    place:"YCET Jammu",

    date:"First Day",

    photos:[
        "photo1.jpeg"
    ],

    message:`
    This was our very first meeting.

    At that time,
    we never imagined that one day
    we would become each other's forever.

    Today,
    I can't imagine my life without you.
    ❤️
    `
},

{
    lat:32.76982,
    lng:74.81392,

    title:"❤️ First Selfie",

    place:"YCET Jammu",

    photos:[
        "selfie1.jpeg",
        "selfie2.jpeg"
    ],

    message:`
    Our first selfie together.

    Looking at this picture
    still makes me smile.
    ❤️
    `
},

{
    lat:34.0159,

    lng:75.3180,

    title:"💕 Pahalgam",

    place:"Pahalgam",

    photos:[
        "photo6.jpeg",
        "photo7.jpeg"
    ],

    message:`
    Every journey with you
    becomes a beautiful memory.

    Forever with you.
    ❤️
    `
};
/* ================= CREATE MARKERS ================= */

memories.forEach(memory => {

    /* Create Photos */

    let photoHTML = "";

    memory.photos.forEach(photo => {

        photoHTML += `
        <div class="memory-slide">
            <img src="${photo}" class="memory-photo">
        </div>
        `;

    });




    /* Popup HTML */

    const popupHTML = `

    <div class="popup">

        <div class="memory-slider">

            ${photoHTML}

        </div>

        <h3>${memory.title}</h3>

        <p>📍 ${memory.place}</p>

        ${memory.date ? `<p>📅 ${memory.date}</p>` : ""}

        <div class="popup-message">

            ${memory.message}

        </div>

    </div>

    `;




    /* Create Marker */

    const marker = L.marker(

        [memory.lat, memory.lng],

        {
            icon: heartIcon
        }

    );




    /* Add Popup */

    marker.bindPopup(

        popupHTML,

        {

            maxWidth: 520,

            minWidth: 420,

            className: "custom-popup"

        }

    );




    /* Add Marker */

    marker.addTo(map);




    /* Spiderfy */

    oms.addMarker(marker);

});
/* ===========================================
   ❤️ PART 6
   POPUP EVENTS + PHOTO SLIDER
===========================================*/

map.on("popupopen", function (e) {

    const popup = e.popup.getElement();

    if (!popup) return;

    const slider = popup.querySelector(".memory-slider");

    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (event) => {

        isDown = true;

        slider.style.cursor = "grabbing";

        startX = event.pageX - slider.offsetLeft;

        scrollLeft = slider.scrollLeft;

    });

    slider.addEventListener("mouseleave", () => {

        isDown = false;

        slider.style.cursor = "grab";

    });

    slider.addEventListener("mouseup", () => {

        isDown = false;

        slider.style.cursor = "grab";

    });

    slider.addEventListener("mousemove", (event) => {

        if (!isDown) return;

        event.preventDefault();

        const x = event.pageX - slider.offsetLeft;

        const walk = (x - startX) * 2;

        slider.scrollLeft = scrollLeft - walk;

    });

});


/* ================= MAP ANIMATION ================= */

setTimeout(() => {

    map.invalidateSize();

}, 800);

});
/* ===========================================
   ❤️ PART 7
   MUSIC
===========================================*/

window.addEventListener("click", () => {

    const music = document.getElementById("music");

    if (!music) return;

    music.play().catch(() => { });

}, { once: true });



/* ================= LOAD FIRST PHOTO ================= */

window.onload = () => {

    showPhoto();

    showVideo();

};
