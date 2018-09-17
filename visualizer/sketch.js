function setup (){
    song = loadSound('../sounds/lair.mp3', loaded);
    amp = new p5.Amplitude();
    createCanvas(640, 480);
}

function draw (){
    stroke(155);
    ellipse(100, 100, amp.getLevel() * 250, amp.getLevel() * 250);
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