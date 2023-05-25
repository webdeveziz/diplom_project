import React from 'react'

import { Route, Routes } from 'react-router-dom'
import 'typeface-montserrat'

import Header from './components/header/Header'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Products from './pages/products/Products'
import Cart from './pages/cart/Cart'
import Sales from './components/sales/Sales'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import Categories from './pages/categories/Categories'
import Footer from './components/footer/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/*" element={<Products />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="sales" element={<Sales />} />
        <Route path="cart" element={<Cart />} />
        <Route path="categories/*" element={<Categories />}>
          <Route path=":categoryId" element={<Products />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
