import { getProductsAction } from '../store/productsReducer'
import { getCategoriesAction } from '../store/categoriesReducer'

export const base_url = 'http://localhost:3333'

const products_url = base_url + '/products/all'
const categories_url = base_url + '/categories/all'

export const fetchProductList = (products_url = base_url + '/products/all') => {
  return function (dispatch) {
    fetch(products_url)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) dispatch(getProductsAction(data))
        else dispatch(getProductsAction(data.data))
      })
  }
}

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categories_url)
      .then((res) => res.json())
      .then((data) => dispatch(getCategoriesAction(data)))
  }
}
