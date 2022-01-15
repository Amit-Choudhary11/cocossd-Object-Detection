status="";

function preload(){
bed= loadImage("bed.jpeg");
}

function setup(){
canvas = createCanvas(500,500);
canvas.position(530,250);

objectDetector= ml5.objectDetector("cocossd",modelLoaded);
}

function draw(){
image(bed,0,0,500,500);
}

function modelLoaded(){
    console.log("Model Loaded");
    status="true";
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    objectDetector.detect(bed, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("status").innerHTML="Status: Objects Detected";

    }
}