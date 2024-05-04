import React from 'react'
import './NewCollections.css'
import new_collections from '../Assests/new_collections'
import Card from "../Cards/Card"

const NewCollections = () => {
  return (
    <div className='news-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collections'>
        {
          new_collections.map((item, i) => {
            return <Card key={i} id={item.id} name={item.name} image={item.image}
            new_price={item.new_price} old_price={item.old_price}/>
          })
        }
      </div>
    </div>
  )
}

export default NewCollections