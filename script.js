//For Player1 or Dice1
let randomNumber1 = Math.floor( (Math.random() * 6) + 1);

let randomDice = "dice" + randomNumber1 + ".png"; //dice1-6.png

let randomImage1 = "./images/" + randomDice;  //./images/dice1-6.png

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

//For Player2 or Dice2 
let randomNumber2 = Math.floor( (Math.random() * 6) + 1);

let randomDice2 = "dice" + randomNumber2 + ".png";

let randomImage2 = "./images/" + randomDice2;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);


if (randomImage1 > randomImage2) {
    document.querySelector("h1").textContent = "Player 1 Wins🚩";
}
else if (randomImage1 === randomImage2) {
    document.querySelector("h1").textContent = "Draw🥲";
} else {
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
}

console.log(randomDice);
console.log(randomImage1);
console.log(image1);

console.log(randomDice2);
console.log(randomImage2);
console.log(image2);

