import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css'

const Posts = () => {
    return (
        <div className="bg-white mt-80 md:mt-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Review From Customers</h2>
                    <p className=" text-lg leading-8 text-gray-600">
                        Here are our happy customers
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article className="rounded-xl p-5 shadow-md flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                Mar 16, 2020
                                </time>
                                <Link
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link>
                                        <span className="absolute inset-0" />
                                        One of the best food
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum est, velit pariatur atque praesentium voluptatibus in laudantium. Nobis, repudiandae.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <Link>
                                            <span className="absolute inset-0" />
                                            Hasanul Mahmud
                                        </Link>
                                    </p>
                                    <p className="text-gray-600">Co-Founder/CTO</p>
                                </div>
                            </div>
                        </article>
                        <article id='posts-parent' className="rounded-xl p-5 shadow-md flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                Mar 16, 2020
                                </time>
                                <Link
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Agency
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link>
                                        <span className="absolute inset-0" />
                                        Hight Quality and it's amazing
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum est, velit pariatur atque praesentium voluptatibus in laudantium. Nobis, repudiandae.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.pexels.com/photos/1181312/pexels-photo-1181312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <Link>
                                            <span className="absolute inset-0" />
                                            Bipro Mohalod
                                        </Link>
                                    </p>
                                    <p className="text-gray-600">Employee / GLLC</p>
                                </div>
                            </div>
                        </article>
                        <article className="rounded-xl p-5 shadow-md flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                Mar 16, 2020
                                </time>
                                <Link
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link>
                                        <span className="absolute inset-0" />
                                        Awesome behaviour and Nice
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum est, velit pariatur atque praesentium voluptatibus in laudantium. Nobis, repudiandae.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <Link>
                                            <span className="absolute inset-0" />
                                            Hasanul Mahmud
                                        </Link>
                                    </p>
                                    <p className="text-gray-600">Analitics</p>
                                </div>
                            </div>
                        </article>
                        <article className="rounded-xl p-5 shadow-md flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                Mar 16, 2020
                                </time>
                                <Link
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link>
                                        <span className="absolute inset-0" />
                                        I give koda restaurant 8 rating
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum est, velit pariatur atque praesentium voluptatibus in laudantium. Nobis, repudiandae.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.pexels.com/photos/1181326/pexels-photo-1181326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <Link>
                                            <span className="absolute inset-0" />
                                            Hasanul Mahmud
                                        </Link>
                                    </p>
                                    <p className="text-gray-600">Co-Founder/CTO</p>
                                </div>
                            </div>
                        </article>
                        <article className="rounded-xl p-5 shadow-md flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                Mar 16, 2020
                                </time>
                                <Link
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link>
                                        <span className="absolute inset-0" />
                                        It's just amazing
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum est, velit pariatur atque praesentium voluptatibus in laudantium. Nobis, repudiandae.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <Link>
                                            <span className="absolute inset-0" />
                                            Hasanul Mahmud
                                        </Link>
                                    </p>
                                    <p className="text-gray-600">Co-Founder/CTO</p>
                                </div>
                            </div>
                        </article>
                        <article className="rounded-xl p-5 shadow-md flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                Mar 16, 2020
                                </time>
                                <Link
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link>
                                        <span className="absolute inset-0" />
                                        I feel like extra energy when i eat
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum est, velit pariatur atque praesentium voluptatibus in laudantium. Nobis, repudiandae.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <Link>
                                            <span className="absolute inset-0" />
                                            Hasanul Mahmud
                                        </Link>
                                    </p>
                                    <p className="text-gray-600">Co-Founder/CTO</p>
                                </div>
                            </div>
                        </article>
                        <article className="rounded-xl p-5 shadow-md flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                Mar 16, 2020
                                </time>
                                <Link
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link>
                                        <span className="absolute inset-0" />
                                        Best Food Best Quality
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum est, velit pariatur atque praesentium voluptatibus in laudantium. Nobis, repudiandae.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.pexels.com/photos/1181649/pexels-photo-1181649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <Link>
                                            <span className="absolute inset-0" />
                                            Hasanul Mahmud
                                        </Link>
                                    </p>
                                    <p className="text-gray-600">Co-Founder/CTO</p>
                                </div>
                            </div>
                        </article>
                        <article className="rounded-xl p-5 shadow-md flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                Mar 16, 2020
                                </time>
                                <Link
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link>
                                        <span className="absolute inset-0" />
                                        Boost your conversion rate
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum est, velit pariatur atque praesentium voluptatibus in laudantium. Nobis, repudiandae.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <Link>
                                            <span className="absolute inset-0" />
                                            Hasanul Mahmud
                                        </Link>
                                    </p>
                                    <p className="text-gray-600">Co-Founder/CTO</p>
                                </div>
                            </div>
                        </article>
                        <article className="rounded-xl p-5 shadow-md flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                Mar 16, 2020
                                </time>
                                <Link
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link>
                                        <span className="absolute inset-0" />
                                        Highly i recommend this nice
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum est, velit pariatur atque praesentium voluptatibus in laudantium. Nobis, repudiandae.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://thumbs.dreamstime.com/b/portrait-happy-redhaired-woman-employee-optical-glasses-has-satisfied-expression-works-modern-gadgets-waits-meeting-143607929.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <Link>
                                            <span className="absolute inset-0" />
                                            Hasanul Mahmud
                                        </Link>
                                    </p>
                                    <p className="text-gray-600">Co-Founder/CTO</p>
                                </div>
                            </div>
                        </article>
                </div>
            </div>
        </div>
    );
};

export default Posts;