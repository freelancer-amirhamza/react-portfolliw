import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';

// motion 
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Front-End Developer',
    description:
      'Lorem, ipsum dolor sit dolorum magnam deleniti blanditiis alias! Nisi autem quo ratione accusamus.',
    link: 'Learn more',
  },
  {
    name: 'UI/UX Designer',
    description:
      'Lorem, ipsum dolor sit dolorum magnam deleniti blanditiis alias! Nisi autem quo ratione accusamus.',
    link: 'Learn more',
  },
  {
    name: 'Web Developer',
    description:
      'Lorem, ipsum dolor sit dolorum magnam deleniti blanditiis alias! Nisi autem quo ratione accusamus. ',
    link: 'Learn more',
  },
  {
    name: 'Digital Marketer',
    description:
      'Lorem, ipsum dolor sit dolorum magnam deleniti blanditiis alias! Nisi autem quo ratione accusamus. ',
    link: 'Learn more',
  },
];

const Services = () => {

 return (
    <div className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}}
          className=' flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
            mix-blend-lighten mb-12 lg:mb-0 '>
            <h2 className="h2 text-accent mb-6"> What I do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a freelancer Front-End Developer with over 3 years of
              experiences.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.4}}
          className='flex-1'>
            {/* service list */}
            <div >
              {services.map((service, index) => {
                const {name, description, link } = service;
                return (
                  <div
                  className='border-b border-white/20 h-[146px] mb-[38px] flex '
                  key={index}>
                    <div className='max-w-[475px] '>
                      <h4 className='font-primary tracking-wider text-[20px ]
                      font-semibold mb-6' > {name} </h4>
                      <p className='font-secondary leading-tight'> {description} </p>
                    </div>
                    <div className='flex-1 flex flex-col items-end ' >
                      <a 
                      href='# '
                      className='btn w-9 h-9 mb-[42px] justify-center items-center flex '
                      >
                        <BsArrowUpRight/>
                      </a>
                      <a 
                      href="# "
                      className="text-gradient text-sm"
                      > {link} </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
