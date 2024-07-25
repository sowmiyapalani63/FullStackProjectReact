import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import thumbConcept from '../../Assests/images/thumbConcept.png'
import analyticsGraph from '../../Assests/images/analayticsGraph.png'
import analyticsDashboard from '../../Assests/images/analyticsDashboard.png'
const LeadindMedicineOutlet = () => {
  return (
    <div className="conatiner-fluid  LeadingMedicine-bg">
 
    <div className='container'>
    <div className="layout-max-width p-160 p-sm-60">
      <div className='row padding-0 d-flex justify-content-center align-items-center flex-reverse gap-55 '>
        <div className="col-md-5 col-lg-5 col-sm-5 d-flex flex-column gap-2 text-start">
          <div className='line'></div>
          <span className='font-40 fw-bold responsive-font-heading'>Leading Medicine</span>
          <span className='font-14 text-muted lh-20 responsive-font'>Problems trying to resolve the conflict between
            the two major realms of Classical physics:
            Newtonian mechanics </span>
          <Button variant='' className='btn  primary-color font-14 fw-bold  p-0 text-start'> <span>Learn More</span><i className="bi bi-chevron-right primary-color fw-bold"></i></Button>

        </div>
        <div className="col-sm-12 col-lg-6 col-md-6">
          <div className="Lm-img-wrapper">
            <img src={thumbConcept} alt='AdvacnceTechnology' className='img-fluid'></img>
            <img src={analyticsGraph} alt='analyticsGraph' className='Lm-analyticsGraph'></img>
            <img src={analyticsDashboard} alt='analyticsDashboard' className='Lm-analyticsDashboard'></img>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
   
  )
}

export default LeadindMedicineOutlet