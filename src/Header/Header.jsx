import React from 'react'
import './Header.css'
import logo from '../images/qrlogo.png'

const Header = () => {
  return (
    <>
        <h1> <span><img src={logo} alt="Logo" /></span> QR Code</h1>
        <h2>Crea códigos QR</h2>
    </>
  )
}

export default Header