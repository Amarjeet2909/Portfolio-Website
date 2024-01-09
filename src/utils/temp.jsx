// Achievement.js

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from './Navbar';
import '../components/Styles/achievement.css'; // Import CSS file for styling

import i1 from "../assets/Certificate/i1.png";
import i2 from "../assets/Certificate/i2.png";
import i3 from "../assets/Certificate/i3.png";
import i4 from "../assets/Certificate/i4.png";
import i5 from "../assets/Certificate/i5.png";

const Achievement = () => {

  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            controls.start('visible');
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector('#sq'));
    return () => observer.disconnect();
    observer.observe(document.querySelector('#sp'));
    return () => observer.disconnect();
  }, [controls, hasAnimated]);


const variants = {
  hidden: {
    opacity: 0,
    x: -50, // Initial x position off-screen to the left
  },
  visible: {
    opacity: 1,
    x: 0, // Move to the original position (0 means no movement on x-axis)
    transition: {
      duration: 0.5, // Adjust the duration as needed
      ease: 'easeOut', // Adjust the easing function
    },
  },
};

  // Dummy data for certifications (replace this with your actual data)
  const cert = [
    { id: 1, imageSrc: i1, description: 'Certification Description 1' },
    { id: 2, imageSrc: i2, description: 'Certification Description 2' },
    { id: 3, imageSrc: i3, description: 'Certification Description 1' },
    { id: 4, imageSrc: i4, description: 'Certification Description 2' },
    { id: 5, imageSrc: i5, description: 'Certification Description 1' },
    // Add more certification data as needed
  ];

  return (
    <>
    <Navbar />
    <div className="achievement-section">

    <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>
      <motion.p
        variants={variants}
        initial="hidden"
        animate="visible"
        className="mt-3 ml-0 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These are the different certifications I have received including courses, internships, and competitions.
      </motion.p>
        
      <div className="certifications">
        {cert.map((cert) => (
          <div className="certificate-box" key={cert.id}>
            <img src={cert.imageSrc} alt={`Certificate ${cert.id}`} className="certificate-image" />
            <p className="certificate-description">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="achievement-section" id='sp'>

    <motion.div
        id="sp"
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>
      <motion.p
        variants={variants}
        initial="hidden"
        animate={controls}
        className="mt-3 ml-0 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These are the different certifications I have received including courses, internships, and competitions.
      </motion.p>
  
<div className="certifications">
  {cert.map((cert) => (
    <div className="certificate-box" key={cert.id}>
      <img src={cert.imageSrc} alt={`Certificate ${cert.id}`} className="certificate-image" />
      <p className="certificate-description">{cert.description}</p>
    </div>
  ))}
</div>
</div>

<div className="achievement-section" id='sq'>

<motion.div
    id="sq"
    variants={variants}
    initial="hidden"
    animate={controls}
  >
    <h2 className={styles.sectionHeadText}>Certifications</h2>
  </motion.div>
  <motion.p
    variants={variants}
    initial="hidden"
    animate={controls}
    className="mt-3 ml-0 text-secondary text-[17px] max-w-3xl leading-[30px]"
  >
    These are the different certifications I have received including courses, internships, and competitions.
  </motion.p>

<div className="certifications">
{cert.map((cert) => (
<div className="certificate-box" key={cert.id}>
  <img src={cert.imageSrc} alt={`Certificate ${cert.id}`} className="certificate-image" />
  <p className="certificate-description">{cert.description}</p>
</div>
))}
</div>
</div>

    </>
  );
};

export default Achievement;