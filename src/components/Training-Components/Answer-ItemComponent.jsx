import React from 'react';
import { connect } from 'react-redux'
import {setQuizNum} from '../../redux/actions/setQuizNum'
import {setQuestionNum} from '../../redux/actions/setQuestionNum'
import {setAnswerCorrect} from '../../redux/actions/setAnswerCorrect'
import quizData from '../../questions'

const AnswerItem = props => {

    const handleClick = (answer) => {
        if (answer == quizData[props.quizNum].answers[props.questionNum][quizData[props.quizNum].correct[props.questionNum]]) {
            props.setAnswerCorrect(props.answerCorrect + 1)
        }
        //increments quizNum after last question answered and passed quiz
        if (props.questionNum == 4 && props.answerCorrect > 3) { 
            props.setQuizNum(props.quizNum + 1)
        }
        //increments questionNum, resets questionNum to zero after last question
        if (props.questionNum < 4) { 
            props.setQuestionNum(props.questionNum + 1)
        } else {
            props.setQuestionNum(0) 
            props.setAnswerCorrect(0)
        }
    }

    return (
        <div
             onClick={(e)=>{handleClick(e.target.innerHTML)}}>
                {props.answer}
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.trainingPage,
})

const mapDispatchToProps = dispatch => ({
    setQuizNum: quizNum => dispatch(setQuizNum(quizNum)),
    setQuestionNum: questionNum => dispatch(setQuestionNum(questionNum)),
    setAnswerCorrect: answerCorrect => dispatch(setAnswerCorrect(answerCorrect))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(AnswerItem)