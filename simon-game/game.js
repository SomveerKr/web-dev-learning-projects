var buttonColours=["red", "blue", "green", "yellow"];

//This will store random Generated game patterns
var gamePattern=[];
//This will store User generated game patterns
var userClickedPattern=[];

// Variable to check wether the game has started or not
var started=false;

var level=0;

// Calling nextSequence f^n to start the game & changing text of h1
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

//Selecting the button clicked by the user & Then calling the playSound, animatePress, checkAnswer function
$(".btn").click(function (){
    var userChosenColour =$(this).attr("id");
    userClickedPattern.push(userChosenColour);

    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    //Index of last answer of user clicked pattern & Checks the User's Answer
checkAnswer((userClickedPattern.length)-1);

})

// Function to check answer Sequence of the user
function checkAnswer(currentLevel){
    // Just to check
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    //
    if (gamePattern.length===userClickedPattern.length){
        setTimeout(function()
        {nextSequence();
        },1000);
    }} else {
      /*  var audio= new Audio("sounds/wrong.mp3");
        audio.play(); 
        OR we can call the playsound f^n*/
        playSound("wrong");

        //Adding & Removing class in the body to change bg to red
        $("body").addClass("game-over");
        //changing h1 title
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)


        //Calling startOver F^n if user is wrong
        startOver();
    }
}

// Creating a function to randomly select elements from "butttonColors"  and pushing them to "gamePattern"
function nextSequence(){
    // Creating empty "userClickedPattern" to reset the game when new level starts & and game ends
    userClickedPattern=[];
    // Increasing level 
    level++;
    $("#level-title").text("Level " + level);
    var  randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Selecting & Creating animation using jQuery
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // Playing Sound  by calling playSound f^n when the user clicks on any button
    playSound(randomChosenColour);
   
}


// Creating a funtion to play sound
function playSound(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();

}


// Creating a f^n to animate button clicks
function animatePress(currentColour){
    // Adding "pressed" class to the clicked button
    $("#"+currentColour).addClass("pressed");
     
    // Timeout f^n for pressed class
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed"); 
    }, 100)
   
}

// Function to start the game again
function startOver(){
    level=0;
    gamePattern=[];
    started= false;

}

//FOR TOUCH SCREEN
document.addEventListener("touchstart", function(){
    if (!started) {
        nextSequence();
        $("#level-title").text("Level " + level);
        
        started = true;
      }
})