import React, { useState, useEffect } from 'react';
 import Header from "../components/Header/Header"
 import ActivityOutlet from "../components/Outlet/ActivityOutlet"
import LeadindMedicineOutlet from '../components/Outlet/LeadindMedicineOutlet'
import Product  from "../components/Product"
import Pricing from "../components/Pricing"
import { Testimonial } from "../components/Testimonial"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"

const Home = () => {
    
    return (
        
        <div> 
           <Header/> 
              < ActivityOutlet/>
             <LeadindMedicineOutlet/>   
            < Product/>  
            < Pricing/>   
          <Testimonial/> 
            < Contact/>
            <Footer/> 
        </div>

    )
}

export default Home