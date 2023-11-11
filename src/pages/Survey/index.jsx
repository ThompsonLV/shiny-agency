import { Link, useParams } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber, 10)
  const previousQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${previousQuestionNumber}`}>Question précedente</Link>
      {questionNumberInt === 10 ? (
        <Link to="/result">Voir mes résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Question suivante</Link>
      )}
    </div>
  )
}

export default Survey
