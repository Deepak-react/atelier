import serviceCardIcon from "../src/assets/services/service-card-icon.svg";

import SEO from "../src/assets/services/SEO.svg";
import FunnelOptimization from "../src/assets/services/funnel-optimization.svg";
import AdvancedAnalytics from "../src/assets/services/advanced-analytics.svg";
import PaidAdvertising from "../src/assets/services/paid-advertising.svg";
import UiUx from "../src/assets/services/ui-ux.svg";


import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <section id="services" className="services-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="our-container">
              <div className="tit-wraper">
                <span className="tit-sub">
                  <div>//</div> Services
                </span>
                <h2 className="secondry-title1">
                Best Digital Marketing & Creative Designing Company/Agency 
                </h2>
              </div>
              <a className="service-btn" href="#">
                Our Services
              </a>
            </div>
            <div className="our-container-1">
              <div className="row">
                {/* Service Card 1 */}
                <div className="col-md-4 ">
                  <div className="service-card " data-aos="fade-up" data-aos-duration="1000">
                    <div className="srv-card-icon">
                      <img src={serviceCardIcon} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    SMM
                    </h3>
                    <p className="sev-card-cont">
                    We provide expert social media marketing services, managing platforms to engage and grow your target audience
                    </p>
                    <Link className="service-card-btn" to="/best-social-media-marketing-advertising-agency">
                      Read More
                      </Link>
                  </div>
                </div>
                
                <div className="col-md-4 " >
                  <div className="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="srv-card-icon">
                      <img src={PaidAdvertising} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    Ads
                    </h3>
                    <p className="sev-card-cont">
                    We provide exceptional paid advertising services to enhance online visibility, drive traffic, and maximize ROI.
                    </p>
                    <a href="#" className="service-card-btn">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="col-md-4 " >
                  <div className="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" >
                    <div className="srv-card-icon">
                      <img src={SEO} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    SEO
                    </h3>
                    <p className="sev-card-cont">
                    We offer result-driven SEO services, including Local, Regional, and International SEO, to achieve top Google rankings.
                    </p>
                    <Link className="service-card-btn" to="/top-seo-ranking-specialist">
                      Read More
                      </Link>
                  </div>
                </div>

                {/* Service Card 4 */}
                <div className="col-md-4 " >
                  <div className="service-card " data-aos="fade-up" data-aos-duration="1000">
                    <div className="srv-card-icon">
                      <img src={serviceCardIcon} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    Website development
                    </h3>
                    <p className="sev-card-cont">
                    We offer website development services, crafting responsive, user-friendly, and SEO-optimized sites for business growth.

                    </p>
                    <a href="#" className="service-card-btn">
                      Read More
                    </a>
                  </div>
                </div>

                {/* Service Card 5 */}
                <div className="col-md-4 " >
                  <div className="service-card " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="srv-card-icon">
                      <img src={serviceCardIcon} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    App Develop
                    </h3>
                    <p className="sev-card-cont">
                    We provide top app development services, creating user-friendly, high-performance, customized apps to improve your digital presence.
                    </p>
                    {/* <a href="#" className="service-card-btn">
                      Read More
                    </a> */}
                    <Link className="service-card-btn" to="/mobile-app-development-company-india">
                      Read More
                      </Link>
                  </div>
                </div>

                {/* Service Card 6 */}
                <div className="col-md-4" >
                  <div className="service-card " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="srv-card-icon">
                      <img src={serviceCardIcon} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    Graphic design
                    </h3>
                    <p className="sev-card-cont">
                    The best graphic and logo design company, we create custom logos that capture your brand's identity and vision.
                    </p>
                    <a href="#" className="service-card-btn">
                      Read More
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
