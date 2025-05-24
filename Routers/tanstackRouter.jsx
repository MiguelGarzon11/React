// Es una biblioteca de enrutamiento para react desarrollada por el equipo de TanStack (Creadores de React Query) TanStack Router permite:

// Definir rutas como objetos Js.
// Tipado seguro(especialmente con TypeScript)
// Manejo de datos con loaders.
// Rutas protegidas de forma más clara.
// Navegación y parametros mejor organizados.

// Intalación
// npm install @tanstack/react-router


// Estructura básica de uso.

import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tansktack/react-router';
import { router } from './router'; // Donde defines tus rutas

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// router.js

import {
    createRootRoute,
    createRoute,
    createRouter,
} from '@tansktack/react-router';
import Home from './pages/Home';
import About from './pages/About';

// 1. Ruta raíz

const rootRoute = createRootRoute({
    component: () => <div><Outlet /></div>, // Se requiere un Outlet
});

//2. Rutas hijas

const homeRoute = createRoute({
    path: '/',
    getParentRoute: () => rootRoute,
    component: About,
});

// 3. Combinar rutas
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

// 4. Crear el enrutador
export const router = createRouter({ routeTree})


