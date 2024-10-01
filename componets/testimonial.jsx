import TestimoIconOne from "../src/assets/testinonial/testimo-iocn-1.svg";
import TestimoIconTwo from "../src/assets/testinonial/testimo-iocn-2.svg";
import Ratings from "../src/assets/testinonial/ratings.svg";
import ReviwersImg from "../src/assets/testinonial/Image.png";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className="swiper-sec ">
      <div className="tit-wraper-2">
        <span className="tit-sub">
          <div>//</div> Testimonial
        </span>
        <h3 className="what-we-do-secondry-tit-2">
        Best SEO Service Agency & Digital Marketing Company 
        </h3>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,   // Delay between slides (in ms)
          disableOnInteraction: true,  // Keep autoplay running after user interactions
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="testimonial-cards" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="testimo-inner-card">
              <div className="testimo-inner-card-top">
                <div className="testi-logo">
                  <img src={TestimoIconOne} alt="Company Logo" height="" width="" loading="lazy" title="" />
                </div>
                <div className="testimo-tit">Company-2</div>
                <div className="ratings">
                  <img src={Ratings} alt="Ratings" height="" width="" loading="lazy" title="" />
                </div>
              </div>
              <p className="testimo-inner-card-para">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the unknown printer took a galley of type and made a type
                specimen book.
              </p>
              <div className="reviwers">
                <div className="reviwers-img">
                  <img src={ReviwersImg} alt="Reviewer" height="" width="" loading="lazy" title="" />
                </div>
                <div className="reviwers-txt">
                  <h3 className="reviwers-name">John Carter</h3>
                  <p className="reviwers-position">Marketing Lead at Google</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-cards" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="testimo-inner-card">
              <div className="testimo-inner-card-top">
                <div className="testi-logo">
                  <img src={TestimoIconTwo} alt="Company Logo" height="" width="" loading="lazy" title="" />
                </div>
                <div className="testimo-tit">Company-2</div>
                <div className="ratings">
                  <img src={Ratings} alt="Ratings" height="" width="" loading="lazy" title="" />
                </div>
              </div>
              <p className="testimo-inner-card-para">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the unknown printer took a galley of type and made a type
                specimen book.
              </p>
              <div className="reviwers">
                <div className="reviwers-img">
                  <img src={ReviwersImg} alt="Reviewer" height="" width="" loading="lazy" title=""  />
                </div>
                <div className="reviwers-txt">
                  <h3 className="reviwers-name">John Carter</h3>
                  <p className="reviwers-position">Marketing Lead at Google</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-cards" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="testimo-inner-card">
              <div className="testimo-inner-card-top">
                <div className="testi-logo">
                  <img src={TestimoIconOne} alt="Company Logo" height="" width="" loading="lazy" title="" />
                </div>
                <div className="testimo-tit">Company-2</div>
                <div className="ratings">
                  <img src={Ratings} alt="Ratings" height="" width="" loading="lazy" title="" />
                </div>
              </div>
              <p className="testimo-inner-card-para">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the unknown printer took a galley of type and made a type
                specimen book.
              </p>
              <div className="reviwers">
                <div className="reviwers-img">
                  <img src={ReviwersImg} alt="Reviewer" height="" width="" loading="lazy" title="" />
                </div>
                <div className="reviwers-txt">
                  <h3 className="reviwers-name">John Carter</h3>
                  <p className="reviwers-position">Marketing Lead at Google</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Swiper Navigation Buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Testimonial;
