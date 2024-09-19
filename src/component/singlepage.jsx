import React from 'react'

import { Link } from 'react-router-dom';
import './single.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import {useInView} from "react-intersection-observer";

const Singlepage = () => {
    const imageUrls = [
        "https://jevelin.shufflehound.com/portfolio-freelance/wp-content/uploads/sites/35/2019/04/vitor-pinto-3bAJYaK37yE-unsplash.jpg",
        "https://jevelin.shufflehound.com/portfolio-freelance/wp-content/uploads/sites/35/2019/04/vitor-pinto-fYUYSz81MnE-unsplash.jpg",
        "https://jevelin.shufflehound.com/portfolio-freelance/wp-content/uploads/sites/35/2019/04/rowan-chestnut-m663zRzRe40-unsplash.jpg",
        "https://jevelin.shufflehound.com/portfolio-freelance/wp-content/uploads/sites/35/2019/04/vincent-delegge-rfyg6MiiOHU-unsplash.jpg",
        "https://jevelin.shufflehound.com/portfolio-freelance/wp-content/uploads/sites/35/2019/04/alex-iby-Pd585pphU-4-unsplash.jpg",
        "https://jevelin.shufflehound.com/portfolio-freelance/wp-content/uploads/sites/35/2019/04/albert-dera-ILip77SbmOE-unsplash.jpg",
        "https://jevelin.shufflehound.com/portfolio-freelance/wp-content/uploads/sites/35/2019/04/camylla-battani-son4VHt4Ld0-unsplash.jpg"
    ];
  return (
    <>
        <div className='header'>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0rem 5rem",padding:"1rem",position:"relative"}}>
        <img src="https://jevelin.shufflehound.com/portfolio-freelance/wp-content/uploads/sites/35/2019/03/Jevelin_logo_light.png" className="sh-header-builder-logo-standard" alt="Logo"/>

            <nav>
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className='dropdown'>
                      <Link to="/">Portfolio</Link>
                      <ul className='submenu'>
                        <li>
                            <Link to="/">Family</Link>
                        </li>
                        <li>
                            <Link to="/">Wedding</Link>
                        </li>
                        <li>
                            <Link to="/">Architecture</Link>
                        </li>
                        <li>
                            <Link to="/">Events</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='list'>
                   <li> <FaFacebook /></li>
                    <li><FaTwitter/></li>
                    <li><IoIosSearch/></li>
                    </li>
                    <button >Contact me</button>
                    
                </ul>
               
            </nav>
           
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <h2 style={{color:"white",paddingTop:"9rem",fontFamily:"Montserrat"}}>THE POWER OF MOMENT</h2>
           

            <h1 style={{color:"white",paddingTop:"3rem", paddingBottom:"25%",fontFamily:"Montserrat",fontWeight:"700",fontSize:"5vw",textAlign:"center",margin:" 0rem 3rem"}}>Freelance Photographer At Your Service</h1>
            </div>
        
        </div>

        {/* about */}
        <div className='about-container'>
            <div className='div' >
            <img className="sh-image-url" src="https://jevelin.shufflehound.com/portfolio-freelance/wp-content/uploads/sites/35/2019/04/black-and-white-fun-good-looking-91227.jpg" alt="black-and-white-fun-good-looking-91227"/>
            </div>
            <div className="div1">

            <h1 style={{fontFamily:"Montserrat",fontSize:"2.7rem", marginBottom:"1.5rem",fontWeight:"700"}} >
            Hi there, my name is Aaron! </h1>

            <h2 style={{color:"#444",marginBottom:"2.5rem",fontSize:"1.2rem",fontWeight:"600",width:"30rem",lineHeight:"1.8"}}>
             Ut et nisi ac dui pulvinar consequat. Curabitur aliquam, felis ut ultricies porta, ante dolor iaculis ante, ante dolor iaculis anteet </h2>
             
          <h4 style={{color:"black",fontWeight:"600"}}>Fingilla ligula <span>tortor eget nisi. Curabitur aliquam, felis ut ultricies porta, ante dolor iaculis ante, ante dolor iaculis anteet fringilla ligula tortor eget nisi. </span></h4>

          <div style={{display:"flex", gap:"5rem",alignItems:"center",marginTop:"3.5rem",fontSize:"1.2rem",fontFamily:"Montserrat"}}>
            <div className='gap'>
                <h1 className='head'>20+</h1>
                <p className='para'>Years in field</p>
            </div>
            <div>
                <h1 className='head'>20k</h1>
                <p className='para'>Photos taken</p>
            </div>
          </div>
            </div>
        </div>

         {/* for display images */ }
         <div>
             <h1 style={{textAlign:"center",marginTop:"5rem",fontSize:"2.7rem",fontWeight:"bolder"}}>Check out my latest work</h1>
         </div>
         <div className='grid'>
            {imageUrls.map((url, index) => {
                const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.1,
                });

                return (
                    <div key={index} id={`item${index + 1}`} className='grid_item'>
                        <img
                            className={`  sh-portfolio-img ${inView ? 'fade-in' : ''} img`}
                            src={url}
                            alt={`Image ${index + 1}`}
                            ref={ref}
                        />
                    </div>
                );
            })}
        </div>
    
         <div style={{marginTop:"6rem",textAlign:"center",marginBottom:"14rem"}}>
          <button style={{padding:"1.3rem 3rem",borderRadius:"5px",border:"none",fontSize:"1.2rem"}} >View all</button>
         </div>
         <div style={{backgroundColor:"black",display:"flex",justifyContent:"space-between",paddingTop:"7rem",paddingBottom:"10rem"}}>
         <h2 style={{marginLeft:"1rem",color:"white",fontSize:"2.5rem",width:"50rem",fontWeight:"bolder",lineHeight:"1.6"}}>
         Let`s get in touch and create beautiful things together </h2>
         <button  style={{backgroundColor:"black",marginRight:"3rem",color:"white",border:"1px solid white",fontSize:"1.2rem",width:"180px",height:"4rem",padding:"1rem"}}>
            Hire me
         </button>
         </div>

       
    </>
  )
}

export default Singlepage