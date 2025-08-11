import React from "react";
import styled from "styled-components";
import { FaBatteryThreeQuarters, FaClipboardList, FaUsers, FaRobot } from "react-icons/fa";

const Dashboard = () => {
  // Static data from the image
  const batteryLevel = "85%";
  const pendingTasksCount = 12;
  const activeGuests = 5;
  const robotStatus = "Delivering";

  const pendingTasks = [
    { task: "Deliver Food", room: 101, priority: "High" },
    { task: "Clean Room", room: 203, priority: "Medium" },
    { task: "Waste Pickup", room: 305, priority: "Low" },
  ];

  const recentActivity = [
    { time: "20:15", description: "Robot started food delivery to Room 101" },
    { time: "18:30", description: "Waste collected from Room 305" },
    { time: "18:30", description: "Room 203 cleaning completed" },
  ];

  return (
    <Wrapper>
      <div className="dashboard">
        {/* Heading */}
        <header>
          <h1>Admin Dashboard</h1>
        </header>

        {/* Top Status Cards */}
        <div className="status-grid">
          <StatusCard>
            <FaBatteryThreeQuarters />
            <span className="label">Battery Level</span>
            <span className="value">{batteryLevel}</span>
          </StatusCard>
          <StatusCard>
            <FaClipboardList />
            <span className="label">Pending Tasks</span>
            <span className="value">{pendingTasksCount}</span>
          </StatusCard>
          <StatusCard>
            <FaUsers />
            <span className="label">Active Guests</span>
            <span className="value">{activeGuests}</span>
          </StatusCard>
          <StatusCard>
            <FaRobot />
            <span className="label">Robot Status</span>
            <span className="value">{robotStatus}</span>
          </StatusCard>
        </div>

        {/* Middle Panels */}
        <div className="main-grid">
          {/* Pending Tasks */}
          <MainCard>
            <h3>Pending Tasks</h3>
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Room</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {pendingTasks.map((task, idx) => (
                  <tr key={idx}>
                    <td>{task.task}</td>
                    <td>{task.room}</td>
                    <td>{task.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MainCard>

          {/* Recent Activity */}
          <MainCard>
            <h3>Recent Activity</h3>
            <ul className="activity-list">
              {recentActivity.map((item, idx) => (
                <li key={idx}>
                  <strong>[{item.time}]</strong> {item.description}
                </li>
              ))}
            </ul>
          </MainCard>
        </div>

        {/* Bottom Action Buttons */}
        <div className="action-buttons">
          <button className="start">Start Cleaning</button>
          <button className="deliver">Deliver Order</button>
          <button className="stop">Emergency Stop</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;

// Styled Components
const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fde2e4, #f9bcc3);
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .dashboard {
    width: 100%;
    max-width: 1000px;
  }

  header {
    text-align: center;
    margin-bottom: 25px;
  }

  header h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #222;
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
  }

  .main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .action-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .action-buttons button {
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    color: white;
  }

  .start {
    background-color: #f25d80ff;
  }

  .deliver {
    background-color: #f25d80ff;
  }

  .stop {
    background-color: #f25d80ff;
  }

  .action-buttons button:hover {
    opacity: 0.9;
  }
`;

const StatusCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  svg {
    font-size: 28px;
    color: #f73864;
    margin-bottom: 8px;
  }

  .label {
    display: block;
    font-size: 0.85rem;
    opacity: 0.7;
  }

  .value {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const MainCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  h3 {
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    text-align: left;
    padding: 8px;
  }

  th {
    font-weight: bold;
    opacity: 0.8;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .activity-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .activity-list li {
    margin-bottom: 8px;
    font-size: 0.95rem;
  }
`;
