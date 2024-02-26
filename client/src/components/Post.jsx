// Post.js
import React from 'react';

const Post = ({ imageSrc, dpSrc, posterName , caption}) => {
  return (
    <div className="relative max-w-md m-8">
  <div className="relative aspect-w-1 aspect-h-1">
    <img src={imageSrc} alt="Post" className="w-full h-full rounded-lg" />

    <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 p-2 rounded-full flex flex-col items-start space-y-1">
      <div className="flex items-center space-x-2">
        <img src={dpSrc} alt="Display Picture" className="w-8 h-8 rounded-full" />
        <div className='p-x-5'>
            <p className="text-white mr-1">{posterName}</p>
            <p className="text-gray-300 text-xs mr-3">{caption}</p>
        </div>
      </div>
      
    </div>
  </div>
</div>
  );
};

export default Post;
