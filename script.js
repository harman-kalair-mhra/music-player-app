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

//audio element
let current_track = document.createElement('audio')