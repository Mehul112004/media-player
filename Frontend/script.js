let progress = document.querySelector(".progress")
let audio= new Audio("more.mp3")
let play= document.querySelector("#play");
play.addEventListener("click",()=>{
    audio.play();
    progress.max=audio.duration
})
audio.addEventListener("timeupdate",()=>{
    progress.value=audio.currentTime
})