import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import WhyGoSolar from './WhyGoSolar'

export default function ReactContainer() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/About' element={<About />} />
                <Route path='/WhyGoSolar' element={<WhyGoSolar />} />
            </Routes>
        </BrowserRouter>
    )
}
