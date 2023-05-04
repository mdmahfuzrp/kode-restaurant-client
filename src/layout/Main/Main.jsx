import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Services from '../../components/Services/Services';
import Posts from '../../components/Posts/Posts';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-5'>
                <Outlet />
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;