import React from "react";

export const AddTask = () => {
  return (
    <div className="flex justify-center mt-4">
      <button className="px-4 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-900">
        Add a task!
      </button>
    </div>
  );
};

export const TaskTable = () => {
  return (
    <table className="table-auto bg-gray-800 text-white border-collapse mt-4">
      <thead>
        <tr>
          <th className="border border-gray-600 px-4 py-2">Task</th>
          <th className="border border-gray-600 px-4 py-2">Status</th>
        </tr>
      </thead>
    </table>
  );
};
