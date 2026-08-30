import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import AuthLanding from './pages/Auth/AuthLanding'
import LoadingScreen from './components/LoadingScreen'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ErrorBoundary>
      {loading ? (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
        }}>
          <LoadingScreen />
        </div>
      ) : (
        <AuthLanding />
      )}
    </ErrorBoundary>
  )
}

// Handle hot module replacement in development
const rootElement = document.getElementById('root')
const existingRoot = rootElement._reactRootContainer
const root = existingRoot || ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)