import React from 'react'
import Home from './component/Home'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import Home1 from './component/Home1'
import Bags from './component/Bags'
import Magnify from './component/Magnify'
import Cart from './component/Cart'
import Travels from './component/Travels'
import Jewe from './component/Jewe'
// import Buy from './component/Buy'

const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route  path = "/"   element = {<Home/>}  />
<Route  path='/g'   element = {<Home1/>}/>
<Route  path='/bags'  element = {<Bags/>}/>
<Route  path='/travels'  element = {<Travels/>}/>
<Route  path='/jewe' element = {<Jewe/>}/>
<Route  path='/mag' element = {<Magnify/>}/>
<Route  path='/cart' element = {<Cart/>}/>
{/* <Route  path='/buy'  element = {<Buy/>} /> */}

</Routes>
</BrowserRouter>

    </div>
  )
}

export default App