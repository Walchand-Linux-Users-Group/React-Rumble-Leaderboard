import React from 'react'
import '../App.css'
import docker from '../Image/Docker_Blue.png'
const DockerLink = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginRight: 3.3,
      }}
    >
      <div className='img-div'>
        <a
          href='https://hub.docker.com/r/wcewlug/hints'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={docker} className='docker-img box' />
        </a>
      </div>
      <div className='img-div'>
        <a
          href='https://hub.docker.com/r/wcewlug/frontend'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={docker} className='docker-img box' />
        </a>
      </div>
      <div className='img-div'>
        <a
          href='https://hub.docker.com/r/wcewlug/backend'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={docker} className='docker-img box' />
        </a>
      </div>
    </div>
  )
}

export default DockerLink
