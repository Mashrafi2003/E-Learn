import React from 'react';
import notfound from '../../images/notfound.jpeg'

const NotFound = () => {
    return (
        <div className='error'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;