import React from 'react';
import LazyLoad from 'react-lazy-load';

const CheckLazyLoad = () => {
    <div>
        <LazyLoad height={762}>
            <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80' />
        </LazyLoad>
    </div>
};

export default CheckLazyLoad;