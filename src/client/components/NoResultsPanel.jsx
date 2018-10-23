import '../styles/components/ResultsPanelStyles.css'
import React from 'react'

const NoResultsPanel = () => (
  <div className='row results-panel'>
    <div className='col-md-12'>
      <div className='card text-center text-white bg-dark'>
        <div className='card-body'>
          <p className='lead'>
            <i aria-hidden='true' className='mi mi-info no-results-info' />
            &nbsp;Enter a Github username above to fetch a users followers.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default NoResultsPanel
