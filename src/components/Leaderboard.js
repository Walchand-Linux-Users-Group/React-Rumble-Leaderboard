import React, { useEffect, useState } from 'react'
import Singlecard from './Singlecard'
import axios from 'axios'
import style from './Leaderboard.module.css'
const Leaderboard = () => {
  const [arr, setArr] = useState([])
  const [rankMsg, setrankMsg] = useState('')
  const [rankSearch, setrankSearch] = useState('')
  const fetchRank = async (username) => {
    const url1 = 'https://meta-games.onrender.com/getrank'
    const data = { username: username }
    console.log(data)

    try {
      const res = await axios({
        method: 'POST',
        url: url1,
        data,
      })
      // console.log(res.data.data);
      setrankMsg(`Your Rank is ${res.data.rank} !🥳`)
      console.log(res)
      // console.log(arr);
    } catch (error) {
      setrankMsg('User Not Found!')
      console.log(error.message)
    }
  }

  const handleSearch = async (event) => {
    event.preventDefault()
    const username = rankSearch
    await fetchRank(username)
  }

  const fetchdata = async () => {
    const url = 'http://115.247.20.235:54321/users/all'
    try {
      const res = await axios({
        method: 'GET',
        url: url,
      })
      // console.log(res.data.data);
      setArr(res)
      // console.log(arr);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])
  let idx = 0

  return (
    <div className={style.main}>
      <div className={style.heading}>
        <h2>TOP LEADERBOARD</h2>
      </div>
      <div className={style.card}>
        {arr.map((ele) => {
          const { username, marks, time } = ele
          idx++
          if (idx >= 6) {
            return
          }
          return (
            <div className={style.Singlecard}>
              <Singlecard
                idx={idx}
                username={username}
                marks={marks}
                time={time}
              />
            </div>
          )
        })}
      </div>
      <div className={style.loginFooter}>
        <div style={{ fontWeight: 'bold' }}>Search Your Rank!!</div>
        <div id='input-login' className={style.inputMain}>
          <input
            className={style.searchInput}
            type='text'
            placeholder='Enter Techno ID'
            name='rankSearch'
            value={rankSearch}
            onChange={(e) => {
              setrankSearch(e.target.value)
            }}
          />
          <button
            id='leadbtn'
            onClick={handleSearch}
            className={style.searchBtn}
          >
            <div className={style.search}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={style.searchIcon}
                viewBox='0 0 48 48'
                id='search'
              >
                <path d='M46.599 40.236L36.054 29.691C37.89 26.718 39 23.25 39 19.5 39 8.73 30.27 0 19.5 0S0 8.73 0 19.5 8.73 39 19.5 39c3.75 0 7.218-1.11 10.188-2.943l10.548 10.545a4.501 4.501 0 0 0 6.363-6.366zM19.5 33C12.045 33 6 26.955 6 19.5S12.045 6 19.5 6 33 12.045 33 19.5 26.955 33 19.5 33z'></path>
              </svg>
            </div>
          </button>
        </div>
        <div>
          <p>{rankMsg}</p>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
