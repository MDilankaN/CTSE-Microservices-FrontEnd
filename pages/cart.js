import React from 'react'
import Navbar from '../Components/Navbar'
import privateRoute from '../hoc/Authenticate'

function cart() {
  return (
    <div>
        <Navbar/>
        <div>cart</div>
    </div>
  )
}

export default privateRoute(cart)