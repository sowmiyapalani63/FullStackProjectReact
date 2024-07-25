import React from 'react';

const HeadingLayout = ({ id, handleHeading }) => {
    const headingContent = handleHeading.find(item => item.id === id);
    return (
        
          <>  
          <span className='fw-bold font-14 primary-color responsive-font'>{headingContent.heading} </span>
           <span className='fw-bold  font-40 responsive-font-heading'>{headingContent.subHeading}</span>
           <span className='text-muted font-14 fw-normal lh-20 responsive-font'> {headingContent.paragraph} </span>
     
                
           </>         
           
      
    );
}

export default HeadingLayout;
