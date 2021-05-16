var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
function start() {
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML = content;
    if (content == "take my selfie") {
        speak();
        console.log("taking selfie");
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speakData = "taking a selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout (function() {
        takeSnpashot();
        save();
    }, 5000);
}
Webcam.set({
    width : 360,
    height : 250,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");
function takeSnpashot() {
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML = "<img id = 'selfieImg' src = '"+ data_url + "'>";
    });
}
function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfieImg").src;
    link.href = image;
    link.click();
}