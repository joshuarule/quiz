var q1a, q2a, q3a, q4a, q5a, question, score, currentQ;


$(document).ready(function() {

  // sets correct answer for each question
  // q0a = first question
  // 0   = first option
  q0a = 0;
  q1a = 1;
  q2a = 2;
  q3a = 3;
  q4a = 0;

  question = 0;
  score = 0;

  var error =     "<div class='error'> Please select an answer</div>";
  var correct =   "<div class='result correct'>Correct!</div>";
  var incorrect = "<div class='result incorrect'>Incorrect!</div>";

  // make submit button green when option selected

  $('.option').click(function(){
    $('button').addClass('active');
  })

  // find current question

  function currentQuestion() {
    return ".question:eq("+question+")";
  }

  // Go to next question

  function next() {
    $(currentQuestion()).toggleClass('js-show');
    question +=1;
    $(currentQuestion()).toggleClass('js-show');
    console.log("question#: " + question);
    $('button').removeClass('active');
  }

  // update score

  function updateScore() {
    $(".score b").text(score);
    console.log("score updated");
  }

  // correct answer

  function correctAnswer() {
    console.log('correct answer');
    score +=1;
    $(correct).prependTo($('.options')).hide().fadeIn(300);
    $('.correct').delay(1000).fadeOut(300, function(){
      if ($(".correct:animated").length === 0) {
        $('.correct').remove();
        next();
        updateScore();
      };
    });
  }

  // incorrect answer

  function incorrectAnswer() {
    console.log('incorrect answer');
    $(incorrect).prependTo($('.options')).hide().fadeIn(300);
    $('.incorrect').delay(1000).fadeOut(300, function() {
      if ($(".incorrect:animated").length === 0) {
        $('.incorrect').remove();
        next();
        updateScore();
      };
    });
  }

  // check answer based on which question

  function checkAnswer() {
    if($(currentQuestion() + ' input').is(':checked')) {
      if (question === 0) {
        if ($(".question:eq(0) .option:eq("+q0a+") input").is(':checked')){
          correctAnswer();
        } else {
          incorrectAnswer();
        }
      } 
      else if (question === 1) {
        if ($(".question:eq(1) .option:eq("+q1a+") input").is(':checked')){
          correctAnswer();
        } else {
          incorrectAnswer();
        }
      } 
      else if (question === 2) {
        if ($(".question:eq(2) .option:eq("+q2a+") input").is(':checked')){
          correctAnswer();
        } else {
          incorrectAnswer();
        }
      } 
      else if (question === 3) {
        if ($(".question:eq(3) .option:eq("+q3a+") input").is(':checked')){
          correctAnswer();
        } else {
          incorrectAnswer();
        }
      } 
      else if (question === 4) {
        if ($(".question:eq(4) .option:eq("+q4a+") input").is(':checked')){
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