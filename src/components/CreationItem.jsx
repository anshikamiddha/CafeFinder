import React, { useState } from 'react'
import Markdown from 'react-markdown'; 
// for removing asterish and formatted the article this is used
const CreationItem = ({ item }) => {
    const [expand,setexpand]=useState(false);
  return (
    <div  onClick={()=> setexpand(!expand)} className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer'>
      <div className='flex justify-between items-center gap-4'>
        
        <div>
          <h2>{item.prompt}</h2>
          <p className='text-gray-500'>
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        <button className='bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full'>
          {item.type}
        </button>

      </div>
     {
  expand && ( // only render if expanded is true
    <div>
      {item.type === 'image' ? (   // check type
        <div>
          <img
            src={item.content}
            alt="image"
            className='mt-3 w-full max-w-md'
          />
        </div>
      ) : (
        <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-700'>
          <div>
            <Markdown>{item.content}</Markdown>
            
          </div>
        </div>
      )}
    </div>
  )
}
</div>
  )
};

export default CreationItem