import React from 'react';
// count up
import CountUp from 'react-countup';
// intersection
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// fade in
import {fadeIn} from '../variants'


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return(
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row g '>
        {/* img */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className='flex-1 bg-about bg-contain h-[640px] bg-no-repeat
         mix-blend-lighten bg-top  ' ></motion.div>
        {/* text */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className=' flex-1 '>
          <h2 className=' h2 text-accent ' > About Me.</h2>
          <h3 className='h3 mb-4'> I'am a freelance Front-End Developer with over 3 years of 
            experience </h3>
            <p className='mb-6'>My name is Amir Hamza. I am a Junior Front-End Developer. I have a lot experienc of HTML,CSS, Bootstrap 5, JQuery, JavaScript, React, Next JS, Redux, Firebase</p>
          {/* stats */}
          <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 ' >
                {inView ? <CountUp start={0}  end={10} duration={2} /> : null}
              </div>
              <div className=' font-primary text-sm tracking-[2px]  ' >
                years of <br />
                 experience 
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 ' >
                {inView ? <CountUp start={0}  end={15} duration={3} /> : null}
                k+
              </div>
              <div className=' font-primary text-sm tracking-[2px]  ' >
                Projects <br />
                 Completed 
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 ' >
                {inView ? <CountUp start={0}  end={12} duration={2} /> : null}
                k+
              </div>
              <div className=' font-primary text-sm tracking-[2px]  ' >
               Satisfied <br />
                 Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center' >
        <button className='btn btn-lg' >Contact Me</button>
        <a href="amirhamzadev.com" className='text-gradient btn-link'>
          My Portfolio
        </a>
        </div>
        </motion.div>
      </div>
    </div>
  </section> 
  ) 
};

export default About;
