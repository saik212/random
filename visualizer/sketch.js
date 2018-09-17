function setup (){
    song = loadSound('../sounds/lair.mp3', loaded);
    amp = new p5.Amplitude();
    createCanvas(640, 480);
    fft = new p5.FFT();
}

function draw (){
    spectrum = fft.analyze();
    // stroke(155);
    // ellipse(100, 100, amp.getLevel() * 250, amp.getLevel() * 250);
    // rect(100,600,20, -spectrum[0]);
    for (let i = 0; i <= spectrum.length; i++){
        rect(10 + i*2, 500, 20, -spectrum[i]);
    }
}

function loaded (){
    console.log('song loaded');
    playBtn = createButton('play');
    stopBtn = createButton('stop');
    pauseBtn = createButton('pause');
    playBtn.mousePressed(playSong);
    stopBtn.mousePressed(stopSong);
    pauseBtn.mousePressed(pauseSong);
}

function playSong (){
    song.play();
}

function stopSong (){
    song.stop();
}

function pauseSong (){
    song.pause();
}