import React from 'react';
import pic from '../assets/Section7Images/div (5).png';
import pic1 from '../assets/Section7Images/div (6).png';

const Section7 = () => {
    //This section is about Built for all kinds of teams.
    const buttonData = [
        { name: 'UX & Design', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px', } },
        { name: 'Marketing', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Product Management', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Engineering', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Consultants', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Agile Coaches', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
        { name: 'Sales', styles: { width: '137.52px', height: '48px', padding: '13px 32.52px 15px 18px', borderRadius: '24px' } },
    ];
    const listItems = [
        "Build low-fi wireframes",
        "Involve stakeholders in the design process",
        "Run engaging design workshops"
    ];
    return (
        <div>
            <h2 className='ml-36 font-inter text-4xl font-bold leading-14 text-[#050038] mb-4'>Built for all kinds of teams</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {buttonData.map((button, index) => (
                    <button key={index} className="btn" style={button.styles}>
                        {button.name}
                    </button>
                ))}
            </div>
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className='ml-36'>
                    <ul className='mb-3'>
                        {listItems.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="underline text-blue-700 flex items-center mb-11">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                    <img src={pic1} />

                </div>
                <img src={pic} className='ml-11' />
            </div>
        </div>

    );
};

export default Section7;