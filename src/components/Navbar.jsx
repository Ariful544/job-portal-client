import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const emailFirstLetter = user?.email.charAt(0).toUpperCase();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "LogOut successful",
                    timer: 1500,
                    icon: "success"
                })
                navigate('/auth/login')
            })
    }
    const links = <>
        <li className='mr-2 text-white'><NavLink to="/">Home</NavLink></li>
        {
            user && <>
                <li className='mr-2 text-white'><NavLink to="/all-jobs">All jobs</NavLink></li>
                <li className='mr-2 text-white'><NavLink to="/">Add jobs</NavLink></li>
                <li className='mr-2 text-white'><NavLink to="/application/me">My Applications</NavLink></li>
                <li className='mr-2 text-white'><NavLink to="/">My JobPost</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Job portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex justify-between items-center">
                <div className="form-control mr-2 ">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className='flex items-center gap-2'>

                    {
                        user ? <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user.photoURL !== null ? <>
                                                <img
                                                    alt={user?.displayName}
                                                    src={user?.photoURL} />

                                            </> :
                                                <>
                                                    <p className='bg-red-500 w-full h-full text-white font-bold text-3xl'>{emailFirstLetter}</p>
                                                </>
                                        }
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between"> Profile </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                        </>
                            :
                            <>
                                <Link to="/auth/signup" className="btn">SignUp</Link>
                                <Link to="/auth/login" className="btn">Log In</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;