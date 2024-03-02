import React from 'react';
import pic from '../assets/Section5Images/div (3).png';

const Section5 = () => {
    const buttonData = [
        { name: 'Brainstorming', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Diagramming', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Meetings & Workshops', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Scrum Events', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Mapping', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Research & Design', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Strategic Planning', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
    ];

    return (
        <div>
            <h2 className='ml-36 font-inter text-4xl font-bold leading-14 text-[#050038] mb-8'>Built for the way you work</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {buttonData.map((button, index) => (
                    <button key={index} className="btn" style={button.styles}>
                        {button.name}
                    </button>
                ))}
            </div>
            <div className="hero min-h-screen  bg-white">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <div className='ml-36'>
                        <h1 className="text-lg font-bold text-[#050038]">Brainstorming</h1>
                        <p className="py-6">Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
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
        </div>
    );
};

export default Section5;
