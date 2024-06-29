//Player 1 Dice
var randomNumber1 = Math.random();
var num1 = (Math.floor(randomNumber1*6))+1;

var randomDiceImage1 = "dice"+num1+".png";

img1 = document.querySelector(".img1").setAttribute("src", "./images/"+randomDiceImage1);


//Player 2 Dice
var randomNumber2 = Math.random();
var num2 = (Math.floor(randomNumber2*6))+1

var randomDiceImage2 = "dice"+num2+".png";

img2 = document.querySelector(".img2").setAttribute("src", "./images/"+randomDiceImage2);


if (randomDiceImage1 > randomDiceImage2) {
    document.querySelector("#play").innerHTML="🚩 Play 1 Wins!";
}
else if(randomDiceImage2 > randomDiceImage1) {
    document.querySelector("#play").innerHTML="🚩 Play 2 Wins!";
}
else {
    document.querySelector("#play").innerHTML="Draw!";
}