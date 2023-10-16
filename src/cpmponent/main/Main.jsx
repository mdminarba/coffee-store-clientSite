import React from 'react'
import { Outlet } from 'react-router-dom'
import Haeder from '../Header/Haeder'

const Main = () => {
  return (
    <div>
        <Haeder></Haeder>
        <Outlet></Outlet>
    </div>
  )
}

export default Main