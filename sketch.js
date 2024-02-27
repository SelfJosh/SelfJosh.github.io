const density = '#WX?*:÷×+=-·      ';

let video;
let asciiDiv;
let rickRollSound;

function preload() {
    soundFormats('mp3');
    rickRollSound = loadSound('Rick_Astley_Never_Gonna_Give_You_Up.mp3')
}

function setup(){
    noCanvas()
    video = createVideo('Rick_Astley_Never_Gonna_Give_You_Up.mp4');
    video.size(innerWidth / 10 , innerHeight / 14);
    video.autoplay("true")
    video.volume(0);
    asciiDiv = createDiv();
    
    
}

function draw() {
    rickRollSound.play()
    image(video, 0, 0, 0)
    video.loadPixels()
    let asciiImage = ''
    for( j = 0; j < video.height; j++) {
        
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0]
            const g = video.pixels[pixelIndex + 1]
            const b = video.pixels[pixelIndex + 2]
            const avg = (r + g + b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, len, 0));

            const c = density.charAt(charIndex);
            if( c == " ") asciiImage += "&nbsp;";
            else asciiImage += c;
        }
        asciiImage += '<br/>';
    }
    asciiDiv.html(asciiImage);
}
