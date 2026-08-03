/* =====================================================
   ❤️ HAPPY BIRTHDAY WEBSITE
   PART 1
   PHOTO + VIDEO SLIDER
=====================================================*/

/* ===========================
   PHOTO LIST
=========================== */

const photos = [
   "15.jpeg",
    "photo1.jpeg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpeg",
    "photo5.jpeg",
    "photo6.jpeg",
    "photo7.jpeg",
    "photo8.jpeg",
    "photo9.jpeg",
     "12.jpeg",
     "12 (2).jpeg",
     "13.jpeg",
"14.jpeg",
"0.jpeg"


];

let photoIndex = 0;

/* ===========================
   VIDEO LIST
=========================== */

const videos = [
    "video.mp4",
   "video1.mp4",
   "video2.mp4",
   "video3.mp4",
   "video4.mp4",
   "video5.mp4",
   "video6.mp4",
   "video7.mp4",
   "video8.mp4",
   "video9.mp4",
   "video10.mp4",
   
];

let videoIndex = 0;

/* ===========================
   PRELOAD IMAGES
=========================== */

function preloadImages() {

    photos.forEach(src => {

        const img = new Image();

        img.src = src;

    });

}

/* ===========================
   SHOW PHOTO
=========================== */

function showPhoto() {

    const photo = document.getElementById("photo");

    if (!photo) return;

    photo.style.opacity = 0;

    setTimeout(() => {

        photo.src = photos[photoIndex];

        photo.style.opacity = 1;

    }, 250);

}

/* ===========================
   NEXT PHOTO
=========================== */

function nextPhoto() {

    photoIndex++;

    if (photoIndex >= photos.length) {

        photoIndex = 0;

    }

    showPhoto();

}

/* ===========================
   PREVIOUS PHOTO
=========================== */

function prevPhoto() {

    photoIndex--;

    if (photoIndex < 0) {

        photoIndex = photos.length - 1;

    }

    showPhoto();

}

/* ===========================
   AUTO PHOTO SLIDE
=========================== */

setInterval(() => {

    nextPhoto();

}, 5000);

/* ===========================
   SHOW VIDEO
=========================== */

function showVideo() {

    const video = document.getElementById("video");

    if (!video) return;

    video.pause();

    video.src = videos[videoIndex];

    video.load();

}

/* ===========================
   NEXT VIDEO
=========================== */

function nextVideo() {

    videoIndex++;

    if (videoIndex >= videos.length) {

        videoIndex = 0;

    }

    showVideo();

}

/* ===========================
   PREVIOUS VIDEO
=========================== */

function prevVideo() {

    videoIndex--;

    if (videoIndex < 0) {

        videoIndex = videos.length - 1;

    }

    showVideo();

}

/* ===========================
   KEYBOARD SUPPORT
=========================== */

document.addEventListener("keydown", (e) => {

    switch (e.key) {

        case "ArrowRight":

            nextPhoto();

            break;

        case "ArrowLeft":

            prevPhoto();

            break;

    }

});

/* ===========================
   PAGE LOAD
=========================== */

window.addEventListener("load", () => {

    preloadImages();

    showPhoto();

    showVideo();

});
/* =====================================================
   ❤️ PART 2
   PASSWORD SYSTEM
=====================================================*/

/* ===========================
   SECRET HEART
=========================== */

function openLove() {

    const input = document.getElementById("pass1");
    const hint = document.getElementById("hint");
    const message = document.getElementById("loveMsg");

    if (!input || !hint || !message) return;

    const password = input.value.trim().toLowerCase();

    if (password === "jaan") {

        message.classList.remove("hidden");

        hint.innerHTML = "💖 Welcome to my heart, my love ❤️";

        input.style.border = "2px solid #00cc66";

        createMiniHearts();

    } else {

        message.classList.add("hidden");

        hint.innerHTML =
            "❌ Wrong Password<br><br>💡 Hint: What do you lovingly call your partner? ❤️";

        input.style.border = "2px solid crimson";

        input.classList.add("shake");

        setTimeout(() => {

            input.classList.remove("shake");

        }, 500);

    }

}

/* ===========================
   LOVE LETTER
=========================== */

function openLetter() {

    const input = document.getElementById("pass2");
    const letter = document.getElementById("letter");

    if (!input || !letter) return;

    const password = input.value.trim().toLowerCase();

    if (
        password === "18 april" ||
        password === "18 april 2020" ||
        password === "18/04/2020"
    ) {

        letter.classList.remove("hidden");

        letter.innerHTML = `

<h2 style="text-align:center;">
💌 My Love Letter ❤️
</h2>

<p>

My Jannu ❤️

<br><br>

From the day we met,
my life became brighter.

<br><br>

Every smile,
every laugh,
every memory with you
is my favorite.

<br><br>

Thank you for loving me.

<br><br>

Thank you for choosing me.

<br><br>

I promise to stay beside you
through every happiness,
every challenge,
and every dream.

<br><br>

I Love You Forever ❤️

<br><br>

— Yours Always 💕

</p>

`;

        input.style.border = "2px solid #00cc66";

        createMiniHearts();

    } else {

        letter.classList.remove("hidden");

        letter.innerHTML = `

<h2>❌ Wrong Password</h2>

<p>

💡 Hint:

Our proposing date ❤️

</p>

`;

        input.style.border = "2px solid crimson";

        input.classList.add("shake");

        setTimeout(() => {

            input.classList.remove("shake");

        }, 500);

    }

}

/* ===========================
   ENTER KEY SUPPORT
=========================== */

const pass1 = document.getElementById("pass1");

if (pass1) {

    pass1.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            openLove();

        }

    });

}

const pass2 = document.getElementById("pass2");

if (pass2) {

    pass2.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            openLetter();

        }

    });

}

/* ===========================
   MINI HEART ANIMATION
=========================== */

function createMiniHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.top = "100%";

        heart.style.fontSize =
            (20 + Math.random() * 20) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = 9999;

        heart.style.animation =
            "miniHeart 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);

    }

}
/* =====================================================
   ❤️ PART 3
   GIFT BOX + LOVE EFFECTS
=====================================================*/

