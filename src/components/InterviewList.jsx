import React from "react";
import InterviewItemCard from "./InterviewItemCard";

const InterviewList = () => {
  const mockInterviews = [
    { id: 1, jobPosition: "Frontend Developer", createdAt: "2024-11-01", jobExperience: "2 years" },
    { id: 2, jobPosition: "Backend Developer", createdAt: "2024-11-02", jobExperience: "3 years" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {mockInterviews.map((interview) => (
        <InterviewItemCard key={interview.id} interview={interview} />
      ))}
    </div>
  );
};

export default InterviewList;
