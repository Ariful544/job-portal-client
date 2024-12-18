import React from 'react';
import Carousel from '../components/Carousel';
import JobCard from '../components/JobCard';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobsLoader = useLoaderData();
    return (
        <div>
            <header className='mt-10'>
                <Carousel />
            </header>
            <main className='mt-20'>
                {/* jobs heading */}
                <div className='text-center space-y-3'>
                    <h1 className='text-5xl font-semibold'>Jobs of the day</h1>
                    <p> Search and connect with the right candidates faster.</p>
                </div>
                {/* jobs cards */}
                <div className='my-6 grid md:grid-cols-3 grid-cols-1 gap-6'>
                   {
                    jobsLoader.map(singleJob =>  <JobCard key={singleJob._id} singleJob={singleJob}/>)
                   }
                </div>
                <div className='text-center'>
                    <Link to="/all-jobs" className='btn btn-primary text-white'>See more</Link>
                </div>
            </main>
        </div>
    );
};

export default Home;