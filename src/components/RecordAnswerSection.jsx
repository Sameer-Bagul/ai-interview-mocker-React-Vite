import React, { useState } from "react";
import Webcam from "react-webcam";

const RecordAnswerSection = ({ question }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordingToggle = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h2 className="font-bold">Your Answer:</h2>
      <Webcam className="my-4" />
      <button
        onClick={handleRecordingToggle}
        className={`px-4 py-2 rounded ${isRecording ? "bg-red-500" : "bg-blue-500"} text-white`}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
};

export default RecordAnswerSection;
