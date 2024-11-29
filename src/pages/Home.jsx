import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-blue-600 text-white py-4 text-center text-2xl font-bold">
        AI Interview Mocker
      </header>
      <section className="flex flex-col items-center mt-10">
        <img
          src="/assets/robot.webp"
          alt="hero"
          className="w-1/2 max-w-xs mb-6"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Interview Mocker</h1>
          <p className="text-lg mb-6">Prepare with realistic mock interviews.</p>
          <div className="space-x-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Practice Now
            </button>
            <button
              onClick={() => navigate("/dashboard/upgrade")}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
            >
              Upgrade
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
