import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBatteryThreeQuarters, FaMapMarkerAlt, FaUtensils, FaBroom, FaTrash } from 'react-icons/fa';


const GuestDash = () => {
  const [taskName, setTaskName] = useState('');
  const [location, setLocation] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Task: ${taskName}, Location: ${location}`);
    setTaskName('');
    setLocation('');
  };


  return (
    <Wrapper>
      <div className="container">
         <h2 style={{ textAlign: "center" }}>Guest Dashboard</h2>
       
        <p className="subtext">Welcome! Check robot status and request services.</p>


        {/* Robot Status */}
        <div className="card status-card">
          <div className="status-item">
            <FaBatteryThreeQuarters size={20} />
            <span>85%</span>
          </div>
          <div className="status-item">
            <FaMapMarkerAlt size={20} />
            <span>Lobby</span>
          </div>
          <div className="status-item">
            <FaUtensils size={20} />
            <span>Delivering food</span>
          </div>
        </div>


        <div className="bottom-section">
          {/* Quick Actions */}
          <div className="card quick-actions">
            <h3 className="card-title">Quick Actions</h3>
            <div className="actions">
              <button>
                <FaBroom size={18} />
                <span>Request Cleaning</span>
              </button>
              <button>
                <FaUtensils size={18} />
                <span>Order Food</span>
              </button>
              <button>
                <FaTrash size={18} />
                <span>Request Waste Pickup</span>
              </button>
            </div>
          </div>


          {/* Request a Task */}
          <div className="card request-task">
            <h3 className="card-title">Request a Task</h3>
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
  background: linear-gradient(to bottom right, #ffe4f1, #fddde6);
  display: flex;
  justify-content: center;
  padding: 60px; /* Increased padding */


  .container {
    max-width: 1100px; /* Wider layout */
    width: 100%;
  }


  .heading {
    font-size: 2.2rem; /* Bigger heading */
    font-weight: bold;
  }


  .subtext {
    color: #555;
    font-size: 1.1rem;
    margin-bottom: 30px;
  }


  .card {
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 6px 25px rgba(0,0,0,0.05);
    padding: 30px; /* Bigger card padding */
  }


  .status-card {
    display: flex;
    justify-content: space-around; /* Spread evenly */
    align-items: center;
    margin-bottom: 30px;
    padding: 25px; /* Taller */
    font-size: 1.2rem; /* Larger text */
  }


  .status-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
  }


  .status-item svg {
    font-size: 26px; /* Bigger icons */
  }


  .bottom-section {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
  }


  .quick-actions {
    flex: 2;
  }


  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }


  .actions {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }


  .actions button {
    flex: 1;
    min-width: 150px; /* Bigger buttons */
    background: #e68299ff;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 20px; /* Larger padding */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 1rem; /* Bigger text */
    cursor: pointer;
    transition: 0.3s;
  }


  .actions button svg {
    font-size: 24px; /* Bigger icons */
  }


  .actions button:hover {
    background: #ffe4f1;
  }


  .request-task {
    flex: 1;
  }


  .request-task form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }


  .request-task input {
    padding: 14px; /* Taller input fields */
    border-radius: 8px;
    border: 1px solid #ff6f91;
    font-size: 1rem;
  }


  .request-task button {
    background: #ff8fa3;
    color: #fff;
    padding: 14px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
  }


  .request-task button:hover {
    background: #ff6f91;
  }
`;
export default GuestDash;
