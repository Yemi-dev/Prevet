import callIn from '../assets/SVG/callIn.svg'
import callOut from '../assets/SVG/callOut.svg'
import postRq from "../assets/SVG/postRq.svg"
import { StyledButtonLinks } from '../atoms/StyledButtons'
import { Link } from 'react-router-dom'
import HeroSummary from './HeroSummary'
import { HeroCardSection, Card } from '../atoms/StyledLandingPage'



function HeroCard() {
  return (
   <HeroCardSection>
    <div className='hc-section'>
        <Card>
            <img src={postRq} alt="postCall" />
            <h4>Posting a Request</h4>
            <p>Post a request by providing all necessary information about the car you want to vet and it’s location or link.</p>
            <div className='hc-links'>
            <StyledButtonLinks variant='primary' size='sm'>
              <Link to="/Post">Post Now</Link>
            </StyledButtonLinks>
            <StyledButtonLinks size='sm' >
              <Link to="/Call"> Call Now</Link>
            </StyledButtonLinks>
            </div>
        </Card>
        <Card>
            <img src={callOut} alt="CallOut" />
            <h4>Calling Us</h4>
            <p>Post a request by providing all necessary information about the car you want to vet and it’s location or link.</p>
            <div className='hc-links'>
            <StyledButtonLinks variant='primary' size='sm'>
              <Link to="/Call">Call Now</Link>
            </StyledButtonLinks>
            <StyledButtonLinks size='sm' >
              <Link to="/Post"> Post Now</Link>
            </StyledButtonLinks>
            </div>
        </Card>
        <Card>
            <img src={callIn} alt="CallIn" />
            <h4>Request a Call</h4>
            <p>Post a request by providing all necessary information about the car you want to vet and it’s location or link.</p>
            <div className='hc-links'>
            <StyledButtonLinks variant='primary' size='sm'>
              <Link to="/Call">Call Now</Link>
            </StyledButtonLinks>
            <StyledButtonLinks size='sm'>
              <Link to="/Request"> Request</Link>
            </StyledButtonLinks>
            </div>
        </Card>
        </div>
        <HeroSummary />
   </HeroCardSection>
  )
}

export default HeroCard