import { connect } from 'react-redux'
import React from 'react'
import Video from '../components/Training-Components/Video-Component'
import Quiz from '../components/Training-Components/Quiz-Component'


const TrainingContainer = props => {

  if (props.quizNum > 3) {
    return (<div>Quiz Complete</div>)
  }
  return (
    <div>
      {console.log(props)}
      <h1>Video and Quiz #{props.quizNum + 1}</h1>

          <Video quizNum={props.quizNum} />

          <Quiz quizNum={props.quizNum} questionNum={props.questionNum} />

    </div>
  )
}

const mapStateToProps = state => ({
  ...state.trainingPage
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(TrainingContainer)
