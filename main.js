// document.addEventListener('DOMContentLoaded', function () {
//   var tracks = [
//     { name: 'Track 1', src: 'media/112.mp3' },
//     { name: 'Track 2', src: 'media/113.mp3' },
//     { name: 'Track 3', src: 'media/114.mp3' },
//   ];

//   var currentTrackIndex = 0;
//   var audio = document.getElementById('audio');
//   var audioSource = document.getElementById('audioSource');
//   var playBtn = document.getElementById('playBtn');
//   var pauseBtn = document.getElementById('pauseBtn');
//   var stopBtn = document.getElementById('stopBtn');
//   var prevBtn = document.getElementById('prevBtn');
//   var nextBtn = document.getElementById('nextBtn');
//   var timeProgress = document.getElementById('timeProgress');
//   var timeHandle = document.getElementById('timeHandle');
//   var currentTimeEl = document.getElementById('currentTime');
//   var muteBtn = document.getElementById('muteBtn');
//   var speedSelect = document.getElementById('speedSelect');

//   function formatTime(seconds) {
//     var minutes = Math.floor(seconds / 60);
//     var secs = Math.floor(seconds % 60);
//     return minutes + ':' + (secs < 10 ? '0' : '') + secs;
//   }

//   function loadTrack(index) {
//     if (index < 0 || index >= tracks.length) return;
  
//     currentTrackIndex = index;
//     audioSource.src = tracks[index].src;
//     audio.load(); // Load the track but do not play it
//   }
  

//   prevBtn.onclick = function () {
//     currentTrackIndex--;
//     if (currentTrackIndex < 0) {
//       currentTrackIndex = tracks.length - 1;
//     }
//     loadTrack(currentTrackIndex);
//   };

//   nextBtn.onclick = function () {
//     currentTrackIndex++;
//     if (currentTrackIndex >= tracks.length) {
//       currentTrackIndex = 0;
//     }
//     loadTrack(currentTrackIndex);
//   };

//   playBtn.onclick = function () {
//     if (audio.paused) {
//       audio.play()
//     }
//   };
  

//   pauseBtn.onclick = function () {
//     audio.pause();
//   };

//   stopBtn.onclick = function () {
//     audio.pause();
//     audio.currentTime = 0;
//   };

//   audio.ontimeupdate = function () {
//     if (audio.duration) {
//       timeProgress.style.width = timeHandle.style.left =
//         (audio.currentTime / audio.duration) * 100 + '%';
//       currentTimeEl.textContent = formatTime(audio.currentTime);
//     }
//   };

//   muteBtn.onclick = function () {
//     audio.muted = !audio.muted;
//     muteBtn.textContent = audio.muted ? '🔇 Unmute' : '🔊 Mute';
//   };

//   speedSelect.onchange = function () {
//     audio.playbackRate = speedSelect.value;
//   };

//   audio.onended = function () {
//     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
//     loadTrack(currentTrackIndex);
//   };

//   loadTrack(0);
// });


document.addEventListener('DOMContentLoaded', function () {
  var tracks = [
    { name: 'Track 1', src: 'media/112.mp3' },
    { name: 'Track 2', src: 'media/113.mp3' },
    { name: 'Track 3', src: 'media/114.mp3' },
  ];

  var currentTrackIndex = 0;
  var audio = document.getElementById('audio');
  var audioSource = document.getElementById('audioSource');
  var playBtn = document.getElementById('playBtn');
  var pauseBtn = document.getElementById('pauseBtn');
  var stopBtn = document.getElementById('stopBtn');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var timeProgress = document.getElementById('timeProgress');
  var timeHandle = document.getElementById('timeHandle');
  var currentTimeEl = document.getElementById('currentTime');
  var muteBtn = document.getElementById('muteBtn');
  var speedSelect = document.getElementById('speedSelect');

  function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return minutes + ':' + (secs < 10 ? '0' : '') + secs;
  }

  function loadTrack(index) {
    if (index < 0 || index >= tracks.length) return;

    currentTrackIndex = index;
    audioSource.src = tracks[index].src;
    audio.load(); // Reload the audio element
    audio.play(); // Start playing the new track
  }

  prevBtn.onclick = function () {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
      currentTrackIndex = tracks.length - 1;
    }
    loadTrack(currentTrackIndex);
  };

  nextBtn.onclick = function () {
    currentTrackIndex++;
    if (currentTrackIndex >= tracks.length) {
      currentTrackIndex = 0;
    }
    loadTrack(currentTrackIndex);
  };

  playBtn.onclick = function () {
    if (audio.paused) {
      audio.play();
    }
  };

  pauseBtn.onclick = function () {
    audio.pause();
  };

  stopBtn.onclick = function () {
    audio.pause();
    audio.currentTime = 0;
  };

  audio.ontimeupdate = function () {
    if (audio.duration) {
      var progressPercent = (audio.currentTime / audio.duration) * 100;
      timeProgress.style.width = progressPercent + '%';
      timeHandle.style.left = progressPercent + '%';
      currentTimeEl.textContent = formatTime(audio.currentTime);
    }
  };

  muteBtn.onclick = function () {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? 'Unmute 🔇' : 'Mute 🔊';
  };

  speedSelect.onchange = function () {
    audio.playbackRate = parseFloat(speedSelect.value);
  };

  audio.onended = function () {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
  };

  loadTrack(0);
});