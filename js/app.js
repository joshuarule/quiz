var q1a, q2a, q3a, q4a, q5a, question, score, currentQ;


$(document).ready(function() {

  // sets correct answer
  // 0 = first option
  q1a = 0;
  q2a = 1;
  q3a = 2;
  q4a = 3;
  q5a = 0;

  question = 0;
  score = 0;

  var error =     "<div class='error'> Please select an answer</div>";
  var correct =   "<div class='result correct'>Correct!</div>";
  var incorrect = "<div class='result incorrect'>Incorrect!</div>";

  function next() {
    $(currentQuestion()).toggleClass('js-show');
    question +=1;
    $(currentQuestion()).toggleClass('js-show');
    console.log("question#: " + question);
  }

  function currentQuestion() {
    return ".question:eq("+question+")";
  }

  function updateScore() {
    $(".score b").text(score);
    console.log("score updated");
  }

  function correctAnswer() {
    score +=1;
    $(correct).prependTo($('.options')).hide().fadeIn(300);
    $('.correct').delay(1000).fadeOut(300, function(){
      $(this).remove();
      next();
      updateScore();
    });
  }

  function incorrectAnswer() {
    $(incorrect).prependTo($('.options')).hide().fadeIn(300);
    $('.inccorrect').delay(1000).fadeOut(300, function(){
      $(this).remove();
      next();
      updateScore();
    });
  }

  function checkAnswer() {
    if($(currentQuestion() + ' input').is(':checked')) {
      if (question == 0) {
        if ($(".question:eq(0) .option:eq("+q1a+") input").is(':checked')){
          correctAnswer();
        } else {
          incorrectAnswer();
        }
      } 
      else if (question == 1) {
        if ($(".question:eq(1) .option:eq("+q2a+") input").is(':checked')){
          correctAnswer();
        } else {
          incorrectAnswer();
        }
      } 
      else if (question == 2) {
        if ($(".question:eq(2) .option:eq("+q3a+") input").is(':checked')){
          correctAnswer();
        } else {
          incorrectAnswer();
        }
      } 
      else if (question == 3) {
        if ($(".question:eq(3) .option:eq("+q4a+") input").is(':checked')){
          correctAnswer();
        } else {
          incorrectAnswer();
        }
      } 
      else if (question == 4) {
        if ($(".question:eq(4) .option:eq("+q5a+") input").is(':checked')){
          correctAnswer();
        } else {
          incorrectAnswer();
        }
      }
    } else {
      // displays error
      $(error).prependTo($('.options')).hide().fadeIn(300);
      // removes error
      $('.error').delay(1000).fadeOut(300, function(){
        $(this).remove();
      });
    }
    console.log(score);
  };



  $("button").click(function(){
    checkAnswer();
  })

})