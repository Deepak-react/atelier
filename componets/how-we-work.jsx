import MarketingPlan from "../src/assets/how-we-work/marketing-plan.svg"
import WorkExecution from "../src/assets/how-we-work/work-execution.svg"
import GrowthScale from "../src/assets/how-we-work/growth-scale.svg"



function HowWeWork(){
   return (
    <>
    <section  className="How-we-work-sec">
        <div className="how-we-work-container">
            <div className="work-we-work-tit-warper">
                <span className="work-we-work-sub-tit">
                   <div> // </div>
                      Proccess
                </span>
                <h3 className="h-w-w-main-tit">
                Digital Strategy Workflow for Improve Brand Visibility
                </h3>
            </div>
            <div className="row">
                  <div className="how-we-work-card hww-card-1 " >
                    <div className="h-w-w-card-img" data-aos="fade-right" data-aos-duration="1000" >
                        <img src={MarketingPlan} alt="" height="" width="" loading="lazy" title="" />
                    </div>

                    <div className="hww-num hww-num-line">
                        1
                    </div>

                    <div className="h-w-w-card-cont" data-aos="fade-left" data-aos-duration="1000" >
                        <h4 className="h-w-w-card-tit">
                        Marketing Plan
                        </h4>
                        <p>Our comprehensive marketing strategy services are designed to help brands grow and achieve success. </p>
                    </div>
                  </div>

                  <div className="how-we-work-card hww-card-2 " >
                    <div className="h-w-w-card-cont-1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        <h4 className="h-w-w-card-tit">
                        Work Execution
                        </h4>
                        <p>Our efficient project execution focuses on quality, collaboration, and timely delivery to optimize your campaigns.</p>
                    </div>

                    <div className="hww-num hww-num-1">
                        2
                    </div>

                    <div className="h-w-w-card-img" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        <img src={WorkExecution} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                  </div>

                  <div className="how-we-work-card hww-card-2 " >
                    <div className="h-w-w-card-img" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        <img src={GrowthScale} alt="" height="" width="" loading="lazy" title="" />
                    </div>

                    <div className="hww-num">
                        3
                    </div>

                    <div className="h-w-w-card-cont" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        <h4 className="h-w-w-card-tit">
                        Growth & Scale
                        </h4>
                        <p>We provide strategic solutions to enhance reach, boost performance, and drive impactful business growth and engagement. </p>
                    </div>
                  </div>
            </div>
        </div>
    </section>
    </>
   )
}

export default HowWeWork