import React from 'react';
import Navbar from './Navbar';
import '../components/Styles/achievement.css';
import AnimatedSection from './AnimatedSection';

import i1 from "../assets/Certificate/i1.png";
import i2 from "../assets/Certificate/i2.png";
import i3 from "../assets/Certificate/i3.png";
import i4 from "../assets/Certificate/i4.png";
import i5 from "../assets/Certificate/i5.png";
import i6 from "../assets/Certificate/i6.png";
import i7 from "../assets/Certificate/i7.png";
import i8 from "../assets/Certificate/i8.png";
import i9 from "../assets/Certificate/i9.png";
import i10 from "../assets/Certificate/i10.png";
import i11 from "../assets/Certificate/i11.png";
import i12 from "../assets/Certificate/i12.png";
import i13 from "../assets/Certificate/i13.png";
import i14 from "../assets/Certificate/i14.jpg";

const Achievement = () => {

  const courses = [
    { id: 2, imageSrc: i2, description: 'Certification Description 2' },
    { id: 3, imageSrc: i3, description: 'Certification Description 1' },
    { id: 4, imageSrc: i4, description: 'Certification Description 2' },
    { id: 5, imageSrc: i5, description: 'Certification Description 1' },
  ];

  return (
    <>
    <Navbar />

    <div className="achievement-section">

       <AnimatedSection
        sectionId="certifications-section"
        heading="Courses"
        paragraph="These are few online courses that I have completed on various platforms like Udemy and Linkedin learning"
        />
        
      <div className="certifications">
        {courses.map((courses) => (
          <div className="certificate-box" key={courses.id}>
            <img src={courses.imageSrc} alt={`Certificate ${courses.id}`} className="certificate-image" />
            <p className="certificate-description">{courses.description}</p>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default Achievement;