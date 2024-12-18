import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';

const MyApplications = () => {
        const {user} = useAuth();
        const [jobs, setJobs] = useState([]);
        useEffect(()=>{
            axios.get(`http://localhost:3000/application/me?email=${user.email}`)
            .then(result =>{
                setJobs(result.data)
            })
        },[user.email])
    return (
        <div>
            my application: {jobs.length}
        </div>
    );
};

export default MyApplications;