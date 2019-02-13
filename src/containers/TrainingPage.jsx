import { connect } from 'react-redux'
import React from 'react'
import ReactPlayer from 'react-player'
import { Form, FormGroup, Col, Radio, Button } from 'react-bootstrap'
import quizData from '../questions'

const TrainingPage = props => (
  <div>
    <h2 className="quiz">Diversity Training Video</h2>
    <ReactPlayer url='https://youtu.be/UW28j_V3dSI' className="quiz"/>

  <Form>
    <FormGroup>
      {quizData[0].question}
      <Radio name="groupOptions"><h4>{quizData[0].answers[0]}</h4></Radio>
      <Radio name="groupOptions"><h4>{quizData[0].answers[1]}</h4></Radio>
      <Radio name="groupOptions"><h4>{quizData[0].answers[2]}</h4></Radio>
      <Radio name="groupOptions"><h4>{quizData[0].answers[3]}</h4></Radio>
    </FormGroup>

    <FormGroup >
      <Col smOffset={2} sm={2}>
        <Button bsStyle="primary" type="submit">Submit answers</Button>
      </Col>
    </FormGroup>
  </Form>

  </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(TrainingPage)
