document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const timeBar = document.getElementById('time-bar');
    const shuffleBtn = document.getElementById('shuffle-btn');

    const playlist = Array.from({ length: 43 }, (_, index) => `static/music/${index + 1}.mp3`);
    let currentSongIndex = 0;

    function updateAudio() {
        audio.src = playlist[currentSongIndex];
        audio.load();
    }

    function playPause() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '&#9658;'; // Play symbol
        }
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        updateAudio();
        audio.play();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        updateAudio();
        audio.play();
    }

    function shuffle() {
        currentSongIndex = Math.floor(Math.random() * playlist.length);
        updateAudio();
        audio.play();
    }

    audio.addEventListener('timeupdate', function () {
        timeBar.value = (audio.currentTime / audio.duration) * 100;
    });

    audio.addEventListener('ended', function () {
        // Play the next song when the current one ends
        nextSong();
    });

    playPauseBtn.addEventListener('click', playPause);
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
    shuffleBtn.addEventListener('click', shuffle);
});

