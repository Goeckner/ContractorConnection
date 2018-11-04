import React from 'react'
import { connect } from 'react-redux'
import {setMapAddress} from '../../redux/actions/setMapAddress'

const InstructorSummary = props =>
{
    return (
        <tr onClick={()=>props.setMapAddress(props.instructor.location)}>
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
    ...state.seachPage
})

const mapDispatchToProps = dispatch => ({
    setMapAddress: address => dispatch(setMapAddress(address))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorSummary)
