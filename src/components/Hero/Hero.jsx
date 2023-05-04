import React from 'react';
import img from '../../../public/hero-image.png'
import './Hero.css';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaCocktail } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="hero-wrapper w-11/12 mx-auto z-10">
            <div className="innerWidth hero-container flexCenter w-full">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}
                        >
                            Discover <br /> Most Suitable <br /> property
                        </motion.h1>

                    </div>
                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className='hero-bottom-info'>
                        <div className=" rounded flex items-center bg-gray-700 ps-2">
                            <FaCocktail size={51} className='pe-2 text-white' />
                            <input type="text" id='search-input' className='w-full border text-xl p-3 outline-none' placeholder='Just type what you want ?' />
                            <button className="btn ghost rounded-none">Search</button>
                        </div>
                        <div className="hero-botton-info-style rounded-md items-center justify-center border border-1 border-gray-200 mt-2 stats">
                            <div className="flexColCenter stat bg-gray-700 text-white">
                                <span>
                                    <CountUp start={198} end={217} duration={5} />
                                    <span>+</span>
                                </span>
                                <span className='text-gray-200'>
                                    Premium Products
                                </span>
                            </div>
                            <div className="flexColCenter stat hover:bg-gray-700 cursor-pointer hover:text-white">
                                <span>
                                    <CountUp start={6724} end={8502} duration={5} />
                                    <span>+</span>
                                </span>
                                <span className='hover:text-gray-200'>
                                    Happy Customers
                                </span>
                            </div>
                            <div className="flexColCenter stat cursor-pointer hover:bg-gray-700 hover:text-white">
                                <span>
                                    <CountUp start={28} end={57} duration={5} />
                                    <span>+</span>
                                </span>
                                <span className='hover:text-gray-200'>
                                    Awards
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-right flexCenter">
                    <motion.div initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                        className="image-container shadow-xl">
                        <img className='shadow-xl' src={img} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;