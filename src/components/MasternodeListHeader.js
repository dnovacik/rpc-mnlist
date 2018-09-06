import React from 'react';

const MasternodeListHeader = ({logoUrl, coinName, mainColor}) => (
    <section className='text-white pattern' style={{backgroundColor: mainColor}}>
        <div className='container pt-10'>
            <div className='row mb-2'>
                <img className='coin-logo' src={logoUrl} alt={coinName} />
                <h1 className='coin-title'>{coinName.toUpperCase()} Masternode List</h1>
            </div>
        </div>
    </section>
);

export default MasternodeListHeader;