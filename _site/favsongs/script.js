const audio1 = document.getElementById("myAudio1");
const audio2 = document.getElementById("myAudio2");
const audio3 = document.getElementById("myAudio3");
const audio4 = document.getElementById("myAudio4");
const audio5 = document.getElementById("myAudio5");
const audio6 = document.getElementById("myAudio6");

document.getElementsByClassName("fa-solid fa-play")[0].addEventListener("click", function(){
    audio1.play();
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
})
document.getElementsByClassName("fa-solid fa-play")[1].addEventListener("click", function(){
    audio2.play();
    audio1.pause();
    audio1.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
})
document.getElementsByClassName("fa-solid fa-play")[2].addEventListener("click", function(){
    audio3.play();
    audio2.pause();
    audio2.currentTime = 0;
    audio1.pause();
    audio1.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
})
document.getElementsByClassName("fa-solid fa-play")[3].addEventListener("click", function(){
    audio4.play();
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio1.pause();
    audio1.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
})
document.getElementsByClassName("fa-solid fa-play")[4].addEventListener("click", function(){
    audio5.play();
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio1.pause();
    audio1.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
})
document.getElementsByClassName("fa-solid fa-play")[5].addEventListener("click", function(){
    audio6.play();
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio1.pause();
    audio1.currentTime = 0;
})