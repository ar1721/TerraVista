// src/components/ChooseTripButton.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const ChooseTripButton = ({ onTripChosen }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            onTripChosen(); // Call the callback function
            setSuccess(true);
        },  1000); // Simulate loading for  1 second
    };

    return (
        <button
            className="bg-transparent border-2 border-black text-black px-4 py-2 rounded-md cursor-pointer hover:bg-black hover:bg-opacity-10 transition-colors duration-300"
            onClick={handleClick}
        >
            {loading ? (
                <span className="animate-spin">Loading...</span>
            ) : success ? (
                <>
                    <FontAwesomeIcon icon={faCheck} className="mr-2" />
                    <span>Trip Chosen</span>
                </>
            ) : (
                'Choose Trip'
            )}
        </button>
    );
};

export default ChooseTripButton;
