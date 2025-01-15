import React from 'react';

const Containter = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='max-w-7xl mx-auto my-10 px-3'>{children}</div>
    );
};

export default Containter;