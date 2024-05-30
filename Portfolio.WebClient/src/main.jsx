import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

const logError = (error, info) => {
    console.error(error);
    console.error(info);
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary fallback={<div>Something went wrong</div>} onError={logError}>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
)