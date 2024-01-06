import React, { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import imag1 from "../assets/Gallery/i1.jpeg";
import imag2 from "../assets/Gallery/i2.jpg";
import imag3 from "../assets/Gallery/i3.jpg";
import imag4 from "../assets/Gallery/i4.jpg";
import imag5 from "../assets/Gallery/i5.jpeg";
import imag6 from "../assets/Gallery/i6.jpeg";
import imag7 from "../assets/Gallery/i7.jpg";
import imag8 from "../assets/Gallery/i8.jpg";
import imag9 from "../assets/Gallery/i9.jpeg";
import imag10 from "../assets/Gallery/i10.jpg";
import imag11 from "../assets/Gallery/i11.jpg";
import imag12 from "../assets/Gallery/i12.jpg";
import imag13 from "../assets/Gallery/i13.jpg";
import imag14 from "../assets/Gallery/i14.jpg";
import imag15 from "../assets/Gallery/i15.jpeg";
import imag16 from "../assets/Gallery/i16.jpg";
import imag17 from "../assets/Gallery/i17.jpeg";
import imag18 from "../assets/Gallery/i18.jpeg";
import imag19 from "../assets/Gallery/i19.jpeg";
import imag20 from "../assets/Gallery/i20.jpeg";
import imag21 from "../assets/Gallery/i21.jpg";
import imag22 from "../assets/Gallery/i22.jpg";
import imag23 from "../assets/Gallery/i23.jpg";
import imag24 from "../assets/Gallery/i24.jpg";
import imag25 from "../assets/Gallery/i25.jpg";
import imag26 from "../assets/Gallery/i26.jpg";

import "../components/Styles/gallery.css";
import Navbar from "./Navbar";

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: imag1,
        },
        {
            id: 2,
            imgSrc: imag2,
        },
        {
            id: 3,
            imgSrc: imag3,
        },
        {
            id: 4,
            imgSrc: imag4,
        },
        {
            id: 5,
            imgSrc: imag5,
        },
        {
            id: 6,
            imgSrc: imag6,
        },
        {
            id: 7,
            imgSrc: imag7,
        },
        {
            id: 8,
            imgSrc: imag8,
        },
        {
            id: 9,
            imgSrc: imag9,
        },
        {
            id: 10,
            imgSrc: imag10,
        },
        {
            id: 11,
            imgSrc: imag11,
        },
        {
            id: 12,
            imgSrc: imag12,
        },
        {
            id: 13,
            imgSrc: imag13,
        },
        {
            id: 14,
            imgSrc: imag14,
        },
        {
            id: 15,
            imgSrc: imag15,
        },
        {
            id: 16,
            imgSrc: imag16,
        },
        {
            id: 17,
            imgSrc: imag17,
        },
        {
            id: 18,
            imgSrc: imag18,
        },
        {
            id: 19,
            imgSrc: imag19,
        },
        {
            id: 20,
            imgSrc: imag20,
        },
        {
            id: 21,
            imgSrc: imag21,
        },
        {
            id: 22,
            imgSrc: imag22,
        },
        {
            id: 23,
            imgSrc: imag23,
        },
        {
            id: 24,
            imgSrc: imag24,
        },
        {
            id: 25,
            imgSrc: imag25,
        },
        {
            id: 26,
            imgSrc: imag26,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempImgIndex, setTempImgIndex] = useState(0);

    const openModal = (index) => {
        setTempImgIndex(index);
        setModel(true);
    };

    const closeModal = () => {
        setModel(false);
    };

    const nextImg = () => {
        const nextIndex = (tempImgIndex + 1) % data.length;
        setTempImgIndex(nextIndex);
    };

    const prevImg = () => {
        const prevIndex = (tempImgIndex - 1 + data.length) % data.length;
        setTempImgIndex(prevIndex);
    };

    return (
        <>
            {/* Assume Navbar component is correctly implemented */}
            <Navbar />
            <div className={model ? 'model open' : 'model'}>
                <img src={data[tempImgIndex]?.imgSrc} alt="enlarged" />
                {/* CloseIcon component to close the modal */}
                <CloseIcon onClick={closeModal} />
                {/* Navigation for previous and next images */}
                <div className="nav-buttons">
                        <button className="prev-btn" onClick={prevImg}>Prev</button>
                        <button className="next-btn" onClick={nextImg}>Next</button>
                </div>
            </div>
            <div className="gallery">
                {data.map((item, index) => (
                    <div className="pics" key={index} onClick={() => openModal(index)}>
                        <img src={item.imgSrc} style={{ width: '100%' }} alt={`img-${item.id}`} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;