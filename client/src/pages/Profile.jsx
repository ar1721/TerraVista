import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect, useRef } from 'react';
import {c1,c2,c3,c4,c5,c6,c7} from '../assets'
const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    // Mock data for user points, number of hikes completed, and liked hikes
    const userPoints = 100; // Example value
    const numberOfHikesCompleted = 5; // Example value
    const hikesCompleted = [
        { name: "Hike 1", imageUrl: c2 },
        { name: "Hike 2", imageUrl: c3 },
        { name: "Hike 3", imageUrl: c4 },
        { name: "Hike 4", imageUrl: c5 },
        { name: "Hike 5", imageUrl: c6 }
    ]; // Example array of completed hikes

    // State to manage the index of the currently displayed hike
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    // Function to handle automatic scrolling
    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the next index to display
            const nextIndex = (currentIndex + 1) % hikesCompleted.length;
            setCurrentIndex(nextIndex);

            // Scroll to the next item
            containerRef.current.scrollTo({
                left: nextIndex * containerRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }, 3000); // Adjust the interval (in milliseconds) as needed

        return () => clearInterval(interval);
    }, [currentIndex]); // Re-run effect when currentIndex changes

    // Function to remove email domain
    const removeEmailDomain = (name) => {
        return name.split('@')[0];
    };

    return (
        isAuthenticated && (
            <div>
                <h2>Profile</h2>
                <p>Name: {removeEmailDomain(user.name)}</p>
                <p>Email: {user.email}</p>
                <p>User Points: {userPoints}</p>
                <p>Number of Hikes Completed: {numberOfHikesCompleted}</p>
                <div className="hikes-completed" ref={containerRef}>
                    {hikesCompleted.map((hike, index) => (
                        <div key={index} className="">
                            <img src={hike.imageUrl} alt={hike.name} />
                            <p>{hike.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default Profile;
