// Importing all elements from the HTML page
// assigning using appropriate variable names
let now_playing = document.querySelector(".now-playing")
let track_art = document.querySelector(".track-art")
let track_name = document.querySelector(".track-name")
let track_artist = document.querySelector(".track-artist")

let playpause_btn = document.querySelector(".playpause-track")
let next_btn = document.querySelector(".next-track")
let previous_btn = document.querySelector("prev-track")

let seek_slider = document.querySelector(".seek_slider")
let volume_slider = document.querySelector(".volume_slider")
let current_time = document.querySelector(".current-time")
let total_duration = document.querySelector(".total-duration")

//Declaring global variables
let track_index = 0
let isPlaying = false
let updateTimer

//Audio element
let current_track = document.createElement('audio')

// Track list as objects
// accessed using its track index
let track_list = [
    {
      name: "Gyalchester",
      artist: "Drake",
      image: "img/img1.jpg",
      path: "music/song1.mp3"
    },
    {
      name: "Rolex",
      artist: "Ayo & Teo",
      image: "img/img2.jpg",
      path: "music/song2.mp3"
    },
    {
      name: "Run Up",
      artist: "Major Lazer",
      image: "img/img3.jpg",
      path: "music/song3.mp3",
    },
    {
      name: "Jatt da Muqabala",
      artist: "Sidhu Mossewala",
      image: "img/img5.jpg",
      path: "music/song5.mp3",
    },
  ];

 // Reset function to handle the resetting of the duration value 
  // and the slider to their initial values before a new track starts
  function resetValues() {
    current_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

  function loadTrack(track_index) {
    // Clear function for resetting the previous seek timer
    clearInterval(updateTimer);
    resetValues();
    
    // Loading a new track
    current_track.src = track_list[track_index].path;
    current_track.load();
    
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    
    // Set a 1000 millisecond period for refreshing the seek slider.
    updateTimer = setInterval(seekUpdate, 1000);
    
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    current_track.addEventListener("ended", nextTrack);
    
    // Apply a random background color
    random_bg_color();
    }
    
    function random_bg_color() {
      // Get a random number between 64 to 256 to get lighter colors
      let red = Math.floor(Math.random() * 256) + 64;
      let green = Math.floor(Math.random() * 256) + 64;
      let blue = Math.floor(Math.random() * 256) + 64;
      
      // Construct a color with the given values
      let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
      
      // Setting the background to the new color
      document.body.style.background = bgColor;
    }
      
    // Function to reset all values to their default
    function resetValues() {
      current_time.textContent = "00:00";
      total_duration.textContent = "00:00";
      seek_slider.value = 0;
    }

  // Play and Pause track function called
  // Switch between playing and pausing depending on the current state
  function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

// Play track function
function playTrack() {
  current_track.play()
  isPlaying = true

  // Replaces to pause icon when button clicked
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>'
}
