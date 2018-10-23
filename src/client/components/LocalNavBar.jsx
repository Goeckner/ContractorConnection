import '../styles/components/localNavBarStyles.css'
import React from 'react'

const LocalNavBar = () => (
  <div className='row app-nav-bar'>
    <div className='col-lg-6 col-md-6'>
      <h1 className='app-title'>
Github Followers
      </h1>
    </div>
    <div className='col-lg-4 col-md-6'>
      <ul className='nav nav-pills'>
        <li className='nav-item' role='presentation'>
          <a className='active nav-link' href='#'>
            <i aria-hidden='true' className='mi mi-person' />
            &nbsp;Followers
          </a>
        </li>
        <li className='nav-item' role='presentation'>
          <a className='nav-link' href='#'>
            <i aria-hidden='true' className='mi mi-folder' />
            &nbsp;Repositories
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default LocalNavBar
