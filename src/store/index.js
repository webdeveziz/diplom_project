import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './productsReducer'
import { categoriesReducer } from './categoriesReducer'
import { formReducer } from './formReducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
