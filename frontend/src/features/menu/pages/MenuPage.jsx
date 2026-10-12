// MenuPage.jsx
// Main page for the menu list, search input, and loading/error states.
import { useMemo, useState } from 'react'
import MenuList from '../components/MenuList'
import useDebounce from '../hooks/useDebounce'
import useFetch from '../hooks/useFetch'
import { getMenuUrl } from '../services/menuService'

function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 400)
  const { data: dishes, loading, error } = useFetch(getMenuUrl())

  const filteredDishes = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase()

    if (!query) {
      return dishes
    }

    return dishes.filter((dish) => {
      const nameMatch = dish.name.toLowerCase().includes(query)
      const descriptionMatch = dish.description.toLowerCase().includes(query)

      return nameMatch || descriptionMatch
    })
  }, [dishes, debouncedSearch])

  return (
    <section className="menu-page">
      <h1>Campus Eats Menu</h1>

      <label className="search-label" htmlFor="dish-search">
        Search dishes
      </label>
      <input
        id="dish-search"
        type="text"
        value={searchTerm}
        placeholder="Search by dish name"
        onChange={(event) => setSearchTerm(event.target.value)}
        className="search-input"
      />

      {loading && <p className="status-message">Loading menu...</p>}
      {error && <p className="status-message error-message">{error}</p>}

      {!loading && !error && <MenuList dishes={filteredDishes} />}
    </section>
  )
}

export default MenuPage
