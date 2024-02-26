import React from 'react'


function Card({title,ilink,description,link,rating, difficulty, distance, location}) {
  return (
    <a
    href={link}
    rel="noopener noreferrer"
    className="rounded-md overflow-hidden  hover:shadow-lg transition-transform transform hover:scale-105"
    >
        <img
             src={ilink}
             alt="preview-picture" 
             className="w-full h-36 md:h-48 object-cover cursor-pointer"
          />
        <div className="w-full p-4 relative group">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
              {title}
          </h3>
          <p className="text-gray-700 text-xs mb-2">⚲ {location}</p>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-justify text-xs md:text-sm ">
              {description}
          </p>
          <div className="flex space-x-2 mt-2">
            <p className="text-gray-700 text-xs">{rating}/5★</p>
            <p className="text-gray-700 text-xs">{distance}</p>
            <p className="text-gray-700 text-xs">{difficulty}</p>
          </div> 
        </div>
    </a>
  )
}

export default Card