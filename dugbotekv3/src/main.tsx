import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/common/ErrorBoundary'
import './styles/globals.css'

console.log('Starting application...')

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Failed to find the root element')
}

try {
  console.log('Creating React root...')
  const root = ReactDOM.createRoot(rootElement)
  
  console.log('Rendering application...')
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  )
  console.log('Application rendered successfully')
} catch (error) {
  console.error('Failed to render application:', error)
  document.body.innerHTML = `
    <div style="color: red; padding: 20px;">
      <h1>Failed to start application</h1>
      <pre>${error instanceof Error ? error.message : String(error)}</pre>
    </div>
  `
} 