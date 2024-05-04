import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assests/cart_cross_icon.png"

const Cartitems = () => {
  const {getTotalAmount,all_product, cartItems, removeToCart} = useContext(ShopContext)  

  return (
    <div className='carrtItems'>
        <div className='cartitems-fomat-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Pice</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {
          all_product.map((e) => {
            if(cartItems[e.id] > 0){
              return   <div>
                  <div className='cartitems-format cartitems-fomat-main'>
                    <img src={e.image} alt='' className='carticon-poduct-icon '/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removeToCart(e.id)}} alt='' />
                  </div>
                  <hr/>
                </div>
            }
            return null
          })
        }
        <div className='cartitems-down'>
          <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div>
              <div className='cartitems-total-item'>
                <p>Subtotal</p>
                <p>${getTotalAmount}</p>
              </div>
              <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3>${0}</h3>
              </div>
            </div>
            <button className='cart-btn'>Checkout</button>
          </div>
        </div>
    </div>
  )
}

export default Cartitems