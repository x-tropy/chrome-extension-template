import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import '../css/index.css'

const root = document.createElement('div')
root.id = 'docApe-root'
root.style.width = '800px'
document.body.prepend(root)

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
