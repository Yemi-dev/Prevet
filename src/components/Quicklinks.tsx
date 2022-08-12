import { Link } from 'react-router-dom'
import { QuicklinksStyles } from '../atoms/StyledFooter'



function Quicklinks() {
  return (
   <QuicklinksStyles>
        <h5>Quick links</h5>
        <div className="border-highlight"></div>
        <div className="footer-links">
            <Link to='/'>Home</Link>
            <Link to='/'>Requests</Link>
            <Link to='/'>Call Us</Link>
            <Link to='/'>Notifications</Link>
            <Link to='/'>FAQs</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms & Conditions</Link>
        </div>
   </QuicklinksStyles>
  )
}

export default Quicklinks