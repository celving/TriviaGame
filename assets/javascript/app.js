//Global variables

var intervalId;

var time = 10;

var correctAnswers;

var incorrectAnswers;

//Function that decrements the timer, updates the html element, and runs the stop function when the timer hits 0
function decrement(){
    time--;
    $("#show-timer").text("Time remaining: " + time)
    if (time === 0){
        stop();
        checkAnswersOne();
    }
}

//Function that checks if the user's answer is correct
function checkAnswersOne(){
    var questionOneAnswer = $("input[name=answers-1]:checked").val();
    if (questionOneAnswer === "yes"){
        alert ("Correct!")
    }

    else if (questionOneAnswer === "no" || questionOneAnswer === "maybe"){
        alert ("Wrong!")
    }

    else {
        alert ("I dunno man");
    }



}
//Function that clears the intervalId variable
function stop(){
    clearInterval(intervalId);
}

//Function that sets a one-second interval that runs the decrement function
function startTimer(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

startTimer();