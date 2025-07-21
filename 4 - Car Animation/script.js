var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;

document.addEventListener('click', function () {
    if (audio.paused) {
        audio.play().catch(function (err) {
            console.error("Playback failed:", err);
        });
    } else {
        audio.pause();
    }
});
