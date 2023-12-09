import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section  className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn( 'right', 0.3 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl text-accent font-medium mb-2
              uppercase tracking-wide '>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] uppercase 
              leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 border rounded-xl flex flex-col gap-y-6
           p-6 pb-24 items-start '>
            <input 
            className='border-b outline-none w-full bg-transparent py-3
             transition-all placeholder:text-white focus:border-accent  '
            placeholder='Your Name'
            type="text" />
            <input 
            className='border-b outline-none w-full bg-transparent py-3
             transition-all placeholder:text-white focus:border-accent  '
            placeholder='Your Email'
            type="email" />

            <textarea className='border-b outline-none w-full bg-transparent
              py-12 transition-all placeholder:text-white focus:border-accent 
              resize-none mb-12  '
             placeholder='Your Massage'
             ></textarea>
             <button type='submit' className=' btn btn-lg '>Send Your Massage </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
