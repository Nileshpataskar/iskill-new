import HeroSection from '@/app/src/component/about/HeroSection'
import Statistics from '@/app/src/component/about/Statistics'
import GlobalLearning from '@/app/src/component/about/GlobalLearning'
import Clientele from '@/app/src/component/landing/clientele'
import History from '@/app/src/component/about/History'
import Potential from '@/app/src/component/about/Potential'
import ProductsServices from '@/app/src/component/about/ProductServices'
import NotLast from '../src/component/landing/notLast'
import { getSVGContent } from '../utils/svgUtils'

const AboutPage = () => {
    const heroSvgContent = getSVGContent('/about/hero.svg');

    return (
        <div className=" ">
            <HeroSection svgContent={heroSvgContent} />
            <Statistics />
            <GlobalLearning />
            <Clientele background={false} />
            <History />
            <Potential />
            <ProductsServices />
            <NotLast />
            {/* <TalkToOurTeam /> */}
        </div>
    )
}

export default AboutPage

