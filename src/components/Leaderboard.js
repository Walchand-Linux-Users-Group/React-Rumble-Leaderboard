import React, { useEffect, useState } from 'react'
import Singlecard from './Singlecard'
import axios from 'axios'

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
    const url = 'https://meta-games.onrender.com/leaderboard'
    try {
      const res = await axios({
        method: 'GET',
        url: url,
      })
      // console.log(res.data.data);
      setArr(res.data.data)
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
    <div className='main'>
      <div
        className='content-leaderboard'
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: 7,
          marginTop: 20,
        }}
      >
        <h4>TOP LEADERBOARD</h4>
      </div>

      {arr.map((ele) => {
        const { username, marks, time } = ele
        idx++
        if (idx >= 6) {
          return
        }
        return (
          <Singlecard idx={idx} username={username} marks={marks} time={time} />
        )
      })}
      <div className='login-footer'>
        <div
          style={{
            marginBottom: '0.5rem',
            marginLeft: '1rem',
            marginRight: '1rem',
          }}
        >
          Search Your Rank!!
        </div>
        <div
          id='input-login'
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '0.5rem',
            marginTop: '1.3rem',
            marginLeft: '1rem',
            marginRight: '0.1rem',
          }}
        >
          <input
            type='text'
            placeholder='Enter Meta Id..'
            name='rankSearch'
            value={rankSearch}
            style={{
              paddingRight: '1rem',
              paddingLeft: '0.5rem',
              paddingTop: '0.2rem',
              paddingBottom: '0.2rem',
              border: 'none',
              outline: 'none',
              borderRadius: '20px',
            }}
            onChange={(e) => {
              setrankSearch(e.target.value)
            }}
          />
          <button
            id='leadbtn'
            onClick={handleSearch}
            style={{
              borderRadius: '3rem',
              width: '4rem',
              height: '1rem',
              fontSize: '0.8rem',
              marginBottom: '0.1rem',
              marginLeft: '3.8rem',
              marginRight: '0.6rem',
              marginTop: '0.4rem',
            }}
          >
            Submit
          </button>
        </div>
        <div
          style={{
            // marginLeft: '0.4rem',
            marginBottom: '0.5rem',
            marginLeft: '0.8rem',
            marginRight: '0.6rem',
          }}
        >
          <p>{rankMsg}</p>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
