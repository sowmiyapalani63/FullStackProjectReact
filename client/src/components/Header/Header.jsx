import {React} from 'react'
import { CustomNavbar } from './Navbar'
import HeroBanner from '../HeroBanner'


function Header() {
  
  return (
<>
    <div className=' hero-bg-shape-cover ' id='home'>
    <CustomNavbar />
    <div className='mt-5 '>
    < HeroBanner/>
    </div>
    
    </div>

    </>
  )
}

export default Header