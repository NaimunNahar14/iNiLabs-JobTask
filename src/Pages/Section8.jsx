import React from 'react';
import images1 from '../assets/Section8Images/div (7).png';
import images2 from '../assets/Section8Images/div (8).png';
import images3 from '../assets/Section8Images/div (9).png';
import bannerImg1 from '../assets/Section8Images/vmware.svg.png';
import bannerImg2 from '../assets/Section8Images/div (10).png';
import bannerImg3 from '../assets/Section8Images/div (11).png';

const Section8 = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div className='text-center font-inter text-4xl font-bold leading-14 text-[#050038]'>
                    <h2>Loved by the world's best teams</h2>
                    <button className="btn" style={{
                        width: '282.69px',
                        height: '48px',
                        paddingLeft: '22px',
                        paddingRight: '22.77px',
                        borderRadius: '24px',
                        border: '1px solid rgba(66, 98, 255, 1)',
                        color: '#4262FF',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '10px' 
                    }}>
                        See all customer stories →
                        
                    </button>
                </div>
            </div>
            <div className="flex justify-center space-x-5">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body flex items-center">
                        <div className='mt-4'>
                            <img src={bannerImg1} alt="" />
                            <p className='mt-4'>“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                        </div>
                        <figure className='mt-20'>
                            <img
                                src={images1}
                                alt="Shoes"
                                style={{ width: '48px', height: '48px', borderRadius: '24px' }}
                                className="mr-24"
                            />
                            <span>Roxanne Mustafa
                                <br />Design Team Lead at VMware</span>
                        </figure>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body flex items-center">
                        <div className='mt-4'>
                            <img src={bannerImg2} alt="" />
                            <p className='mt-4'>“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                        </div>
                        <figure className='mt-20'>
                            <img
                                src={images2}
                                alt="Shoes"
                                style={{ width: '48px', height: '48px', borderRadius: '24px' }}
                                className="mr-24"
                            />
                            <span>Jane Ashley <br />
                                Head of Design at DocuSign
                            </span>
                        </figure>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body flex items-center">
                        <div className='mt-4'>
                            <img src={bannerImg3} alt="" />
                            <p className='mt-4'>“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                        </div>
                        <figure className='mt-20'>
                            <img
                                src={images3}
                                alt="Shoes"
                                style={{ width: '48px', height: '48px', borderRadius: '24px' }}
                                className="mr-24"
                            />
                            <span>Laura Baird <br />Associate Design Director at frog</span>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section8;
