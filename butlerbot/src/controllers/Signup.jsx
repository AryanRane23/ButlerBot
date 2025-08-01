import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signup clicked: ${username}, Remember: ${remember}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl w-full overflow-hidden">

        {/* Left illustration */}
        <div className="w-1/2 bg-white flex items-center justify-center p-6">
          <img
            src="/signup-art.png" // Place your new image in public folder
            alt="Signup Art"
            className="max-w-xs h-auto"
          />
        </div>

        {/* Right form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign up</h2>
          <form onSubmit={handleSignup}>

            <div className="mb-4 flex items-center border border-gray-300 rounded-md p-2">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>

            <div className="mb-4 flex items-center border border-gray-300 rounded-md p-2">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="mr-2"
              />
              <label className="text-sm text-gray-600">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition duration-200"
            >
              Log in
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600 text-center">
            <p>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Or login with</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="bg-blue-600 text-white p-2 rounded-full">f</button>
              <button className="bg-blue-400 text-white p-2 rounded-full">t</button>
              <button className="bg-red-500 text-white p-2 rounded-full">G</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
