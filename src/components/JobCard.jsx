import PropTypes from 'prop-types';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { PiHandbagSimpleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const JobCard = ({ singleJob }) => {
    const { _id,company_logo, company, location, jobType, title, description, requirements, salaryRange } = singleJob;
    return (
        <div className=" flex flex-col justify-evenly p-4 bg-base-100 shadow-2xl">
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
            <div className='text-xl font-medium'>{title}</div>
            <div className='flex gap-2 items-center my-2'>
                <p><PiHandbagSimpleBold /></p>
                <p>{jobType}</p>
            </div>
            <div>
                <p className='text-base'>{description}</p>
            </div>
            <div className='flex gap-2 flex-wrap my-2'>
                {
                    requirements.map((requirement, i) => <button className='rounded-xl text-xs border-2 p-1' key={i}>{requirement}</button>)
                }
            </div>
            <div className='flex justify-between items-center my-2'>
                <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
                <Link to={`/jobs/details/${_id}`} className='btn btn-primary text-white'>Details</Link>
            </div>
        </div>
    );
};

JobCard.propsTypes = {
    singleJob: PropTypes.object.isRequired,
}

export default JobCard;