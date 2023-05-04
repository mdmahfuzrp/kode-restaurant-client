import React, { useContext } from 'react';
import { ChefContext } from '../ChefProviders/ChefProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(ChefContext);
    const location = useLocation();

    if (loading) {
        return <div className='w-fit mx-auto mt-20'>
            <CirclesWithBar
                height="100"
                width="100"
                color="orange"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;