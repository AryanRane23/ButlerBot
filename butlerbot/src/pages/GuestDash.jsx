import React, { useState } from "react"; 
import styled from "styled-components";
import {
  FaBatteryThreeQuarters,
  FaMapMarkerAlt,
  FaUtensils,
  FaBroom,
  FaTrash,
  FaTasks,
} from "react-icons/fa";

const GuestDash = () => {
  const [taskName, setTaskName] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Task: ${taskName}, Location: ${location}`);
    setTaskName("");
    setLocation("");
  };
  return (
    <Wrapper>
      <div className="container">
        <header>
          <h1>Guest Dashboard</h1>
          <p>Welcome! Check robot status and request services.</p>
        </header>
        {/* Status Cards */}
        <div className="status-grid">
          <div className="stat-card">
            <FaBatteryThreeQuarters />
            <span className="label">Battery Level</span>
            <span className="value">85%</span>
          </div>
          <div className="stat-card">
            <FaMapMarkerAlt />
            <span className="label">Location</span>
            <span className="value">Lobby</span>
          </div>
          <div className="stat-card">
            <FaTasks />
            <span className="label">Current Task</span>
            <span className="value">Delivering Food</span>
          </div>
          <div className="stat-card">
            <FaUtensils />
            <span className="label">Robot Status</span>
            <span className="value">Active</span>
          </div>
        </div>
        {/* Bottom Grid */}
        <div className="bottom-grid">
          {/* Quick Actions */}
          <div className="card">
            <h3>Quick Actions</h3>
            <div className="actions">
              <button>
                <FaBroom size={20} />
                <span>Request Cleaning</span>
              </button>
              <button>
                <FaUtensils size={20} />
                <span>Order Food</span>
              </button>
              <button>
                <FaTrash size={20} />
                <span>Request Waste Pickup</span>
              </button>
            </div>
          </div>
          {/* Request Task */}
          <div className="card">
            <h3>Request a Task</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Location / Room No."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <button type="submit">Send Request</button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f0f1ff, #f9bcc3ff);
  padding: 40px;
  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    max-width: 1100px;
  }

  header {
    margin-bottom: 30px;
    text-align: center;
  }
  header h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #0e0e0e;
  }
  header p {
    color: rgba(39, 37, 37, 0.8);
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  /* <-- Solid white stat cards --> */
  .stat-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 22px;
    text-align: center;
    color: #222;
    /* subtle border + shadow to make white pop on pink */
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 8px 24px rgba(11, 10, 10, 0.06);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 34px rgba(11, 10, 10, 0.09);
  }
  .stat-card svg {
    font-size: 28px;
    margin-bottom: 8px;
    color: #f73864; /* accent color for the icon */
  }
  .label {
    display: block;
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 6px;
  }
  .value {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .bottom-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    flex-wrap: wrap;
  }

  /* <-- Solid white main cards --> */
  .card {
    background: #ffffff;
    border-radius: 16px;
    padding: 20px;
    color: #201e1e;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 8px 24px rgba(11, 10, 10, 0.06);
  }
  .card h3 {
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .actions button {
    flex: 1;
    min-width: 120px;
    padding: 15px;
    background: #ef7b87ff;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    color: #343232;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: 0.18s;
  }
  .actions button:hover {
    transform: translateY(-3px);
    background: #fff7f8;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 1rem;
    background: #e9d8d8ff;
    color: #d0c2c2ff;
  }
  button[type="submit"] {
    padding: 12px;
    background: #f73864;
    color: #170808ff;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    background: #e22b52;
  }

  /* small screen adjustments */
  @media (max-width: 800px) {
    .bottom-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default GuestDash;
