function runCreateQuestion(){
  var answers= ["D","B","C","D","C","D","D","C","C","A",
                "D","E","B","B","A","A","A","C","D","C",
                "D","D","B","C","D","A","C","A","A","A",
                "C","A","A","D","E","C","B","B","D","E"];
  var numQuestions = answers.length;
  for (var i = 0; i < numQuestions; i++) {
    //the last number represents the number of answer choices
    createQuestion(answers, i, 5);

  }
}
