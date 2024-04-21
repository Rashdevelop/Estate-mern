import React from 'react'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import Signup from './components/pages/Signup.js'
import SignIn from './components/pages/SignIn.js'

const App = () => {
  return (
   <BrowserRouter>
   <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/signin' element={<SignIn></SignIn>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
