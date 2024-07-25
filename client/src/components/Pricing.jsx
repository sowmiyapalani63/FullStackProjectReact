import React, { useState } from 'react';
import HeadingLayout from './Common/HeadingLayout';
import { handleHeading, handlePricingCardData } from '../api';
import { PricingCard } from '../components/Common/PricingCard';
import { SubscriptionModal } from '../components/Common/SubscriptionPopup'; 

function Pricing() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div id=''>
      <div className={showModal ? 'blur-background layout-max-width p-160 mx-auto padding-md p-sm-60' : 'layout-max-width p-160 mx-auto padding-md p-sm-60'}>
        <div className="container">
          <div className="row">
            <HeadingLayout id="3" handleHeading={handleHeading} />
          </div>
          <div className="row mt-5 gap20">
            {handlePricingCardData.map(card => (
              <div key={card.id} className="col-md-4 col-lg-4 col-sm-12">
                <PricingCard {...card} onSubscribe={handleShow} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SubscriptionModal show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default Pricing;
