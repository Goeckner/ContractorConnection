import '../styles/components/ResultsPanelStyles.css'
import PropTypes from 'prop-types'
import React from 'react'

const ErrorResultsPanel = ({ userId }) => (
  <div className='row results-panel'>
    <div className='col-md-12'>
      <div className='card text-center text-white bg-danger'>
        <div className='card-body'>
          <p className='lead'>
            <i aria-hidden='true' className='mi mi-error-outline no-results-info' />
            &nbsp;
            {`The Github user ${userId} does not exist!`}
          </p>
        </div>
      </div>
    </div>
  </div>
)

ErrorResultsPanel.propTypes = {
  userId: PropTypes.string.isRequired,
}

export default ErrorResultsPanel
