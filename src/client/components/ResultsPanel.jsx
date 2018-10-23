import '../styles/components/ResultsPanelStyles.css'
import Follower from './Follower'
import PropTypes from 'prop-types'
import React from 'react'
import chunk from 'lodash/chunk'

const renderResultItems = results => {
  const nestedResults = chunk(results, 3)

  return nestedResults.reduce((acc, result) => {
    const resultRow = (
      <div className='row card-deck justify-content-center results-row' key={result[0].id}>
        {result.map(r => (
          <div className='col-lg-4 col-md-4 col-sm-12 p-md-0' key={r.id}>
            <Follower {...r} />
          </div>
        ))}
      </div>
    )

    return acc.concat(resultRow)
  }, [])
}

const ResultsPanel = ({ results, userId }) => (
  <div className='row results-panel'>
    <div className='col-md-12'>
      <div className='card border-light'>
        <div className='card-header bg-light'>
          {`${userId}'s Github Followers:`}
        </div>
        <div className='card-body bg-dark'>
          {renderResultItems(results)}
        </div>
      </div>
    </div>
  </div>
)

ResultsPanel.propTypes = {
  results: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired,
}

export default ResultsPanel
