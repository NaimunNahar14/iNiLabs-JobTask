import React from 'react';
import Slider from 'react-infinite-logo-slider';
import logo1 from '../assets/Section1Images/Walmart_Index_Only.svg.png';
import logo2 from '../assets/Section1Images/cisco.svg.png';
import logo3 from '../assets/Section1Images/Volvo_Index_Only.svg.png';
import logo4 from '../assets/Section1Images/deloitte.svg.png';
import logo5 from '../assets/Section1Images/okta.svg.png';

const Section1 = () => {
    return (
        <div className="mb-11">
            <h2 className='text-center text-lg font-normal text-[#05003899] 
 mb-8'>Trusted by 45M+ users</h2>
            <Slider
                width="250px"
                duration={200}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
                className="mb-7"
            >
                <Slider.Slide>
                    <img src={logo1} alt="any" className='w-28' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo2} alt="any2" className='w-30' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo3} alt="any3" className='w-12' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo4} alt="any3" className='w-30' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo5} alt="any3" className='w-20' />
                </Slider.Slide>
            </Slider>
        </div>
    );
};

export default Section1;
