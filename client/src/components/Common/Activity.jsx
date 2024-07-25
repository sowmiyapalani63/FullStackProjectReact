import React from 'react';

export const Activity = ({ card_image, card_title, card_description }) => {
    return (
        <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 gap-4rem">
            <div className="card p-3 padding-0 card-shadow text-start border-white our-activity-card ">
                <div className="card-body d-flex flex-column gap-2">
                    <div className="icon-container mb-3">
                        <img src={require(`../../Assests/images/${card_image}`)} alt={card_title}></img>
                    </div>
                    <h5 className="card-title font-16 fw-bold responsive-font-subheading lh-24">{card_title}</h5>
                    <div className="line"></div>
                    <p className="card-text font-14 text-muted fw-normal lh-20 responsive-font"> {card_description}</p>
                </div>
            </div>
        </div>
    );
}
