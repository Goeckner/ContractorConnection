import '../styles/components/FollowerStyles.css'
import PropTypes from 'prop-types'
import React from 'react'

const Follower = ({
  avatar_url,
  id,
  type,
  login,
  html_url,
  repos_url,
  gists_url,
}) => (
  <div className='card'>
    <div className='card-header'>
      <a href={html_url}>
        {`@${login}`}
      </a>
    </div>
    <img
      alt={`Avatar for ${login}`}
      className='card-img border'
      src={avatar_url}
    />
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>
        <strong>
ID:
        </strong>
        &nbsp;
        {id}
      </li>
      <li className='list-group-item'>
        <strong>
Type:
        </strong>
        &nbsp;
        {type}
      </li>
    </ul>
    <div className='card-footer text-center'>
      <a className='card-link' href={repos_url}>
Repos
      </a>
      <a className='card-link' href={gists_url}>
Gists
      </a>
    </div>
  </div>
)

Follower.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  gists_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  repos_url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Follower
