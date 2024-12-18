import Lottie from 'lottie-react';
import React from 'react';
import lottieData from '../assets/lottie/signUp.json'
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { FaGooglePlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { user, signUpWithEmailAndPassword,googleSignIn } = useAuth();
    const navigate = useNavigate();
    const handleSignUpForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signUpWithEmailAndPassword(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: "Success",
                        text: "Account created successfully",
                        timer: 1500,
                        icon: "success"
                    })
                    form.reset();
                }
            })
    }

    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            if (result.user) {
                Swal.fire({
                    title: "Success",
                    text: "successfully sign in with google",
                    timer: 1500,
                    icon: "success"
                })
                navigate('/')
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
                    <h1 className="text-5xl text-center pt-10 font-bold">SignUp now!</h1>
                    <div className='card-body'>
                        <form onSubmit={handleSignUpForm} className="">
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
                                <button className="btn btn-primary text-white">SignUp</button>
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

export default SignUp;