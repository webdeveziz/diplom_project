import React from 'react'
import { Link } from 'react-router-dom'

import NavMenu from '../navMenu/NavMenu'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import Button from '../button/Button'
import s from './Header.module.css'

const Header = () => {
  const handleClick = () => {
    // Handle button click event
  }

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="categories">
          <Button className={s.header_button} onClick={handleClick}>
            Catalog
          </Button>
        </Link>
      </div>
      <div className={s.headerMenu}>
        <NavMenu />
        <div className={s.cartIcon}>
          <Link to="cart">
            <img src={cart} alt="Shopping cart" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
