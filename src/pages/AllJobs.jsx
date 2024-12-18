import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from '../components/JobCard';

const AllJobs = () => {
    const allJobsLoader = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 my-20'>
           {
            allJobsLoader.map(singleJob=> <JobCard key={singleJob._id} singleJob={singleJob}/>)
           }
        </div>
    );
};

export default AllJobs;