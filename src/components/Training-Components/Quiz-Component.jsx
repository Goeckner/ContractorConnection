import React from 'react';
import { connect } from 'react-redux'
import Question from './Question-Component'
import AnswerList from './Answer-ListComponent'

const Quiz = props => {

    return (
        <div>
            <Question />
            <AnswerList />
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.traingingPage
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(Quiz)