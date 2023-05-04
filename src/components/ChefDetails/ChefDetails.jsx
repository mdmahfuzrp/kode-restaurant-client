import React, { useContext, useState } from 'react';
import { ChefContext } from '../../ChefProviders/ChefProvider';
import { Link, useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { BiHeart } from 'react-icons/bi';
import LazyLoad from 'react-lazy-load';
import './ChefDetails.css'
import Swal from "sweetalert2";

const ChefDetails = () => {
    const { chefs, recipe } = useContext(ChefContext);
    console.log(recipe);
    const { id } = useParams();
    const mainRecipe = recipe.find(r => r.id == id);
    const chef = chefs.find(chef => chef.id == id);
    console.log(chef);

    const [btnStatus1, setBtnstatus1] = useState(false);
    const [btnStatus2, setBtnstatus2] = useState(false);
    const [btnStatus3, setBtnstatus3] = useState(false);

    const handleDisable1 = () => {
        setBtnstatus1(true);
        Swal.fire(
            "Success!",
            "Successfully added into Favorite!",
            "success"
          );
    }
    const handleDisable2 = () => {
        setBtnstatus2(true);
        Swal.fire(
            "Success!",
            "Successfully added into Favorite!",
            "success"
          );
    }
    const handleDisable3 = () => {
        setBtnstatus3(true);
        Swal.fire(
            "Success!",
            "Successfully added into Favorite!",
            "success"
          );
    }

    return (
        <div>
            <div className="bradcrumbs">
                <div className="text-sm breadcrumbs  w-11/12 mx-auto mt-6 -mb-4">
                    <ul>
                        <li>
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='text-orange-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                Chef Details
                            </Link>
                        </li>
                        <li className='text-gray-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Add Document
                        </li>
                    </ul>
                </div>
            </div>
            <div className="chef-details-banner">
                <div className="banner-container">
                    <div className="banner flex flex-col items-center mt-5 px-7">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                            <img src={chef?.chef_picture} />
                            </div>
                        </div>
                        <h1 className='mt-4 text-2xl font-medium text-gray-700'>{chef?.chef_name}</h1>
                        <div className="chef-bio w-full md:w-4/12 text-center text-gray-500 mt-1">
                            <p>{chef?.short_bio}</p>
                        </div>
                        <div className="short-info w-fit my-5 px-7">
                            <div className="stats stats-vertical md:stats-horizontal shadow">
                                <div className="stat">
                                    <div className="stat-figure text-primary" >
                                        <label className="text-9xl">
                                            <button className='text-red-500 flex justify-center items-center'><span className='text-orange-400'><BiHeart size={35} /></span>
                                            </button>
                                        </label>
                                    </div>
                                    <div className="stat-title">Total Likes</div>
                                    <div className="stat-value text-blue-500">{chef?.recipe?.likes}</div>
                                    <div className="stat-desc text-md">21% increase in this month</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <div className="stat-title">Total Recipe</div>
                                    <div className="stat-value text-red-500 text-center">0{chef?.recipe?.total_recipe}</div>
                                    <div className="stat-desc">Last award wining recipe</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <div className="avatar online">
                                            <div className="w-16 rounded-full">
                                                <img src={chef?.chef_picture} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stat-value">86%</div>
                                    <div className="stat-title">Success Rating</div>
                                    <div className="stat-desc text-secondary">86% Positive recipe rating</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chef-details my-5">
                        <div className="flex flex-col w-full md:w-11/12 mx-auto lg:flex-row px-7">
                            <div id="recipe-info" className="grid flex-grow w-11/12 md:w-2/4 bg-base-300 rounded-box place-items-center">
                                <img className='rounded-box object-cover h-full' style={{ width: '100%' }} src={mainRecipe?.recipe1?.recipe_img} alt="" />
                            </div>
                            <div className="divider lg:divider-horizontal">OR</div>
                            <div id="recipe-info" className="grid flex-grow  w-full md:w-2/4 border rounded-box p-5 px-7">
                                <h1>{mainRecipe?.recipe1?.recipe_name}</h1>
                                <ul className="menu bg-base-100 w-full rounded-box mt-2 mb-5">
                                    {
                                        mainRecipe?.recipe1?.ingredients.map((i, index) => <li
                                            key={index}
                                            className='border-l-4 border-orange-400'><p>{i}</p></li>)
                                    }
                                </ul>

                                <div className="stats stats-vertical sm:stats-horizontal shadow  rounded-none">
                                    <div className="stat md:w-full">
                                        <div className="stat-title">{mainRecipe?.recipe1?.recipe_name}</div>
                                        <div className="stat-value text-blue-500 font-semibold">{mainRecipe?.recipe1?.cooking_method}</div>
                                    </div>
                                    <div className="stat md:w-full">
                                        <div className="stat-figure text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div className="stat-title">
                                            <div className="rating rating-sm text-center w-full justify-center">
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />

                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                        <div className="stat-value text-orange-500 text-center font-semibold text-3xl ">{mainRecipe?.recipe1?.rating}</div>
                                    </div>
                                </div>

                                <button onClick={handleDisable1} disabled={btnStatus1} className="btn gap-2 mt-4 rounded-none">
                                    Add to Favourite
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col w-full md:w-11/12 mx-auto lg:flex-row px-7 my-5">
                            <div id="recipe-info" className="grid flex-grow w-11/12 md:w-2/4 bg-base-300 rounded-box place-items-center">
                                <img className='rounded-box object-cover h-full' style={{ width: '100%' }} src={mainRecipe?.recipe2?.recipe_img} alt="" />
                            </div>
                            <div className="divider lg:divider-horizontal">OR</div>
                            <div id="recipe-info" className="grid flex-grow  w-full md:w-2/4 border rounded-box p-5 px-7">
                                <h1>{mainRecipe?.recipe2?.recipe_name}</h1>
                                <ul className="menu bg-base-100 w-full rounded-box mt-2 mb-5">
                                    {
                                        mainRecipe?.recipe2?.ingredients.map((i, index) => <li
                                            key={index}
                                            className='border-l-4 border-orange-400'><p>{i}</p></li>)
                                    }
                                </ul>

                                <div className="stats stats-vertical sm:stats-horizontal shadow  rounded-none">
                                    <div className="stat md:w-full">
                                        <div className="stat-title">{mainRecipe?.recipe2?.recipe_name}</div>
                                        <div className="stat-value text-blue-500 font-semibold">{mainRecipe?.recipe2?.cooking_method}</div>
                                    </div>

                                    <div className="stat md:w-full">
                                        <div className="stat-figure text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div className="stat-title">
                                            <div className="rating rating-sm text-center w-full justify-center">
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />

                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                        <div className="stat-value text-orange-500 text-center font-semibold text-3xl ">{mainRecipe?.recipe2?.rating}</div>
                                    </div>
                                </div>

                                <button onClick={handleDisable2} disabled={btnStatus2} className="btn gap-2 mt-4 rounded-none">
                                    Add to Favourite
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col w-full md:w-11/12 mx-auto lg:flex-row px-7">
                            <div id="recipe-info" className="grid flex-grow w-11/12 md:w-2/4 bg-base-300 rounded-box place-items-center">
                                <img className='rounded-box object-cover h-full' style={{ width: '100%' }} src={mainRecipe?.recipe3?.recipe_img} alt="" />
                            </div>
                            <div className="divider lg:divider-horizontal">OR</div>
                            <div id="recipe-info" className="grid flex-grow  w-full md:w-2/4 border rounded-box p-5 px-7">
                                <h1>{mainRecipe?.recipe3?.recipe_name}</h1>
                                <ul className="menu bg-base-100 w-full rounded-box mt-2  mb-5">
                                    {
                                        mainRecipe?.recipe3?.ingredients.map((i, index) => <li
                                            key={index}
                                            className='border-l-4 border-orange-400'><p>{i}</p></li>)
                                    }
                                </ul>

                                <div className="stats stats-vertical sm:stats-horizontal shadow  rounded-none">
                                    <div className="stat md:w-full">
                                        <div className="stat-title">{mainRecipe?.recipe3?.recipe_name}</div>
                                        <div className="stat-value text-blue-500 font-semibold">{mainRecipe?.recipe3?.cooking_method}</div>
                                    </div>

                                    <div className="stat md:w-full">
                                        <div className="stat-figure text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div className="stat-title">
                                            <div className="rating rating-sm text-center w-full justify-center">
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />

                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                        <div className="stat-value text-orange-500 text-center font-semibold text-3xl ">{mainRecipe?.recipe3?.rating}</div>
                                    </div>
                                </div>

                                <button onClick={handleDisable3} disabled={btnStatus3} className="btn gap-2 mt-4 rounded-none">
                                    Add to Favourite
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;