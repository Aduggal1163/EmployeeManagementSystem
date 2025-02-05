import React from "react";

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap h-[56%] w-full py-5  mt-10">
      <div className="flex-shrink-0 p-5 ml-6 h-full w-[300px] bg-yellow-600 rounded-xl">
        <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
            Make a video about the importance of self-care and how it can improve your mental health. The video
        </p>
      </div>

      <div className="flex-shrink-0 p-5 ml-6 h-full w-[300px] bg-blue-600 rounded-xl">
        <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
            Make a video about the importance of self-care and how it can improve your mental health. The video
        </p>
      </div>

      <div className="flex-shrink-0 p-5 ml-6 h-full w-[300px] bg-pink-600 rounded-xl">
        <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
            Make a video about the importance of self-care and how it can improve your mental health. The video
        </p>
      </div>

      <div className="flex-shrink-0 p-5 ml-6 h-full w-[300px] bg-gray-600 rounded-xl">
        <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
            Make a video about the importance of self-care and how it can improve your mental health. The video
        </p>
      </div>

      <div className="flex-shrink-0 p-5 ml-6 h-full w-[300px] bg-green-600 rounded-xl">
        <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
            Make a video about the importance of self-care and how it can improve your mental health. The video
        </p>
      </div>
    </div>
  );
};

export default TaskList;