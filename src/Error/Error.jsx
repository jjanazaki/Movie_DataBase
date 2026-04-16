import React from 'react'
import './Error.css'

export default function Error() {
  return (
    <div className="error-page">
      <div className="error-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The path you’re trying to access doesn’t exist or has been moved.</p>
        <button onClick={() => window.location.href = "/"}>
          Go Home
        </button>
      </div>
    </div>
  )
}