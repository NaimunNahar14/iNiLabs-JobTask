import React from 'react';
import pic from '../assets/Section3Images/M3_integrations_all_integrations.png.png';

const Section3 = () => {
    return (
        // This section is about Connect your tools, close your tabs.
        <div className="hero min-h-screen  bg-white">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <img src={pic} className='ml-11' />
                <div>
                    <h1 className="text-5xl font-bold text-[#050038]">Connect <br /> your tools, <br /> close your tabs</h1>
                    <p className="py-6">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                    <a href="#" className="underline text-blue-700 flex items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </a>


                </div>
            </div>
        </div>
    );
};

export default Section3;