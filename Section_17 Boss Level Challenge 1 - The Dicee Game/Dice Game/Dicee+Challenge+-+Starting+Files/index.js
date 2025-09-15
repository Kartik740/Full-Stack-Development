var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
var randomDigit1 = Math.ceil(randomNumber1 *6);
var randomDigit2 = Math.ceil(randomNumber2 *6);


document.querySelector(".img1").setAttribute("src",`../images/dice${randomDigit1}.png`)
document.querySelector(".img2").setAttribute("src",`../images/dice${randomDigit2}.png`)


if(randomDigit1 > randomDigit2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}else if(randomDigit2 > randomDigit1){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}