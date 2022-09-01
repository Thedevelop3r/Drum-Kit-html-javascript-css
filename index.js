/*
.
.
*/
// index.js > index.html
//
//loading up or Declaring initial data
//---
let buttons = document.querySelectorAll(".drum");
// setup backgound images to our buttons
let images = [
  "images/crash.png",
  "images/kick.png",
  "images/snare.png",
  "images/tom1.png",
  "images/tom2.png",
  "images/tom3.png",
  "images/tom4.png",
];
// setting up background images
let sounds = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
];

// add event listner function
let audios = [];
for(i=0; i<buttons.length;i++){
    let audio = new Audio(sounds[i]);
    audios.push(audio);
}
// adding event this function to all buttons


for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
       audios[i] = new Audio(sounds[i]);
       audios[i].play(); 
       buttons[i].style.color = "black";
       buttons[i].classList.add("pressed");
    //    console.log(buttons[i].classList);
       setTimeout(()=>{
        buttons[i].style.color = "#da0463";
        buttons[i].classList.remove("pressed");
       },300);
    });
}

document.addEventListener("keydown", (event)=>{
    // console.log(event);
    let key = event.key;
    switch (key) {
      case "w":
        buttons[0].click();
        break;
      case "a":
        buttons[1].click();
        break;
      case "s":
        buttons[2].click();
        break;
      case "d":
        buttons[3].click();
        break;
      case "j":
        buttons[4].click();
        break;
      case "k":
        buttons[5].click();
        break;
      case "l":
        buttons[6].click();
        break;

        default:
            console.log("Wrong Key");
    }





    
});


