import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Interview = () => {
  const { interviewId } = useParams();
  const [interviewData, setInterviewData] = useState(null);

  useEffect(() => {
    // Replace with mock JSON data fetch
    const mockData = {
      id: interviewId,
      jobPosition: "Frontend Developer",
      jobDesc: "React, CSS, JavaScript",
      jobExperience: "2 years",
    };
    setInterviewData(mockData);
  }, [interviewId]);

  return (
    <div>
      <h1>Interview Details</h1>
      {interviewData && (
        <div>
          <p>Position: {interviewData.jobPosition}</p>
          <p>Description: {interviewData.jobDesc}</p>
          <p>Experience: {interviewData.jobExperience}</p>
        </div>
      )}
    </div>
  );
};

export default Interview;
