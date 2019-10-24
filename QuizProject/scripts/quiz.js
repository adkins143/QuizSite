"use strict";
$(document).ready(function() {
    $("#show_results").on('click', function() {
        checkIfCorrect()
    })
})

var checkIfCorrect = function() {
    var correct = 0;


    //Checks and sees if what the user clicked for question 1 is right or wrong
    var radioButtonValue = $("input[name=question1]:checked").val();
    if (radioButtonValue == "correct") {
          $("#errorMess1").text("");
          correct++;
	} else {
        $("#errorMess1").text("Incorrect");
      }
    

    var radioButtonValue2 = $("input[name=question2]:checked").val();
    if (radioButtonValue2 == "correct") {
          $("#errorMess2").text("");
          correct++;
	} else {
        $("#errorMess2").text("Incorrect");
      }

      var radioButtonValue3 = $("input[name=question3]:checked").val();
    if (radioButtonValue3 == "correct") {
          $("#errorMess3").text("");
          correct++;
	} else {
        $("#errorMess3").text("Incorrect");
      }

      var radioButtonValue4 = $("input[name=question4]:checked").val();
    if (radioButtonValue4 == "correct") {
          $("#errorMess4").text("");
          correct++;
	} else {
        $("#errorMess4").text("Incorrect");
      }

      var radioButtonValue5 = $("input[name=question5]:checked").val();
    if (radioButtonValue5 == "correct") {
          $("#errorMess5").text("");
          correct++;
	} else {
        $("#errorMess5").text("Incorrect");
      }
   
    $("#change").text(Calculate(correct));
 
}

var Calculate = function(right){
    var percentage = (right/5) * 100;
    return "Your score is " + percentage + "%!";
}