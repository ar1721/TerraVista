import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Card from '../components/Card'
import { map_preview} from '../assets'
import MapSection from "./Map" 


const location = {
  address: '1 Lomb Memorial, Rochester, New York.',
  lat: 43.0848, 
  lng: -77.6715,
}


function Home() {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(null);

  // Function to get the user's current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
      // console.log(position.coords)
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Call getCurrentLocation when the component mounts
  useEffect(() => {
    getCurrentLocation();
  }, []);
  //? <<<<<<<<< Page Starts >>>>>>>>>>>
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="flex flex-col items-center justify-center">
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
         Discover , Explore , Share
         {/* {userLocation} */}
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w [500px]'>
          Terravista: Where Trails and Tales Collide - Hike, Review, Rejoice!
        </p>
        
        <div className="bg-gray-200 p-6 md:w-80 lg:w-96 rounded-xl mb-10 overflow-hidden">
          {/* <img src={map_preview} alt="Map Preview" className="object-cover w-full h-full rounded-lg shadow-md"/> */}
          <MapSection location={userLocation || location} zoomLevel={17} /> {/* include it here */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          name={"Hike A"}
          ilink={"google.com"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          link={"hike-card"}
          trivia={"1. Do this 2.Do This 3. Do this 4.Do this 5.Do this"}Card          
        />
        <Card
          name={"Hike A"}
          ilink={"google.com"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          link={"hike-card"}
          trivia={"1. Do this 2.Do This 3. Do this 4.Do this 5.Do this"}Card          
        />
        <Card
          name={"Hike B"}
          ilink={"google.com"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          link={"hike-card"}
          trivia={"1. Do this 2.Do This 3. Do this 4.Do this 5.Do this"}Card          
        />
        <Card
          name={"Hike C"}
          ilink={"google.com"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          link={"hike-card"}
          trivia={"1. Do this 2.Do This 3. Do this 4.Do this 5.Do this"}Card          
        />
        <Card
          name={"Hike D"}
          ilink={"google.com"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          link={"hike-card"}
          trivia={"1. Do this 2.Do This 3. Do this 4.Do this 5.Do this"}Card          
        />
        <Card
          name={"Hike E"}
          ilink={"google.com"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          link={"hike-card"}
          trivia={"1. Do this 2.Do This 3. Do this 4.Do this 5.Do this"}Card          
        />
        <Card
          name={"Hike F"}
          ilink={"google.com"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          link={"hike-card"}
          trivia={`1. Do this {"\n"}2.Do This {"\n"} 3. Do this {"\n"} 4.Do this {"\n"} 5.Do this`}Card          
        />
      </div>
    </div>
  )
}

export default Home
