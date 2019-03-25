import React from 'react'
import { connect } from 'react-redux'
import { ProgressBar } from 'react-bootstrap'
import Video from '../components/Training-Components/Video-Component'
import Quiz from '../components/Training-Components/Quiz-Component'


const TrainingContainer = props => {
  
  if (props.quizNum > 3) {
    return ( 
    <div class='completed_training'>
      <div>
        <h1>
          Diversity Training Complete!
        </h1>
        <h3>
          Your instructor profile will now show up on the Instructors page!
        </h3>
      </div>
    </div>
    )
  }
  return (
    <div class='root'>
      <div class='info'>
        <h1>Diversity Training</h1>
        <h4>This training consists of 4 quizzes with 5 questions each. </h4>
        <h4>Click on an answer to move onto the next question. </h4>
        <h4>If you do not get at least 4 questions correct, the 
        quiz will restart. Good Luck.</h4>
      </div>
      <div class='row'>
        <div class='col'>
          <Video class='video' quizNum={props.quizNum} />
        </div>
        <div class='col2'>
          <Quiz class='quiz' quizNum={props.quizNum} questionNum={props.questionNum} />
        </div>
      </div>
      <div className = "training_bar">Quizzes Completed: <ProgressBar now={props.quizNum * 25} label={`${props.quizNum} / 4`} /></div>
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
