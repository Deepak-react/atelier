import caseStudyVideo from "../src/assets/case-study/1AtelierMkupVideo.mp4";


const CaseStudy = () => {
  return (
    <>

    <section className="case-study-sec">
        <div className="case-study-container">
        <div className="case-study-video">
        <video src={caseStudyVideo} autoPlay loop controls></video>
        </div>

        <div className="case-study-cont">
            <h3 className="tit">
            Atelier Creation - Transforming Local Businesses with Digital Marketing Company
            </h3>

            <p>
            Atelier Creation, a leading digital marketing agency, revolutionized the online presence of a local business in Coimbatore. Through a targeted SEO strategy, optimized Google My Business profile, and engaging social media marketing campaigns, the business saw a remarkable 35% increase in foot traffic and a 50% boost in online orders within just three months. Our data-driven approach to local search optimization helped the business secure top rankings in local map packs, driving greater visibility and customer engagement.
            </p>
        </div>

        
        </div>
        <div className="case-study-numbers">
            <div><span className="c-s-num">325+</span> <span>Clients Worldwide</span></div>
            <div><span className="c-s-num">975+</span> <span>Projects Completed</span></div>
            <div><span className="c-s-num">70+ </span><span>Team Members</span></div>
            <div><span className="c-s-num">85m+</span> <span>Revenue Generated</span></div>
        </div>
    </section>
    </>
  )
}

export default CaseStudy