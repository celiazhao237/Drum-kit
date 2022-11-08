// document.querySelector("button").addEventListener("click", function(){
//   alert("i got clicked")
//   //what to do when click detected
// })

// document.querySelector(".set").addEventListener("click", function(){
//   // alert("i got clicked")
// var audio = new Audio("sounds/tom-1.mp3")
// audio.play()  
// })

// Dectecting Button Press

var numberOfButtons =  document.querySelectorAll(".drum").length
for(var i=0; i<numberOfButtons;i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // console.log(this)
    // this.style.color="#fff"
    var buttonInnerHTML = this.innerHTML

    makeSound(buttonInnerHTML)

    buttonAnimation(buttonInnerHTML)

})
}

// Dectecting Keyboard Press

document.addEventListener("keypress",function(e){
  makeSound(e.key)
  buttonAnimation(e.key)
})

function makeSound(key){
  switch(key){
    case "w" :
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "a" :
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "s" :
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "d" :
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    case "j" :
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "k" :
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "l" :
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
  
    default:console.log(key)
  }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey)
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")  
},100)
}



