import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("bg-white");

  return (
    <div className={`h-screen flex items-center justify-center ${bgColor}`}>
      <button
        onClick={() => setBgColor("bg-red-500")}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
      >
        Red
      </button>
      <button
        onClick={() => setBgColor("bg-blue-500")}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ml-4"
      >
        Blue
      </button>
      <button
        onClick={() => setBgColor("bg-green-500")}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 ml-4"
      >
        Green
      </button>
      <button
        onClick={() => setBgColor("bg-yellow-500")}
        className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 ml-4"
      >
        Yellow
      </button>
    </div>
  );
}

export default App;

