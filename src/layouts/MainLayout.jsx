import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl'>
           <header className='max-w-screen-xl mx-auto'>
                <nav>
                    <Navbar/>
                </nav>
            </header> 
            <main className='min-h-screen max-w-screen-xl mx-auto'>
                <Outlet/>
            </main>
            <footer className='max-w-screen-xl mx-auto'>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;