/* ===========================
   OPEN GIFT
=========================== */

function openGift() {

    const box = document.querySelector(".gift-box");
    const surprise = document.getElementById("giftSurprise");
    const title = document.getElementById("giftTitle");
    const text = document.getElementById("giftText");

    if (!box || !surprise) return;

    // Prevent opening twice
    if (box.classList.contains("open")) return;

    box.classList.add("open");

    // Hide title
    setTimeout(() => {

        if (title) title.style.display = "none";
        if (text) text.style.display = "none";

    }, 500);

    // Show surprise
    setTimeout(() => {

        surprise.classList.remove("hidden");

        createMagic();
        createConfetti();
        createFloatingLove();

    }, 1000);

}

/* ===========================
   MAGIC EFFECT
=========================== */

function createMagic() {

    const emojis = ["❤️", "💕", "💖", "💘", "💋", "🌹", "✨"];

    for (let i = 0; i < 35; i++) {

        const item = document.createElement("div");

        item.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";

        item.style.left = Math.random() * 100 + "%";

        item.style.bottom = "-50px";

        item.style.fontSize =
            (20 + Math.random() * 20) + "px";

        item.style.pointerEvents = "none";

        item.style.zIndex = "9999";

        item.style.animation =
            "loveFloat 6s linear forwards";

        document.body.appendChild(item);

        setTimeout(() => {

            item.remove();

        }, 6000);

    }

}

/* ===========================
   CONFETTI
=========================== */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}

/* ===========================
   FLOATING LOVE
=========================== */

function createFloatingLove() {

    const emojis = [
        "❤️",
        "💕",
        "💖",
        "💘",
        "💋",
        "🌹"
    ];

    const love = document.createElement("div");

    love.className = "floating-love";

    love.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    love.style.left =
        Math.random() * 100 + "%";

    love.style.fontSize =
        (20 + Math.random() * 25) + "px";

    love.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.body.appendChild(love);

    setTimeout(() => {

        love.remove();

    }, 9000);

}

/* ===========================
   CONTINUOUS HEARTS
=========================== */

setInterval(() => {

    createFloatingLove();

}, 1400);

/* ===========================
   CLICK SPARKLE
=========================== */

