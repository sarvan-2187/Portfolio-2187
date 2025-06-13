'use client'
import React from 'react'
import Image from "next/image";
import gallery1 from "@/assets/images/GenAI.jpg";
import gallery2 from "@/assets/images/seo-hubspot.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const galleryItems = [
  {
    image: gallery1,
    title: "GenAI Fundamentals",
    description: "Successfully cleared the Generative AI Fundamentals Certification exam with a score of 100% from DataBricks Academy.",
    href:'https://api.accredible.com/v1/auth/invite?code=19d4a9e1e2986b343bbd&credential_id=b8cc4763-1b59-4012-a045-239bd6ccc5d9&url=https%3A%2F%2Fcredentials.databricks.com%2Fb8cc4763-1b59-4012-a045-239bd6ccc5d9&ident=49b82bb9-a7f5-4c05-a236-53f3cd61f21b/'
  },
  {
    image: gallery2,
    title: "Hubspot Academy SEO",
    description: "Successfully cleared the Search Engine Optimization Certification exam with a score of 50/60 from Hubspot Academy.",
        href:'https://app-na2.hubspot.com/academy/achievements/j9ykrpsp/en/1/nagarampalli-sarvan-kumar/seo',

  },
];

export const Certifications = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className='pt-14 pb-16' id='certifications'>
        <div className='container'>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
                    Certified Wizard
                </p>
            </div>
            <motion.h2
          ref={headingRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-3xl md:text-5xl tracking-wide text-center mt-8"
        >
          My Certifications
        </motion.h2>
        
         <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center text-white/60 md:text-lg mt-4 mx-auto"
        >
          Officially recognized for proficiency in relevant disciplines. 
        </motion.p>

        <div>
                  <div className="mt-8 md:mt-16 lg:mt-18 grid grid-cols-1 md:grid-cols-2 gap-12">
          {galleryItems.map(({ image, title, description, href }, idx) => (
            <div key={idx} className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-xl border border-stone-900 aspect-video">
                <Image
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Text */}
              <div className="mt-6">
                <a href={href} target="_blank" className="text-xl md:text-2xl bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-semibold">
                  {title}
                </a>
                <p className="mt-2 text-gray-400 leading-relaxed text-base">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
    </section>
  )
}

export default Certifications
