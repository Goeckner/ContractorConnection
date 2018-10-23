import '../styles/components/NotFoundStyles.css'
import React from 'react'

const NotFound = () => (
  <div className='row'>
    <div className='col-12'>
      <div className='card text-white text-center bg-danger'>
        <div className='card-header'>
          {'You don\'t belong here!'}
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-3'>
              <i aria-hidden='true' className='mi mi-error-outline not-found-icon' />
            </div>
            <div className='col-sm-6'>
              <h2 className='card-title'>
                {'Ugh-oh! How\'d you get here?'}
              </h2>
              <p>
                Maybe you were looking for the&nbsp;
                <strong>
                  <a className='text-dark' href='#'>
Followers
                  </a>
                </strong>
                &nbsp;page?
              </p>
              <p>
                Or, maybe the&nbsp;
                <strong>
                  <a className='text-dark' href='#'>
Repositories
                  </a>
                </strong>
                &nbsp;page?
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

export default NotFound
