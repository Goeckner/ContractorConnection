import React from 'react';
import { connect } from 'react-redux'
import AnswerItem from './Answer-ItemComponent'
import quizData from '../../questions';

const AnswerList = props => {
    let i = -1;
    const answers = quizData[props.quizNum].answers[props.questionNum].map((answer) => {
        i++;
        return <AnswerItem 
                    key={i}
                    answer={answer}
                />
    });

        return (
            <ul class="list-unstyled">
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