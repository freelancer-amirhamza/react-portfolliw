import React from "react";
// images
import Image from "../assets/avatar.svg";
// react icons
import { FaGithub, FaYoutube, FaDribbble, FaLinkedin, FaLinkedinIn, FaDribbbleSquare } from "react-icons/fa";
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
        <div className="flex flex-col lg:flex-row gap-y-8 lg:items-center " >
          <div className="flex-1 text-center font-secondary lg:text-left ">
          {/* text */}
          <motion.h1
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
          className="text-[55px] font-bold leading-[0.8] lg:text-[110px]  ">
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
          className="mb-8 max-w-lg mx-auto lg:mx-0 " >Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Incidunt error molestiae qui culpa blanditiis, inventore aperiam enim suscipit omnis repellendus nulla, delectus ipsum labore id alias eos
             earum sapiente rem.
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
            className="flex items-center gap-x-6 max-w-max mx-auto 
            lg:mx-0 mb-12 ">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link"> My Portfolio</a>
            </motion.div>
            {/* social icons */}
            <motion.div
            variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto la:mx-0">
            <a href="#">
              <FaGithub/>
            </a>
            <a href="#">
              <FaLinkedin/>
            </a>
            <a href="#">
              <FaDribbble/>
            </a>
          </motion.div>
          </div>
        
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px]
         " >
          {/* image */}
          <img src={Image} alt="" />
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
