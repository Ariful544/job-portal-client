import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ApplyJob = () => {
    const { user } = useAuth();
    const loaderdetails = useLoaderData();
    const handleJobApply = (e) =>{
        e.preventDefault();
        const form = e.target;
        const summarize = form.summarize.value;
        const hire = form.hire.value;
        const experience = form.experience.value;
        const skills = form.skills.value;
        const portfolio = form.portfolio.value;
        const linkedin = form.linkedin.value;
        const resume = form.resume.value;

        const application = {
            job_id : loaderdetails._id,
            job_title : loaderdetails.title,
            job_type : loaderdetails.jobType,
            category: loaderdetails.category,
            location: loaderdetails.location,
            deadline: loaderdetails.applicationDeadline,
            user_email: user.email,
            summarize,
            hire,
            experience,
            skills,
            portfolio,
            linkedin,
            resume,
            submitted_at: new Date(),
            status: "pending",
        }

        axios.post("http://localhost:3000/job-application",application)
        .then(result => {
            if(result.data.insertedId){
                Swal.fire({
                    title: "Success",
                    text: "your have successfully apply your job application",
                    timer: 1500,
                    icon: "success",
                    showConfirmButton: false,
                })
                form.reset();
            }
        })
        

    }
    return (
        <div className="hero my-14 min-h-screen">
            <div className="card bg-base-100 py-10 w-full border border-blue-500 shadow-2xl">
                <h1 className='text-center text-4xl'>Apply your dream job!</h1>
                <form onSubmit={handleJobApply} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Summarize your career achievements</span>
                        </label>
                        <textarea name='summarize' className="textarea textarea-bordered" rows={4} placeholder="write here....."></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Why we should hire you</span>
                        </label>
                        <textarea name='hire' className="textarea textarea-bordered" rows={2} placeholder="write here....."></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Describe your work experience</span>
                        </label>
                        <textarea name='experience' className="textarea textarea-bordered" rows={2} placeholder="write here....."></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Skills</span>
                        </label>
                        <input type="text" name='skills' placeholder="type your experience" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Portfolio Link</span>
                        </label>
                        <input type="url" name='portfolio' placeholder="type your portfolio link" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Linkedin Link</span>
                        </label>
                        <input type="url" name='linkedin' placeholder="type your linkedin link" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Resume Link</span>
                        </label>
                        <input type="url" name='resume' placeholder="type your linkedin link" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white">Apply Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyJob;