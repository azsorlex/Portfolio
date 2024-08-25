import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary fallback={<div>Something went wrong</div>} onError={console.error}>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
)