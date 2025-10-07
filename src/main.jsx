import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'

import "./config/i18n.js"
import { Suspense } from 'react'

createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>
)
