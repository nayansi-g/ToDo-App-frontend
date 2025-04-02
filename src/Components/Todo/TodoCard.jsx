import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCard = ({ title, body, id, delid, display }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition-all hover:shadow-xl">
      {/* Task Content */}
      <div className="mb-4">
        <h5 className="text-xl font-bold text-gray-900">{title}</h5>
        <p className="text-gray-700 line-clamp-2">{body.substring(0, 42)}...</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        {/* Update Button */}
        <button
          onClick={() => display(id)}
          className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:text-blue-800 transition-all"
        >
          <GrDocumentUpdate className="text-lg" />
          <span className="text-sm font-medium">Update</span>
        </button>

        {/* Delete Button */}
        <button
          onClick={() => delid(id)}
          className="flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-800 transition-all"
        >
          <AiFillDelete className="text-lg" />
          <span className="text-sm font-medium">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
