import React from 'react'
import './RelatedProducts.css'
import data_poduct from '../Assests/data'
import Card from '../Cards/Card'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Releted Products</h1>
        <hr/>
        <div className='relatedproducts-item'>
            {
                data_poduct.map((item, i) => {
                    return <Card id={item.id} name={item.name} image={item.image}
                    new_price={item.new_price} old_price={item.old_price}/>           
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts