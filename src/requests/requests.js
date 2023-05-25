import { getProductsAction } from '../store/productsReducer'
import { getCategoriesAction } from '../store/categoriesReducer'

const base_url = 'http://localhost:3333'

const products_url = base_url + '/products/all'
const categories_url = base_url + '/categories/all'

export const fetchProductList = () => {
  return function (dispatch) {
    fetch(products_url)
      .then((res) => res.json())
      .then((data) => dispatch(getProductsAction(data)))
  }
}

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categories_url)
      .then((res) => res.json())
      .then((data) => dispatch(getCategoriesAction(data)))
  }
}
