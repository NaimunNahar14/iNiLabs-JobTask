import React from 'react';
import image1 from '../assets/BannerImages/div (2).png';
import image2 from '../assets/BannerImages/headerimage-without-text.png.png';

const Banner = () => {
    return (
        // This section is about taking ideas from better to best. 
        <div className="hero min-h-screen bg-white"> 
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image2} alt="" />
                <div className="card shrink-0 w-full max-w-sm bg-base-100">
                    <img src={image1}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;
