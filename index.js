
const image=document.querySelector(".image");
const songnames=document.querySelector("[songname]");
const next=document.querySelector(".next");
const prev=document.querySelector('[prev]');
const play=document.querySelector('[play]');
let audio=document.querySelector(".audio");
let range=document.querySelector("[range]")
let pause=document.querySelector("[pause]")
let vol = document.querySelector("[volume]")
let titledesc=document.querySelector(".titledesc")
const like=document.querySelector("[like]")
let songlength=document.querySelector("[songlength]")
const songlist=[
    {
        id:1,
        songname:"Mai fir bhi",
        songimage:"./thumnails/firbhi.jpg",
        song:"https://res.cloudinary.com/dplrzgpi1/video/upload/v1750854572/Phir_Bhi_Tumko_Chaahunga_mdekbx.mp3",
        color:"blue",
        liked:"false",
        titledesc:"Mithoon,Arijit Singh,Shasha Tirupati"
    },
    
    {
        id:2,
        songname:"Sun Raha Haina ",
        songimage:"./thumnails/sunraha.jpeg",
        song:"https://res.cloudinary.com/dplrzgpi1/video/upload/v1750854701/Sunn_Raha_Hai__Male__-_Aashiqui_2_128_Kbps_pgrbol.mp3",
        color:"teal",
        liked:"false",
        titledesc:"Ankit Tiwari"
    },

    {
        id:3,
        songname:"Thoda Thoda",
        songimage:"./thumnails/thoda.jpg",
        song:"https://res.cloudinary.com/dplrzgpi1/video/upload/v1750854703/Thoda-Thoda-Pyaar-Hua-Tumse_PagalWorld_mfwwuc.mp3",
        color:"red",
        liked:"false",
        titledesc:"Nilesh Ahuja, Kumaar, Stebin Ben"
    },

    {
        id:4,
        songname:"Husn",
        songimage:"./thumnails/husn.jpg",
        song:"https://res.cloudinary.com/dplrzgpi1/video/upload/v1750854695/Husn_PaglaSongs_y0rrp5.mp3",
        color:"purple",
        liked:"false",
        titledesc:"Anuv Jain "
    },

    {
        id:5,
        songname:"Ek Villain",
        songimage:"./thumnails/villian.jpg",
        song:"https://res.cloudinary.com/dplrzgpi1/video/upload/v1750854698/Galliyan_-_Ek_Villain_128_Kbps_r70apv.mp3",
        color:"green",
        liked:"false",
        titledesc:"Ankit Tiwari"
    }
    
];

pause.classList.add("loader");
let currindex=Math.floor(Math.random()*songlist.length);
titledesc.innerHTML=`${songlist[currindex].titledesc}`
audio.src=(songlist[currindex].song)
let currsong=songlist[currindex].songimage;
image.style.backgroundImage=`url(${currsong})`
songnames.innerHTML=songlist[currindex].songname
range.style.background=`linear-gradient(90deg,blue ${range.value}%,transparent ${range.value}%)`
vol.style.background=`linear-gradient(90deg,rgb(0, 58, 79) ${(vol.value)*10}%,transparent ${(vol.value)*10}%)`
let playtrue=0;

function nextprev(){
    songnames.innerHTML=songlist[currindex].songname
    image.style.backgroundImage=`url(${songlist[currindex].songimage})`
    audio.src= (songlist[currindex].song)
    if(playtrue)
    audio.play();
    if(songlist[currindex].liked=="false"){
        like.classList.add("bi-heart");
        like.classList.remove("bi-heart-fill");
    }
    else{
        
        like.classList.remove("bi-heart");
        like.classList.add("bi-heart-fill");
    }
    titledesc.innerHTML=`${songlist[currindex].titledesc}`
    range.value=0;
    range.style.background=`linear-gradient(90deg,rgb(0, 58, 79) 0%,transparent 0%)`
    songlength.innerHTML='0:00';
    // pause.classList.remove("loader")
    // while(isNaN(audio.duration)){
    //     play.classList.add("loader");
    //     play.classList.remove("")
    // }
    pause.classList.add("loader")
    pause.classList.remove("bi-pause-circle-fill")
    pause.classList.remove("bi-play-circle-fill")
}
next.addEventListener("click",()=>{
    if(currindex===songlist.length-1){
        currindex=-1;
    }
    currindex++;
    nextprev();
})
prev.addEventListener("click",()=>{
    if(currindex===0){
        currindex=songlist.length;
    }
    currindex--;
    nextprev();
})

