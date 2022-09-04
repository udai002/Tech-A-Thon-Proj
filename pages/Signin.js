import React from 'react'
import Link from 'next/link'

const Signin = () => {
    return (
        <>

            <div>
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-b-2">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            {/* <img className="mx-auto h-24 w-auto" src="./m.png" alt="Workflow"/> */}
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">Sign in to your account</h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or
                                <Link href={"/signup"} className=" text-black bg-black hover:text-black"> Sign up</Link>
                            </p>
                        </div>
                        <form className="mt-8 space-y-6" method="POST">
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 -z-10 sm:text-sm" placeholder="Email address" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 -z-10 sm:text-sm" placeholder="Password" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> show password </label>
                                </div>

                                <div className="text-sm">
                                    <Link href="/forgot" className="font-medium text-black hover:text-black"> Forgot your password? </Link>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#374151] hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-[#374151] group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-[80%] md:w-[30%] m-auto'>
                    <button class="uppercase pt-1 h-10 mt-3 text-black w-full rounded-md bg-white hover:bg-gray-700 hover:text-white border-2 border-black flex flex-row justify-center"> <img src="./google.png" className='mx-1' width={'25px'} height={'25px'} alt="" /> <div> Continue with google </div></button>
                    <button class="uppercase h-10 mt-3 text-black w-full  bg-white hover:bg-gray-700 hover:text-white  rounded-md border-2 border-black flex flex-row justify-center py-1"><img src="./facebook2.png" className=' mt-[2px]' width={'35px'} height={'35px'} alt="" /> <div> Continue with Facebook </div></button>
                </div>

            </div>
        </>
    )
}

export default Signin
