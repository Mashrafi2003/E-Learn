import React from 'react';
import notfound from '../../images/notfound.jpeg'

const NotFound = () => {
    return (
        <div className='error'>
            {/* Showing A picture Which is saying Server not Found */}
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;