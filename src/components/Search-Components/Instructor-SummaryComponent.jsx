import React from 'react'
import { connect } from 'react-redux'

const InstructorSummary = props =>
{
    return (
        <tr>
            <td>
                <strong>
                    {props.instructor.name}
                </strong><br/>
                <span>
                    {props.instructor.email}
                </span>
            </td>
        </tr>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorSummary)
