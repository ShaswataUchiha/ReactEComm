import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Ofees on your  email</h1>
        <p>Subscribe yo our newletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your email id'/>
            <button>Sbscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter