import React, { useState } from "react";
import QuestionsSection from "../components/QuestionsSection";
import RecordAnswerSection from "../components/RecordAnswerSection";
import mockQuestions from "../utils/questions.json";

const StartInterview = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  return (
    <div>
      <QuestionsSection
        questions={mockQuestions}
        activeQuestionIndex={activeQuestionIndex}
        setActiveQuestionIndex={setActiveQuestionIndex}
      />
      <RecordAnswerSection question={mockQuestions[activeQuestionIndex]} />
    </div>
  );
};

export default StartInterview;
