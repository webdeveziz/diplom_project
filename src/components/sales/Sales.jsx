import { useEffect } from 'react'

import s from './Sales.module.css'
import { fetchProductList } from '../../requests/requests'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../productItem/ProductItem'
import { useLocation } from 'react-router-dom'

export default function Sales() {
  const dispatch = useDispatch()
  const pathName = useLocation()

  console.log(pathName)

  useEffect(() => {
    dispatch(fetchProductList())
  }, [])

  const products = useSelector((store) => store.products)

  const saleProducts = products.filter((product) => product.discont_price)

  return (
    <div className={s.sales}>
      <div className={s.content}>
        {saleProducts &&
          saleProducts.map((product) => {
            return (
              <ProductItem {...product} key={product.id} link={'products/'} />
            )
          })}
      </div>
    </div>
  )
}
