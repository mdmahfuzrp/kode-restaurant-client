import React, { useContext } from 'react';
import './Chef.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { FaUtensils, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { ChefContext } from '../../ChefProviders/ChefProvider';
import { motion } from 'framer-motion';

const Chef = () => {
    const {chefs} = useContext(ChefContext);

    return (
        <div className="chef-parent flex flex-col lg:flex-row items-center justify-center">
            <div className='chef-left'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {
                        chefs.map(chef => <SwiperSlide
                            key={chef.id}
                        >
                            <div className="inner-card">
                                <div className="chef-img">
                                    <img src={chef.chef_picture} alt="" />
                                </div>
                                <div className="chef-details p-6 text-center shadow-inner">
                                    <h1 className='font-semibold text-gray-600 mb-1'>{chef.chef_name}</h1>
                                    <p className='font-normal experience text-slate-500 mb-3'><span className='text-orange-400'>{chef.chef_name}</span> Have <span className='text-orange-400 border-b border-slate-400 border-dashed font-medium'>{chef.years_of_experience}</span> Years of Experience In <span>Bangladesh Country</span></p>
                                    <div className="other-info flex justify-evenly">
                                        <p className='font-normal text-orange-400 flex items-center'><span className='text-gray-400 me-1'><FaUtensils size={15} /></span>{chef.recipe.total_recipe} <span className='text-gray-500 ms-1'> Recipe</span></p>
                                        <p className='font-normal text-orange-400 flex items-center'><span className='text-gray-400 me-1'><FaHeart size={16} /></span>{chef.recipe.likes} <span className='text-gray-500 ms-1'> Likes</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-center'>
                                <Link to={`/chef-details/${chef.id}`}
                                    key={chef.id}
                                    chef={chef}
                                className='btn bg-orange-400 shadow-md border-0 px-7 rounded-none'>View Details</Link>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

            <motion.div initial={{ x: "10rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 5,
                            type: "spring"
                        }} className='shadow-md p-7 lg:w-5/12 rounded-lg'>
                <div className="type-animation">
                    <h1 className='text-4xl text-center mx-auto font-semibold mb-5 border-b-4  border-orange-400 w-fit'><span className='text-orange-400'>Kode</span> Rastaurand</h1>
                    <div className='-mt-2 text-xl text-orange-400 font-medium'><span className=' text-gray-600 font-medium'>We Have In Our Country</span>{' '}
                    <TypeAnimation className=''
                        sequence={[
                            'Top Chefs',
                            1000,
                            'Best Food',
                            1000,
                            'High Quality',
                            1000,
                            'Great Service',
                            1000,
                        ]}
                        repeat={Infinity}
                    /></div>
                    <div className='text-center md:text-justify text-lg mt-5'>
                        <p className='mb-3 text-gray-600'>Enjoy your delicious meals with our authentic fresh ingredients. Sourced from your local international food market</p>
                        <p className='mb-3 text-gray-600'>We have also partnered with <span className='text-orange-400'>DoorDash</span>, <span className='text-orange-400'>UberEats</span>, and <span className='text-orange-400'>Basefont</span>, for delivery straight to your door.</p>
                        <p className='mb-3 text-gray-600'>If you love <span className='text-orange-400'>Asian</span> <span className='text-orange-400'>Tasty</span>  <span className='text-orange-400'>Spicy</span>  foods. We will give you a taste of authentic you're not likely to find outside of <span className='text-orange-400'>Bangladesh</span>.</p>
                        <div className='mt-5 w-full flex md:justify-start justify-center'>
                                <Link className='btn bg-orange-400 shadow-md border-0 px-10 rounded-none'>Explore More</Link>
                            </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Chef;