document.addEventListener("click", function (e) {

    for (let i = 0; i < 8; i++) {

        const star = document.createElement("div");

        star.innerHTML = "✨";

        star.style.position = "fixed";

        star.style.left =
            (e.clientX + (Math.random() * 40 - 20)) + "px";

        star.style.top =
            (e.clientY + (Math.random() * 40 - 20)) + "px";

        star.style.fontSize = "18px";

        star.style.pointerEvents = "none";

        star.style.zIndex = "9999";

        star.style.animation =
            "sparkle 1.5s linear forwards";

        document.body.appendChild(star);

        setTimeout(() => {

            star.remove();

        }, 1500);

    }

});
/* =====================================================
   ❤️ PART 4
   LOVE MAP
   LEAFLET + MARKER CLUSTER
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const mapDiv = document.getElementById("loveMap");

    if (!mapDiv) return;

    if (typeof L === "undefined") {

        console.error("Leaflet not loaded.");

        return;

    }

    /* ===========================
       CREATE MAP
    =========================== */

    const map = L.map("loveMap", {

        zoomControl: true,
        scrollWheelZoom: true

    }).setView([32.76982, 74.81392], 12);

    /* ===========================
       MAP TILES
    =========================== */

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {

            maxZoom: 19,

            attribution:
                "&copy; OpenStreetMap Contributors"

        }

    ).addTo(map);

    /* ===========================
       MARKER CLUSTER
    =========================== */

    const cluster = L.markerClusterGroup({

        spiderfyOnMaxZoom: true,

        showCoverageOnHover: false,

        zoomToBoundsOnClick: true,

        animate: true,

        removeOutsideVisibleBounds: true,

        disableClusteringAtZoom: 18

    });

    /* ===========================
       HEART ICON
    =========================== */

    const heartIcon = L.divIcon({

        className: "heart-marker",

        html: `
        <div class="heart-pin">
            ❤️
        </div>
        `,

        iconSize: [40, 40],

        iconAnchor: [20, 20]

    });

    /* ===========================
       MEMORIES
    =========================== */

    const memories = [

        {
            lat:32.76982,
            lng:74.81392,

            title:"❤️ Our Love Story Began",

            place:"YCET",

            date:"18 April 2020",

            photos:[
                "1.jpeg",
                "2.jpeg",
                "3.jpeg"
            ],

            message:
            "The day our beautiful journey started ❤️"
        },

        {
            lat:32.76982,
            lng:74.81392,

            title:"The Day We First Met💕",

            place:"YCET",

            photos:[
                "photo1.jpeg"
            ],

            message:
            "One of my favourite memories ❤️"
        },
       
        {
            lat:32.76982,
            lng:74.81392,

            title:"The Day You Became My Safe Place💕",

            place:"YCET",

            photos:[
                "9.jpeg"
            ],

            message:
            "26 march...jiss din humm shi mei coneect hue..humari souls...first tym iss din humeni ek dusre ko hug kia...aapko pta jb hum class se niklne lge thei end mei...ar aapne apni baju khol kr mujhe bola hug kr tb maine kuch nhi socha mai khuskheenchi hui aapke pass aagyi jaise mujhe ar kuch chaiye hi nhiiske ilava...vo sukoon kuch lag hi tha....is din aapne mujeh first kiss bhi ki..jiske baad mai dr gyi....mujhe kuch smjh nhi aarh tha ki kyu mai aapke saath baithi hu...pr mnn bhi nhi kr thaa aapse dur jaane ka...mnn kr rha tha bs aise hi aapki baho mei baithi rhu... ❤️"
        },
        {
            lat:32.76982,
            lng:74.81392,

            title:"The Day Before my Birthday💕",

            place:"YCET",

            photos:[
                "4.jpeg"
            ],

            message:
            "One of my favourite memories ❤️.is din next da mera bday tha...aapko lgi hui thi..hum ppr dekr class mei aaye thei ...ar fr humnei hug kia ta kyunki next day humnei nhi milna tha...hum dono ne ek dusre ka haath pkda hua tha ar mai uthne lgi thi toh aapke hatah pe zoor se press hogya tha jisse apako bohut drd hui...lekin tb aap aap merpe gussa nhi krte thei aapne mujhe kuch nhi bola fr bhi"
        },
        {
            lat:34.0159,
            lng:75.3180,

            title:"🏔️ Pahalgam Trip",

            place:"Pahalgam",

            photos:[
                "photo6.jpeg",
                "photo7.jpeg",
                "photo8.jpeg"
            ],

            message:
            "Every trip with you feels magical ❤️"
        },
       {
    lat: 32.70542,
    lng: 74.87323,

    title: "Subway Date 🥪❤️",

    place: "Subway",
        photos:[
                "5.jpeg",
                "6.jpeg"
            ],

            message:
            
"Just another day with you, but somehow it became another memory I'll always cherish ❤️.iss din 4 months hgye thei hummare rltn ko ar humnei socha ki hum millenge..fr hum mille aapne mujhe pick kia..hum subway gye...vha jo order kia vo humnei toh khaya nhi...bs paise ujadte rhe shrm ki vjh se...ar us din aapne mujhe lips pe kiss kia jiske baad mai rone lg gyi..ar aapka muh kaddu jaisa hogya🤣.fr uske baad humnei bohut saare hugs kie...tb milna hummare lie kitna muskil hota tha ..tha kya hai..pr hum khatron ke khiladi thei🤣🤣.."
},
      


        {
    lat: 32.70497,
    lng: 74.87267,

    title: "Hashtag Foods 🍔❤️",

    place: "Hashtag",
        photos:[
                "7.jpeg",
                "8.jpeg"
            ],

            message: "ye aapka pehla bday mere saath...vo  tasty pasta jo humnei waste kia...hr ldki ke lie uske partner ka bday zaida special hota uske bday se...vo uss din ko bohut khass bnaan chhati hai...humamre kpde khud match hoajte thei baar baar...bohut achi memories hai iss din ki jo humehsa humamre saath rhengi "
            

},

{
    lat: 32.72072,
    lng: 74.87609,

    title: "❤️ My B'day",

    place: "Smugglers, Bahu Plaza",

    photos: [
        "10.jpeg",
        "11.jpeg",
        "12.jpeg"
    ],

    message: `❤️Ye last din tha jab hum last baar Bahu Plaza mile the.Iss din aapne mujhe apne haatho se pasta khilaya tha.Maine aapko first time lip kiss ki thi.Aapne chalaki se eyes band ki taaki main lip kiss karu ❤️❤️❤️Kitni problems chal rahi thi ghar pe uss din, lekin jab main aapke saath thi to sab bhool gayi thi.Aap kehte ho na ki main aapke gift ki kadar nahi karti, lekin jab aapne mujhe apne haatho se chain pehnayi thi, woh feeling hi alag thi.Jab main woh chain ghar layi to maine socha tha ki ise pehnungi nahi, hamesha sambhal kar rakhungi.
Pr wvo ho nahi paaya.Par mere liye woh gift hamesha bahut khaas rahega.Isliye nahi ki usme paise lage the, balki isliye ki tumne khud mere liye soch samajh kar surprise diya tha. ❤️`
}    ];


       

 

    const bounds = [];

    /* ===========================
       CREATE MARKERS
    =========================== */

    memories.forEach(memory => {

        let images = "";

        memory.photos.forEach(photo => {

            images += `
            <img
            src="${photo}"
            class="memory-photo">
            `;

        });

const popup = `

<div class="memory-popup">

    <div class="memory-slider">
        ${images}
    </div>

    <h2>${memory.title}</h2>

    <p>📍 ${memory.place}</p>

    ${memory.date ? `<p>📅 ${memory.date}</p>` : ""}

   <div class="popup-message">
    <p>${memory.message}</p>
</div>

</div>

`;

        const marker = L.marker(

            [memory.lat, memory.lng],

            {

                icon: heartIcon,

                riseOnHover: true

            }

        );

        marker.bindPopup(

            popup,

            {

                maxWidth: 420,

                className: "love-popup"

            }

        );

        cluster.addLayer(marker);

        bounds.push([memory.lat, memory.lng]);

    });

    map.addLayer(cluster);

    /* ===========================
       AUTO FIT
    =========================== */

    if (bounds.length > 1) {

        map.fitBounds(bounds, {

            padding: [60,60]

        });

    }

    /* ===========================
       RESIZE FIX
    =========================== */

    setTimeout(() => {

        map.invalidateSize();

    },500);

});
/* =====================================================
   ❤️ PART 5
   POPUP GALLERY
=====================================================*/

document.addEventListener("popupopen", initializeGallery);

document.addEventListener("click", initializeGallery);

