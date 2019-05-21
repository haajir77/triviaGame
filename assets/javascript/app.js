var card = $("#quiz-area");

// Question set
var questions = [
  {
    question: "What was is the purpose of life?",
    answers: ["burritos", "anime?", "sex", "happiness"],
    correctAnswer: "happiness"
  },
  {
    question: "how far can lions jump?",
    answers: ["3 ft", "about 2 cars", "cant jump", "jello"],
    correctAnswer: "3 ft"
  },
  {
    question: "which team beat  the warriors and overcame 3-1 deficit",
    answers: ["cavs", "clippers", "Lakers", "hawks"],
    correctAnswer: "cavs"
  },
  {
    question: "Which anime  airing right now, thats known for its gore and clifhangers?",
    answers: ["overlord", "attack on titan", "HunterxHunter", "MHA"],
    correctAnswer: "attack on titan"
  },
  {
    question: "strongest avenger?",
    answers: ["hulk", "groot", "spider-man", "Thor"],
    correctAnswer: "Thor"
  },
  {
    question:
      "favourite tv show as a kid",
    answers: ["avatar the last airbender", "spongebob", "danny phantom", "curious george"],
    correctAnswer: "avatar the last airbender"
  },
  {
    question: "which african country was never colonized by europeans",
    answers: ["zambia", "somalia", "ethiopia", "south africa"],
    correctAnswer: "ethiopia"
  },
  {
    question: "best somalian burrito in MN?",
    answers: ["deg-deg", "chipotle", "five-guys", "any mexican truck"],
    correctAnswer: "deg-deg"
  }
];


var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("Out of time buddy");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};



$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
