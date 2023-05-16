import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <header className="site-navbar" role="banner">
      <div className="site-navbar-top">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
              {/* <form action="" className="site-block-top-search">
                <span className="icon icon-search2"></span>
                <input type="text" className="form-control border-0" placeholder="Search">
              </form> */}
            </div>

            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
              <div className="site-logo">
                <Link to="/" className="js-logo-clone">Shoppers</Link>
              </div>
            </div>

            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
              <div className="site-top-icons">
                <ul>
                  <li><Link to="#"><span className="icon icon-person"></span></Link></li>
                  <li><Link to="#"><span className="icon icon-heart-o"></span></Link></li>
                  <li>
                    <Link to="cart.html" className="site-cart">
                      <span className="icon icon-shopping_cart"></span>
                      <span className="count">2</span>
                    </Link>
                  </li> 
                  <li className="d-inline-block d-md-none ml-md-0"><Link to="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></Link></li>
                </ul>
              </div> 
            </div>

          </div>
        </div>
      </div> 
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li className="active">
              <Link to="/">Home</Link>
              </li>
               
            <li className="">
              <Link to="">About</Link>
             
            </li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="#">Catalogue</Link></li>
            <li><Link to="/product">New Arrivals</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
    
    </>
  )
}

export default Navbar