import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary fallback={<div>Something went wrong</div>} onError={console.error}>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>,
)