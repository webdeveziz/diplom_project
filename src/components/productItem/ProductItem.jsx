import { useState } from 'react'

import s from './ProductItem.module.css'

const base_url = 'http://localhost:3333'

export default function ProductItem({
  id,
  image,
  title,
  price,
  discont_price,
}) {

  const [visible, setVisible] = useState(false)

  const percentagePrice = Math.floor((price-discont_price)/price*100) 

  return (
    <div className={s.productItem}>
      <div 
      className={s.productItemImg} 
      onMouseOver={() => setVisible(true)} 
      onMouseLeave={()=> setVisible(false)}
      >
        <img src={base_url + image} />
        {visible && <button className={s.addToCart}>Add to cart</button>}
      </div> 

      <div className={s.wrapper}>
        <p className={s.price}>{price}$</p>
        {discont_price && <p className={s.priceDiscont}>{discont_price}$</p>}
        {discont_price && <p className={s.sale}>{`${percentagePrice}%`}</p>}
      </div>

      <h3 className={s.productItemTitle}>{title}</h3>
    </div>
  )
}
