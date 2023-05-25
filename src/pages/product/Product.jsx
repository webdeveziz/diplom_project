import React from 'react'

import s from './Product.module.css'
import Button from '../../components/button/Button'

import img from '../../assets/dwarf.png'

export default function Product() {
  return <div className={s.product}>
    <h2 className={s.productTitle}>Spade</h2>
    <div className={s.productItem}>
      <div className={s.productPhoto}>
        <img src={img} />
      </div>
      <div className={s.productInfo}>
        <div className={s.productPrice}>
          <span className={s.dollar}><span className={s.salePrice}>199</span>$</span>
          <span className={s.regularPrice}>250$</span>
          <span className={s.discount}>-7%</span>
        </div>
        <Button className={s.productButton}>To cart</Button>
        <div className={s.productDescription }>
          <h3>
          Description
          </h3>
          <p className={s.descriptionText}>
            Size, cm - 45x33
            Material: frost-resistant polymer, 
            reinforced by a steel galvanized bar, 
            riveted to the blade, aluminum handle with a V-shaped handle.
          </p>
        </div>
      </div>
    </div>

  </div>
}
