/* ===========================================
 ❤️ PART 1
 VIDEO SLIDER
=========================================== */


const videos = [

    "video.mp4"

];


let videoIndex = 0;



function showVideo(){

    const video = document.getElementById("video");


    if(!video) return;


    video.src = videos[videoIndex];

    video.load();

}




function nextVideo(){


    videoIndex++;


    if(videoIndex >= videos.length){

        videoIndex = 0;

    }


    showVideo();


}




function prevVideo(){


    videoIndex--;


    if(videoIndex < 0){

        videoIndex = videos.length - 1;

    }


    showVideo();


}
 /* ===========================================
 ❤️ PART 2
 PHOTO SLIDER
=========================================== */


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




function showPhoto(){


    const photo = document.getElementById("photo");


    if(!photo) return;



    photo.src = photos[photoIndex];


}





function nextPhoto(){


    photoIndex++;



    if(photoIndex >= photos.length){


        photoIndex = 0;


    }



    showPhoto();


}





function prevPhoto(){


    photoIndex--;



    if(photoIndex < 0){


        photoIndex = photos.length - 1;


    }



    showPhoto();


}





/* AUTO SLIDE EVERY 5 SECOND */


setInterval(()=>{


    nextPhoto();


},5000);
 /* ===========================================
 ❤️ PART 3
 SECRET LOVE PASSWORD
=========================================== */


function openLove(){


    const input = document.getElementById("pass1");


    const message = document.getElementById("loveMsg");


    const hint = document.getElementById("hint");



    if(!input || !message || !hint) return;



    const password = input.value
        .trim()
        .toLowerCase();





    if(password === "jaan"){


        message.classList.remove("hidden");


        hint.innerHTML = 
        "💖 Welcome to my heart, my love ❤️";



    }

    else{


        hint.innerHTML =
        "💡 Hint: What do you lovingly call your partner? ❤️";


    }



}
 /* ===========================================
 ❤️ PART 4
 LOVE LETTER PASSWORD
=========================================== */


function openLetter(){


    const input = document.getElementById("pass2");


    const letter = document.getElementById("letter");



    if(!input || !letter) return;




    const password = input.value
        .trim()
        .toLowerCase();





    if(password === "18 april"){


        letter.classList.remove("hidden");



        letter.innerHTML = `

        ❤️ My Love Letter ❤️

        <br><br>

        From the first day we met,
        my life became more beautiful.

        <br><br>

        Thank you for being my happiness,
        my smile and my forever person.

        ❤️ I Love You ❤️

        `;



    }


    else{


        letter.classList.remove("hidden");


        letter.innerHTML = `

        💡 Hint:

        Our Special Proposing Date ❤️

        `;


    }



}
/* ===========================================
 ❤️ PART 5
 GIFT BOX + FLOATING LOVE ANIMATION
=========================================== */



/* ================= GIFT BOX ================= */


function openGift(){


    const box = document.querySelector(".gift-box");


    const surprise = document.getElementById("giftSurprise");


    const title = document.getElementById("giftTitle");


    const text = document.getElementById("giftText");



    if(!box || !surprise) return;



    // Already open

    if(box.classList.contains("open")) return;




    box.classList.add("open");





    setTimeout(()=>{


        if(title)

            title.style.display="none";



        if(text)

            text.style.display="none";



    },500);






    setTimeout(()=>{


        surprise.classList.remove("hidden");


        createGiftMagic();



    },1200);




}





/* ================= GIFT MAGIC ================= */


function createGiftMagic(){



    for(let i=0;i<30;i++){



        let item=document.createElement("div");



        item.innerHTML = 

        Math.random()>0.5 ? "🌹" : "❤️";



        item.style.position="fixed";



        item.style.left =

        Math.random()*100+"%";



        item.style.bottom="-50px";



        item.style.fontSize =

        (25 + Math.random()*25)+"px";



        item.style.zIndex="9999";



        item.style.pointerEvents="none";



        item.style.animation=

        "kissMove 6s linear";



        document.body.appendChild(item);





        setTimeout(()=>{


            item.remove();



        },6000);



    }


}







/* ================= FLOATING KISSES ================= */


function createKiss(){



    let kiss=document.createElement("div");



    kiss.className="kiss-float";



    const emojis=[

        "💋",
        "❤️",
        "💕",
        "💖",
        "🌹"

    ];




    kiss.innerHTML =

    emojis[

    Math.floor(Math.random()*emojis.length)

    ];




    kiss.style.left =

    Math.random()*100+"%";




    kiss.style.fontSize =

    (25+Math.random()*20)+"px";




    kiss.style.animationDuration =

    (5+Math.random()*4)+"s";




    document.body.appendChild(kiss);





    setTimeout(()=>{


        kiss.remove();



    },9000);



}





