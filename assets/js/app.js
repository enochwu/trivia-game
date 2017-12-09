$(document).ready(function() {

    var questions = [
      q1 = {
        test: "This is question 1",
        question: "What is Bart's classic phrase?",
        a1: "D'oh!",
        a2: "Take a hike!",
        a3: "Eat my shorts!***",
        a4: "Get outta here!"
      },

      q2 = {
        test: "This is question 2",
        question: "What year did \"The Simpsons\" debut on television?",
        a1: "1989***",
        a2: "1995",
        a3: "1988",
        a4: "1992"
      },

      q3 = {
        test: "This is question 3",
        question: "What aspect of the opening sequence never changes?",
        a1: "Bart writing on the school chalkboard.",
        a2: "Maggie's actions in the checkout line.***",
        a3: "Lisa's saxophone solos.",
        a4: "The family's entrance into the living room."
      },

      q4 = {
        test: "This is question 4",
        question: "How many U.S. cities bear the name Springfield?",
        a1: "27",
        a2: "36",
        a3: "13***",
        a4: "22"
      },

    ];
    // ^^^ End of Questions array.

    var truths = [
      q1.a3,
      q2.a1,
      q3.a2,
      q4.a3
    ];

    var countdownRun = false;

    var timer = 30;
    var rightCount = 0;
    var wrongCount = 0;
    var unAnsweredCount = 0;

    //Click event for Start Button
    $('#startBtn').on('click', function() {

      // Bye bye button (poof)
      $(this).remove();

      for (var i = 0; i < 4; i++) {

        console.log(i);
        function questionDisplay() {

            //Create heading, style, and text for Question
            questionText = $('<h2>')
            questionText.attr('class', 'text-center')
            questionText.text(questions[i].question)
            console.log(questionText);

            //Add all that to the #question div, includes removal of Start Button
            $('#question').html(questionText);

        }

        questionDisplay();

        var ans1 = questions[i].a1;
        var ans2 = questions[i].a2;
        var ans3 = questions[i].a3;
        var ans4 = questions[i].a4;

        for (var i = 1; i < 5; i++) {

          answerText = $('<h4>')
          answerText.addClass('btn btn-lg btn-default center-block')
          answerText.attr('id', 'ansBtn')
          ansCall = eval("ans"+i);
          answerText.attr('data-ans', ansCall)
          answerText.text(ansCall)

          if (i <= 2) {
              $('#answersLeft').append(answerText);
          } else {
              $('#answersRight').append(answerText);
          }
        }
        // End of loop for creating answers



        function correctAns() {



        }

        function incorrectAns() {



        }

        $(document).on("click", "#ansBtn", function() {
          //Pulls answer from selected button and stores it
          var selectedAns = $(this).data('ans');
          i = 0
          console.log("Does \""+selectedAns+"\" match up with \""+truths[i]+"\"?");

          if ((selectedAns == truths[i]) && timer > 0 ) {
            console.log('Yep');
            correctAns();
          } else if ((selectedAns != truths[i]) && timer > 0 ) {
            console.log('Nope');
            incorrectAns();
          } else if (timer > -1) {
            console.log('Out of Time!')
          }

        });

      }
      // End of the all important for loop powering this.

    });

})
// ^^^ End of document.ready
