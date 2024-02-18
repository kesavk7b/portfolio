import React from 'react';
import img from '../myImg/kesav_p.png';
function Profile(){
    return(
        <img
            className="profile-pic"
            src={img}
            alt=""
        />
    );
}

export default Profile;