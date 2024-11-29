import React from "react";
import { useNavigate } from "react-router-dom";

const InterviewItemCard = ({ interview }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="font-bold text-indigo-600">{interview.jobPosition}</h2>
      <p>{interview.jobExperience} Years of Experience</p>
      <p className="text-gray-500 text-sm">Created at: {interview.createdAt}</p>
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => navigate(`/dashboard/interview/${interview.id}/feedback`)}
          className="text-white bg-green-500 px-3 py-1 rounded"
        >
          Feedback
        </button>
        <button
          onClick={() => navigate(`/dashboard/interview/${interview.id}/start`)}
          className="text-white bg-blue-500 px-3 py-1 rounded"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
