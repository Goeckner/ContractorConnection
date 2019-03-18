import React from 'react';
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import quizData from '../../questions';

const Video = props => {

        return (
           <div>
              <ReactPlayer class="video"
                           url={quizData[props.quizNum].video}
                           height='39vh'
                           width='32.5vw'/> 
          </div>
        )
}

const mapStateToProps = state => ({
    ...state.trainingPage
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(Video)