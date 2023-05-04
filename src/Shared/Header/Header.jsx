import React, { useContext, useState } from 'react';
import brandLogo from '../../assets/logo.png'
import './Header.css';
import { FaUserAlt, FaArrowCircleRight } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ChefContext } from '../../ChefProviders/ChefProvider';


const Header = () => {
    const { user, logOut } = useContext(ChefContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const [activeButton, setActiveButton] = useState(2);

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    }

    return (
        <div className="z-50 navbar bg-base-100 drop-shadow-md rounded-lg mt-9 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className=" absolute z-50 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleClick(0)} className={activeButton === 0 ? 'bg-orange-400 rounded-lg' : ''}><Link to="/">Home</Link></li>
                        <li onClick={() => handleClick(1)} className={activeButton === 1 ? 'bg-orange-400 rounded-lg' : ''}><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li onClick={() => handleClick(0)} className={activeButton === 0 ? 'bg-orange-400 rounded-lg' : ''}><Link to="/">Home</Link></li>
                        <li onClick={() => handleClick(1)} className={activeButton === 1 ? 'bg-orange-400 rounded-lg' : ''}><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center" id='brand-logo'>
                <img src={brandLogo} alt="" />
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle mt-1">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                {
                    <Link to="/profile" id='profile-btn' className="btn btn-ghost btn-circle text-gray-400 hover:text-gray-600">
                        <FaUserAlt />
                    </Link>
                }
                {
                    user && <Link onClick={handleLogOut} className="btn btn-ghost btn-circle text-gray-400 hover:text-gray-600"><FiLogOut /></Link>
                }
            </div>
        </div>
    );
};

export default Header;