import React from 'react'

import s from './Cart.module.css'
// import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div className={s.cart}>
      <h1>Shopping cart</h1>
      <div>{/* <Link>Back to the store <img src="" alt="" /></Link> */}</div>
      <div>Cards</div>
    </div>
  )
}
