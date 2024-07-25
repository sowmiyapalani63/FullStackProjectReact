import React from 'react';
import PropTypes from 'prop-types';

export const PricingCard = ({ cardImage, title, subHeading, planCost, planPeriod, slateRemaing, buttonText, features, isNew, onSubscribe }) => {
  return (
    <div>
      <div className="card p-2 border-white shadow padding-0">
        <div className="card-body">
          <div className="mb-4">
            <img src={require(`../../Assests/images/${cardImage}`)} alt={title} className="img-fluid" />
          </div>
          <p className="card-title font-24 fw-bold mb-4 responsive-font-heading">{title}</p>
          <p className="card-text font-14 fw-bold lh-24 text-muted mb-4">{subHeading}</p>
          <p className="fw-bold font-40 primary-color responsive-font-heading">{planCost}</p>
          <p className="font-14 primary-color fw-bold mb-4 responsive-font-heading">{planPeriod}</p>
          <p className="font-14 fw-normal text-muted mb-4">{slateRemaing}</p>
          <div className="">
            <a
              href="#subscription"
              className="btn primary-background-color text-white px-5 btn-hover show-subscription padding-1"
              onClick={onSubscribe}
            >
              {buttonText}
            </a>
          </div>
          <ul className="list-unstyled mt-3 mb-4 font-14 fw-bold">
            {features.map((feature, index) => (
              <li key={index} className="mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-check2 select-green-bg text-white p-1 rounded-circle"></i>{feature}
              </li>
            ))}
          </ul>
          {isNew && (
            <div className="badge-new position-absolute p-4 badge-alert-color text-white rounded-circle fw-bold font-24 responsive-font">
              New
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  
  isNew: PropTypes.bool,
  onSubscribe: PropTypes.func.isRequired,
};

PricingCard.defaultProps = {
  isNew: false,
};
