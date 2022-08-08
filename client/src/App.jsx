import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { WorkoutsContextProvider } from './context/WorkoutsContext'
import './App.css'
import AppRoutes from './routers'

const App = () => {

    return (
        <React.StrictMode>
            <BrowserRouter>
            <WorkoutsContextProvider>
                <AppRoutes />
            </WorkoutsContextProvider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App
