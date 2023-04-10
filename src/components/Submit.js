import React, { useState } from 'react'
import axios from 'axios'
import { FaUserAlt } from 'react-icons/fa'
import '../App.css'
import { HiFlag } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import DockerLink from './DockerLink'
import wlug from '../Image/meta.png'

const Submit = () => {
  const navigate = useNavigate()
  const [placeholder, setPlaceholder] = useState('Answer fragment')
  const [metaId, setMetdaId] = useState('')
  const [ansKey, setansKey] = useState('')
  const [status, setStatus] = useState('')

  const fetchdata = async (username, ansKey) => {
    const url = 'https://meta-games.onrender.com/checkans'
    const today = new Date()
    const date =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    const data = { username, ansKey, date }
    try {
      const res = await axios({
        method: 'POST',
        url: url,
        data,
      })

      console.log(res.data.data.marks)
      if (res.data.data.marks >= 75) {
        setPlaceholder('Final Answer !!')
      }
      alert(
        'Congratulations! You have collected all fragments of final Flag 🎉 Now ,Submit final Flag which is a specific Combination of all Fragments!Best of Luck 👍'
      )
      setStatus(`You scored ${res.data.data.marks} Meta 🏆!`)
      // console.log(res.status);
    } catch (error) {
      setStatus(error.response.data.error)
      console.log(error.response.data)
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const btn = document.getElementById('btn')
    btn.classList.add('focus')

    setTimeout(() => {
      btn.classList.remove('focus')
    }, 500)
    console.log({
      email: metaId,
      pass: ansKey,
    })

    await fetchdata(metaId, ansKey)
    setansKey('')
  }

  const handleClick = () => {
    navigate('/leaderboard')
  }

  return (
    <>
      {/* <div id='alert-msg'>
      
           <Alert severity="success" id='alert-msg'>
                  
                  </Alert>
      </div> */}
      <div id='outer-div'>
        <DockerLink />
        <div className='content clay card-login'>
          <div>
            <a href='users.pdf' target='_blank'>
              <img src={wlug} />
            </a>
          </div>
          <a
            href='Guide.pdf'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none' }}
          >
            {' '}
            <div className='text'>METAMORPHOSIS 2k23</div>
          </a>
          <form action='#'>
            <div className='field'>
              <FaUserAlt id='userIcon' />
              <input
                type='text'
                placeholder='Meta ID'
                name='user-id'
                value={metaId}
                onChange={(e) => setMetdaId(e.target.value)}
                autoComplete
                required
              />
            </div>

            <div className='field'>
              <HiFlag
                id='keyIcon'
                style={{
                  fontSize: 20,
                }}
              />
              <input
                type='password'
                placeholder={placeholder}
                name='key'
                value={ansKey}
                onChange={(e) => setansKey(e.target.value)}
                required
              />
            </div>

            <button onClick={handleSubmit} id='btn'>
              Submit
            </button>
          </form>
          <div style={{ padding: 10 }}>
            <p style={{ color: 'black' }}>{status}</p>
          </div>

          {/* <Footer/> */}
        </div>

        <div className='intro-button'>
          <button onClick={handleClick}>See Leaderboard 🐳!</button>
        </div>
      </div>
    </>
  )
}

export default Submit
