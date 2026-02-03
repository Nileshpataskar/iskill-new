import Clientele from './clientele'
import CompanyMoto from './CompanyMoto'
import Hero from './hero'
import LetsConnect from './letsConnect'
import NewOutcome from './newOutcome'
import NewServiceSection from './newServiceSection'
import NewSuccessStories from './newSuccessStories'
import NotLast from './notLast'
import Outcome from './outcome'
import ServiceSection from './serviceSection'
import SuccessStories from './successStories'

const LandingPage = () => {
    return (
        <>

            <Hero />
            {/* <ServiceSection /> */}
            <NewServiceSection />
            {/* <CompanyMoto /> */}
            <NewSuccessStories />
            {/* <SuccessStories /> */}
            <NewOutcome />
            {/* <Outcome /> */}
            <LetsConnect />
            <NotLast />
        </>
    )
}

export default LandingPage