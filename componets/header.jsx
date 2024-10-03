import atelier from "../src/assets/home/atelier.png"
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header(){
   useEffect(() => {
      const nav = document.getElementById('nav');
      let top = window.scrollY;
      window.addEventListener("scroll", () => {
      
          if(top < window.scrollY){
            nav.classList.add("hide-nav");
          }else{
            nav.classList.remove("hide-nav");
          }
    
        top = window.scrollY;
            
        })
    }, []);
   return (
    <>
    <section id="nav"  className="header-sec">
      <div className="container-fluid">
         <div className="row">
            <header className="header">
               <div className="main-logo">
               <Link to="/"><img src={atelier} alt="img" width="216" height="74" loading="lazy" title="" /></Link>
               </div>

               <ul className="nav-bar">
                  <li className="active-nav"><Link to="/">Home</Link></li>
                  <li><a href="/#about-us">About</a></li>
                  <li> <a href="/#services">Services</a></li>
                  <li className="nav-pages"><a href="/#services">Case study</a></li>
                  <li> <a href="/#freelancers-hub">Careers</a></li>
                  <li><a href="/#blogs">Blogs</a></li>
               </ul>

               {/* <a className="hub-btn" href="#">
               freelancer Hub
               </a> */}
            </header>
         </div>
      </div>
    </section>

    
    </>
   )
}

export default Header