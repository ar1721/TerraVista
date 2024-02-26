import React from 'react';
import { Link } from 'react-router-dom';

function ProfileButton() {
    return (
        <Link to="/profile" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Profile
        </Link>
    );
}

export default ProfileButton;