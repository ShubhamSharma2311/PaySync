import React from 'react'
import SignUp from '../pages/signup'

import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Root