/* ================= VIDEO SLIDER ================= */

let videos = [
    "video.mp4"
];

let videoIndex = 0;


function showVideo(){

    let video = document.getElementById("video");

    if(video){
        video.src = videos[videoIndex];
        video.load();
    }

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





/* ================= PHOTO SLIDER ================= */


let photos = [

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


let index = 0;



function showPhoto(){

    let photo=document.getElementById("photo");

    if(photo){

        photo.src = photos[index];

    }

}



function nextPhoto(){

    index++;

    if(index >= photos.length){

        index = 0;

    }

    showPhoto();

}



function prevPhoto(){

    index--;

    if(index < 0){

        index = photos.length-1;

    }

    showPhoto();

}





/* ================= SECRET LOVE ================= */


function openLove(){


let password =
document.getElementById("pass1")
.value
.trim()
.toLowerCase();



let message =
document.getElementById("loveMsg");


let hint =
document.getElementById("hint");



if(password === "jaan"){


message.classList.remove("hidden");


hint.innerHTML =
"💋 Welcome to my heart, my love ❤️";


}

else{


hint.innerHTML =
"Hint: What do you call your loved one? 😘";


}


}






/* ================= LOVE LETTER ================= */


function openLetter(){


let password =
document.getElementById("pass2")
.value
.trim()
.toLowerCase();



let letter =
document.getElementById("letter");



if(password === "18 april"){


letter.classList.remove("hidden");


}

else{


letter.innerHTML =
"Hint: Our special proposing date ❤️";


letter.classList.remove("hidden");


}


}








/* ================= GIFT BOX ================= */


function openGift(){


let box =
document.querySelector(".gift-box");


let surprise =
document.getElementById("giftSurprise");


let title =
document.getElementById("giftTitle");


let text =
document.getElementById("giftText");



if(!box) return;



if(box.classList.contains("open")){

return;

}



box.classList.add("open");



setTimeout(()=>{


if(title){

title.style.display="none";

}


if(text){

text.style.display="none";

}


},500);



setTimeout(()=>{


if(surprise){

surprise.classList.remove("hidden");

}


createGiftMagic();



},1200);


}






function createGiftMagic(){


for(let i=0;i<15;i++){


let rose=document.createElement("div");


rose.innerHTML="🌹";


rose.style.position="fixed";

rose.style.bottom="-50px";

rose.style.left=
Math.random()*100+"%";


rose.style.fontSize="35px";


rose.style.animation=
"heartMove 6s linear";



document.body.appendChild(rose);



setTimeout(()=>{

rose.remove();

},6000);


}


}







/* ================= FLOATING KISS ================= */


function createKiss(){


let kiss=document.createElement("div");


kiss.className="kiss-float";


kiss.innerHTML="💋";


kiss.style.left=
Math.random()*100+"%";



kiss.style.animationDuration =
(5 + Math.random()*5)+"s";



document.body.appendChild(kiss);



setTimeout(()=>{

kiss.remove();

},9000);


}


setInterval(createKiss,1200);









/* ================= MEMORY LOVE MAP ================= */


document.addEventListener("DOMContentLoaded",function(){


console.log("DOM READY");
let mapElement =
document.getElementById("loveMap");

console.log("MAP DIV:", mapElement);

console.log("LEAFLET:", typeof L);

if(!mapElement){

console.log("Map div missing");

return;

}



if(typeof L === "undefined"){

console.log("Leaflet not loaded");

return;

}




let map =
L.map("loveMap",{

scrollWheelZoom:true

})
.setView(
[34.0837,74.7973],
8
);





L.tileLayer(
"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
{

maxZoom:19

}

).addTo(map);






setTimeout(()=>{

map.invalidateSize();

},500);







let memories=[



{

lat:34.0837,

lng:74.7973,

title:"❤️ First Date",

place:"Dal Lake",

date:"04 August 2021",

photos:[

"photo1.jpeg",
"photo2.jpeg",
"photo3.jpeg"

],

message:
"The day our love story became beautiful ❤️"

},




{

lat:34.2955,

lng:74.6200,

title:"❄️ Snow Memories",

place:"Gulmarg",

date:"15 January 2022",

photos:[

"photo4.jpeg",
"photo5.jpeg"

],

message:
"Snow was colder but your love was warmer ❤️"

},




{

lat:34.0159,

lng:75.3180,

title:"💕 Forever",

place:"Pahalgam",

date:"20 May 2023",

photos:[

"photo6.jpeg",
"photo7.jpeg"

],

message:
"Every journey with you is special ❤️"

}


];






memories.forEach(function(memory){



let photosHTML="";



memory.photos.forEach(function(photo){


photosHTML += `

<img src="${photo}" class="memory-photo">

`;


});






L.marker([

memory.lat,

memory.lng

])

.addTo(map)



.bindPopup(`


<div class="popup">


<div class="memory-slider">

${photosHTML}

</div>


<h3>${memory.title}</h3>


<p>📍 ${memory.place}</p>


<p>📅 ${memory.date}</p>


<p>${memory.message}</p>


</div>


`);



});



});









/* ================= MUSIC ================= */


window.addEventListener("click",()=>{


let music =
document.getElementById("music");



if(music){

music.play()
.catch(()=>{});


}



},{once:true});
