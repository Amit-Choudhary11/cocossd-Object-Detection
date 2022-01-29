status="";
objects=[];

function preload(){
bed= loadImage("water bottle.jpg");
}

function setup(){
canvas = createCanvas(500,500);
canvas.position(530,250);

objectDetector= ml5.objectDetector("cocossd",modelLoaded);
}

function draw(){
image(bed,0,0,500,500);

if(status != ""){
    for(i=0; i<objects.length; i++){
        percent= floor(objects[i].confidence*100);
        fill("#FF0000")
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        text(objects[i].label +" " +percent+"%",objects[i].x,objects[i].y -5);
    }
}


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
        objects=results;
        console.log(objects);
        document.getElementById("objectsDetected").innerHTML="1/1 Objects Detected";


    }
}