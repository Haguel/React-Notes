import React from 'react'
import '../Styles/header.css'
import logo from '../Images/Logo.svg'
import MenuButton from '../Images/MenuButton.svg'

export default function Header() {
    let menuButton = React.useRef(null)
    const rotateMenuButton = () => {
        menuButton.current.classList.toggle('menu-button--clicked')
    }
  return (
    <header>
        <div className='menu-button-container'>
            <button className='menu-button' 
            ref = {menuButton}
            onClick = {rotateMenuButton}>
                <img src={MenuButton}/>
            </button>
        </div>
        <div className='logo-container'>
            <img src={logo}/>
        </div>
    </header>
  )
}
