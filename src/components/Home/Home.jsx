import React from 'react';
import Hero from '../Hero/Hero';
import './Home.css'
import Chef from '../Chef/Chef';

const Home = () => {
    return (
        <div id='home-container' className='w-12/12 py-5'>
            <Hero></Hero>
            <div className="chef-container">
                <Chef></Chef>
            </div>
        </div>
    );
};

export default Home;