import HeroSection from '@/app/src/component/about/HeroSection'
import Statistics from '@/app/src/component/about/Statistics'
import GlobalLearning from '@/app/src/component/about/GlobalLearning'
import Clientele from '@/app/src/component/landing/clientele'
import History from '@/app/src/component/about/History'
import Potential from '@/app/src/component/about/Potential'
import ProductsServices from '@/app/src/component/about/ProductServices'
import NotLast from '../src/component/landing/notLast'

const AboutPage = () => {
    return (
        <div className=" ">
            <HeroSection />
            <Statistics />
            <GlobalLearning />
            <Clientele />
            <History />
            <Potential />
            <ProductsServices />
            <NotLast />
            {/* <TalkToOurTeam /> */}
        </div>
    )
}

export default AboutPage

