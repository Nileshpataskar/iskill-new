import Clientele from './clientele'
import CompanyMoto from './CompanyMoto'
import Hero from './hero'
import NewServiceSection from './newServiceSection'
import NotLast from './notLast'
import Outcome from './outcome'
import ServiceSection from './serviceSection'
import SuccessStories from './successStories'

const LandingPage = () => {
    return (
        <>
            {/* <Hero /> */}
            <Clientele />
            <ServiceSection />
            <NewServiceSection />
            <CompanyMoto />
            <SuccessStories />
            <Outcome />
            <NotLast />
        </>
    )
}

export default LandingPage