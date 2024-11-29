import React from "react";

const AddNewInterview = () => {
  const handleAddNew = () => {
    alert("This would open a form to add a new interview.");
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-100 hover:shadow-lg cursor-pointer">
      <h2 className="text-center text-lg font-semibold">+ Add New Interview</h2>
      <button onClick={handleAddNew} className="hidden">
        Add Interview
      </button>
    </div>
  );
};

export default AddNewInterview;
