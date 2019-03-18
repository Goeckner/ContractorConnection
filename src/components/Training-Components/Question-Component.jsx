import React from 'react';
import { connect } from 'react-redux'
import quizData from '../../questions';

const Question = props => {

        return (
            <div text-align='center'>
                <h2>{quizData[props.quizNum].questions[props.questionNum]}</h2>
            </div>
        )
}

const mapStateToProps = state => ({
    ...state.trainingPage
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(Question)