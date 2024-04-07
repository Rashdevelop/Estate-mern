import React from 'react'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import SignIn from './components/pages/SignIn'
const App = () => {
  return (
   <BrowserRouter>
   <Header></Header>
    <Routes>
      <Route element={<Home></Home>}></Route>
      <Route element={<About></About>}></Route>
      <Route element={<SignIn></SignIn>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
