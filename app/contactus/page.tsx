'use client'

import TalkToOurTeam from "../src/component/about/TalkToOurTeam"
import ContactForm from "../src/component/contactUs/contactForm"
import HeroSection from "../src/component/contactUs/heroSection"
import MapPage from "../src/component/contactUs/mapPage"
import TalkAndSend from "../src/component/contactUs/TalkAndSend"

const ContactUsPage = () => {
    return (
        <div className='bg-white'>
            <HeroSection />
            <TalkAndSend />
            <div id="contact-form">
                <ContactForm />
            </div>
            <TalkToOurTeam />
            <MapPage/>
        </div>
    )
}

export default ContactUsPage
