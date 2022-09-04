import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {


    return (
        <div>
            <div className=' bg-gray-700 w-[100%] p-4 md:fixed  '>
                <ul className='flex flex-row text-white justify-between'>

                    <li className='mx-1 cursor-pointer'>
                        <div className='flex flex-row ' >


                            <Link href={'/'}><h1 className='m-2 z-0 w-[10px] font-bold mx-7'>BLOGGY</h1></Link>

                        </div>
                    </li>
                    <li>
                    <div className="search mx-4 hidden md:block m-auto text-center "><input type="text" className='py-1 px-3 outline-neutral-400 rounded-md outline-double z-50 text-black bg-gray-500 w-96 h-10' placeholder='Search' /><button className='py-[10px]  px-3 absolute -translate-x-10 text-black  h-[37px]'><AiOutlineSearch /></button></div>
                    </li>
                    <Link href={'/Signin'}><li className='text-right cursor-pointer' > <button className='p-1 px-4 border-2 border-gray-800 hover:bg-gray-200 hover:text-black rounded-md'> Sign in </button></li></Link>
                </ul>

            </div>

        </div>
    )
}

export default Navbar
