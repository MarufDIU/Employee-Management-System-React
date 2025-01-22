import React from "react";

const TaskListNumbers = ({data}) => {
  return (
    <div>
      <div className="flex w-full mt-10 justify-between gap-5">
        
        <div className="rounded-xl h-25 w-[30%] px-5 py-4 bg-blue-400">
          <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
          <h3 className="text-xl font-semibold">New Task</h3>
        </div>
        <div className="rounded-xl h-25 w-[30%] px-5 py-4 bg-green-400">
          <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
          <h3 className="text-xl font-semibold">Completed Task</h3>
        </div>
        <div className="rounded-xl h-25 w-[30%] px-5 py-4 bg-yellow-400">
          <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
          <h3 className="text-xl font-semibold">Accepted Task</h3>
        </div>
        <div className="rounded-xl h-25 w-[30%] px-5 py-4 bg-red-400">
          <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
          <h3 className="text-xl font-semibold">Failed Task</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;