let a = false;
function playlogic(){
    if(a){
        if(playtrue){
        audio.pause();
        pause.classList.remove("bi-pause-circle-fill")
        pause.classList.add("bi-play-circle-fill")
        playtrue=!playtrue;
        }
        else{
        audio.play(); 
        pause.classList.add("bi-pause-circle-fill")
        pause.classList.remove("bi-play-circle-fill")
        playtrue=!playtrue;
        }
    }
    else{
        pause.classList.remove("bi-pause-circle-fill")
        pause.classList.remove("bi-play-circle-fill")
        pause.classList.add("loader")
    }
}
play.addEventListener("click",()=>{
    playlogic();
})
// controls using keyboard
document.body.addEventListener("keydown",(e)=>{
    if(e.keyCode===39){
        if(currindex===0){
            currindex=songlist.length;
        }
        currindex++;
        nextprev();
    }
})
document.body.addEventListener("keydown",(e)=>{
    if(e.keyCode===37){
        if(currindex===songlist.length-1){
            currindex=-1;
        }
        currindex--;
        nextprev(); 
    }
})
document.body.addEventListener("keydown",(event)=>{
    // console.log(event.keyCode);
    if(event.keyCode==32)
    playlogic();
})
// document.body.addEventListener("keydown",(e)=>{
//     if(e.keyCode===38){
//         vol.style.background=`linear-gradient(90deg,rgb(0, 58, 79) ${(vol.value)*10}%,transparent ${(vol.value)*10}%)`
//         audio.volume=vol.value/10;
//         // vol.value=audio.volume*10;
//     }
// })

// Volume Handle 

vol.value=audio.volume*10;
vol.addEventListener("input",()=>{
    vol.style.background=`linear-gradient(90deg,rgb(0, 58, 79) ${(vol.value)*10}%,transparent ${(vol.value)*10}%)`
    audio.volume=vol.value/10;
})
let timefirst=document.querySelector("[timefirst]")
let timesecond=document.querySelector("[timesecond]")

timesecond.innerHTML="0"+Math.floor(Math.floor(audio.currentTime))%60;
timefirst.innerHTML=0;
     async function audiotime(){
        setInterval(() => {
            let variable=(audio.currentTime*100)/audio.duration;
            range.style.background=`linear-gradient(90deg,rgb(0, 58, 79) ${variable}%,transparent ${variable}%)`
            range.value=audio.currentTime;
            timefirst.innerHTML=Math.floor(Math.floor(audio.currentTime)/60);
            if((audio.currentTime)%60<10){
                timesecond.innerHTML="0"+Math.floor(Math.floor(audio.currentTime))%60;
            }
            else
            timesecond.innerHTML=Math.floor(Math.floor(audio.currentTime))%60;
            
        }, 1000);
        
     }

audiotime();
audio.addEventListener('loadedmetadata',()=>{
    range.max=audio.duration
    songlength.innerHTML=`${(Math.floor((audio.duration)/60))}`+':'+`${Math.floor((audio.duration)%60)}`;
  
})

// audio.addEventListener('durationchange',()=>{
//     if(playtrue){
//         pause.classList.add("bi-pause-circle-fill");
//     }
//     else{
//         pause.classList.add("bi-play-circle-fill");
//     }
    
//     pause.classList.add("loader")
// })

audio.addEventListener("canplaythrough",()=>{
    pause.classList.remove("loader")
    if(playtrue){
        pause.classList.add("bi-pause-circle-fill")

    }
    else{
        pause.classList.add("bi-play-circle-fill")
    }
    a=true
})
audio.addEventListener("error", () => {
  pause.classList.remove("loader");
  pause.classList.add("bi-play-circle-fill");
  a = true;
});


range.addEventListener("input",()=>{
    audio.currentTime=range.value;
    let variable=(audio.currentTime*100)/audio.duration;
    range.style.background=`linear-gradient(90deg,rgb(0, 58, 79) ${variable}%,transparent ${variable}%)`

})

// like song 


like.addEventListener("click",()=>{
    if(songlist[currindex].liked=="false"){
        like.classList.remove("bi-heart");
        like.classList.add("bi-heart-fill");
        songlist[currindex].liked="true";
    }
    else{
        like.classList.add("bi-heart");
        like.classList.remove("bi-heart-fill");
        songlist[currindex].liked="false";
    }
})
