import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='max-w-xl mx-auto px-8'>
            {children}
        </div>
    );
};

export default Layout;