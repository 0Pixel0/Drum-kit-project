let buttonLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonLength; i++)
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", gotClick);



 function clickAnimation(enkey) {
     var pressedKey = document.querySelector("." + enkey);
     pressedKey.classList.add("pressed");

     setTimeout(function () {

         pressedKey.classList.remove("pressed");
     }, 200);
 }

function gotClick() {
  var clickHolder = this.innerHTML;
  playSound(clickHolder);
  clickAnimation(clickHolder);
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  clickAnimation(event.key);
});

function playSound(Key) {
  switch (Key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
        alert("enter a valid key");
      break;
  }

 
}
