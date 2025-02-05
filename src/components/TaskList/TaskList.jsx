import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap h-[56%] w-full py-5  mt-10">
      {data.tasks.map((elt)=>{
        if(elt.active)
        {
          return <AcceptTask/>
        }
        if(elt.newTask)
        {
          return <NewTask/>
        }
        if(elt.completed)
        {
          return <CompleteTask/>
        }
        if(elt.Failed)
        {
          return <FailedTask/>
        }
      })}
    </div>
  );
};

export default TaskList;