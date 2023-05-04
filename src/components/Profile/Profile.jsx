import React, { useContext } from 'react';
import { ChefContext } from '../../ChefProviders/ChefProvider';
import './Profile.css'

const Profile = () => {
    const {user} = useContext(ChefContext);
    console.log('from profile: ', user);
    return (
        <div className='py-10 w-8/12 mx-auto flex flex-col justify-center items-center'>
            
            <h1 className='text-2xl font-medium text-orange-400 border-orange-400 border-b-2 mb-5 text-center py-3'>Personal Information</h1>
            
            <div>
                <img style={{width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover'}} src={user.photoURL} alt="" />
            </div>
            <div className="left shadow-xl rounded-3xl">
                <div id='profile-info' className='p-6 px-9'>
                <p><span>Name:</span> {user.displayName ? user.displayName : 'Update your name'}</p>
                <p><span>Gmail:</span> {user.email}</p>
                <p><span>Password:</span> {user.reloadUserInfo.passwordHash}</p>
                <p><span>Email Verify:</span> {user.emailVerified ? user.emailVerified : 'Not Verified'}</p>
                <p><span>Phone Number:</span> {user.phoneNumber ? user.phoneNumber : 'Please add a phone number'}</p>
                <p><span>UID:</span> {user.uid}</p></div>
            </div>
        </div>
    );
};

export default Profile;