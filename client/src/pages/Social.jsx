import React from 'react'
import Post from '../components/Post'
import ScoreCard from '../components/ScoreCard'

function Social() {
  return (
    <div className='max-w-8xl mx-auto'>
      <div className="flex flex-col items-center justify-center">
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
         Discover other adventurers near you
        </h1>
        <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                className="mt-2 w-full py-2 px-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className='flex flex-row mt-5 rounded-md w-full'>
            <div className='bg-gray-100 w-full'>
                <Post
                imageSrc={"https://www.catholicweekly.com.au/wp-content/uploads/2021/09/Cramsie-PriestPhotographer-050921-4.jpg"}
                dpSrc={"https://i.pinimg.com/736x/41/64/dd/4164dd1e0340c657af00b92a5f99bbf4.jpg"}
                posterName={"Jaime"}
                caption={"Had fun at mountain grove"}
                />
                <Post
                imageSrc={"https://live.staticflickr.com/65535/29975427905_afa17b8dbc_b.jpg"}
                dpSrc={"https://static.tnn.in/photo/96423157/96423157.jpg"}
                posterName={"William R"}
                caption={"This view was worth the hike"}
                />
                <Post
                imageSrc={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Henry_Mountain_and_Square_Top_Mountain%2C_Fossil_Ridge_Wilderness%2C_Gunnison_County%2C_Colorado%2C_USA.jpg"}
                dpSrc={"https://mir-s3-cdn-cf.behance.net/projects/404/df7e9b163138663.Y3JvcCw1MjQ1LDQxMDIsMCw1NzE.png"}
                posterName={"Shaan"}
                caption={"Halfway there"}
                />
                <Post
                imageSrc={"https://alanmajchrowicz.com/wp-content/uploads/2020/02/squaretop_mountain_green_river_rwyoming_67163.jpg"}
                dpSrc={"https://us.123rf.com/450wm/rotorania/rotorania2304/rotorania230424754/203119933-portrait-of-a-young-man-cartoon-style-vector-illustration.jpg"}
                posterName={"John"}
                caption={"This is amazing"}
                />
            </div>
            <div className='bg-gray-200'>
                <h1 className='text-center font-bold mt-2'>
                    Leader Board
                </h1>
                <ScoreCard
                    name={"Ryan"}
                    score= {"12,000"}
                />
                <ScoreCard
                    name={"Josh"}
                    score= {"11,500"}
                />
                <ScoreCard
                    name={"William"}
                    score= {"11,200"}
                />
                <ScoreCard
                    name={"Jeff"}
                    score= {"10,000"}
                />
                <ScoreCard
                    name={"Tolu"}
                    score= {"9,650"}
                />
                <ScoreCard
                    name={"Willson"}
                    score= {"9,600"}
                />
                <ScoreCard
                    name={"Sarah"}
                    score= {"8,000"}
                />
                <ScoreCard
                    name={"Son"}
                    score= {"8,600"}
                />
                <ScoreCard
                    name={"Jim"}
                    score= {"7,600"}
                />
                <ScoreCard
                    name={"Robert"}
                    score= {"7,300"}
                />
            </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Social
