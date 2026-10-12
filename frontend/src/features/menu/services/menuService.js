// menuService.js
// Reads the API base URL from the environment so local and production can differ.

const API = import.meta.env.VITE_API_URL

export function getMenuUrl() {
  if (API) {
    return `${String(API).replace(/\/$/, '')}/api/menu`
  }

  // Fallback for local/demo deploys before the backend URL is configured.
  return '/menu.json'
}

const fetchMenu = async () => {
  const response = await fetch(getMenuUrl())

  if (!response.ok) {
    throw new Error('Unable to fetch the menu data.')
  }

  return response.json()
}

export default fetchMenu
