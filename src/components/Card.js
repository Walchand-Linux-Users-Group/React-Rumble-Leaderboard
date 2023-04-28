import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'
import TechnoLink from './TechnoLink'
import list from '../Image/pencil-checking-off-golden-todo-260nw-2171134529 (3).png'
import style from './Card.module.css'
import techno from '../Image/technotweet.png'
import Header from './Header'

const Card = () => {
  const [placeholder, setPlaceholder] = useState('Answer fragment')
  const [technoId, setTechnoId] = useState('')
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
      email: technoId,
      pass: ansKey,
    })

    await fetchdata(technoId, ansKey)
    setansKey('')
  }

  const handleClick = () => {
    // navigate('/leaderboard')
  }
  return (
    <>
      <Header />
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
          <a href='#' target='_blank' className={style.logo}>
            <img src={list} alt='...' />
          </a>
          <form action='#' className={style.form}>
            <div class={style.container}>
              <label class={style.label}>Techno ID</label>
              <input
                class={style.input}
                type='text'
                autoComplete='off'
                placeholder='Your Techno ID'
                name='user-id'
                value={technoId}
                onChange={(e) => setTechnoId(e.target.value)}
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
                value={ansKey}
                onChange={(e) => setansKey(e.target.value)}
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
        <NavLink to='/leaderboard'><button onClick={handleClick} className={style.leaderboardBtn}>
          See Leaderboard !
        </button></NavLink>
      </div>
    </>
  )
}

export default Card