function initializeGallery() {

    const galleries = document.querySelectorAll(".memory-slider");

    galleries.forEach(gallery => {

        if (gallery.dataset.ready) return;

        gallery.dataset.ready = "true";

        const images = gallery.querySelectorAll("img");

        if (images.length <= 1) return;

        let current = 0;

        /* ---------- Create Buttons ---------- */

        const prev = document.createElement("button");
        prev.innerHTML = "❮";
        prev.className = "gallery-btn left";

        const next = document.createElement("button");
        next.innerHTML = "❯";
        next.className = "gallery-btn right";

        gallery.parentElement.appendChild(prev);
        gallery.parentElement.appendChild(next);

        function show(index){

            images.forEach(img=>{

                img.style.display="none";

            });

            images[index].style.display="block";

        }

        show(0);

        prev.onclick=()=>{

            current--;

            if(current<0){

                current=images.length-1;

            }

            show(current);

        };

        next.onclick=()=>{

            current++;

            if(current>=images.length){

                current=0;

            }

            show(current);

        };

        /* ---------- Auto Slide ---------- */

        let auto=setInterval(()=>{

            current++;

            if(current>=images.length){

                current=0;

            }

            show(current);

        },3500);

        gallery.addEventListener("mouseenter",()=>{

            clearInterval(auto);

        });

        gallery.addEventListener("mouseleave",()=>{

            auto=setInterval(()=>{

                current++;

                if(current>=images.length){

                    current=0;

                }

                show(current);

            },3500);

        });

        /* ---------- Mobile Swipe ---------- */

        let startX=0;

        gallery.addEventListener("touchstart",(e)=>{

            startX=e.touches[0].clientX;

        });

        gallery.addEventListener("touchend",(e)=>{

            let endX=e.changedTouches[0].clientX;

            if(startX-endX>50){

                next.click();

            }

            if(endX-startX>50){

                prev.click();

            }

        });

        /* ---------- Fullscreen ---------- */

        images.forEach(img=>{

            img.style.cursor="zoom-in";

            img.onclick=()=>{

                openFullscreen(img.src);

            };

        });

    });

}

/* ============================================
   FULL SCREEN IMAGE
============================================ */

function openFullscreen(src){

    let overlay=document.createElement("div");

    overlay.className="image-overlay";

    overlay.innerHTML=`

    <span class="close-image">&times;</span>

    <img src="${src}" class="fullscreen-image">

    `;

    document.body.appendChild(overlay);

    overlay.onclick=()=>{

        overlay.remove();

    };

}/* =====================================================
   ❤️ PART 6
   MUSIC + ANIMATIONS + LOVE COUNTER
=====================================================*/

/* ===========================
   BACKGROUND MUSIC
=========================== */

const music = document.getElementById("music");

function playMusic() {

    if (!music) return;

    music.play().catch(() => {});

}

window.addEventListener("click", playMusic, { once: true });

/* ===========================
   LOVE DAYS COUNTER
=========================== */

function updateLoveCounter() {

    const counter = document.getElementById("loveCounter");

    if (!counter) return;

    const startDate = new Date("2020-04-18");

    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    counter.innerHTML =
        `❤️ Together for <b>${days}</b> beautiful days ❤️`;

}

updateLoveCounter();

/* ===========================
   SCROLL REVEAL
=========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-section");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(sec => {

    sec.classList.add("hidden-section");

    observer.observe(sec);

});

/* ===========================
   CURSOR HEART TRAIL
=========================== */

document.addEventListener("mousemove", e => {

    if (Math.random() > 0.20) return;

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.className = "cursor-heart";

    heart.style.left = e.pageX + "px";

    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 1200);

});

/* ===========================
   RANDOM FLOATING HEARTS
=========================== */

const floating = [

    "❤️",

    "💕",

    "💖",

    "💗",

    "💘",

    "🌹"

];

setInterval(() => {

    const item = document.createElement("div");

    item.className = "love-float";

    item.innerHTML =
        floating[Math.floor(Math.random() * floating.length)];

    item.style.left = Math.random() * 100 + "%";

    item.style.fontSize =
        (20 + Math.random() * 25) + "px";

    item.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(item);

    setTimeout(() => {

        item.remove();

    }, 10000);

}, 1800);

/* ===========================
   PAGE TITLE EFFECT
=========================== */

const titles = [

    "❤️ Happy Birthday Jannu ❤️",

    "💕 I Love You Forever 💕",

    "💖 You Are My World 💖"

];

let titleIndex = 0;

setInterval(() => {

    document.title = titles[titleIndex];

    titleIndex++;

    if (titleIndex >= titles.length) {

        titleIndex = 0;

    }

}, 2500);

/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "❤️";

topBtn.id = "topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
/* =====================================================
   ❤️ PART 7
   COUNTDOWN + TYPEWRITER + FIREWORKS
=====================================================*/

/* ===========================
   BIRTHDAY COUNTDOWN
=========================== */

function updateBirthdayCountdown() {

    const countdown = document.getElementById("birthdayCountdown");

    if (!countdown) return;

    const now = new Date();

    let birthday = new Date(now.getFullYear(), 7, 4); // August = 7

    if (now > birthday) {
        birthday = new Date(now.getFullYear() + 1, 7, 4);
    }

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    countdown.innerHTML =
        `🎂 ${days}d ${hrs}h ${mins}m ${secs}s left until your birthday ❤️`;

}

setInterval(updateBirthdayCountdown,1000);
updateBirthdayCountdown();

/* ===========================
   TYPEWRITER EFFECT
=========================== */

