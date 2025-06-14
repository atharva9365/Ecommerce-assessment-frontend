import React from 'react'
import "./footer.css"
import footer_logo from "../../assets/frontendassest/logo_big.png"


const Footer = () => {
  return (
    <>
      <div className='footer'>
         <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOP CART</p>
         </div>
          <ul className='footer-links'>
             <li>Company</li>
             <li>Products</li>
             <li>Offices</li>
             <li>About</li>
             <li>Contact</li>
          </ul>
               <div className='footer-copyright'>
                  <hr />
                  <p>Copyright @2025 - All Right Reserved.</p>
               </div>        
      </div>
    </>
  )
}

export default Footer