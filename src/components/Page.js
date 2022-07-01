import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Page = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default Page;