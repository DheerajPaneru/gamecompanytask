import React from 'react'
import {Route,Routes, BrowserRouter,Switch} from "react-router-dom"
import App from "./App"
import Cartpage from './Cartpage'
import Detailpage from './Detailpage'
import Totalpage from './Totalpage'
import Payment from './Payment'
import Test from './Test'
import Test2 from './Test2'
import Testshort from './Testshort'
import Gameabout from './Gameabout'
import Gamelogin from './Gamelogin'
const Router = () => {
  return (
    <>
    

<BrowserRouter>

<Routes>

  <Route path="/" element={<Gamelogin/>}/>
  <Route path="/Gameabout" element={<Gameabout/>}/>
  
  

 
</Routes>
</BrowserRouter>
    </>
  )
}

export default Router