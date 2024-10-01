import Header from "../componets/header"
import Footer from "../componets/footer"
import ServiceFirstImg from "../src/assets/services/service-first-img.webp"
import ServiceDetailedImg from "../src/assets/services/seamless-financial.svg"
import ServiceDetailedMainImg from "../src/assets/services/service-detailed-main.webp"
import ImageContainer from "../src/assets/services/image-container.png"
import {Helmet} from "react-helmet";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


const ServiceOne = () => {
  return (
    <>
    <Header />
    <Helmet>
      <title>Best Digital Marketing & Designing Agency in Coimbatore
      </title>
      <meta name="description"
    content="Atelier is a top" 
    />
      
    </Helmet>
    
    <section className="serv-banner social-media-marketing">
        <h1 className="banner-h1">
        SEO Optimization
        </h1>
    </section>
     <section className="serv-point-sec">
         <div className="serv-point-sec-container">
            <div className="servi-point-sec-left-box">
                  <h3 className="srv-sec-tit">
                  Lorem ipsum dolor sit amet, adipiscing 
                  </h3>

                  <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam distinctio culpa odit, dolor voluptatibus dolores voluptates inventore, ratione minima perspiciatis soluta voluptatem, itaque dicta quibusdam atque modi maxime similique Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus alias laudantium, non veritatis dolores libero reiciendis aut laboriosam labore corrupti? lorem20
                  </p>

                  {/* <ul className="serv-sec-points">
                    <li>Seamless Financial Management</li>
                  </ul> */}
            </div>
            <div className="servi-point-sec-right-box">
                    <div className="seri-first-img">
                        <img src={ServiceFirstImg} alt="" />
                    </div>
            </div>
         </div>
     </section>

     <section className="service-detailed-sec">
     <h2 className=" ">
     Lorem ipsum dolor sit amet, consectetuer 
     </h2>
     <p className="service-detailed-main-para">
     we are on a mission to revolutionize the way you manage, invest, and secure your finances. With a commitment to innovation and user empowerment.
     </p>

        <div className="srv-detai-sec-contain">
            <div className="left-srv-detai-sec">
            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Seamless Financial Management
            </h4>
            <p>Discover a world where managing your finances is effortless. Our user-friendly platform allows you to track expenses, create budgets, and gain insights into your financial health like never before.</p>

            </div>

            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Seamless Financial Management
            </h4>
            <p>Discover a world where managing your finances is effortless. Our user-friendly platform allows you to track expenses, create budgets, and gain insights into your financial health like never before.</p>

            </div>

            <div className="service-detai-cont-card">
              
             
              <h4 className="service-detailed-small-tit">
              Seamless Financial Management
              </h4>
              <p>Discover a world where managing your finances is effortless. Our user-friendly platform allows you to track expenses, create budgets, and gain insights into your financial health like never before.</p>
  
              </div>

            </div>

            <div>
             <div className="service-detailed-main-img">
              <img src={ServiceDetailedMainImg} alt="" />
             </div>
            </div>

            <div className="right-srv-detai-sec">
            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Seamless Financial Management
            </h4>
            <p>Discover a world where managing your finances is effortless. Our user-friendly platform allows you to track expenses, create budgets, and gain insights into your financial health like never before.</p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            Seamless Financial Management
            </h4>
            <p>Discover a world where managing your finances is effortless. Our user-friendly platform allows you to track expenses, create budgets, and gain insights into your financial health like never before.</p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            Seamless Financial Management
            </h4>
            <p>Discover a world where managing your finances is effortless. Our user-friendly platform allows you to track expenses, create budgets, and gain insights into your financial health like never before.</p>

            </div>
            </div>

            
        </div>
     </section>

     <section className="extra-cont-light">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum perspiciatis, optio ipsam voluptas cupiditate rerum excepturi ab officiis illo soluta animi possimus odio. Harum amet, adipisci ea nulla quibusdam eum ad ullam doloremque molestias dolorum commodi quaerat reprehenderit! Tenetur repudiandae exercitationem sint consectetur quis, aliquam minima neque veritatis quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione sunt. Voluptatem neque corrupti ad eius iusto sunt animi! Explicabo, fuga ea voluptates pariatur aliquam repellendus exercitationem rem! Quod, aspernatur?</p>

       <div className="extra-cont-light-img">
        <img src={ImageContainer} alt="" />
       </div>
     </section>

     <section className="extra-cont-dark">

     <div className="extra-cont-light-img">
        <img src={ImageContainer} alt="" />
       </div>

       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum perspiciatis, optio ipsam voluptas cupiditate rerum excepturi ab officiis illo soluta animi possimus odio. Harum amet, adipisci ea nulla quibusdam eum ad ullam doloremque molestias dolorum commodi quaerat reprehenderit! Tenetur repudiandae exercitationem sint consectetur quis, aliquam minima neque veritatis quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione sunt. Voluptatem neque corrupti ad eius iusto sunt animi! Explicabo, fuga ea voluptates pariatur aliquam repellendus exercitationem rem! Quod, aspernatur?</p>

       
     </section>

     <section className="extra-cont-light">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum perspiciatis, optio ipsam voluptas cupiditate rerum excepturi ab officiis illo soluta animi possimus odio. Harum amet, adipisci ea nulla quibusdam eum ad ullam doloremque molestias dolorum commodi quaerat reprehenderit! Tenetur repudiandae exercitationem sint consectetur quis, aliquam minima neque veritatis quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione sunt. Voluptatem neque corrupti ad eius iusto sunt animi! Explicabo, fuga ea voluptates pariatur aliquam repellendus exercitationem rem! Quod, aspernatur?</p>

       <div className="extra-cont-light-img">
        <img src={ImageContainer} alt="" />
       </div>
     </section>

     <section className="extra-cont-dark">

<div className="extra-cont-light-img">
   <img src={ImageContainer} alt="" />
  </div>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum perspiciatis, optio ipsam voluptas cupiditate rerum excepturi ab officiis illo soluta animi possimus odio. Harum amet, adipisci ea nulla quibusdam eum ad ullam doloremque molestias dolorum commodi quaerat reprehenderit! Tenetur repudiandae exercitationem sint consectetur quis, aliquam minima neque veritatis quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione sunt. Voluptatem neque corrupti ad eius iusto sunt animi! Explicabo, fuga ea voluptates pariatur aliquam repellendus exercitationem rem! Quod, aspernatur?</p>

  
    </section> 

    <section className="service-carosoul-sec">
      <h3 className="service-carosoul-tit">
      Specialty Services
      </h3>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      </p>

      <div className="service-carosoul-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true, 
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >


        <SwiperSlide>
          <div className="service-carosoul-cards">
           <h4 className="service-carosoul-cards-tit">
           Wood Floor Cleaning
           </h4>
           <p>
           Wood floor cleaning consists of applying a cleaning agent, scrubbing with a brush machine, rinsing using low moisture, & finally, we apply a finish to protect. Cleaning your wood floors professionally helps keep them looking new. Wood floors are expensive to replace. Treat them right.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Air Duct Cleaning
           </h4>
           <p>
           Air duct cleaning is something necessary in order to keep your indoor air quality at a healthy range. Dust particulates, sand, hair, dander, pollen, mold spores and more will collect inside your air ducts and when you use your HVAC system, these things get blown all over your whole house. Get your air ducts cleaned & sanitized.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Tile/Grout Cleaning
           </h4>
           <p>
           When cleaning tile and grout we apply a cleaning agent, scrub the grout lines, and then hot pressure clean & rinse. Finally, a sealant or color seal is applied to protect grout lines. Grout lines can ugly out quickly if not properly maintained and sealed to prevent staining. Have them professionally cleaned and sealed so they last longer.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards"> 
          <h4 className="service-carosoul-cards-tit">
          Tile/Grout Cleaning
           </h4>
           <p>
           When cleaning tile and grout we apply a cleaning agent, scrub the grout lines, and then hot pressure clean & rinse. Finally, a sealant or color seal is applied to protect grout lines. Grout lines can ugly out quickly if not properly maintained and sealed to prevent staining. Have them professionally cleaned and sealed so they last longer.
           </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      </div>
      
    </section>

    <section className="faq-section">

      <h3 className="faq-tit">
      Frequently Asked Questions
      </h3>
      <div className="faq-container">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      </div>
     </section>

     <section className="contact-card-sec">
       <div className="contact-card-inside-cont">
        <h3 className="contact-inner-tit">
        Get in touch and <span>start</span><br />
        <span>growing</span> your startup today
        </h3>

        <a className="contact-card-btn" href="">
        Get in touch
        </a>
       </div>
       
     </section>
             
     



    
     

    <Footer />
    </>
  )
}

export default ServiceOne