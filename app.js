let progress = document.querySelector(".progress");
let song = document.querySelector("audio");
let control = document.querySelector(".con-icon")
let controlDiv = document.querySelector(".play-pause");
let forward = document.querySelector('.forward');
let backward = document.querySelector('.backward');

let flag = 0;

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime
}

forward.addEventListener("click" , () => {
    song.currentTime += 10
})

backward.addEventListener("click" , () => {
    song.currentTime -= 10
})
controlDiv.addEventListener("click", function (elem) {
    if (flag === 0) {
        control.classList.remove('fa-play');
        control.classList.add('fa-pause');
        song.play()
        flag = 1;
    }
    else if (flag === 1) {
        control.classList.remove('fa-pause')
        control.classList.add('fa-play');
        song.pause()
        flag = 0;
    }
})

if (song.play()) {
    setInterval(
        () => {
            progress.value = song.currentTime
        }, 500)
}

progress.onchange = () => {
    control.classList.remove('fa-play');
    control.classList.add('fa-pause');
    song.play()
    song.currentTime = progress.value
}
