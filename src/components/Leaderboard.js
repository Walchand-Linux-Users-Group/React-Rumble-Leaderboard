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
        <div id='input-login'>
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
            <div className={style.search}>S</div>
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
