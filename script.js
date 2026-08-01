/* =====================================================
   ❤️ HAPPY BIRTHDAY WEBSITE
   PART 1
   PHOTO + VIDEO SLIDER
=====================================================*/

/* ===========================
   PHOTO LIST
=========================== */

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

/* ===========================
   VIDEO LIST
=========================== */

const videos = [
    "video.mp4"
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
        }

    ];

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

<p>

📍 ${memory.place}

</p>

${memory.date ?

`<p>📅 ${memory.date}</p>`

: ""}


${memory.message}



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

photo.style.transform += " scale(1.2)";
photo.style.zIndex="20";

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform=photo.style.transform.replace(" scale(1.2)","");
photo.style.zIndex="1";

});

});
const loveNotes=[

"Every star reminds me of you ❤️",

"You are my moon in every dark night 🌙",

"My heart always finds you 💖",

"I still fall for you every single day ❤️",

"You are my favorite place in the universe ✨",

"Forever isn't enough with you 💕",

"Our love shines brighter than the stars ⭐",

"You complete my universe ❤️"

];
let showLines = true;
/* ===========================================
   🌌 CONSTELLATION STARS
=========================================== */

const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const STAR_COUNT = 55;

const stars = [];

class Star{

    constructor(){

        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;

        this.r = Math.random()*2+2;

        this.alpha = Math.random();

        this.speed = (Math.random()*0.02)+0.01;

        this.targetX = this.x;
        this.targetY = this.y;

    }

    update(){

        this.alpha += this.speed;

        if(this.alpha>=1 || this.alpha<=0){

            this.speed *= -1;

        }

        // Smooth movement
        this.x += (this.targetX-this.x)*0.06;
        this.y += (this.targetY-this.y)*0.06;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);

        ctx.fillStyle=`rgba(255,255,255,${this.alpha})`;

        ctx.shadowBlur=18;
        ctx.shadowColor="white";

        ctx.fill();

    }

}

for(let i=0;i<STAR_COUNT;i++){

    stars.push(new Star());

}
function drawLines(){
if(!showLines) return;
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

                ctx.strokeStyle=`rgba(255,255,255,${0.25-(dist/900)})`;

                ctx.stroke();

            }

        }

    }

}
function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawLines();

    stars.forEach(star=>{

        star.update();
        star.draw();

    });

    requestAnimationFrame(animate);

}

animate();
canvas.addEventListener("click",(e)=>{

    const rect=canvas.getBoundingClientRect();

    const mx=e.clientX-rect.left;
    const my=e.clientY-rect.top;

    for(const star of stars){

        const dx=mx-star.x;
        const dy=my-star.y;

        if(Math.sqrt(dx*dx+dy*dy)<18){

            createHeart();

            break;

        }

    }

});
/* ===========================================
   ❤️ HEART ANIMATION
=========================================== */

let heartCreated = false;

function heartPoint(t){

    return{

        x:16*Math.pow(Math.sin(t),3),

        y:-(13*Math.cos(t)
            -5*Math.cos(2*t)
            -2*Math.cos(3*t)
            -Math.cos(4*t))

    };

}

function createHeart(){

    if(heartCreated) return;

    heartCreated = true;

    showLines = false;

    const cx = canvas.width/2;
    const cy = canvas.height/2;

    const scale = 16;

    stars.forEach((star,index)=>{

        const t = Math.PI*2/stars.length*index;

        const p = heartPoint(t);

        star.targetX = cx + p.x*scale;
        star.targetY = cy + p.y*scale;

    });

    setTimeout(()=>{

        createSparkles();

        showPopup();

    },2200);

}let pulse = 1;
let grow = true;

function heartPulse(){

    if(!heartCreated) return;

    if(grow){

        pulse += 0.002;

        if(pulse>=1.08){

            grow=false;

        }

    }else{

        pulse -= 0.002;

        if(pulse<=1){

            grow=true;

        }

    }

    const centerX = canvas.width/2;
    const centerY = canvas.height/2;

    stars.forEach((star,index)=>{

        const t=(Math.PI*2/stars.length)*index;

        const p=heartPoint(t);

        star.targetX=centerX+p.x*16*pulse;
        star.targetY=centerY+p.y*16*pulse;

    });

}
function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawLines();

    heartPulse();

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
const popup = document.getElementById("popup");
const noteText = document.getElementById("noteText");

function showPopup(){

    popup.style.display="flex";

    noteText.innerHTML=

    loveNotes[Math.floor(Math.random()*loveNotes.length)];

}
document
.getElementById("closePopup")
.onclick=function(){

popup.style.display="none";

}
document
.getElementById("nextNote")
.onclick=function(){

noteText.innerHTML=

loveNotes[Math.floor(Math.random()*loveNotes.length)];

}
const sparkles=[];

class Sparkle{

    constructor(x,y){

        this.x=x;
        this.y=y;

        this.dx=(Math.random()-0.5)*6;
        this.dy=(Math.random()-0.5)*6;

        this.life=100;

        this.size=Math.random()*4+2;

    }

    update(){

        this.x+=this.dx;
        this.y+=this.dy;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

        ctx.fillStyle=
        "rgba(255,192,203,"+(this.life/100)+")";

        ctx.fill();

    }

}
function createSparkles(){

    stars.forEach(star=>{

        for(let i=0;i<3;i++){

            sparkles.push(

                new Sparkle(
                    star.x,
                    star.y
                )

            );

        }

    });

}
function shootingStar(){

    ctx.beginPath();

    ctx.moveTo(
        Math.random()*canvas.width,
        Math.random()*200
    );

    ctx.lineTo(
        Math.random()*canvas.width,
        Math.random()*200+80
    );

    ctx.strokeStyle="white";

    ctx.lineWidth=2;

    ctx.stroke();

}

setInterval(shootingStar,5000);
