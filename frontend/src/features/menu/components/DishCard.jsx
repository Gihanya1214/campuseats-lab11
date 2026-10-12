// DishCard.jsx
// Displays one menu dish item with its price and a sold-out marker.
import { Link } from 'react-router-dom'

function DishCard({ dish }) {
  if (!dish) {
    return null
  }

  return (
    <article className="dish-card">
      <div className="dish-card__content">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>

        <div className="dish-card__footer">
          <span className="dish-card__price">LKR {dish.price}</span>
          {dish.soldOut ? (
            <span className="sold-out-badge">Sold Out</span>
          ) : (
            <span className="available-badge">Available</span>
          )}
        </div>

        <Link className="dish-card__link" to={`/dish/${dish.id}`}>
          View details
        </Link>
      </div>
    </article>
  )
}

export default DishCard