function typeWriter(id,text,speed=40){

    const el=document.getElementById(id);

    if(!el) return;

    if(el.dataset.done) return;

    el.dataset.done="true";

    el.innerHTML="";

    let i=0;

    function typing(){

        if(i<text.length){

            el.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}

/* Start typing when visible */

const letter=document.getElementById("letter");

if(letter){

    const obs=new IntersectionObserver(entries=>{

        entries.forEach(e=>{

            if(e.isIntersecting){

                typeWriter(

                    "letter",

                    letter.textContent.trim(),

                    35

                );

            }

        });

    });

    obs.observe(letter);

}

/* ===========================
   FIREWORKS
=========================== */

function launchFireworks(){

    for(let i=0;i<60;i++){

        const fire=document.createElement("div");

        fire.className="firework";

        fire.style.left=Math.random()*100+"%";

        fire.style.top=Math.random()*60+"%";

        fire.innerHTML=["✨","💖","❤️","💕","🎉"][Math.floor(Math.random()*5)];

        document.body.appendChild(fire);

        setTimeout(()=>{

            fire.remove();

        },2000);

    }

}

/* Call fireworks after gift */

const gift=document.querySelector(".gift-box");

if(gift){

    gift.addEventListener("click",()=>{

        setTimeout(launchFireworks,1200);

    });

}

/* ===========================
   DARK / LIGHT TOGGLE
=========================== */

const themeBtn=document.createElement("button");

themeBtn.id="themeBtn";

themeBtn.innerHTML="🌙";

document.body.appendChild(themeBtn);

themeBtn.onclick=()=>{

    document.body.classList.toggle("dark");

    themeBtn.innerHTML=

    document.body.classList.contains("dark")

    ?"☀️":"🌙";

};
// Lunar Orbit Gallery

const orbitPhotos = document.querySelectorAll(".orbit-photo");

orbitPhotos.forEach(photo=>{

photo.addEventListener("mouseenter",()=>{

photo.style.transform += " scale(1.8)";
photo.style.zIndex="20";

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform=photo.style.transform.replace(" scale(1.8)","");
photo.style.zIndex="1";

});

});
/* ==========================================
   ❤️ CONSTELLATION LOVE NOTES
========================================== */

const canvas = document.getElementById("sky");

if(canvas){

const ctx = canvas.getContext("2d");

function resize(){

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const STAR_COUNT = 60;

const stars = [];

const loveNotes=[

"Every star reminds me of you ❤️",

"You are my moon 🌙",

"My forever person 💖",

"I love you endlessly ❤️",

"Our love shines brighter than the stars ✨",

"You are my home 💕",

"You complete my universe 🌌",

"Forever with you ❤️"

];

let heartMode=false;

let linesVisible=true;

class Star{

constructor(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height;

this.tx=this.x;

this.ty=this.y;

this.size=Math.random()*2+2;

this.alpha=Math.random();

this.speed=Math.random()*0.02+0.01;

}

update(){

this.alpha+=this.speed;

if(this.alpha>1||this.alpha<0){

this.speed*=-1;

}

this.x+=(this.tx-this.x)*0.05;

this.y+=(this.ty-this.y)*0.05;

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fillStyle="rgba(255,255,255,"+this.alpha+")";

ctx.shadowBlur=15;

ctx.shadowColor="white";

ctx.fill();

}

}

for(let i=0;i<STAR_COUNT;i++){

stars.push(new Star());

}
   /* ==========================================
   DRAW CONSTELLATION
========================================== */

function drawLines(){

    if(!linesVisible) return;

    ctx.lineWidth=1;

    for(let i=0;i<stars.length;i++){

        for(let j=i+1;j<stars.length;j++){

            const dx=stars[i].x-stars[j].x;
            const dy=stars[i].y-stars[j].y;

            const dist=Math.sqrt(dx*dx+dy*dy);

            if(dist<170){

                ctx.beginPath();

                ctx.moveTo(stars[i].x,stars[i].y);

                ctx.lineTo(stars[j].x,stars[j].y);

                ctx.strokeStyle="rgba(255,255,255,"+(0.25-dist/700)+")";

                ctx.stroke();

            }

        }

    }

}

/* ==========================================
   HEART SHAPE
========================================== */

function heartPoint(t){

    return{

        x:16*Math.pow(Math.sin(t),3),

        y:-(13*Math.cos(t)
           -5*Math.cos(2*t)
           -2*Math.cos(3*t)
           -Math.cos(4*t))

    };

}

function makeHeart(){

    heartMode=true;

    linesVisible=false;

    const cx=canvas.width/2;
    const cy=canvas.height/2;

    stars.forEach((star,index)=>{

        const t=index/stars.length*Math.PI*2;

        const p=heartPoint(t);

        star.tx=cx+p.x*16;
        star.ty=cy+p.y*16;

    });

    setTimeout(showLovePopup,2200);

}

/* ==========================================
   CLICK STAR
========================================== */

canvas.addEventListener("click",e=>{

    const rect=canvas.getBoundingClientRect();

    const mx=e.clientX-rect.left;
    const my=e.clientY-rect.top;

    for(const star of stars){

        const dx=mx-star.x;
        const dy=my-star.y;

        if(Math.sqrt(dx*dx+dy*dy)<20){

            makeHeart();

            break;

        }

    }

});

/* ==========================================
   SHOOTING STAR
========================================== */

function shootingStar(){

    const x=Math.random()*canvas.width;
    const y=Math.random()*250;

    ctx.beginPath();

    ctx.moveTo(x,y);

    ctx.lineTo(x+120,y+60);

    ctx.strokeStyle="white";

    ctx.lineWidth=2;

    ctx.stroke();

}

setInterval(shootingStar,5000);
   /* ==========================================
   ❤️ POPUP + SPARKLES + HEART PULSE
========================================== */

const popup=document.getElementById("popup");
const noteText=document.getElementById("noteText");

const sparkles=[];

class Sparkle{

    constructor(x,y){

        this.x=x;
        this.y=y;

        this.dx=(Math.random()-0.5)*6;
        this.dy=(Math.random()-0.5)*6;

        this.life=80;
        this.size=Math.random()*3+2;

    }

    update(){

        this.x+=this.dx;
        this.y+=this.dy;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

        ctx.fillStyle="rgba(255,192,203,"+(this.life/80)+")";

        ctx.fill();

    }

}

function createSparkles(){

    stars.forEach(star=>{

        for(let i=0;i<3;i++){

            sparkles.push(

                new Sparkle(star.x,star.y)

            );

        }

    });

}

function showLovePopup(){

    createSparkles();

    if(popup){

        popup.style.display="flex";

    }

    if(noteText){

        noteText.innerHTML=

        loveNotes[
            Math.floor(Math.random()*loveNotes.length)
        ];

    }

}

const closeBtn=document.getElementById("closePopup");

if(closeBtn){

closeBtn.onclick=()=>{

    popup.style.display="none";

    heartMode=false;

    linesVisible=true;

    stars.forEach(star=>{

        star.tx=Math.random()*canvas.width;
        star.ty=Math.random()*canvas.height;

    });

};

}

const nextBtn=document.getElementById("nextNote");

if(nextBtn){

nextBtn.onclick=()=>{

noteText.innerHTML=

loveNotes[
Math.floor(Math.random()*loveNotes.length)
];

};

}

let pulse=1;
let grow=true;

function pulseHeart(){

    if(!heartMode) return;

    if(grow){

        pulse+=0.002;

        if(pulse>1.08){

            grow=false;

        }

    }else{

        pulse-=0.002;

        if(pulse<1){

            grow=true;

        }

    }

    const cx=canvas.width/2;
    const cy=canvas.height/2;

    stars.forEach((star,index)=>{

        const t=index/stars.length*Math.PI*2;

        const p=heartPoint(t);

        star.tx=cx+p.x*16*pulse;
        star.ty=cy+p.y*16*pulse;

    });

}

/* ==========================================
   MAIN ANIMATION
========================================== */

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawLines();

    pulseHeart();

    stars.forEach(star=>{

        star.update();
        star.draw();

    });

    for(let i=sparkles.length-1;i>=0;i--){

        sparkles[i].update();
        sparkles[i].draw();

        if(sparkles[i].life<=0){

            sparkles.splice(i,1);

        }

    }

    requestAnimationFrame(animate);

}

animate();

}

/* =====================================================
   🌙 MOON + PARTICLE ENGINE
   PART 1
===================================================== */

// (() => {

// const canvas = document.getElementById("mafCanvas");
// if (!canvas) return;

// const ctx = canvas.getContext("2d");

// function resize(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }
// resize();
// window.addEventListener("resize", resize);

// /* ===========================
//    SETTINGS
// =========================== */

// const moon = {
//     x: () => canvas.width/2,
//     y: () => canvas.height/2 - 40,
//     radius: 70
// };
// const particles = [];
// const PARTICLE_COUNT = 1500;

// /* ===========================
//    PARTICLE
// =========================== */

// class Particle{

//     constructor(){

//         this.reset();

//     }

//     reset(){

//         this.x = moon.x();
//         this.y = moon.y();

//         this.tx = this.x;
//         this.ty = this.y;

//         this.size = Math.random()*2+1;

//         this.alpha = Math.random();

//         this.speed = 0.02 + Math.random()*0.02;

//     }

//     update(){

//         this.x += (this.tx-this.x)*0.05;
//         this.y += (this.ty-this.y)*0.05;

//         this.alpha += this.speed;

//         if(this.alpha>1 || this.alpha<0){

//             this.speed *= -1;

//         }

//     }

//     draw(){

//         ctx.beginPath();

//         ctx.arc(
//             this.x,
//             this.y,
//             this.size,
//             0,
//             Math.PI*2
//         );

//         ctx.fillStyle =
//         "#ffffff";

//         ctx.shadowBlur = 18;
//         ctx.shadowColor = "#ffffff";

//         ctx.fill();

//     }

// }

// /* ===========================
//    CREATE PARTICLES
// =========================== */

// for(let i=0;i<PARTICLE_COUNT;i++){

//     particles.push(
//         new Particle()
//     );

// }

// /* ===========================
//    MOON PARTICLE POSITION
// =========================== */

// function moonParticles(){

//     particles.forEach(p=>{

//         const angle=Math.random()*Math.PI*2;

//         const radius=20+Math.random()*45;

//         p.tx =
//         moon.x() +
//         Math.cos(angle)*radius;

//         p.ty =
//         moon.y() +
//         Math.sin(angle)*radius;

//     });

// }

// moonParticles();

// /* ===========================
//    DRAW MOON
// =========================== */

// function drawMoon(){

//     const x = moon.x();
//     const y = moon.y();

//     /* Glow */

//     const glow = ctx.createRadialGradient(
//         x, y, 60,
//         x, y, 180
//     );

//     glow.addColorStop(0,"rgba(255,255,255,0.75)");
//     glow.addColorStop(0.35,"rgba(255,255,255,0.25)");
//     glow.addColorStop(1,"rgba(255,255,255,0)");

//     ctx.beginPath();
//     ctx.fillStyle = glow;
//     ctx.arc(x,y,180,0,Math.PI*2);
//     ctx.fill();

//     /* Moon */

//     ctx.save();

//     ctx.beginPath();
//     ctx.arc(x,y,70,0,Math.PI*2);
//     ctx.closePath();

//     ctx.fillStyle="#fafafa";

//     ctx.shadowBlur=40;
//     ctx.shadowColor="white";

//     ctx.fill();

//     ctx.restore();

//     /* Craters */

//     ctx.fillStyle="rgba(220,220,220,0.55)";

//     [
//         [-22,-18,8],
//         [18,-10,6],
//         [-8,18,10],
//         [20,20,5],
//         [-25,22,6]
//     ].forEach(c=>{

//         ctx.beginPath();
//         ctx.arc(
//             x+c[0],
//             y+c[1],
//             c[2],
//             0,
//             Math.PI*2
//         );
//         ctx.fill();

//     });

// }
// /* ===========================
//    MAIN LOOP
// =========================== */

// window.mafParticles = particles;
// window.mafMoon = moon;
// window.mafCtx = ctx;
// window.mafCanvas = canvas;

// function animate(){

//     ctx.clearRect(
//         0,
//         0,
//         canvas.width,
//         canvas.height
//     );

//     drawMoon();

//     particles.forEach(p=>{

//         p.update();
//         p.draw();

//     });

//     requestAnimationFrame(animate);

// }

// animate();

// })();
// /* =====================================================
//    🌙 PART 2
//    MOON → AFFEE FORMATION
// ===================================================== */

// (() => {

// if(!window.mafParticles) return;

// const canvas = window.mafCanvas;
// const ctx = window.mafCtx;
// const moon = window.mafMoon;
// const particles = window.mafParticles;

// /* ===========================
//    CREATE TEXT POINTS
// =========================== */

// function createTextPoints(text){

//     const temp=document.createElement("canvas");
//     temp.width=canvas.width;
//     temp.height=canvas.height;

//     const tctx=temp.getContext("2d");

//     tctx.fillStyle="white";
//     tctx.textAlign="center";
//     tctx.textBaseline="middle";
//     tctx.font="900 170px Poppins, Arial, sans-serif";

//     tctx.fillText(
//         text,
//         canvas.width/2,
//         canvas.height/2+170
//     );
// tctx.strokeStyle = "#ffffff";
// tctx.lineWidth = 2;

// tctx.strokeText(
//     text,
//     canvas.width / 2,
//     canvas.height / 2 + 90
// );
//     const img=tctx.getImageData(
//         0,
//         0,
//         temp.width,
//         temp.height
//     );

//     const pts=[];

//     for(let y=0;y<img.height;y+=2){

//         for(let x=0;x<img.width;x+=2){

//             const index=(y*img.width+x)*4;

//             if(img.data[index+3]>120){

//                 pts.push({
//                     x,
//                     y
//                 });

//             }

//         }

//     }

//     return pts;

// }

// const affeePoints=createTextPoints("AFFEE");

// /* ===========================
//    MOVE TO TEXT
// =========================== */

// window.mafMoveToAFFEE=function(){

//     particles.forEach((p,i)=>{

//         const point=
//         affeePoints[
//             i%affeePoints.length
//         ];

//         p.tx=point.x;
//         p.ty=point.y;

//     });

// };

// /* ===========================
//    RETURN TO MOON
// =========================== */

// window.mafBackToMoon=function(){

//     particles.forEach(p=>{

//         const angle=Math.random()*Math.PI*2;

//         const r=25+Math.random()*45;

//         p.tx=
//         moon.x()+
//         Math.cos(angle)*r;

//         p.ty=
//         moon.y()+
//         Math.sin(angle)*r;

//     });

// };

// /* ===========================
//    LOOP
// =========================== */

// let affee=false;

// setInterval(()=>{

//     affee=!affee;

//     if(affee){

//         mafMoveToAFFEE();

//     }else{

//         mafBackToMoon();

//     }

// },5000);

// })();
// /* =====================================================
//    🌙 PART 3
//    MOVE PARTICLES TO AFFEE
// ===================================================== */

// (() => {

// const mafCanvas = document.getElementById("mafCanvas");
// if(!mafCanvas) return;

// /* ===========================
//    CREATE TEXT POINTS
// =========================== */

// function mafCreateTextPoints(text){

//     const tempCanvas = document.createElement("canvas");
//     const tempCtx = tempCanvas.getContext("2d");

//     tempCanvas.width = mafCanvas.width;
//     tempCanvas.height = mafCanvas.height;

//     tempCtx.clearRect(0,0,tempCanvas.width,tempCanvas.height);

//     tempCtx.fillStyle = "#ffffff";
//     tempCtx.textAlign = "center";
//     tempCtx.textBaseline = "middle";

//     tempCtx.font = "900 180px Arial";

//     // Moon ke neeche text
//     tempCtx.fillText(
//         text,
//         tempCanvas.width/2,
//         tempCanvas.height/2 + 90
//     );

//     const img = tempCtx.getImageData(
//         0,
//         0,
//         tempCanvas.width,
//         tempCanvas.height
//     );

//     const points = [];

//     // Dense sampling
//     for(let y=0; y<img.height; y+=3){

//         for(let x=0; x<img.width; x+=3){

//             const i = (y*img.width+x)*4;

//             if(img.data[i+3] > 150){

//                 points.push({
//                     x,
//                     y
//                 });

//             }

//         }

//     }

//     return points;

// }

// /* ===========================
//    TEXT POINTS
// =========================== */

// const mafTextPoints = mafCreateTextPoints("AFFEE");

// /* ===========================
//    MOVE PARTICLES
// =========================== */

// window.mafMoveToText = function(){

//     if(!window.mafParticles) return;

//     mafParticles.forEach((p,index)=>{

//         const point =
//         mafTextPoints[index % mafTextPoints.length];

//         p.tx = point.x;
//         p.ty = point.y;

//     });

// };

// /* ===========================
//    START AFTER 4 SEC
// =========================== */

// setTimeout(()=>{

//     window.mafMoveToText();

// },8000);

// })();
/* =====================================================
   🌙 MOON PARTICLE ENGINE - PART 1
===================================================== */

(() => {

const canvas = document.getElementById("mafCanvas");
if(!canvas) return;

const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

/* ===============================
   MOON
================================ */

const moon = {

    x:0,
    y:0,
    r:75

};

function updateMoon(){

    moon.x = canvas.width/2;
    moon.y = 150;

}

updateMoon();

window.addEventListener("resize",updateMoon);

/* ===============================
   PARTICLES
================================ */

const particles=[];

const PARTICLE_COUNT = 2200;

class Particle{

    constructor(){

        this.reset();

    }

    reset(){

        const angle=Math.random()*Math.PI*2;
        const radius=Math.random()*65;

        this.x=moon.x+Math.cos(angle)*radius;
        this.y=moon.y+Math.sin(angle)*radius;

        this.tx=this.x;
        this.ty=this.y;

        this.size=Math.random()*2+1;

        this.alpha=Math.random();

        this.speed=0.04+Math.random()*0.02;

    }

    update(){

        this.x+=(this.tx-this.x)*this.speed;
        this.y+=(this.ty-this.y)*this.speed;

        this.alpha+=0.015;

        if(this.alpha>1){

            this.alpha=0.25;

        }

    }

    draw(){

        ctx.beginPath();

        ctx.arc(

            this.x,
            this.y,
            this.size,
            0,
            Math.PI*2

        );

        ctx.fillStyle=`rgba(255,255,255,${this.alpha})`;

        ctx.shadowBlur=10;
        ctx.shadowColor="white";

        ctx.fill();

    }

}

for(let i=0;i<PARTICLE_COUNT;i++){

    particles.push(new Particle());

}

window.mafParticles=particles;
window.mafMoon=moon;
window.mafCtx=ctx;
window.mafCanvas=canvas;

/* ===============================
   DRAW MOON
================================ */

function drawMoon(){

    const glow=ctx.createRadialGradient(

        moon.x,
        moon.y,
        20,

        moon.x,
        moon.y,
        180

    );

    glow.addColorStop(0,"rgba(255,255,255,0.95)");
    glow.addColorStop(0.5,"rgba(255,255,255,0.35)");
    glow.addColorStop(1,"rgba(255,255,255,0)");

    ctx.beginPath();

    ctx.fillStyle=glow;

    ctx.arc(

        moon.x,
        moon.y,
        180,
        0,
        Math.PI*2

    );

    ctx.fill();

    ctx.beginPath();

    ctx.arc(

        moon.x,
        moon.y,
        moon.r,
        0,
        Math.PI*2

    );

    ctx.fillStyle="#ffffff";

    ctx.shadowBlur=50;
    ctx.shadowColor="white";

    ctx.fill();

}

/* ===============================
   LOOP
================================ */

function animate(){

    ctx.clearRect(

        0,
        0,
        canvas.width,
        canvas.height

    );

    drawMoon();

    particles.forEach(p=>{

        p.update();
        p.draw();

    });


}
 requestAnimationFrame(animate);

})();
/* =====================================================
   🌙 PART 2
   PARTICLES FORM "AFFEE"
===================================================== */

(() => {

const canvas = window.mafCanvas;
const particles = window.mafParticles;

if(!canvas || !particles) return;

/* ===========================
   CREATE TEXT POINTS
=========================== */

function createTextPoints(text){

    const c = document.createElement("canvas");
    const x = c.getContext("2d");

    c.width = canvas.width;
    c.height = canvas.height;

    x.clearRect(0,0,c.width,c.height);

    x.textAlign = "center";
    x.textBaseline = "middle";

    // Font change kar sakte ho
    x.font = "900 190px Poppins, Arial";

    x.fillStyle = "#ffffff";

    // Moon ke neeche
    x.fillText(

        text,

        c.width/2,

        380

    );

    const img = x.getImageData(

        0,
        0,
        c.width,
        c.height

    ).data;

    const pts=[];

    for(let y=0;y<c.height;y+=2){

        for(let xx=0;xx<c.width;xx+=2){

            const i=(y*c.width+xx)*4;

            if(img[i+3]>180){

                pts.push({

                    x:xx,

                    y:y

                });

            }

        }

    }

    return pts;

}

const textPoints=createTextPoints("AFFEE");

/* ===========================
   MOVE TO TEXT
=========================== */

window.mafShowText=function(){

    particles.forEach((p,i)=>{

        const pt=textPoints[
            i % textPoints.length
        ];

        p.tx=pt.x;
        p.ty=pt.y;

    });

};

})();
/* =====================================================
   🌙 PART 3
   CINEMATIC ANIMATION
===================================================== */

(() => {

const particles = window.mafParticles;
const moon = window.mafMoon;

if(!particles || !moon) return;

let showingText = false;

/* ===========================
   MOON ORBIT
=========================== */

function orbitMoon(){

    particles.forEach((p,i)=>{

        const angle =
            (i/particles.length)*Math.PI*2 +
            performance.now()*0.00035;

        const radius =
            40 + (i%25)*1.8;

        p.tx = moon.x + Math.cos(angle)*radius;
        p.ty = moon.y + Math.sin(angle)*radius;

    });

}

/* ===========================
   RETURN TO MOON
=========================== */

function backToMoon(){

    showingText=false;

    particles.forEach((p,i)=>{

        const angle=Math.random()*Math.PI*2;
        const radius=Math.random()*65;

        p.tx = moon.x + Math.cos(angle)*radius;
        p.ty = moon.y + Math.sin(angle)*radius;

    });

}

/* ===========================
   START LOOP
=========================== */

setInterval(()=>{

    if(showingText){

        backToMoon();

    }else{

        showingText=true;

        if(window.mafShowText){

window.mafShowText();
          

        }

    }

},6000);

/* ===========================
   CONTINUOUS ORBIT
=========================== */

function loop(){

    if(!showingText){

        orbitMoon();

    }

    requestAnimationFrame(loop);

}

loop();

})();
/* =====================================================
   🌙 PART 4
   PERFECT AFFEE POINTS
===================================================== */

(() => {

const particles = window.mafParticles;
if(!particles) return;

const points=[];

/* Letter size */

const startX = window.innerWidth/2 - 320;
const startY = 380;

const W = 80;
const H = 150;
const GAP = 25;

/* Draw Line */

function line(x1,y1,x2,y2,step=4){

    const len=Math.hypot(x2-x1,y2-y1);

    const n=Math.floor(len/step);

    for(let i=0;i<=n;i++){

        const t=i/n;

        points.push({

            x:x1+(x2-x1)*t,
            y:y1+(y2-y1)*t

        });

    }

}

/* ===========================
      A
=========================== */

let x=startX;

line(x,startY+H,x+W/2,startY);
line(x+W,startY+H,x+W/2,startY);
line(x+18,startY+80,x+62,startY+80);

/* ===========================
      F
=========================== */

x+=W+GAP;

line(x,startY,x,startY+H);
line(x,startY,x+W,startY);
line(x,startY+70,x+65,startY+70);

/* ===========================
      F
=========================== */

x+=W+GAP;

line(x,startY,x,startY+H);
line(x,startY,x+W,startY);
line(x,startY+70,x+65,startY+70);

/* ===========================
      E
=========================== */

x+=W+GAP;

line(x,startY,x,startY+H);
line(x,startY,x+W,startY);
line(x,startY+75,x+70,startY+75);
line(x,startY+H,x+W,startY+H);

/* ===========================
      E
=========================== */

x+=W+GAP;

line(x,startY,x,startY+H);
line(x,startY,x+W,startY);
line(x,startY+75,x+70,startY+75);
line(x,startY+H,x+W,startY+H);

/* ===========================
   SHOW TEXT
=========================== */

window.mafShowText=function(){

    particles.forEach((p,i)=>{

        const pt=points[i % points.length];

        p.tx=pt.x;
        p.ty=pt.y;

    });

};

})();
