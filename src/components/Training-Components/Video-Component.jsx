import React from 'react';
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import quizData from '../../questions';

const Video = props => {

    return (
        <div>
            {console.log(quizData)}
            {console.log(props)}
            <ReactPlayer url={quizData[props.quizNum].video} /> 
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.trainingPage,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(Video)