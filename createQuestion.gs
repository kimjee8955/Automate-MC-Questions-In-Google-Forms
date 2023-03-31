// Input: Array containing correct answers
function createQuestion(correctAnswers,index,numChoices) {
  Logger.log("Index: " + index);
  // Make sure the form is a quiz.
  var form = FormApp.getActiveForm();
  form.setIsQuiz(true);
  // Make a 1 point question and set feedback on it
  var item = FormApp.getActiveForm().addCheckboxItem();
  var questionNumber = index + 1
  Logger.log("Question " + questionNumber)
  item.setTitle("Question " + questionNumber);
  item.setPoints(1);
  item.setRequired(true);  // set the question to be required
  // Set correct answer.
  var choices = [];
  for (var i = 0; i < numChoices; i++) {
    var choiceTitle = String.fromCharCode(65 + i); 
    var isCorrect = (correctAnswers[index] === String.fromCharCode(65 + i));
    choices.push(item.createChoice(choiceTitle, isCorrect));
  }
  item.setChoices(choices);
}
