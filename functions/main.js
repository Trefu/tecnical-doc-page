const song = new Audio("sounds/rest.mp3")
document.addEventListener("DOMcontentLoaded", e => song.play())

const fader = () => {
    let divImage = document.querySelector(".over")
    let div = document.querySelector(".hider")
    divImage.remove()
    div.classList.remove("hider")


    play()
}


const play = () => {
    var audio = document.getElementById("audio");
    audio.volume = 0.1
    audio.play();
}