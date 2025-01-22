import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  console.log(userData.employees);
  return (
    <div className='bg-[#1c1c1c] rounded p-5 mt-5'>
      <div className="bg-green-400 px-4 py-2 flex justify-between rounded mb-2">
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>

      {/* Map over the employees data */}
      {userData.map((elem, index) => (
        <div key={index} className="border-2 border-emerald-500 px-4 py-2 flex justify-between rounded mb-2">
          <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
          <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
          <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
          <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskCounts.completed}</h5>
          <h5 className='text-lg font-medium w-1/5 text-rose-400'>{elem.taskCounts.failed}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;