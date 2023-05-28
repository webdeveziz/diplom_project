import React, { useEffect, useState } from 'react'

import s from './Product.module.css'
import Button from '../../components/button/Button'

import { useLocation, useNavigate, useParams } from 'react-router-dom'

const base_url = 'http://localhost:3333'

export default function Product() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const pathName = useLocation()

  console.log(pathName)

  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3333/products/' + productId)
      .then((data) => data.json())
      .then((data) => setProduct(data[0]))
  }, [])

  if (!product) {
    return null
  }

  const percentagePrice = Math.floor(
    ((product.price - product.discont_price) / product.price) * 100,
  )

  const onGoBack = () => {
    navigate(-1)
  }

  return (
    <div className={s.product}>
      <div className={s.productTitle}>
        <h2>{product.title}</h2>
        <button onClick={onGoBack}>Go back</button>
      </div>
      <div className={s.productItem}>
        <div className={s.productPhoto}>
          <img src={base_url + product.image} />
        </div>
        <div className={s.productInfo}>
          <div className={s.productPrice}>
            <span className={s.dollar}>
              <span className={s.salePrice}>{product.price}</span>$
            </span>
            {product.discont_price && (
              <span className={s.regularPrice}>{product.discont_price}$</span>
            )}
            {product.discont_price && (
              <span className={s.discount}>{percentagePrice}%</span>
            )}
          </div>
          <Button className={s.productButton}>To cart</Button>
          <div className={s.productDescription}>
            <h3>Description</h3>
            <p className={s.descriptionText}>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
