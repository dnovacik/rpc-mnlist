import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderCointaner = ({mainColor}) => (
    <div className='loader-container'>
        <Loader type='TailSpin' color={mainColor} height='40' width='40' />
    </div>
);

export default LoaderCointaner;