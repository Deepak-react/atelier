import rocketBoy from "../src/assets/home/rocket-boy.svg"
import FirstImg from "../src/assets/home/section-1-draft.webm"
// import WhatsApp from "../src/assets/home/whatsApp.jpeg"
import WhatsApp from "../src/assets/home/whatsApp.jpg"
import SocialMediaMarkting from "../src/assets/home/social-media-markting.svg"
import Bobule1 from "../src/assets/home/bobule1.svg"
import Bobule2 from "../src/assets/home/bobule2.svg"
import Bobule3 from "../src/assets/home/bobule3.svg"
import Bobule4 from "../src/assets/home/bobule4.svg"

import BgPattern from "../src/assets/home/bg-pattern.svg"



function FirstSection(){
   return(
    <>
    <section  id="home-page-first-sec"  className="home-page-first-sec" >
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="home-page-first-sec-left">
                       <div id="fist-sec-main-tit" className="fist-sec-main-tit" >
                       <h1 className="i" data-aos="fade-up" data-aos-duration="1000" >
                       Boost Your Brand's Online Presence With Creative Design Agency
                       </h1>
                       </div>
                       <p>
                       As a leading creative design and marketing agency, we help businesses build a strong online presence and connect with their target audience through tailored strategic solutions.
                       </p>
                       {/* <a className="first-sec-btn" data-aos="fade-up" data-aos-duration="5000" >
                          Get Started
                       </a> */}
                    </div>
                </div>
                <div className="col-md-6">
                <div className="home-page-first-sec-right">
                    <div className="rocket-boy">
                        {/* <video src={FirstImg} autoPlay loop height="560px"></video> */}
                        <div className="img-bg-patten">
                        <img className="rocket-boy-inner" src={SocialMediaMarkting} alt="" width="655" height="655" title="" />
                        </div>
                     <div className="bobule1 bobules">
                        <img src={Bobule1} alt="" height="" width="" loading="lazy" title="" />
                     </div>
                     <div className="bobule2 bobules">
                        <img src={Bobule2} alt="" height="" width="" loading="lazy" title="" />
                     </div>
                     <div className="bobule3 bobules">
                        <img src={Bobule3} alt="" height="" width="" loading="lazy" title="" />
                     </div>
                     <div className="bobule4 bobules">
                        <img  src={Bobule4} alt="" height="" width="" loading="lazy" title="" />
                     </div>

                    </div>
                        
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
   )
}

export default FirstSection