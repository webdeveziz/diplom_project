import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'
import Banner from '../../components/banner/Banner'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesList, fetchProductList } from '../../requests/requests'
import CategoryItem from '../categoryItem/CategoryItem'

import s from './Home.module.css'
import ProductItem from '../../components/productItem/ProductItem'

export default function Home() {
  const store = useSelector((store) => store)
  const categories = store.categories.categories
  const products = store.products

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesList())
    dispatch(fetchProductList())
  }, [])

  const randomCategories = categories
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  const randomSaleProducts = products
    .filter((item) => item.discont_price)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  return (
    <div className={s.home}>
      <Banner />
      <div className={s.categories}>
        <div className={s.categoriesTitle}>
          <h2>Catalog</h2>
          <Link to="categories">All categories</Link>
        </div>
        <div className={s.categoriesContent}>
          {randomCategories.length > 0 &&
            randomCategories.map((item) => (
              <CategoryItem
                id={item.id}
                key={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
        </div>
      </div>
      <Form />
      <div className={s.sales} id="sale-home">
        <h2 className={s.salesTitle}>Sale</h2>
        <div className={s.salesContent}>
          {randomSaleProducts.length > 0 &&
            randomSaleProducts.map((elem) => (
              <ProductItem {...elem} key={elem.id} />
            ))}
        </div>
      </div>
    </div>
  )
}
