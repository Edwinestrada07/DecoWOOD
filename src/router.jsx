import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/mainLayout'

import Home from './pages/home'
import Cocina from './pages/cocina'
import Closet from './pages/closet'
import Lavamanos from './pages/lavamanos'
import Lavadero from './pages/lavadero'
import Mueble from './pages/muebles'
import Puerta from './pages/puerta'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home 
            },
            {
                path: '/home',
                Component: Home
            },
        ] 
    },
    {
        path: '/cocina',
        Component: Cocina
    },
    {
        path: '/closet',
        Component: Closet
    },
    {
        path: '/Mueble Lavamanos',
        Component: Lavamanos
    },
    {
        path: '/Mueble Lavadero',
        Component: Lavadero
    },
    {
        path: '/Muebles',
        Component: Mueble
    },
    {
        path: '/Puertas',
        Component: Puerta
    },
])

export default router