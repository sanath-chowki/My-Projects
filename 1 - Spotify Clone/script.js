console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Toofan - Santhosh Venky", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg" },
    { songName: "Gagana Nee - Suchetha Basrur", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg" },
    { songName: "Sulthana - Mohan Krishna", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg" },
    { songName: "Mehabooba - Ananya Bhat", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg" },
    { songName: "The Monster - Ravi Basrur", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg" }
];
// Set song covers and names
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("songItemPlay")[0].id = i; // assign unique id
});
// Utility: Reset all play icons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.src = "icons/play.svg";
    });
};
// Utility: Play song by index
function playSong(index) {
    makeAllPlays();
    songIndex = index;
    audioElement.src = songs[index].filePath;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.src = "icons/pause.svg";
    document.getElementById(index).src = "icons/pause.svg";
}
// Master play button logic
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.src = "icons/pause.svg";
        gif.style.opacity = 1;
        document.getElementById(songIndex).src = "icons/pause.svg";
    } else {
        audioElement.pause();
        masterPlay.src = "icons/play.svg";
        gif.style.opacity = 0;
        document.getElementById(songIndex).src = "icons/play.svg";
    }
});
// Progress bar update
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
// Progress bar change
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});
// Individual song play buttons
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        let clickedIndex = parseInt(e.target.id);
        if (songIndex === clickedIndex && !audioElement.paused) {
            audioElement.pause();
            e.target.src = "icons/play.svg";
            masterPlay.src = "icons/play.svg";
            gif.style.opacity = 0;
        } else {
            playSong(clickedIndex);
        }
    });
});
// Next song
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    playSong(songIndex);
});
// Previous song
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong(songIndex);
});
