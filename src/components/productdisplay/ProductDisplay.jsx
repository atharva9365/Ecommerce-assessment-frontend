import React, { useContext } from 'react'
import "./productdisplay.css"
import starr_icon from "../../assets/frontendassest/star_icon.png"
import star_dull_icon from "../../assets/frontendassest/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'
  
const ProductDisplay = (props) => {
  const {product} = props;
   const {addToCart} = useContext(ShopContext);
  // console.log(product); // Ensure product is not undefined
  // console.log(product.image); // Ensure the image path is correct
  console.log(starr_icon, star_dull_icon, product.image);

  return (
    <>
      <>
        <div className='product-display'>
             <div className="productdisplay-left">
                  <div className='productdisplay-img'>
                      <img className='productdisplay-main-img' src={product.image} alt="" />
                  </div>
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
             </div>
               <div className='productdisplay-right'>
                   <h1>{product.name}</h1>
                      <div className='productdisplay-right-star'>
                         <img src={starr_icon} alt="" />
                         <img src={starr_icon} alt="" />
                         <img src={starr_icon} alt="" />
                         <img src={starr_icon} alt="" />
                         <img src={star_dull_icon} alt="" />
                         <p>(130)</p>
                      </div>
                       <div className="productdisplay-right-prices">
                            <div className="productdisplay-right-price-old">
                            &#8377;{product.old_price}
                            </div>
                            <div className='productdisplay-right-price-new'>
                            &#8377;{product.new_price}
                            </div>
                       </div>
                         <div className='productdisplay-right-description'>
                             A lightweight,usually knitted, pullover, close-fitting with a
                             round neckline and short sleeves,worn as an undershirt or a 
                             outer garment
                         </div>
                          <div className="productdisplay-right-size">
                              <h1>Select Size</h1>
                               <div className='productdisplay-right-sizes'>
                                   <div>S</div>
                                   <div>M</div>
                                   <div>L</div>
                                   <div>XL</div>
                                   <div>XXL</div>
                               </div>
                          </div>
                          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                          <p className='productdisplay-right-category'><span>Category :</span> Women, T-shirt, Crop Top</p>
                          <p className='productdisplay-right-category'><span>Category :</span> Modern, Latest</p>
               </div>      
        </div>
      </>
    </>
  )
}

export default ProductDisplay