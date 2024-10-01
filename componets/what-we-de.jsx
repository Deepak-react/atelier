// import GrowthScale from "../src/assets/how-we-work/growth-scale.svg"
import GrowthScaleVid from "../src/assets/how-we-work/section-3.webm"
import revenueGuaranteed from "../src/assets/what-we-do/revenue-guaranteed.svg"
import AdvertisingMadeAffordablex from "../src/assets/what-we-do/best-client-support.svg"
import BestClientSupport from "../src/assets/what-we-do/advertising-made-affordablex.svg"
import SectionTwoVideo from "../src/assets/what-we-do/section-2-draft.webm"
import PaidAds from "../src/assets/what-we-do/paid-ads.svg"


function whatWeDo(){
   return (
    <>
    <section id="about-us"  className="what-we-do-sec" >
      <div className="container-2">
        <div className="row">
        <div className="col-md-6">
                <div className="what-we-do-main-img-1 " data-aos="fade-right" data-aos-duration="1000" >
                    <img src={PaidAds} alt="" width="650" height="951"  />
                    {/* <video src={SectionTwoVideo} autoPlay loop height="560px"></video> */}
                </div>
            </div>
            <div className="col-md-6">
            <div className="tit-wraper-1">
            <span className="tit-sub"><div>// </div> About Us</span>
            <h3 className="what-we-do-secondry-tit" data-aos="fade-left" data-aos-duration="1000">
            Best Digital Markting & Design Service Company, Coimbatore
            </h3>
            </div>

            <p className="top-border-para" data-aos="fade-left" data-aos-duration="1000">
            Atelier is a top digital marketing and creative design company in Coimbatore, offering innovative services like SEO, SMM, UI/UX, graphic design, web, app, and software development to help businesses Reach.</p>

            <div className="what-we-do-cont-waper">
                <div className="cont-img-what-we-do">
                    <img src={revenueGuaranteed} alt="" height="" width="" loading="lazy" title="" />
                </div>

                <div className="wht-we-do-main-cont" data-aos="fade-left" data-aos-duration="1000">
                    <h4>Revenue Guaranteed</h4>
                    <p>
                    Tap into your business's potential with our services, crafted to enhance growth and revenue success.
                    </p>
                </div>
            </div>

            <div className="what-we-do-cont-waper " > 
                <div className="cont-img-what-we-do">
                    <img src={AdvertisingMadeAffordablex} alt="" height="" width="" loading="lazy" title="" />
                </div>

                <div className="wht-we-do-main-cont " data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"> 
                    <h4>Best Client Support</h4>
                    <p>
                    We provide excellent client support, delivering timely solutions and dedicated service for all business needs.
                    </p>
                </div>
            </div>

            <div className="what-we-do-cont-waper">
                <div className="cont-img-what-we-do">
                    <img src={BestClientSupport} alt="" height="" width="" loading="lazy" title="" />
                </div>

                <div className="wht-we-do-main-cont" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                    <h4>Advertising made Affordable</h4>
                    <p>
                    We provide cost-effective advertising solutions that enhance your brand's reach without sacrificing quality results.
                    </p>
                </div>
            </div>

            </div>
        </div>
            
      </div>
    </section>

    
    </>
   )
}

export default whatWeDo