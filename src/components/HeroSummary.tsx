import PV1 from '../assets/SVG/pv1.svg'
import PV2 from '../assets/SVG/pv2.svg'
import PV3 from '../assets/SVG/pv3.svg'
import PV4 from '../assets/SVG/pv4.svg'
import { HeroSummaryStyles } from '../atoms/StyledLandingPage'


function HeroSummary() {
  return (
   <HeroSummaryStyles>
    <h2>What is Prevet</h2>
    <div className='summary-group'>
     <div className='summary-sub-group'>
        <img src={PV1} alt="icon" />
        <p>Prevet will connect you to a certified agent to vet and give you a real-time status of the condition of your item</p>
        </div>
        <div className='summary-sub-group'>
        <img src={PV2} alt="icon" />
        <p>Prevet is dedicated to empowering people, communities and making life a lot easier when it comes to buying reliable cars.</p>
        </div>
        <div className='summary-sub-group'>
        <img src={PV3} alt="icon" />
        <p>Prevet will connect you to a certified agent to vet and give you a real-time status of the condition of your item</p>
        </div>
        <div className='summary-sub-group'>
        <img src={PV4} alt="icon" />
        <p>Prevet is dedicated to empowering people, communities and making life a lot easier when it comes to buying reliable cars.</p>
        </div>
    </div>
   </HeroSummaryStyles>
  )
}

export default HeroSummary