/* CREATE FLOATING HEARTS */

setInterval(()=>{


    createKiss();



},1500);
/* ===========================================
 ❤️ PART 6
 LOVE MAP + SPIDERFY
=========================================== */



document.addEventListener("DOMContentLoaded",()=>{



const mapElement = document.getElementById("loveMap");



if(!mapElement) return;




if(typeof L === "undefined"){

console.log("Leaflet not loaded");

return;

}



if(typeof OverlappingMarkerSpiderfier === "undefined"){

console.log("Spiderfy library missing");

return;

}






/* ================= MAP CREATE ================= */



const map = L.map("loveMap",{

zoomControl:true,

scrollWheelZoom:true

}).setView(

[32.76982,74.81392],

15

);





L.tileLayer(

"https://tile.openstreetmap.org/{z}/{x}/{y}.png",

{

maxZoom:19,

attribution:"© OpenStreetMap"

}

).addTo(map);







/* ================= SPIDERFY ================= */



const oms = new OverlappingMarkerSpiderfier(

map,

{

keepSpiderfied:true,

nearbyDistance:40

}

);







/* ================= HEART ICON ================= */



const heartIcon = L.divIcon({


className:"heart-marker",


html:`

<div class="heart-pin">

❤️

</div>

`,



iconSize:[40,40],


iconAnchor:[20,20]


});









/* ================= MEMORY DATA ================= */



const memories=[



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

This was the day our beautiful story started ❤️

Forever with you.

`

},






{


lat:32.76982,

lng:74.81392,


title:"❤️ First Meeting",


place:"YCET Jammu",



photos:[

"photo1.jpeg"

],



message:`

Our first meeting.

A memory that will stay forever ❤️

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

Our first selfie together ❤️

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

Every trip with you becomes magical ❤️

`

}



];









/* ================= CREATE MARKERS ================= */



memories.forEach(memory=>{





let images="";



memory.photos.forEach(photo=>{


images += `


<img src="${photo}" class="memory-photo">


`;


});






let popupHTML = `


<div class="popup">



<div class="memory-slider">


${images}


</div>




<h3>

${memory.title}

</h3>



<p>

📍 ${memory.place}

</p>





${memory.date ?

`<p>📅 ${memory.date}</p>`

:""}




<p>

${memory.message}

</p>



</div>


`;








let marker = L.marker(


[memory.lat,memory.lng],


{

icon:heartIcon

}


);






marker.bindPopup(

popupHTML,

{

maxWidth:500,

className:"custom-popup"

}

);





marker.addTo(map);





/* ⭐ IMPORTANT FOR SPIDERFY */

oms.addMarker(marker);




});








setTimeout(()=>{


map.invalidateSize();


},1000);






});
/* ===========================================
 ❤️ PART 7
 POPUP PHOTO SLIDER
=========================================== */



document.addEventListener("click", function(){


const sliders = document.querySelectorAll(".memory-slider");



sliders.forEach(slider=>{



if(slider.dataset.ready) return;



slider.dataset.ready="true";



let isDown=false;

let startX;

let scrollLeft;





slider.style.cursor="grab";






slider.addEventListener("mousedown",(e)=>{


isDown=true;


slider.style.cursor="grabbing";


startX = e.pageX - slider.offsetLeft;


scrollLeft = slider.scrollLeft;



});







slider.addEventListener("mouseleave",()=>{


isDown=false;


slider.style.cursor="grab";


});







slider.addEventListener("mouseup",()=>{


isDown=false;


slider.style.cursor="grab";


});








slider.addEventListener("mousemove",(e)=>{


if(!isDown) return;


e.preventDefault();



const x = e.pageX - slider.offsetLeft;



const walk = (x-startX)*2;



slider.scrollLeft = scrollLeft - walk;



});





});



});
/* ===========================================
 ❤️ PART 8
 MUSIC + PAGE LOAD
=========================================== */



/* ================= MUSIC AUTO PLAY ================= */


window.addEventListener("click",()=>{


    const music = document.getElementById("music");



    if(!music) return;



    music.play().catch(()=>{});



},{once:true});








/* ================= PAGE LOAD ================= */



window.addEventListener("load",()=>{



    // First Photo Load

    showPhoto();




    // First Video Load

    showVideo();




});
