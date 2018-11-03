import React from 'react'
import { connect } from 'react-redux'

const InstructorSummary = ({ instructor }) =>
{
    return (
        <tr>
            <td>
                <strong>
                    {instructor.name}
                </strong><br/>
                <span>
                    {instructor.email}
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
