import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChefContext } from '../../ChefProviders/ChefProvider';
import { FaUserAlt, FaArrowCircleRight } from 'react-icons/fa';

const Login = () => {
    const { login } = useContext(ChefContext);
    const navigate = useNavigate();


    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const HandleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        login(email, password)
            .then(result => {
                const outPut = result.user;
                console.log(outPut);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero py-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:ps-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Login your profile for continue your draft course and finished as soon as possible.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body pb-1" onSubmit={HandleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter email</span>
                            </label>
                            <input type="email" placeholder="example@gmail.com" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-orange-400 border-0">Login</button>
                        </div>
                    </form>
                    <label className="p-8 pt-1">
                        <p>New in this site ? <Link to="/signup" className="text-blue-400 link link-hover">Register Now!</Link></p>
                    </label>

                    <div className='text-center mb-5 -mt-6 flex w-full justify-between px-10 items-center'>
                        <div className="line w-5/12 border h-0 bg-gray-400"></div>
                        <div className="line">or</div>
                        <div className="line w-5/12 border h-0 bg-gray-400"></div>
                    </div>

                    <div className="form-control flex flex-row -mt-3 justify-center pb-4">

                        <Link><img className='mx-2 cursor-pointer hover:-mt-1 duration-300' style={{ width: '40px' }} src="https://raw.githubusercontent.com/mdmahfuzrp/futurehub-img/main/Icons/google.png" alt="" /></Link>

                        <Link><img className='mx-2 cursor-pointer hover:-mt-1 duration-300' style={{ width: '40px' }} src="https://raw.githubusercontent.com/mdmahfuzrp/futurehub-img/main/Icons/github.png" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;