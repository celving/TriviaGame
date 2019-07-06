//Global variables

var intervalId;

var time = 60;

var correctAnswers = 0;

var incorrectAnswers = 0;

var blankAnswers = 6;


$(document).ready(function () {
    //Function that decrements the timer, updates the html element, and runs the stop function when the timer hits 0
    function decrement() {
        time--;
        $("#show-timer").html("<h2>Time remaining: " + time)
        if (time === 0) {
            stop();
            endGame();
        }
    }

    //Functions that check if the user's answer is correct
    function checkAnswers() {
        $("input:checked").each(function () {

            if ($(this).val() == "yes") {
                correctAnswers++;
                blankAnswers--;
            }


            else {
                incorrectAnswers++;
                blankAnswers--;
            }

        })

    }



    //Function that tallies the user's score when time expires or the user presses the submit button

    function endGame() {
        stop();
        checkAnswers();
        $("#correct-answers").text("Correct answers: " + correctAnswers);
        $("#incorrect-answers").text("Incorrect answers: " + incorrectAnswers);
        $("#blank-answers").text("Unanswered questions: " + blankAnswers);
        $("#questions").hide();
        $("#results").show();
        $("#show-timer").hide();

    }
    //Function that clears the intervalId variable
    function stop() {
        clearInterval(intervalId);
    }

    //Function that sets a one-second interval that runs the decrement function
    function startGame() {
        //Initialize the visible elements on the page
        clearInterval(intervalId);
        $("input:radio").prop("checked", false);
        $("#results").hide();
        $("#start-game").hide();
        $("#questions").show();
        time = 60;
        $("#show-timer").show();
        $("#show-timer").html("<h2>Time remaining: " + time)
        //Reset the user's score
        correctAnswers = 0;
        incorrectAnswers = 0;
        blankAnswers = 6;
        //Starts the timer
        intervalId = setInterval(decrement, 1000);
    }

    $("#start-game").click(function () {
        startGame();
    });

    $("#replay").click(function () {
        startGame();
    })

    $("#end-game").click(function () {
        $("#show-timer").hide();
        endGame();
    })
});