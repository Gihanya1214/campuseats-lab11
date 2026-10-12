// MenuList.jsx
// Renders the menu items passed from the page component.
import DishCard from './DishCard'

function MenuList({ dishes }) {
  if (!dishes || dishes.length === 0) {
    return <p className="empty-state">No dishes found. Try another search.</p>
  }

  return (
    <div className="menu-list">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default MenuList
