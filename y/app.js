let songSelectDiv = document.querySelector(".menu-select");
let song = document.querySelector("audio");
let control = document.querySelector(".con-icon");
let progress = document.querySelector(".progress");
let songName = document.querySelector(".name");
let artistName = document.querySelector("p");
let songPic = document.querySelector('.song-img');
let controlDiv = document.querySelector(".play-pause");
let forward = document.querySelector('.forward')
let backward = document.querySelector('.backward')

let flag = 0;

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
};
song.pause();

// Event delegation for dynamic song selection
songSelectDiv.addEventListener("click", function (event) {
    if (event.target.classList.contains("song-title")) {
        changeSong(
            event.target.dataset.songSrc,
            event.target.dataset.songName,
            event.target.dataset.artistName,
            event.target.dataset.songPic
        );
    }
});

function changeSong(src, name, artist, pic) {
    song.src = src;
    songName.textContent = name;
    artistName.textContent = artist;
    songPic.src = pic;
    songSelectDiv.style.left = -100 + '%'
    control.classList.remove('fa-play');
    control.classList.add('fa-pause');
    song.play();
}

forward.addEventListener("click", () => {
    song.currentTime += 10;
});

backward.addEventListener("click", () => {
    song.currentTime -= 10;
});

controlDiv.addEventListener("click", function () {
    if (flag === 0) {
        control.classList.remove('fa-play');
        control.classList.add('fa-pause');
        song.play();
        flag = 1;
    } else if (flag === 1) {
        control.classList.remove('fa-pause');
        control.classList.add('fa-play');
        song.pause();
        flag = 0;
    }
});

setInterval(() => {
    progress.value = song.currentTime;
}, 1000);

progress.onchange = () => {
    control.classList.remove('fa-play');
    control.classList.add('fa-pause');
    song.play();
    song.currentTime = progress.value;
};

let flag2 = 0;

function menuToggle() {
    if (flag2 === 0) {
        songSelectDiv.style.left = 0;
        flag2 = 1;
    } else if (flag2 === 1) {
        songSelectDiv.style.left = -100 + '%';
        flag2 = 0;
    }
}
