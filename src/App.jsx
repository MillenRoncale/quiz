import { useState } from 'react';




function App() {


 const questions = [{
  questionText : "Who is Muji?",
  answerOptions : [
    { answerText: 'Millen', isCorrect: true },
    { answerText: 'Maria', isCorrect: false },
    { answerText: 'Merlin', isCorrect: false },
    { answerText: 'Max', isCorrect: false },
  ],
 },

 {
  questionText : "What is her rank?",
  answerOptions : [
    { answerText: 'Diamond', isCorrect: false },
    { answerText: 'Bronze', isCorrect: false },
    { answerText: 'Immortal', isCorrect: false },
    { answerText: 'Platinum', isCorrect: true },
  ],
 },

 {
  questionText : "Who introduce her to Valorant?",
  answerOptions : [
    { answerText: 'her boyfriend', isCorrect: false },
    { answerText: 'her classmate', isCorrect: false },
    { answerText: 'her friend', isCorrect: true },
    { answerText: 'her crush', isCorrect: false },
  ],
 },

 {
  questionText : "How long does she play Valorant?",
  answerOptions : [
    { answerText: '11 months', isCorrect: false },
    { answerText: '2 years', isCorrect: true },
    { answerText: '1 year', isCorrect: false },
    { answerText: '3 years', isCorrect: false },
  ],
 },
]
const [ currentQuestion, setCurrentQuestion ] = useState(0);
const [showScore, setShowScore] = useState(false);
const [ score, setScore] = useState(0);

  function handleAnswerClick(isCorrect) {
    if(isCorrect === true ) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true)
    }
  }

  return (
    <div className="app">
      { showScore ? ( <div className="score-section">
        You scored {score} out of {questions.length} questions.
      </div> ) : (<>
      <div className="question-section">

        <div className="question-count">
          <span>Question {currentQuestion + 1}/{questions.length}</span>
        </div>
        <br />
        <div className="question-text">{questions[currentQuestion].questionText}</div>

      </div>
        <br />
      <div className="answer-question">
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <button onClick={() => handleAnswerClick(answerOption.isCorrect) }>{answerOption.answerText}</button>
        ))}
      </div>
    </>) }
    </div>
  )
}

export default App
