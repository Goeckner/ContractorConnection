import '../styles/components/ResultsPanelStyles.css'
import PropTypes from 'prop-types'
import React from 'react'

const WarningResultsPanel = ({ userId }) => (
  <div className='row results-panel'>
    <div className='col-md-12'>
      <div className='card text-center text-white bg-warning'>
        <div className='card-body'>
          <p className='lead'>
            <i aria-hidden='true' className='mi mi-warning no-results-info' />
            &nbsp;
            {`The Github user ${userId} has no followers!`}
          </p>
        </div>
      </div>
    </div>
  </div>
)

WarningResultsPanel.propTypes = {
  userId: PropTypes.string.isRequired,
}

export default WarningResultsPanel
