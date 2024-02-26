import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Card from '../components/Card'
import { map_preview,preview,c1,c3} from '../assets'
import hikes from '../constants/hikes';
import MapSection from "./Map" 

const location = {
  address: '1 Lomb Memorial, Rochester, New York.',
  lat: 43.0848, 
  lng: -77.6715,
}

function Home() {
  
  //? <<<<<<<<< Page Starts >>>>>>>>>>>
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="flex flex-col items-center justify-center">
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
         Discover , Explore , Share
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w [500px]'>
          Terravista: Where Trails and Tales Collide - Hike, Review, Rejoice!
        </p>
        <div className="max-h-96 overflow-hidden bg-gray-200 rounded-lg my-10 shadow-md">
        <MapSection location={location} zoomLevel={17} /> {/* include it here */}
        </div>
      </div>

      <h1 className='font-extrabold text-[#222328] text-[32px] mb-2'>
         Adventures near Rochester
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {hikes.map(hike=>(
            <Card
              title={hike.title}
              ilink={hike.imgUrl}
              description={hike.description}
              link={hike.link}
              location={hike.location}
              rating={hike.rating}
              difficulty={hike.difficulty}
              distance={hike.distance}          
            />
        ))}
        
      </div>
    </div>
  )
}

export default Home
