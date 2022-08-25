import { Link } from 'react-router-dom'
import FAQsub from './FAQsub'
import { FAQCard, FAQLink, FAQSection } from '../atoms/StyledLandingPage'



function FAQ(props: any) {

  return (
    <FAQSection className={props.className}>
        <h2 className='faq-title'>Have a question, check FAQs</h2>
        <FAQCard>
            <FAQsub  question='How do i make a vetting request for a car i want to buy?' response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'/>
            <FAQsub  question='How do i create account as an agent?' response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'/>
            <FAQsub  question='How do i Know if my money is secure?' response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'/>
            <FAQsub  question='How long does it take to vet a vehicle?' response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'/>
            <FAQsub  question='How much does vetting process cost?' response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'/>
            <FAQsub  question='How do i know if my request have been answered?' response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'/>
        </FAQCard>
        <FAQLink>
            <p> Can’t find what you want? </p>
            <Link to='/Call'>Contact us</Link>
        </FAQLink>

    </FAQSection>
  )
}

export default FAQ