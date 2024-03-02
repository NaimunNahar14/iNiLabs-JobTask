import React from 'react';
import images from '../assets/Section2Images/Group (2).png';

const Section2 = () => {
    return (
        // This section is about Collaborate without constraints.
        <div className="relative">
            <div className='mb-5 mt-6 flex justify-center flex-col items-center'>
                <img src={images} alt="" style={{
                    position: 'absolute',
                    top: '-65px',
                    left: '700px'
                }} />
                <p className="text-center font-inter text-4xl font-bold leading-14 text-[#050038]">
                    Collaborate without <br /> constraints
                </p>
                <div className="flex justify-center space-x-5">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-[#050038]">Free forever</h2>
                            <p>Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-[#050038]">Easy integrations</h2>
                            <p>Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-[#050038]">Security first</h2>
                            <p>We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center.</p>
                        </div>
                    </div>
                </div>
                <button className="btn mt-7" style={{
                    width: '175.77px',
                    height: '50px',
                    paddingLeft: '22px',
                    paddingRight: '22.77px',
                    borderRadius: '24px',
                    border: '1px solid rgba(66, 98, 255, 1)',
                    backgroundColor: 'rgba(66, 98, 255, 1)',
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    Sign Up Free<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Section2;
