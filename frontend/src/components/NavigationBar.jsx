// NavigationBar.jsx
// Simple navigation links for Home, Order, and Dish details.
import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/order">Order</NavLink>
    </nav>
  )
}

export default NavigationBar
