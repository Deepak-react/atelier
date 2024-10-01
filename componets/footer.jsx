
import PromoteImg from "../src/assets/footer/promote.svg"
import FooterMarketingImg from "../src/assets/footer/footer-marketing.png"
import Fb from "../src/assets/footer/fb.svg"
import Twiter from "../src/assets/footer/twiter.svg"
import Linkedin from "../src/assets/footer/linkedin.svg"
import Insta from "../src/assets/footer/insta.svg"
import { Link } from "react-router-dom"


function Footer(){
   return (
    <>
    <section  className="footer-sec">
      <div className="footer-container">
        <div className="footer-left-card">
              {/* <div className="promote-img">
                <img src={PromoteImg} alt="" />
              </div> */}
              <div className="footer-marketing-img">
                <img src={FooterMarketingImg} alt="" height="" width="" loading="lazy" title="" />
              </div>

              <div className="footer-left-cont">
                <h4 className="footer-left-cont-tit">
                Subscribe now
                </h4>
                <p className="footer-left-para">
                Industry's standard from dummy and make a type  book. 
                </p>
              </div>

               <div className="footer-social-m-link">
                <a href="https://www.facebook.com/people/Atelier-Creations/61566435929567/?mibextid=ZbWKwL"><img src={Fb} alt="" height="" width="" loading="lazy" title="" /></a>
                <a href=""><img src={Twiter} alt="" height="" width="" loading="lazy" title="" /></a>
                <a href=""><img src={Linkedin} alt="" height="" width="" loading="lazy" title="" /></a>
                <a href="https://www.instagram.com/atelier__creations"><img src={Insta} alt="" height="" width="" loading="lazy" title="" /></a>
                </div>   
        </div>
        <div className="footer-right-card">
               {/* <div className="right-card-top-container">
               <div className="footer-right-card-top-sec">
                <h4 className="get-touch-w-us">
                Get in touch with
                </h4>
                <span className="numer-1">
                +1 917 000 1212 
                </span>
                <span className="mail-1">
                nextlevel@marketing.com
                </span>
              </div>
              <div className="footer-right-card-top-sec-1">
                <h4 className="location-tit">
                Location
                </h4>
                <span className="address">
                10 Suna House 65 Rivington Street London EC2A 3QQ
                </span>
                <span className="location">
                location
                </span>
              </div>
               </div> */}
              <div className="footer-quick-link">
                      <div className="footer-quick-col-1">
                        <h5 className="footer-quick-tit-1">
                        Pages
                        </h5>

                        <ul className="footer-ul">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing Single</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                      </div>
                      <div className="footer-quick-col-2">
                        <h5 className="footer-quick-tit-2">
                        Services Pages
                        </h5>

                        <ul className="footer-ul">
                            <li><Link to="/best-social-media-marketing-advertising-agency">SMM</Link></li>
                            <li><a href="#">Ads</a></li>
                            <li><Link to="/top-seo-ranking-specialist">SEO</Link></li>
                            <li> <a href="#">Website development</a></li>
                            <li><Link to="/mobile-app-development-company-india">App Develop</Link></li>
                            <li><a href="#">Graphic design</a></li>
                        </ul>
                      </div>
                      <div className="footer-quick-col-3">
                        <h5 className="footer-quick-tit-3">
                        Contact
                        </h5>

                        <ul className="footer-ul">
                            <li><a href="tel:8428205537">84282 05537</a></li>
                            <li><a href="#">Atelierhub.assist@gmail.com</a></li>
                            <li><a href="#">No 293/6 R G Complex 1st Floor, Perur Main Road, Telungapalayam,  Near Canara Bank,  Coimbatore - 641039</a></li>
                        </ul>
                      </div>
                </div>

        </div>
      </div>
      <div className="bg-txt-2">
       ATELIER
     </div>
    </section>
    </>
   )
}

export default Footer