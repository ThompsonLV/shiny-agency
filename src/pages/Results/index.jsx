import { SurveyContext } from '../../utils/context'
import { useContext } from 'react'



function Results() {
  const { answers } = useContext(SurveyContext)
  console.log(answers)

  return <div>Page de resultats</div>
}

export default Results
