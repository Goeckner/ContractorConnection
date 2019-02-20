import React from 'react';
import { connect } from 'react-redux'

const AnswerItem = props => {

    return (
        <div>
            <li>
                <h4>{props.answer}</h4>
            </li>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(AnswerItem)