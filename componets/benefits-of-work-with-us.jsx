import MenifitWorkingMaruncy from "../src/assets/benifit-working-maruncy/menifit-working-maruncy.png"
import PageRankings from "../src/assets/benifit-working-maruncy/page-rankings.svg"
import SiteOptimisation from "../src/assets/benifit-working-maruncy/site-optimisation.svg"
import ReportingAnalysis from "../src/assets/benifit-working-maruncy/reporting-analysis.png"
import BrnifitsPageSvg from "../src/assets/benifit-working-maruncy/brnifits-page-svg.svg"

function BenefitsWWU(){
   return (
    <>
    <section id="one"  className="what-we-do-sec-1">
      <div className="container-2">
        <div className="row">
        <div className="col-md-6">
       
                <div className="what-we-do-main-img">
                    <img src={BrnifitsPageSvg} alt="" width="550" height="550" loading="lazy" />
                </div>
            </div>
            <div className="col-md-6">
            <div className="tit-wraper-1">
            <span className="tit-sub"><div>//</div>  Benifits</span>
            <h3 className="what-we-do-secondry-tit-1" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0">
            Primier SEO & SMM Solutions Provider For Your Business
            </h3>
            </div>
             <div className="what-we-do-cont-waper" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0">
                <div className="cont-img-what-we-do">
                    <img src={PageRankings} alt="" width="" height="" title="" loading="lazy" />
                </div>

                <div className="wht-we-do-main-cont" >
                    <h4>Page Rankings</h4>
                    <p>
                    Boost your website's visibility and drive traffic with our expert strategies to improve your site's position in Google’s top rankings.
                    </p>
                </div>
            </div>

            <div className="what-we-do-cont-waper" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <div className="cont-img-what-we-do">
                    <img src={SiteOptimisation} alt="" title="" loading="lazy" width="" height="" />
                </div>

                <div className="wht-we-do-main-cont" >
                    <h4>Site Optimisation</h4>
                    <p>
                    Improve your website's performance with our expert seo optimization services, enhancing speed, functionality, and user experience.   </p>
                </div>
            </div>

            <div className="what-we-do-cont-waper" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <div className="cont-img-what-we-do">
                    <img src={ReportingAnalysis} alt="" title="" loading="lazy" width="" height="" />
                </div>

                <div className="wht-we-do-main-cont">
                    <h4>Reporting & Analysis</h4>
                    <p>
                    We provide data-driven strategies with comprehensive reporting and analytics to optimize campaigns and improve competitiveness. </p>
                </div>
            </div>

            </div>
        </div>
            
      </div>
    </section>
    </>
   )
}

export default BenefitsWWU