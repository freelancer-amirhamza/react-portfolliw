import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_uu46xej', 'template_i7unnhr', form.current, 'aRfaOYmx8PfQjgxEW')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);
      });
      e.target.reset()
  }
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
          ref={form}
          onSubmit={sendEmail}
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
            type="text"
            name='name'
             />
            <input 
            className='border-b outline-none w-full bg-transparent py-3
             transition-all placeholder:text-white focus:border-accent  '
            placeholder='Your Email'
            name='email'
            type="email" />

            <textarea className='border-b outline-none w-full bg-transparent
              py-12 transition-all placeholder:text-white focus:border-accent 
              resize-none mb-12  '
              placeholder='Your Massage'
              name='message'
             ></textarea>
             <button type='submit' className=' btn btn-lg '>Send Your Massage </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
