import React from 'react'
import '../Styles/header.css'
import logo from '../Images/Logo.svg'

export default function Header() {
  return (
    <header>
        <div className='logo-container'>
            <img src={logo}/>
        </div>
    </header>
  )
}
