import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="alltask bg-[#121212] p-6 rounded-lg mt-5 shadow-lg">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4 py-3 px-5 flex justify-between rounded-lg text-white font-semibold shadow-md">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div className="space-y-3">
        {authData.employees.map((elt) => (
          <div
            key={elt.name}
            className="border border-gray-700 bg-[#1f1f1f] p-4 flex justify-between rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg"
          >
            <h2 className="w-1/5 text-pink-400 font-medium">{elt.name}</h2>
            <h3 className="w-1/5 text-blue-400 font-medium">
              {elt.taskCounts.newTask}
            </h3>
            <h5 className="w-1/5 text-yellow-400 font-medium">
              {elt.taskCounts.active}
            </h5>
            <h5 className="w-1/5 text-green-400 font-medium">
              {elt.taskCounts.completed}
            </h5>
            <h5 className="w-1/5 text-red-400 font-medium">
              {elt.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
