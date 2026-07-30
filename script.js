/* ================= SECRET LOVE MESSAGE ================= */
/* ================= VIDEO SLIDER ================= */

let videos = [
    "video.mp4",
    
];

let videoIndex = 0;

function showVideo() {
    const video = document.getElementById("video");
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
let photos = [
    "photo1.jpeg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpeg",
    "photo5.jpeg",
       "photo6.jpeg",
       "photo7.jpeg",
       "photo8.jpeg",
       "photo9.jpeg",
];

let index = 0;

function showPhoto(){
    document.getElementById("photo").src = photos[index];
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
        index = photos.length - 1;
    }

    showPhoto();

}
function openLove(){

    let password =
    document.getElementById("pass1").value
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





/* ================= VIRTUAL GIFT BOX ================= */


function openGift(){


    let box =
    document.querySelector(".gift-box");


    let surprise =
    document.getElementById("giftSurprise");



    let heading =
    document.querySelector(".gift-heading");


    let instruction =
    document.querySelector(".gift-text");



    // prevent double click

    if(box.classList.contains("open")){

        return;

    }



    // open box

    box.classList.add("open");



    // remove heading text

    setTimeout(()=>{


        if(heading){

            heading.style.display="none";

        }


        if(instruction){

            instruction.style.display="none";

        }


    },500);




    // show ring and message

    setTimeout(()=>{


        surprise.classList.remove("hidden");


        createGiftMagic();


    },1200);



}








/* ================= GIFT MAGIC ================= */


function createGiftMagic(){



    // sparkle effect


    for(let i=0;i<40;i++){


        let sparkle =
        document.createElement("div");


        sparkle.className="sparkle";


        sparkle.innerHTML="✨";


        sparkle.style.left =
        Math.random()*100+"%";


        sparkle.style.top =
        Math.random()*80+"%";



        document.body.appendChild(sparkle);



        setTimeout(()=>{

            sparkle.remove();

        },2000);


    }




    // roses


    for(let i=0;i<15;i++){


        let rose =
        document.createElement("div");


        rose.innerHTML="🌹";


        rose.style.position="fixed";


        rose.style.bottom="-50px";


        rose.style.left =
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









/* ================= FLOATING HEARTS ================= */


function createHeart(){


    let heart =
    document.createElement("div");


    heart.className="heart";


    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100+"%";


    heart.style.animationDuration =
    (5+Math.random()*5)+"s";



    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },9000);


}



setInterval(()=>{

    createHeart();

},800);









/* ================= FLOATING KISSES ================= */


function createKiss(){


    let kiss =
    document.createElement("div");


    kiss.className="kiss-float";


    kiss.innerHTML="💋";


    kiss.style.left =
    Math.random()*100+"%";


    kiss.style.animationDuration =
    (5+Math.random()*5)+"s";



    document.body.appendChild(kiss);



    setTimeout(()=>{

        kiss.remove();

    },9000);


}



setInterval(()=>{


    createKiss();


},1200);









/* ================= RING SPARKLES ================= */


setInterval(()=>{


    let surprise =
    document.getElementById("giftSurprise");



    if(
        surprise &&
        !surprise.classList.contains("hidden")
    ){


        let sparkle =
        document.createElement("div");


        sparkle.className="sparkle";


        sparkle.innerHTML="✨";


        sparkle.style.left =
        (40+Math.random()*20)+"%";


        sparkle.style.top =
        (35+Math.random()*20)+"%";



        document.body.appendChild(sparkle);



        setTimeout(()=>{

            sparkle.remove();

        },2000);


    }


},500);







/* ================= MUSIC START ================= */


window.addEventListener("click",()=>{


    let music =
    document.getElementById("music");


    if(music){


        music.play()
        .catch(()=>{});


    }


},{once:true});
