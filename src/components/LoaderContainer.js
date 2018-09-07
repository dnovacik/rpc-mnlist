import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderCointaner = ({mainColor}) => (
    <Loader type='TailSpin' color={mainColor} height='40' width='40' position='fixed' top='50%' left='50%' />
);

export default LoaderCointaner;