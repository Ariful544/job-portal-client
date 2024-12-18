import Lottie from 'lottie-react';
import React from 'react';
import lottieData from '../assets/lottie/login.json'
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { FaGooglePlus } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const { googleSignIn,loginWithEmailAndPassword } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || "/";
    const handleLoginForm = (e)=>{
        e.preventDefault();
        const form1 = e.target;
        const email = form1.email.value;
        const password = form1.password.value;
        loginWithEmailAndPassword(email,password)
        .then(result => {
            if (result.user) {
                Swal.fire({
                    title: "Success",
                    text: "Login successful",
                    timer: 1500,
                    icon: "success"
                })
                form1.reset();
                navigate(form)
            }
        })
    }
    const handleGoogle = () =>{
            googleSignIn()
            .then(result =>{
                if (result.user) {
                    Swal.fire({
                        title: "Success",
                        text: "Successfully sign in with google",
                        timer: 1500,
                        icon: "success"
                    })
                    navigate(form)
                }
            })
        }
    return (
        <div className="hero my-10 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-full h-full' animationData={lottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl text-center pt-10 font-bold">Login now!</h1>
                    <div className='card-body'>
                        <form onSubmit={handleLoginForm} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogle} className="btn btn-success text-lg text-white"><FaGooglePlus />SignIn with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;