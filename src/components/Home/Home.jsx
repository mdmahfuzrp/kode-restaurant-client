import React from 'react';
import Hero from '../Hero/Hero';
import './Home.css'
import Chef from '../Chef/Chef';
import Services from '../Services/Services';
import Posts from '../Posts/Posts';
import CheckLazyLoad from '../CheckLazyLoad/CheckLazyLoad';

const Home = () => {
    return (
        <div id='home-container' className='w-12/12 py-5'>
            <Hero></Hero>
            <div className="chef-container">
                <Chef></Chef>
            </div>
            <Services></Services>
            <Posts></Posts>
            <CheckLazyLoad></CheckLazyLoad>
        </div>
    );
};

export default Home;