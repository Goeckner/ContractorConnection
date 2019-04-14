import React from 'react'
import { connect } from 'react-redux'
import { ProgressBar } from 'react-bootstrap'
import Video from '../components/Training-Components/Video-Component'
import Quiz from '../components/Training-Components/Quiz-Component'
import {Redirect} from 'react-router-dom'
import { setQuizNum } from '../redux/actions/setQuizNum'


const TrainingContainer = props => {

  
  const updateTrainer = async (body) => {
    var url = "http://localhost:3001/trainers/quizes/"

    await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    })
        .then(res => res.json())

    if (body.quizes > 3 && props.login.currentUser.info.isCertified === 0) {
      url += body.id

      await fetch(url, {
        method: 'put',
        headers: {'Content-Type': 'application/json'}
      })
          .then(res => res.json())
    }
  }
    

  const handleChange = () => {

    //if (props.login.currentUser) {
      //if (props.login.currentUser.info.isTrainer === 1) {
        console.log(props.login.currentUser)
        if (props.login.currentUser.info.quizes <= props.trainingPage.quizNum) {
          props.login.currentUser.info.quizes = props.trainingPage.quizNum
        //if (props.login.currentUser.info.quizes > 3)
        //  props.login.currentUser.info.isCertified = 1

        var body = {
          id: props.login.currentUser.info.trainerID,
          quizes: props.login.currentUser.info.quizes
        }

        updateTrainer(body)
      }

      //} else {
        //return (<Redirect to="/" />)
      //}
    }
  

  if (props.trainingPage.quizNum > 3) {
    return ( 
    <div class='completed_training'>
      {handleChange()}
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
    {props.login.currentUser && props.login.currentUser.info.isTrainer === 1 ?
      <div>
        {props.setQuizNum(props.login.currentUser.info.quizes)}
        <div class='info'>
          <h1>Diversity Training</h1>
          <h4>This training consists of 4 quizzes with 5 questions each. </h4>
          <h4>Click on an answer to move onto the next question. </h4>
          <h4>If you do not get at least 4 questions correct, the 
          quiz will restart. Good Luck.</h4>
        </div>
        <div class='row'>
          <div class='col'>
            <Video class='video' />
          </div>
          <div class='col2'>
            <Quiz class='quiz' />
          </div>
        </div>
        <div className="training_bar" OnChange={handleChange()}>Quizzes Completed: <ProgressBar now={props.trainingPage.quizNum * 25} label={`${props.trainingPage.quizNum} / 4`} /></div>
      </div>
      :
      <div class='completed_training'>
      <div>
        <h2>
          Log in as a Trainer to access Training
        </h2>
      </div>
    </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setQuizNum: num => dispatch(setQuizNum(num)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(TrainingContainer)
