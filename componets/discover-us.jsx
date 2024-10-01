// import React from 'react'
import DiscoverPart1Img1 from "../src/assets/discover-us/discover.png"

const DiscoverUs = () => {
  return (
    <>
    <section className="discover-us-sec">
        <div className="discover-us-container">
            <div className="discover-part-1">
                <h3 className="discover-us-tit">
                DISCOVER US
                </h3>
                <p>Flick is here to help you ; </p>
                <p> Our experts are available to answer any questions 
                    you might have. We've got the answers.</p>

                    <span className="discover-emil">Email US</span>
                    <span className="discover-call-us">Call US</span>
            </div>
            <div className="discover-part-2">
                 <div className="discover-more-img-p1">
                    <div className="discover-part1-img-1">
                        <img src={DiscoverPart1Img1} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <div className="discover-part1-img-2">
                        <img src={DiscoverPart1Img1} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                 </div>
                 <div className="discover-more-img-p2">
                 <div className="discover-part2-img-1">
                        <img src={DiscoverPart1Img1} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <div className="discover-part2-img-2">
                        <img src={DiscoverPart1Img1} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default DiscoverUs