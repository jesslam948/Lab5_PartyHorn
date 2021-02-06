// declaration of elements
var num_in = document.getElementById("volume-number");
var slider_in = document.getElementById("volume-slider");
var aud = document.getElementById("horn-sound");
var vol_img = document.getElementById("volume-image");

var air_opt = document.getElementById("radio-air-horn");
var car_opt = document.getElementById("radio-car-horn");
var party_opt = document.getElementById("radio-party-horn");
var sound_img = document.getElementById("sound-image");

var honk_btn = document.getElementById("honk-btn");

// updates volume and slider value
num_in.addEventListener("input", function() {
    if (num_in.value.length == 0) {
        num_in.value = 0;
    }
    aud.volume = Number(num_in.value) / 100;     // update audio volume
    slider_in.value = num_in.value;     // update slider
    updateIcon(num_in.value);     // change volume icon
    updateButton(num_in.value);     // update button status
});

// updates volume and num input value
slider_in.addEventListener("input", function() {
    aud.volume = Number(slider_in.value) / 100;     // update audio volume
    num_in.value = slider_in.value;     // update num input
    updateIcon(slider_in.value);    // change volume icon
    updateButton(slider_in.value);     // update button status
});

// updates the volume icon based on the sound level
function updateIcon(vol) {
    if (vol == 0) {
        vol_img.src = "./assets/media/icons/volume-level-0.svg";
    } else if (vol <= 33) {
        vol_img.src = "./assets/media/icons/volume-level-1.svg";
    } else if (vol <= 66) {
        vol_img.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        vol_img.src = "./assets/media/icons/volume-level-3.svg";
    }
}

// disables/enables button depending on volume
function updateButton(vol) {
    if (vol == 0) {
        honk_btn.disabled = true;
    } else {
        honk_btn.disabled = false;
    }
}

// switches image and sound to air horn
air_opt.addEventListener("input", function() {
    if (air_opt.checked) {
        sound_img.src = "./assets/media/images/air-horn.svg";
        aud.src = "./assets/media/audio/air-horn.mp3";
    }
});

// switches image and sound to car horn
car_opt.addEventListener("input", function() {
    if (car_opt.checked) {
        sound_img.src = "./assets/media/images/car.svg";
        aud.src = "./assets/media/audio/car-horn.mp3";
    }
});

// switches image and sound to party horn
party_opt.addEventListener("input", function() {
    if (party_opt.checked) {
        sound_img.src = "./assets/media/images/party-horn.svg";
        aud.src = "./assets/media/audio/party-horn.mp3";
    }
});

// stops page reload and plays audio
honk_btn.addEventListener("click", function(e) {
    e.preventDefault();
    aud.play();
});