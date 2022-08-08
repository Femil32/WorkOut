import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import WorkOutForm from '../components/WorkOutForm'
import DefaultLayout from '../layouts'
import Home from '../pages/Home'

const AppRoutes = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                    <Route index path='/' element={<Home />} />
                    {/* <Route index path='/addworkout' element={<WorkOutForm />} /> */}
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes
