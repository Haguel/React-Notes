import React from 'react'

import logo from '../Images/Logo.svg'

import '../Styles/header.css'

export default function Header() {
  return (
    <header>
        <div className='logo-container'>
            <img src={logo}/>
        </div>
    </header>
  )
}
