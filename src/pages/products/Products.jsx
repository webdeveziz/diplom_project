import React from 'react'

import s from './Products.module.css'
import ProductList from '../../components/productList/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductList } from '../../requests/requests'

export default function Products() {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.products)

  useEffect(() => {
    if (products.length <= 0) dispatch(fetchProductList())
  }, [])

  return (
    <div className={s.products}>
      <ProductList products={products} />
    </div>
  )
}
