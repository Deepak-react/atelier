import Marketing from "../src/assets/contant-marketing/marketing.png"
import Content from "../src/assets/contant-marketing/content.png"

function ContentMarketing(){
   return (
    <>
    <section id="blogs"  className="content-marketing-sec">
      <div className="container">
        <div className="row">
        <div className="work-we-work-tit-warper">
                <span className="work-we-work-sub-tit">
                   <div> // </div>
                     Articles
                </span>
                <h3 className="h-w-w-main-tit-1" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="100">
                Top Expert Content Marketing And Advertising Solutions Company
                </h3>
            </div>


     <div className="col-md-12">
      <div className="content-marketing-card" data-aos="zoom-out-up" data-aos-duration="1000" data-aos-delay="100">
        <div className="content-m-main-cont">
           <div className="card-head">
            <span className="card-sub-tit">Marketing</span>
            <span className="card-date">September 1, 2022</span>
           </div>

           <h3 className="content-marketing-main-tit">
           How to increase your Social media reach by over 200% with this simple trick
           </h3>

           <p>
           Increase your social media reach by over 200% using this simple strategy to drive more engagement and visibility.</p>

           <a href="#" className="service-btn">
           Read More 
           </a>
        </div>
        <div className="content-m-main-img">
            <img src={Marketing} alt="" height="" width="" loading="lazy" title="" />
        </div>
       </div>

       <div className="content-marketing-card c-m-c-1" data-aos="zoom-out-up" data-aos-duration="1000" data-aos-delay="200">
        
        <div className="content-m-main-img">
            <img src={Content} alt="" height="" width="" loading="lazy" title="" />
        </div>

        <div className="content-m-main-cont">
           <div className="card-head">
            <span className="card-sub-tit">Condent</span>
            <span className="card-date">September 1, 2022</span>
           </div>

           <h3 className="content-marketing-main-tit">
           How to reach out for guest posts to increase your SEO authority
           </h3>

           <p>
           Connect with us effortlessly for guest post opportunities that can boost your SEO authority and enhance your online visibility.
</p>

           <a href="#" className="service-btn">
           Read More 
           </a>
        </div>
       </div>
     </div>
       

        </div>

        <a href="#" className="service-btn service-btn-cmc">More articles</a>
      </div>
    </section>

    
    </>
   )
}

export default ContentMarketing