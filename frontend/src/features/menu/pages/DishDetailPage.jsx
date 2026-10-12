// DishDetailPage.jsx
// Shows a single dish detail using the route parameter.
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { getMenuUrl } from '../services/menuService'

function DishDetailPage() {
  const { id } = useParams()
  const { data: dishes, loading, error } = useFetch(getMenuUrl())

  if (loading) {
    return <p className="status-message">Loading dish details...</p>
  }

  if (error) {
    return <p className="status-message error-message">{error}</p>
  }

  const dish = dishes.find((item) => String(item.id) === String(id))

  if (!dish) {
    return <p className="status-message error-message">Dish not found.</p>
  }

  return (
    <section className="dish-detail-page">
      <h1>{dish.name}</h1>
      <p>{dish.description}</p>
      <p>Category: {dish.category}</p>
      <p>Price: LKR {dish.price}</p>
      <p>Status: {dish.soldOut ? 'Sold Out' : 'Available'}</p>
    </section>
  )
}

export default DishDetailPage
