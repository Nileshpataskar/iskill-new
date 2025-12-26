'use client'

import TalkToOurTeam from "../component/about/TalkToOurTeam"
import ContactForm from "../src/contactUs/contactForm"
import HeroSection from "../src/contactUs/heroSection"
import MapPage from "../src/contactUs/mapPage"
import TalkAndSend from "../src/contactUs/TalkAndSend"



const ContactUsPage = () => {
    return (
        <div className='md:px-32'>
            <HeroSection />
            <TalkAndSend />
            <ContactForm />
            <TalkToOurTeam />
            <MapPage/>
        </div>
    )
}

export default ContactUsPage
