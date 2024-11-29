import React from "react";

const QuestionsSection = ({ questions, activeQuestionIndex, setActiveQuestionIndex }) => {
  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h2 className="font-bold">Question {activeQuestionIndex + 1}:</h2>
      <p className="mt-2">{questions[activeQuestionIndex]?.question}</p>

      <div className="mt-4 flex gap-2">
        {activeQuestionIndex > 0 && (
          <button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
            className="text-white bg-gray-500 px-3 py-1 rounded"
          >
            Previous
          </button>
        )}
        {activeQuestionIndex < questions.length - 1 && (
          <button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
            className="text-white bg-indigo-500 px-3 py-1 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionsSection;
