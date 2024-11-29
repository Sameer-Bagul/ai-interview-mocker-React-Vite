import React from "react";
import Header from "../components/Header";
import AddNewInterview from "../components/AddNewInterview";
import InterviewList from "../components/InterviewList";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <h2>Dashboard</h2>
        <AddNewInterview />
        <InterviewList />
      </div>
    </div>
  );
};

export default Dashboard;
