// AppRoutes.jsx
// Central route configuration for the menu application.
import { Navigate, Route, Routes } from 'react-router-dom'
import DishDetailPage from '../pages/DishDetailPage'
import MenuPage from '../pages/MenuPage'
import OrderPage from '../pages/OrderPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/dish/:id" element={<DishDetailPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
