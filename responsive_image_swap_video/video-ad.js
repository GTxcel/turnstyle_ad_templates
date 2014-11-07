
      function playVideo() {
        var playButton = document.getElementById("playButton");
        playButton.style.display = "none";
        var lightbox = document.getElementById('lightbox');
        lightbox.style.display = "block";
        jwplayer().play();
      }
      function closeVideo() {
        jwplayer().stop();
        var lightbox = document.getElementById('lightbox');
        lightbox.style.display = "none";
        var playButton = document.getElementById("playButton");
        playButton.style.display = "block";
      }