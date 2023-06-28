import React, { useContext } from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import './NavBar.css'
import { commerceContext } from '../context/CommerceContext'

function NavBar() {

    const {toggleFloatMenu} = useContext(commerceContext)

    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Tech-Ecommerce</a>
                <div className="d-flex flex-row">
                    <button className="navbar-toggler mx-2" type="button">
                        <span><FaShoppingCart /></span>
                    </button>
                    <button className="navbar-toggler mx-2" type="button" onClick={()=> toggleFloatMenu()}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="d-flex flex-row bg-dark justify-content-center my-1 col-12 px-2">
                    <input className='form-control ' type="text" placeholder='Procure um produto'/><button className='navbar-toggler'><FaSearch className='text-primary'/></button>
                </div>
            </div>

        </>
    )
}

export default NavBar