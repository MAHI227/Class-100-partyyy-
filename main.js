var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){

    document.getElementById("textbox").innerHTML="";
    recognition.start();
    console.log(recognition);
}
recognition.onresult =  function run (event){

    console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);

document.getElementById("textbox").innerHTML = Content;

    if(Content=="take my selfie"){
        
        console.log("taking your selfie");

        Speak();
    }
}
    var camera=document.getElementById("camera");
    function Speak(){
        var synth=window.speechSynthesis;
    speak_data = "taking your selfie in  5 seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
     setTimeout(function(){
         take_snapshot()
            save();
        },5000
        );
    }

    Webcam.set({
        width:360,
        height:250,
        imaber_format:'tia',
        jpeg_quality:90
    });
  
    function take_snapshot(){
        Webcam.snap(function(Uri_data){
            document.getElementById("result").innerHTML="<img src='"+Uri_data+"'id='selfie_image'>";
            shutter.play();
        });
    }

     function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    console.log(image);
    link.href=image;
    link.click();
     }