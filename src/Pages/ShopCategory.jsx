import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import drop_down from '../Components/Assests/dropdown_icon.png'
import Card from '../Components/Cards/Card'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);

  return (
    <div className='shopCategory'>
      <img className='shopcategorybanner' src={props.banner} alt=''></img>
      <div className='indexShort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={drop_down} alt=''/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {
          all_product.map( (item, i) => {
            if(props.category  === item.category){
              return <Card key={i} id={item.id} name={item.name} image={item.image}
              new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null
            }
            
          })
        }
      </div>
      <div className='shopcateory-loadmore'>
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory