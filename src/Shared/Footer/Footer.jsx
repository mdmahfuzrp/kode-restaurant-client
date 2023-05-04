import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer mt-10 md:mt-0 p-10 bg-gray-700 text-gray-300 justify-evenly">
            <div>
                <span className="footer-title text-orange-400">Services</span>
                <Link className="link link-hover">Calibration</Link>
                <Link className="link link-hover">Organize</Link>
                <Link className="link link-hover">Best Quality Food</Link>
                <Link className="link link-hover">Home Delivery</Link>
            </div>
            <div>
                <span className="footer-title text-orange-400">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title text-orange-400">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
            <div>
                <span className="footer-title text-orange-400">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-gray-300">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-dark absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;