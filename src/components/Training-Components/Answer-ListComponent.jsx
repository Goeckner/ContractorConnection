import React from 'react';
import { connect } from 'react-redux'
import AnswerItem from './Answer-ItemComponent'
import quizData from '../../questions';

const AnswerList = props => {

    const answers = quizData[props.quizNum].answers[props.questionNum].map((answer) => {
        return <AnswerItem answer={answer} />

    });


    return (
        <ul>
            {answers}
        </ul>
    )
}

const mapStateToProps = state => ({
    ...state.trainingPage,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(AnswerList)