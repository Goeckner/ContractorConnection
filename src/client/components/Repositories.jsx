import React from 'react'

const Repositories = () => (
  <div className='row'>
    <div className='col-12'>
      <div className='card text-white text-center bg-warning'>
        <div className='card-header'>
          You have reached the
          {' '}
          <code>
/repos
          </code>
          {' '}
endpoint!
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-3'>
              <i aria-hidden='true' className='mi mi-error-outline not-found-icon' />
            </div>
            <div className='col-sm-6'>
              <h2 className='card-title'>
                This is an example of a route!
              </h2>
              <p>
                Check out the source for
                {' '}
                <code>
AppContainer.jsx
                </code>
                {' '}
to figure
                out how to
                {' '}
                <code>
render()
                </code>
                {' '}
different routes using&nbsp;
                <code>
react-router
                </code>
.
              </p>
            </div>
            <div className='col-sm-3'>
              <i aria-hidden='true' className='mi mi-error-outline not-found-icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Repositories
