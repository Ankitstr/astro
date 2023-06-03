import React from "react";
import Style from "../Styles/testimonial.module.css";
import VideoCarousel from "./videoCarousel";
import Astrologer from "./Astrologer";
import sun from "../Assets/sun.png"
import start from "../Assets/star.png";
import banner from '../Assets/banner.png'
import st from '../Assets/play.png'
const Testimonial = () => {
  return (
    <div className={Style.outSide}>
      <div className={Style.sun}>
        <img
          src={sun}
          alt="sun"
        />
      </div>
      <div className={Style.heading}>
        <img
         src ={start}
              alt="star"
        />
        <span>User Testimonial</span>
        <img
         src={start} 
         alt="star"
        />
      </div>
      <VideoCarousel />
      <img
        src={banner}
        alt="banner"
        className="w-full py-3 px-0 rounded-2xl p-3"
      />
       <div className={Style.pageIndicator}>
        <div className={Style.div1}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={Style.outSide}>
      <div className={Style.heading}>
        <img
        src={st}
          alt="star"
        />
        <span>Premium Astrologers</span>
        <img
        src={st}
          alt="star"
        />
      </div>
      
      </div>
      <Astrologer/>
    </div>
  );
};

export default Testimonial;
