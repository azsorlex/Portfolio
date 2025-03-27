import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

history.scrollRestoration = "manual";

const router = createBrowserRouter([
    { path: "*", element: <App /> },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary fallback={<div>Something went wrong</div>} onError={console.error}>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </StrictMode>,
)