import { connect } from 'react-redux'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Grid, Col, Row, Button } from 'react-bootstrap'
import Video from '../components/Training-Components/Video-Component'
import Quiz from '../components/Training-Components/Quiz-Component'


const TrainingContainer = props => {



  return (

    <div>
      {console.log(props)}
      <h1>Video and Quiz #{props.quizNum + 1}</h1>

      <Grid>
			  <Col>

          <Video quizNum={props.quizNum} />

			  </Col >
			  <Col>

          <Quiz quizNum={props.quizNum} questionNum={props.questionNum} />

        </Col>
		  </Grid >
    
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
