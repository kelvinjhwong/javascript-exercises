$(function () {
  var App = {
    questions: [
      {
        id: 1,
        description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
        options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
      },
      {
        id: 2,
        description: 'Which of the following numbers is the answer to Life, the \
                      Universe and Everything?',
        options: ['66', '13', '111', '42'],
      },
      {
        id: 3,
        description: 'What is Pan Galactic Gargle Blaster?',
        options: ['A drink', 'A machine', 'A creature', 'None of the above'],
      },
      {
        id: 4,
        description: 'Which star system does Ford Prefect belong to?',
        options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
      },
    ],

    answerKey: {
      '1': 'Douglas Adams',
      '2': '42',
      '3': 'A drink',
      '4': 'Betelgeuse'
    },

    questionTemplate: Handlebars.compile($('#question-template').html()),
    answerOptionTemplate: Handlebars.compile($('#answer-option-template').html()),

    $questionsList: $('ol#questions'),
    $form: $('form'),
    $formSubmit: $('form input[type="submit"]'),
    $formReset: $('form input[type="reset"]'),

    renderQuestions: function () {
      this.questions.forEach(function (question) {
        this.$questionsList.append(this.questionTemplate(question));
      }, this);
    },

    renderAnswerOptions: function () {
      this.questions.forEach(function (question) {
        var $answerOptionsList = this.$questionsList.find(`li#question-${question.id} ul`);

        question.options.forEach(function (option) {
          $answerOptionsList.append(this.answerOptionTemplate({
            'question-id': question.id,
            'answer-option': option,
          }));
        }, this);
      }, this);
    },

    bindSubmitForm: function () {
      function serializedArrayToObject(serializedArray) {
        var object = {};

        serializedArray.forEach(function (pair) {
          object[pair.name] = pair.value;
        });

        return object;
      }

      this.$form.on('submit', function (e) {
        e.preventDefault();

        var submittedAnswers = serializedArrayToObject(this.$form.serializeArray());

        this.markAnswers(submittedAnswers);

        this.$form.find('input[type="submit"]').prop('disabled', true);
        this.$form.find('input[type="reset"]').prop('disabled', false);
      }.bind(this));
    },

    markAnswers: function (submittedAnswers) {
      Object.keys(this.answerKey).forEach(function (questionId) {
        var correctAnswer = this.answerKey[questionId];

        if (submittedAnswers[questionId] === undefined) {
          this.displayMarking(questionId, 'missing', correctAnswer);
        } else if (correctAnswer === submittedAnswers[questionId]) {
          this.displayMarking(questionId, 'correct');
        } else {
          this.displayMarking(questionId, 'incorrect', correctAnswer);
        }
      }, this);
    },

    displayMarking: function (questionId, marking, correctAnswer) {
      var $question = $(`ol#questions > li#question-${questionId}`);
      var $marking = $question.find('p.marking');

      $marking.text(this.markingText(marking, correctAnswer));
      $marking.addClass(`visible ${marking}`);
    },

    markingText: function (marking, correctAnswer) {
      switch (marking) {
        case 'correct':
          return 'Correct answer.'
          break;
        case 'incorrect':
          return `Wrong answer. Correct answer is: "${correctAnswer}".`
          break;
        case 'missing':
          return `You did not answer this question. Correct answer is: "${correctAnswer}".`
          break;
      }
    },

    bindResetForm: function () {
      this.$form.on('reset', function (e) {
        var $thisForm = $(e.target);

        $thisForm.find('p.marking').removeClass('visible');

        $thisForm.find('input[type="reset"]').prop('disabled', true);
        $thisForm.find('input[type="submit"]').prop('disabled', false);
      }.bind(this));
    },

    init: function () {
      this.renderQuestions();
      this.renderAnswerOptions();
      this.bindSubmitForm();
      this.bindResetForm();
    },
  };

  App.init();
});
