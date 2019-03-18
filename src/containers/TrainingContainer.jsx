import React from 'react'
import { connect } from 'react-redux'
import { Grid,Col,Row } from 'react-bootstrap';
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
        <h2>Diversity Training - Quiz {props.quizNum + 1} - Question {props.questionNum + 1}</h2>
        <h5>This training consists of 4 quizs with 5 questions each. </h5>
        <h5>Click on an answer to move onto the next question. </h5>
        <h5>If you do not get at least 4 questions correct, the 
        quiz will restart. Good Luck.</h5>
      </div>
      <div class='row'>
        <div class='col'>
          <Video class='video' quizNum={props.quizNum} />
        </div>
        <div class='col2'>
          <Quiz class='quiz' quizNum={props.quizNum} questionNum={props.questionNum} />
        </div>
      </div>
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
