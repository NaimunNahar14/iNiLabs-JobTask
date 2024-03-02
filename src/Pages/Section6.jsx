import React from 'react';
import pic from '../assets/Section6Images/hybridwork.png.png';

const Section6 = () => {
    return (
        <div className="hero min-h-screen  bg-white">
        <div className="hero-content flex-col lg:flex-row gap-12 ml-36">
            <div>
                <h1 className="text-5xl font-bold text-[#050038]">Work together, <br /> wherever you work</h1>
                <p className="py-6">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <a href="#" className="underline text-blue-700 flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </a>


            </div>
            <img src={pic} className='ml-11' />
            
        </div>
    </div>
    );
};

export default Section6;