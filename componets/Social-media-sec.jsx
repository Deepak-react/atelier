import Email from "../src/assets/home/email.svg"
import LinkedIn from "../src/assets/social/LinkedIn.svg"
import Twitter from "../src/assets/social/Twitter.svg"
import Instagram from "../src/assets/social/Instagram.svg"
import Facebook from "../src/assets/social/Facebook.svg"
import SocilCall from "../src/assets/social/socil-call.svg"


function SocialMediaSec() {
  return (
    <>
    <section className="social-media-sec">
        <div className="social-media-sec-container">
            <h4 className="social-media-tit" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
            Let's stay connected
            </h4>
            <p>
            Getting in touch with us at Atelier is simple! Call us, use our live chat widget, or send us an email, and we'll respond as quickly as possible!</p>
            <div className="social-sub-container">
             <div className="so" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0">
                <div className="socia-contat-icon">
                    <img src={Email} alt="" />
                </div>

                <h4 className="socia-contat-tit">
                Email
                </h4>

                <p>Atelierhub.assist@gmail.com</p>

             </div>
             <div className="so" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <div className="socia-contat-icon">
                    <img src={SocilCall} alt="" />
                </div>

                <h4 className="socia-contat-tit">
                Phone
                </h4>

                <a href="tel:8428205537">8428205537</a>

             </div>
             <div className="so" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                <div className="socia-contat-icon">
                    <img src={Email} alt="" height="" width="" loading="lazy" title="" />
                </div>

                <h4 className="socia-contat-tit">
                Socials
                </h4>

                <div className="social-media-icons">
                    <a href="#"><img src={LinkedIn} alt="img" height="" width="" loading="lazy" title="" /></a>
                    <a href="#"><img src={Twitter} alt="img" height="" width="" loading="lazy" title="" /></a>
                    <a href="#"><img src={Instagram} alt="img" height="" width="" loading="lazy" title="" /></a>
                    <a href="#"><img src={Facebook} alt="img" height="" width="" loading="lazy" title="" /></a>
                </div>
             </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SocialMediaSec