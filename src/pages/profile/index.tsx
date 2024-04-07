import React, { ReactElement } from 'react';
import '../../styles/index.css';
import profileImg from '../../assets/images/DSC_1577.jpg';
import { APP_USER_NAME } from '../../env_vars/app-vars';

const Profile = (): ReactElement | null => {
    console.log(APP_USER_NAME);
    return (
        <div className='Home'>
            <div>
                <img className='profile-pic' src={profileImg} />
            </div>
        </div>
    )
}

export default Profile;
