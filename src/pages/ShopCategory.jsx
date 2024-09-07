import React, { useContext } from 'react'
import "./css/ShopCategory.css"
import dropdown_icon from "../components/assets/dropdown_icon.png"
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item/Item'
const ShopCategory = (props) => {
 const {all_product}= useContext(ShopContext);
 console.log(all_product)
  return (
    <div className="shop-category">
           <img className='shopcategory-banner' src={props.banner} alt="" />
           <div className="shopcategory-indexSort">
            <p>
              <span>Showing 1-12</span> Out of 36 products
            </p>
            <div className="shopcategort-sort">
              Sort by <img src={dropdown_icon} alt="" />
            </div>
           </div>
           <div className="shopcategory_products">
            {all_product.map((item,idx)=>{
              if(props.category===item.category){
                return (<Item  key={idx}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}/>)
              }else{
                return null
              }
            })}
           </div>
           <div className="shopcatagory_loadmore">Explore More</div>
    </div>
  )
}

export default ShopCategory