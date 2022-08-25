import { NavLink } from 'react-router-dom'
import { QuicklinksStyles } from '../atoms/StyledFooter'



function Quicklinks() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
   <QuicklinksStyles>
        <h5>Quick links</h5>
        <div className="border-highlight"></div>
        <div className="footer-links">
            <NavLink onClick={scrollToTop} to='/'>Home</NavLink>
            {/* <NavLink onClick={scrollToTop} to='/Request'>Requests</NavLink> */}
            {/* <NavLink onClick={scrollToTop} to='/Call'>Call Us</NavLink>
            <NavLink onClick={scrollToTop} to='/'>Notifications</NavLink> */}
            <NavLink onClick={scrollToTop} to='/Faq'>FAQs</NavLink>
            <NavLink onClick={scrollToTop} to='/'>Privacy Policy</NavLink>
            {/* <NavLink onClick={scrollToTop} to='/'>Terms & Conditions</NavLink> */}
        </div>
   </QuicklinksStyles>
  )
}

export default Quicklinks