//configuring input & output boxes
document.querySelector('#input').addEventListener('change', function(event){
    var currentInput = event.target.value;
    inputHappened(currentInput);
    var Name = document.querySelector("#input");
    // event.target.value = "";
});
var displayBossEvent = function( data ){
    var bossOutput = document.querySelector('#bossOutput');
    bossOutput.innerText = data;
}
var displayPlayerEvent = function ( data ){
    var playerOutput = document.querySelector('#playerOutput');
    playerOutput.innerText = data;
}
//trigger game start after player key name
var inputHappened = function(currentInput){
    startGame();
}
/////////////////////////////////////////////////////
//restartGame function
function restartGame(){
    var gameStartHeaderHTML = document.getElementById("restartGameContainer");
    gameStartHeaderHTML.style.display = "block";
    var gameContainerHTML = document.getElementById("gameContainer");
    gameContainerHTML.style.display = "none";
    charHp = 50;
    bossHp= 50;
    bossOutput.innerText = "Boss";
    playerOutput.innerText = "Player";
}
//showGame function to display game console
function showGame() {
    var gameStartHeaderHTML = document.getElementById("startGameContainer");
    gameStartHeaderHTML.style.display = "none";
    var gameContainerHTML = document.getElementById("gameContainer");
    gameContainerHTML.style.display = "block";
    var gameStartHeaderHTML = document.getElementById("restartGameContainer");
    gameStartHeaderHTML.style.display = "none";
}
var charHp = 50;
var charHpHtml = document.getElementById("charHp");
var hero = document.querySelector("#hero");
var eventImg = document.querySelector("#eventimg");
//start game, setting boss stats
var bossHp = 50;
var bossHpHtml = document.getElementById("bossHp");
var bossDef = 5;
var bossAtk = 20;
//startGame function to begin the fight event
var startGame = function (currentInput){
    atkbutton.disabled = true;
    dfbutton.disabled = true;
    hero.src="https://media.giphy.com/media/S3sc3Pg9dFpUA/giphy.gif";
    eventImg.src="https://media.giphy.com/media/3oxHQG3DcmkbYYob2o/giphy.gif";
    charHpHtml.innerText = "Player HP: "+charHp;
    bossHpHtml.innerText = "Boss HP: "+bossHp;
//countdown timer
    var roundCount = 1;
    var intervalLoop = setInterval(function() {
        console.log(roundCount++ + " round start");
        var countdownTimer = (Math.floor(Math.random() * 5)+1) * 1000;
        move(countdownTimer/100)
        var isPlayerTurn = Boolean(Math.floor(Math.random() * 2));
        var popupText = document.querySelector('#popup');
        var popupHTML = document.getElementById("popup");
        if(isPlayerTurn) {
            hero.src="https://media.giphy.com/media/WrBSHRLE9gEgM/giphy.gif"
            eventImg.src="https://media.giphy.com/media/2WGYAQZ52I6wQecREk/giphy.gif"
            // console.log(popupText);
            popupHTML.style.display = "block";
            popupText.innerHTML = ("ATTACK! <br />" + (countdownTimer/1000) + " SECS!");
            // console.log(popupText);
            // console.log("ATTACK NOW! You got " + (countdownTimer/1000) + " seconds!")
            // display("ATTACK NOW! You got " + (countdownTimer/1000) + " seconds!")
            atkbutton.disabled = false;
            dfbutton.disabled = true;
        } else {
            eventImg.src="https://media.giphy.com/media/X7Z4lDnPqcF0dyY2dX/giphy.gif"
            hero.src="https://media.giphy.com/media/dGQinrFi3BDIQ/giphy.gif"
            // console.log(popupText);
            popupHTML.style.display = "block";
            popupText.innerHTML = ("DEFEND! <br />" + (countdownTimer/1000) + " SECS!");
            // console.log(popupText);
            // console.log("def now! you got " + (countdownTimer/1000) + " seconds!")
            // display("DEFEND NOW! You got " + (countdownTimer/1000) + " seconds!")
            atkbutton.disabled = true;
            dfbutton.disabled = false;
        }
            //fight conclude and to count number of clicks so damaged can be calculated
            var fight = setTimeout(function() {
                if(isPlayerTurn) {
                    var dmgToBoss = count - bossDef;
                    if(dmgToBoss >= 0) {
                    bossHp -= dmgToBoss;
                    } else {
                    dmgToBoss = 0;
                    }
                    // reset counter
                    count = 0;
                    countDef = 0;
                    atkbutton.innerHTML = "attack: " + count;
                    dfbutton.innerHTML = "defense: " + countDef;
                    var displayBossHp = document.querySelector("#bossHp");
                    displayBossHp.innerText = "Boss HP: "+bossHp;
                    console.log("player atks boss for " + dmgToBoss + " hp. boss left " + bossHp + " HP");
                    displayBossEvent("Player damaged Boss for " + dmgToBoss + " HP. Boss left " + bossHp + " HP");
                    atkbutton.disabled=true;
                    popupHTML.style.display = "none";

                } else {
                    var dmgToPlayer = bossAtk - countDef;
                    if(dmgToPlayer >= 0) {
                        charHp -= dmgToPlayer;
                    } else {
                        dmgToPlayer = 0;
                    }
                // reset counter
                    count = 0;
                    countDef = 0;
                    atkbutton.innerHTML = "attack: " + count;
                    dfbutton.innerHTML = "defense: " + countDef;
                    var displayCharHp = document.querySelector("#charHp");
                    displayCharHp.innerText = "Player HP: "+charHp;
                    console.log("boss atks player for " + dmgToPlayer + " hp. player left " + charHp + " HP");
                    displayPlayerEvent("Boss damaged player for " + dmgToPlayer + " HP. player left " + charHp + " HP");
                    dfbutton.disabled=true;
                    popupHTML.style.display = "none";
                }
                isPlayerTurn = !isPlayerTurn;
                console.log("bosshp = " + bossHp + " : " + "charHp = " + charHp)
                if((bossHp <= 0) || (charHp <= 0)) {
                    if(bossHp <= 0) {
                    alert("You save the Earth!")
                    setTimeout(restartGame(), 3000)
                    } else if(charHp <= 0) {
                    alert("Humanity has lost! Use the Time Stone!")
                    setTimeout(restartGame(), 3000)
                    }
                    clearInterval(intervalLoop);
                }
            }, countdownTimer)
        }, 6000)
}
//////////////////////////////////////////////////////////
//counting button clicks
var atkbutton = document.getElementById("attButton")
count = 0;
atkbutton.onclick = function() {
  count += 1;
  atkbutton.innerHTML = "attack: " + count;
};
var dfbutton = document.getElementById("defButton")
countDef = 0;
dfbutton.onclick = function() {
  countDef += 1;
  dfbutton.innerHTML = "defense: " + countDef;
};

atkbutton.disabled = true;
dfbutton.disabled=true;
//to generate random time period
var randomTime = Math.floor((Math.random() * 3) + 1);
console.log(randomTime);
////////////////////////////////////////////////////
//progress bar
function move(countDownTimer) {
  var elem = document.getElementById("myBar");
  var width = 100;
  var id = setInterval(frame, countDownTimer);
  function frame() {
    if (width <= 0) {
      clearInterval(id);
  } else {
      width--;
      elem.style.width = width + '%';
  }
}
}

//ultimate skill


 // var gameStartHeaderHTML = document.getElementById("restartGameContainer");
 //    gameStartHeaderHTML.style.display = "block";
 //    var gameContainerHTML = document.getElementById("gameContainer");
 //    gameContainerHTML.style.display = "none";