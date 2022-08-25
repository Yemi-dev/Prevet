import PV1 from '../assets/SVG/pv1.svg'
import PV2 from '../assets/SVG/pv2.svg'
import PV3 from '../assets/SVG/pv3.svg'
import PV4 from '../assets/SVG/pv4.svg'
import { HeroSummaryStyles } from '../atoms/StyledLandingPage'


function HeroSummary() {
  return (
   <HeroSummaryStyles>
    <h2>What is the inspection process?</h2>
    <div className='summary-group'>
     <div className='summary-sub-group'>
        <img src={PV1} alt="icon" />
        <div className="summary-highlights">
          <h3>ORDER INSPECTION</h3>
          <p>Place an order for a vehicle inspection through the site or by phone. -- ORDER ONLINE, CALL +234906 682 1545</p>
        </div>
        </div>
     <div className='summary-sub-group'>
        <img src={PV4} alt="icon" />
        <div className="summary-highlights">
          <h3>OUR INSPECTOR INSPECTS</h3>
          <p>Our expert inspector will contact your seller to verify the availability of the vehicle and set up an appointment to inspect your automobile. The inspector will go directly to the vehicle to perform the inspection.

</p>
        </div>
        </div>
     <div className='summary-sub-group'>
        <img src={PV2} alt="icon" />
        <div className="summary-highlights">
          <h3>RECEIVE YOUR REPORT</h3>
          <p>The inspector will upload the report to us, and after an intricate error checking and reviewal process, you'll receive notification when your report is ready to view.</p>
        </div>
        </div>
     <div className='summary-sub-group'>
        <img src={PV3} alt="icon" />
        <div className="summary-highlights">
          <h3>MAKE A DECISION</h3>
          <p>You can now decide if you'd like to go ahead with the purchase or not based on your preference.</p>
        </div>
        </div>
    </div>
   </HeroSummaryStyles>
  )
}

export default HeroSummary