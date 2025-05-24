'use client';
import ArrowIcon from '@/assets/icons/arrow-up-right.svg';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section id="Contact" className=''>
    <motion.div
      className='py-16 z-0'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-xl text-center'>
          <h2 className='font-serif text-2xl font-bold'>
            Let's Create something amazing together
          </h2>
          <p className='text-sm md:text-base mt-4'>
            Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
          </p>
          <a
          href='https://sarvan-kumar-contact-me.vercel.app'
          target='_blank'
          >
          <button className='text-white bg-gray-900 inline-flex z-330 items-center px-6 h-12 rounded-xl mt-8 hover:bg-gray-700 transition duration-300'>
            <span className='font-semibold'>Contact Me </span>
            <ArrowIcon className='size-4 ml-2' />
          </button>
          </a>
        </div>
      </div>
    </motion.div>
    </section>
  );
};
