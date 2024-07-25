import React from 'react'
import HeadingLayout from '../components/Common/HeadingLayout';
import{ handleHeading,handleProductCardData} from '../api'; 

import {ProductCard} from '../components/Common/ProductCard';
const Product = () => {
  return (
    <div className="layout-max-width p-160 mx-auto padding-md p-sm-60" id='product'>
       <div className="container">
    <div className="row">
      <HeadingLayout id="2" handleHeading={handleHeading}/>
    </div>
      <div className="row mt-5 gap20">
      {handleProductCardData.map(card => (
          <div key={card.id} className="col-md-4 col-lg-4 col-sm-12">
            <ProductCard {...card} />
          </div>
          ))}
        {/* {handleProductCardData.map(product => (
          <ProductCard 
          key={product.id}
          card_image={product.coverImage}
          card_department={product.department}
          card_title={product.title}
          card_description={product.description}
          card_totalSales={product.totalSales}
          card_originalPrice={product.originalPrice}
          card_salePrice={product.salePrice}
          card_duration={product.duration}
          card_progress={product.progress}
          card_lessons={product.lessons}
          card_rating={product.rating}
         SaleOn={product.SaleOn}
        />
        ))} */}
      </div>
    </div>
    </div>
  
  
  )
}

export default Product