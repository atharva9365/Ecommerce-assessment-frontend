import React from 'react'
import "./shopcategory.css"
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import dropdown_icon from "../../assets/frontendassest/dropdown_icon.png"
import Item from '../../components/item/Item'


const ShopCategory = (props) => {
   const { all_product } = useContext(ShopContext)
  return (
    <>
      <div className='shop-category'>
          <img className='shopcategory-banner' src={props.banner} alt="" />
             <div className="shop-category-indexSort">
                 <p>
                  <span>Showing 1-12</span> out of 36 products
                 </p>
                    <div className="shop-category-sort">
                       Sort by <img src={dropdown_icon} alt="" />
                    </div>
              </div> 
                 <div className='shop-category-products'>
                     {
                      all_product.map((item,index)=>{
                         if(props.category===item.category){
                             return <Item  key={index} id={item.id} name={item.name} image={item.image} 
                             new_price={item.new_price} old_price={item.old_price}/>
                         }
                         else{
                          null;
                         }
                      })
                     }
                 </div>
                   <div className="shop-category-loadmore">
                      Explore More
                   </div>
      </div>
    </>
  )
}

export default ShopCategory