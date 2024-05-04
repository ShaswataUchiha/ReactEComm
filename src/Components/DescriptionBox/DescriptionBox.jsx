import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='description-nav-box'>Description</div>
            <div className='description-nav-box-fade'>Reviees (122)</div>
        </div>
        <div className='descriptionbox-desc'>
            <p>
                An e-commerce website is an online platform where businesses sell products or services to consumers over the internet. These websites enable customers to browse through various items, add them to a virtual shopping cart, and proceed to checkout to make a purchase. E-commerce websites typically include features such as product listings, search functionality, shopping cart management, payment processing, and order management. They can range from small, independent stores to large, multinational retailers, and they often utilize secure payment gateways to ensure the safety of financial transactions.
            </p>
            <p>
                Discover thousands of products across various categories, carefully curated to cater to your diverse preferences and interests. Whether you're searching for the latest fashion trends, tech gadgets, home essentials, or unique gifts, we've got you covered. With new arrivals added regularly, there's always something fresh to explore.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox