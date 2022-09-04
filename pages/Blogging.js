import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import Footer from '../components/Footer';

const Blogging = () => {
    const [side, setside] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const sideHandle = () => {
        setside(!side)
    }


    return (
        <div className='md:flex md:flex-row md:justify-evenly'>
            <div>
                <div className='bg-gray-700 w-[100px] h-10 p-3 z-10 -mt-[60px] mr-6' onClick={sideHandle}>
                    <div className="line h-0.5 w-5 bg-white my-1"></div>
                    <div className="line h-0.5 w-5 bg-white my-1" ></div>
                    <div className="line h-0.5 w-5 bg-white my-1"></div>
                </div>
                <div className={`sidebar z-50 top-0 left-0 md:fixed  absolute h-[100vh] bg-gray-700  w-[200px] ${side ? "translate-x-0" : "-translate-x-96"} transition-all md:translate-x-0 `}>
                    <div className='text-left '>
                        <Link href={'/'}><h1 className='font-bold pl-4 text-2xl cursor-pointer text-white py-3'>BLOGGY</h1></Link>
                        <div className="userImg text-center">
                            {/* <img src="" alt="" width={'100px'} height={'100px'} /> */}
                        </div>
                        <div className="text-left">
                            <p className=' p-2 mx-3 px-4 font-bold border-2 border-black rounded-lg py-4 my-2 text-white'>Udai</p>

                            <ul className='text-white'>
                                <li className=' p-2 mx-3 px-4 rounded-md  font-serif border-black my-2 hover:bg-gray-200 hover:text-black'>New Post</li>
                                <li className=' p-2 mx-4 px-4 rounded-md  border-black  font-serif my-2 hover:bg-gray-200 hover:text-black'>Blogs</li>
                                <li className=' p-2 mx-4 px-4 rounded-md  border-black font-serif my-2 hover:bg-gray-200 hover:text-black'>Layout</li>
                                <li className=' p-2 mx-4 px-4 rounded-md  bg-gray-200 font-serif my-2 hover:bg-gray-200 text-black'>View Blog</li>
                            </ul>
                        </div>


                    </div>

                    {/* <div className={`fitem mx-4 my-1 border-b-2 border-black py-1 fixed bottom-5 left-16`} onClick={sideHandle}>close</div> */}
                    <div className={`fitem top-2 right-4 border-black py-2 fixed cursor-pointer md:hidden`} onClick={sideHandle}><AiOutlineClose className='text-2xl text-white' /></div>
                </div>
                <div className='fixed bottom-10 right-10 w-16 h-16 p-2 bg-white  rounded-3xl md:bg-gray-700 cursor-pointer'>
                    <BsPlus className='text-5xl text-black md:text-white ' type="button"
                        onClick={() => setShowModal(true)} />
                </div>
            </div>

            {//modal}
            }

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  ">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add Blog
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-20 flex-auto ">
                                    <div class="w-full max-w-xs">
                                        <form class="bg-white pt-6 pb-8 mb-4">
                                            <div class="mb-4">
                                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                                    Title
                                                </label>
                                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Title" />
                                            </div>
                                            <div class="mb-6">
                                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                                    Description
                                                </label>
                                                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Description" />
                                                {/* <p class="text-red-500 text-xs italic">Please choose a password.</p>/ */}
                                            </div>

                                            <div class="mb-4">
                                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                                    url
                                                </label>
                                                <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=" Create URL" /><span>.Bloggy.com</span>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    ><Link href={'/editor'}> 
                                        create a Blog
                                        </Link>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}



            <div className='m-4 pt-4 md:mt-20 mt-10'>
                <h1 className='font-bold text-2xl'>Your Blogs</h1>
                <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-200 mt-4">
                    <img class="object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./tech.jpeg" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-900">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
                <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-200 dark:hover:bg-gray-200 mt-4">
                    <img class="object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./tech2.jpeg" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-900">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
                <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-200  mt-4">
                    <img class="object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./tech3.png" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-900">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Blogging
