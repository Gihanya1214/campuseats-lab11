// App.jsx
// Root application wrapper that includes the shared navigation bar and route layout.
import NavigationBar from './components/NavigationBar'
import AppRoutes from './features/menu/routes/AppRoutes'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <NavigationBar />
      <main className="app-content">
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
