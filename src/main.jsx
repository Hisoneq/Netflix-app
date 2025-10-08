import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import App from './App.jsx'
import './styles/index.css'
import './firebase.js'

import "./config/i18n.js"
import { Suspense } from 'react'

createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </Suspense>
)
