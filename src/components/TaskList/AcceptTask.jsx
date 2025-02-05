import React from 'react'

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 p-5 ml-6 h-full w-[300px] bg-yellow-600 rounded-xl">
        <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
            Make a video about the importance of self-care and how it can improve your mental health. The video
        </p>
        <div className='flex justify-between mt-5'>
        <button className='bg-green-300 py-1 px-3 text-sm'>Mark as Completed</button>
        <button className='bg-red-300 py-1 px-3 text-sm'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
