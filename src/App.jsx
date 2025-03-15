import React from 'react'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import FilterTest from "./pages/FilterPage/FilterTest"
import ItemDetailPage from './pages/itemsDetailPage/ItemDetailPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/MyCart/CartPage"

export default function App() {
  return (
    <Layout>
    <Routes>
      <Route
        index
        element={<HomePage />}
      />
      <Route path="filter-page" element={<FilterTest/>} />
      <Route path="detail-page" element={<ItemDetailPage/>} />
      <Route path="cart-page" element={<CartPage/>} />
    </Routes>
  </Layout>
  )
}
