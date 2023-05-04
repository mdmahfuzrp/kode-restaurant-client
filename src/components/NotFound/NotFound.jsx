import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div id="error">
            <div>
                <img src="https://media4.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif" alt="error" />

            </div>
            <NavLink id="error-btn" >
                <Link onClick={handleGoBack} to="/" className="btn"> Go Back</Link>
            </NavLink>
        </div>
    );
};

export default NotFound;