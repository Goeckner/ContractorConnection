import { connect } from 'react-redux'
import React from 'react'

const TrainingPage = props => (
  <div>
    This is the training page!
  </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(TrainingPage)
