import React, { useContext } from 'react'
import './FloatMenu.css'
import { Link } from 'react-router-dom'
import { commerceContext } from '../context/CommerceContext'

function FloatMenu() {

    const {toggleFloatMenu} = useContext(commerceContext)

  return (
    <div id='float-menu-div' className='bg-primary text-light' onClick={()=> toggleFloatMenu()}>
        <div className="link-item">
            <Link to="/">Home</Link>
        </div>
        <div className="link-item">
            <Link to="/about">Sobre</Link>
        </div>
    </div>
  )
}

export default FloatMenu