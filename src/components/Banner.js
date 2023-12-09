import React from "react";
// images
import Image from "../assets/avatar.svg";
// react icons
import { FaGithub, FaDribbble,  FaLinkedinIn, } from "react-icons/fa";
// motion
import { motion } from "framer-motion";
// Type Animation
import { TypeAnimation } from "react-type-animation";
// Fade In
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center " id="home">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-y-8 lg:items-center " >
          <div className="flex-1 text-center font-secondary lg:text-left ">
          {/* text */}
          <motion.h1
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
          className="text-[55px] font-bold leading-[0.8] lg:text-[110px] lg:leading-none  ">
            AMIR <span>HAMZA</span>
          </motion.h1>
          <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
          className="mb-6 text-[36px] lg:text-[50px] font-secondary 
         font-semibold leading-1 uppercase "
          >
            <span className="text-white mr-2">I am a</span>
            <TypeAnimation
              sequence={[
                "web developer",
                2000,
                "front-end developer",
                2000,
                "digital marketer",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              className="text-accent"
            />
          </motion.div>
          <motion.p 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
          className="mb-8 max-w-lg mx-auto lg:mx-0 " >My name is Amir Hamza. I am a Junior Front-End Developer. I have a lot experience of HTML,CSS, Bootstrap 5, 
          JQuery, JavaScript, React, Next JS, Redux, Firebase
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
            className="flex items-center gap-x-6 max-w-max mx-auto 
            lg:mx-0 mb-12 ">
              <button className="btn btn-lg" to="contact"><a href="#">Contact Me</a></button>
              <a href="#" className="text-gradient btn-link"> My Portfolio</a>
            </motion.div>
            {/* social icons */}
            <motion.div
            variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto la:mx-0">
            <a 
              className="btn p-2"
              href="#">
              <FaGithub/>
            </a>
            <a 
              className="btn p-2"
              href="#">
              <FaLinkedinIn/>
            </a>
            <a 
              className="btn p-2"
              href="#">
              <FaDribbble/>
            </a>
          </motion.div>
          </div>
        
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
        className="lg:flex flex-1
          items-center w-full h-full max-w-[480px] mx-auto
         " >
          {/* image */}
          <img className="w-full h-full" src={Image} alt="" />
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
