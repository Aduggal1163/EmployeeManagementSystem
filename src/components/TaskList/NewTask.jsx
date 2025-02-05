import React from 'react'

const NewTask = () => {
  return (
    <div className="flex-shrink-0 p-5 ml-6 h-full w-[300px] bg-blue-600 rounded-xl">
        <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
            Make a video about the importance of self-care and how it can improve your mental health. The video
        </p>
        <div className='mt-4'>
            <button className='px-2 py-3 mt-6 bg-pink-600'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
