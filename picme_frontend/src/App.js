import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Login from './components/Login'
import OtherLogin from './components/OtherLogin'
import Register from './components/Register'
import Home from './container/Home'
import { fetchUser } from './utils/fetchUser'

const App = () => {
    const navigate = useNavigate()

    useEffect(() => {
       const user = fetchUser()

       if (!user) navigate('/login')
    }, [])

    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='otherlogin' element={<OtherLogin />} />
            <Route path='register' element={<Register />} />
            <Route path='/*' element={<Home />} />
        </Routes>
    )
}

export default App
