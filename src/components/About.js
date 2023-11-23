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
    About
  </section> 
  ) 
};

export default About;
