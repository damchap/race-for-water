import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Router } from './Router';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <RouterProvider router={Router()} /> {/* Pass the router to RouterProvider */}
    </React.StrictMode>
);
