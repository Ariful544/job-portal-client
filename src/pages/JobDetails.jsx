import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import { PiHandbagSimpleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import moment from 'moment';

const JobDetails = () => {
    const JobDetails = useLoaderData();
    const { _id, company_logo,responsibilities,hr_email,hr_name,applicationDeadline, category, company, location, jobType, title, description, requirements, salaryRange } = JobDetails;
    const currentDate = moment(); 
    const deadline = moment(applicationDeadline);
    return (
        <div className=" my-20 flex flex-col justify-evenly p-4 bg-base-100 shadow-2xl">
            <div className='flex gap-4 items-center'>
                <img className='w-20 h-20' src={company_logo} alt="" />
                <div className='flex flex-col gap-1 justify-center items-start'>
                    <h3 className='text-2xl font-semibold'>{company}</h3>
                    <div className='flex text-xs gap-1 items-center'>
                        <p><CiLocationOn /></p>
                        <p> {location}</p>
                    </div>
                </div>
            </div>
            <div className='text-xl font-medium'>
                <p className='text-lg font-bold text-blue-500'>Job Title  :  <span className='text-white font-medium'> {title} </span></p>
            </div>
            <div className='text-xl font-medium'>
                <p className='text-lg font-bold text-blue-500'>HR Name  :  <span className='text-white font-medium'> {hr_name} </span></p>
            </div>
            <div className='text-xl font-medium'>
                <p className='text-lg font-bold text-blue-500'>HR Email  :  <span className='text-white font-medium'> {hr_email} </span></p>
            </div>
            <div className='flex gap-2 items-center my-2'>
                <p className='text-lg font-bold text-blue-500'> JobType : </p>
                <p className='font-medium'><PiHandbagSimpleBold /></p>
                <p className='font-medium'>{jobType}</p>
            </div>
            <div>
                <p className='text-lg font-bold text-blue-500'>Category : <span className='text-white font-medium'>{category}</span></p>
            </div>
            <div>
            <p className='text-lg font-bold text-blue-500'>Description : <span className='text-white font-medium'>{description}</span></p>
            </div>
            <div className='flex gap-2 items-center flex-wrap my-2'>
                <p className='text-lg font-bold text-blue-500'>responsibilities:</p>
                {
                    responsibilities.map((responsibility, i) => <button className='rounded-xl text-xs border-2 p-2' key={i}>{responsibility}</button>)
                }
            </div>
            <div className='flex gap-2 items-center flex-wrap my-2'>
                <p className='text-lg font-bold text-blue-500'>Requirements:</p>
                {
                    requirements.map((requirement, i) => <button className='rounded-xl text-xs border-2 p-2' key={i}>{requirement}</button>)
                }
            </div>
            <div className='text-xl font-medium'>
                <p className='text-lg font-bold text-blue-500'>Application Deadline  :  <span className='text-white font-medium'> {applicationDeadline} </span></p> 
            </div>
            <div className='flex justify-between items-center my-2'>
                <p className='text-lg font-bold text-blue-500'>Salary : <span className='text-white font-medium'>{salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}</span></p>
                {
                    deadline.isAfter(currentDate) ? <>
                        <Link to={`/application/apply/${_id}`} className='btn btn-primary text-white'>Apply now</Link>
                    </>
                    : 
                    <>
                        <button className='p-2 border text-white bg-red-500 border-red-500 rounded-lg' disabled="disabled">DeadLine Finished</button>
                    </>
                }
            </div>
        </div>
    );
};

export default JobDetails;