'use client'

import HeroSection from '@/app/component/about/HeroSection'
import Statistics from '@/app/component/about/Statistics'
import GlobalLearning from '@/app/component/about/GlobalLearning'
import Clientele from '@/app/src/landing/clientele'
import History from '@/app/component/about/History'
import Potential from '@/app/component/about/Potential'
import NotLast from '@/app/component/NotLast'
import ProductsServices from '@/app/component/about/ProductServices'

const AboutPage = () => {
    return (
        <div className=" md:px-32">
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

