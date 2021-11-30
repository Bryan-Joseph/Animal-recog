var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-JWbkrC8y/model.json',load);
}


function loaded(error,result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        sound = result[0].label;
        confidence = result[0].confidence;

        if (sound == "Bark") {
            dog++;
            document.getElementById("changeImage").src = "dog.png";
            document.getElementById("animal-dog").innerHTML = dog;
        }else if (sound == "Meow"){
            cat++;
            document.getElementById("changeImage").src = "cat.png";
            document.getElementById("animal-cat").innerHTML = cat;
        }else if (sound == "Moo"){
            cow++;
            document.getElementById("changeImage").src = "cow.png";
            document.getElementById("animal-cow").innerHTML = cow;
        }else if (sound == "Roar"){
            lion++;
            document.getElementById("changeImage").src = "lion.png";
            document.getElementById("animal-lion").innerHTML = lion;
        }else{

        }
    }
}

function load() {
    classifier.classify(loaded);
    console.log('loaded');
}
