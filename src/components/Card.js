import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { HiFlag } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import TechnoLink from './TechnoLink'
import wlug from '../Image/meta.png'
import list from '../Image/pencil-checking-off-golden-todo-260nw-2171134529 (3).png'
// import list from '../Image/whitelist.png'
import style from './Card.module.css'
import techno from '../Image/technotweet.png'

const Card = () => {
  // const navigate = useNavigate()
  const [placeholder, setPlaceholder] = useState('Answer fragment')
  const [metaId, setMetdaId] = useState('')
  const [ansKey, setansKey] = useState('')
  const [status, setStatus] = useState('')

  const fetchdata = async (username, ansKey) => {
    const url = ''
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
        'Congratulations! You have collected all fragments of final Flag! 🎉 Now, Submit final Flag which is a specific combination of all Fragments! Best of Luck 👍'
      )
      setStatus(`You scored ${res.data.data.marks} Techno Points 🏆!`)
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
    // navigate('/leaderboard')
  }
  return (
    <>
      <div className={style.containerDiv}>
        <a
          href='Guide.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className={style.techno}
        >
          <img src={techno} alt='Word Mark' />
        </a>
        <TechnoLink />
        <div className={style.mainDiv}>
          <a href='' target='_blank' className={style.logo}>
            <img src={list} />
          </a>
          {/* 
          <div className={style.heading}>
            <h1>TECHNOTWEET 2K23</h1>
          </div> */}

          <form action='#' className={style.form}>
            <div class={style.container}>
              <label class={style.label}>Techno ID</label>
              <input
                class={style.input}
                type='text'
                autoComplete='off'
                placeholder='Your Techno ID'
                name='user-id'
                value={metaId}
                onChange={(e) => setMetdaId(e.target.value)}
                required
              />
            </div>
            <div class={style.container}>
              <label class={style.label}>Flag</label>
              <input
                class={style.input}
                type='password'
                autoComplete='off'
                placeholder='Your password'
                name='password'
                value={metaId}
                onChange={(e) => setMetdaId(e.target.value)}
                required
              />
            </div>

            <button className={style.submitBtn} onClick={handleSubmit} id='btn'>
              Submit
            </button>
          </form>
          <div style={{ padding: 10 }}>
            <p style={{ color: 'black' }}>{status}</p>
          </div>
        </div>

        <button onClick={handleClick} className={style.leaderboardBtn}>
          See Leaderboard !
        </button>
      </div>
    </>
  )
}

export default Card
