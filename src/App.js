import React from 'react'

import { Route, Routes } from 'react-router-dom'
import 'typeface-montserrat'

import Header from './components/header/Header'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Product from './pages/product/Product'
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
        <Route path="products/*" element={<Products />} />
        <Route path="products/:productId" element={<Product />} />
        <Route path="sales" element={<Sales />} />
        <Route path="sales/:productId" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="categories/*" element={<Categories />} />
        <Route path="categories/:categoryId" element={<Products />} />/
        <Route path="categories/:categoryId/:productId" element={<Product />} />
        /
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
