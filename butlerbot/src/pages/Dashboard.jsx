// // import React from "react";
// // import styled from "styled-components";
// // import { FaBatteryThreeQuarters, FaClipboardList, FaUsers, FaRobot } from "react-icons/fa";

// // const Dashboard = () => {
// //   // Static data from the image
// //   const batteryLevel = "85%";
// //   const pendingTasksCount = 12;
// //   const activeGuests = 5;
// //   const robotStatus = "Delivering";

// //   const pendingTasks = [
// //     { task: "Deliver Food", room: 101, priority: "High" },
// //     { task: "Clean Room", room: 203, priority: "Medium" },
// //     { task: "Waste Pickup", room: 305, priority: "Low" },
// //   ];

// //   const recentActivity = [
// //     { time: "20:15", description: "Robot started food delivery to Room 101" },
// //     { time: "18:30", description: "Waste collected from Room 305" },
// //     { time: "18:30", description: "Room 203 cleaning completed" },
// //   ];

// //   return (
// //     <Wrapper>
// //       <div className="dashboard">
// //         {/* Heading */}
// //         <header>
// //           <h1>Admin Dashboard</h1>
// //         </header>

// //         {/* Top Status Cards */}
// //         <div className="status-grid">
// //           <StatusCard>
// //             <FaBatteryThreeQuarters />
// //             <span className="label">Battery Level</span>
// //             <span className="value">{batteryLevel}</span>
// //           </StatusCard>
// //           <StatusCard>
// //             <FaClipboardList />
// //             <span className="label">Pending Tasks</span>
// //             <span className="value">{pendingTasksCount}</span>
// //           </StatusCard>
// //           <StatusCard>
// //             <FaUsers />
// //             <span className="label">Active Guests</span>
// //             <span className="value">{activeGuests}</span>
// //           </StatusCard>
// //           <StatusCard>
// //             <FaRobot />
// //             <span className="label">Robot Status</span>
// //             <span className="value">{robotStatus}</span>
// //           </StatusCard>
// //         </div>

// //         {/* Middle Panels */}
// //         <div className="main-grid">
// //           {/* Pending Tasks */}
// //           <MainCard>
// //             <h3>Pending Tasks</h3>
// //             <table>
// //               <thead>
// //                 <tr>
// //                   <th>Task</th>
// //                   <th>Room</th>
// //                   <th>Priority</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {pendingTasks.map((task, idx) => (
// //                   <tr key={idx}>
// //                     <td>{task.task}</td>
// //                     <td>{task.room}</td>
// //                     <td>{task.priority}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </MainCard>

// //           {/* Recent Activity */}
// //           <MainCard>
// //             <h3>Recent Activity</h3>
// //             <ul className="activity-list">
// //               {recentActivity.map((item, idx) => (
// //                 <li key={idx}>
// //                   <strong>[{item.time}]</strong> {item.description}
// //                 </li>
// //               ))}
// //             </ul>
// //           </MainCard>
// //         </div>

// //         {/* Bottom Action Buttons */}
// //         <div className="action-buttons">
// //           <button className="start">Start Cleaning</button>
// //           <button className="deliver">Deliver Order</button>
// //           <button className="stop">Emergency Stop</button>
// //         </div>
// //       </div>
// //     </Wrapper>
// //   );
// // };

// // export default Dashboard;

// // // Styled Components
// // const Wrapper = styled.div`
// //   min-height: 100vh;
// //   background: linear-gradient(135deg, #fde2e4, #f9bcc3);
// //   padding: 30px;
// //   display: flex;
// //   justify-content: center;
// //   align-items: flex-start;

// //   .dashboard {
// //     width: 100%;
// //     max-width: 1000px;
// //   }

// //   header {
// //     text-align: center;
// //     margin-bottom: 25px;
// //   }

// //   header h1 {
// //     font-size: 2rem;
// //     font-weight: bold;
// //     color: #222;
// //   }

// //   .status-grid {
// //     display: grid;
// //     grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
// //     gap: 20px;
// //     margin-bottom: 20px;
// //   }

// //   .main-grid {
// //     display: grid;
// //     grid-template-columns: 1fr 1fr;
// //     gap: 20px;
// //     margin-bottom: 20px;

// //     @media (max-width: 768px) {
// //       grid-template-columns: 1fr;
// //     }
// //   }

// //   .action-buttons {
// //     display: flex;
// //     gap: 15px;
// //     justify-content: center;
// //     flex-wrap: wrap;
// //   }

// //   .action-buttons button {
// //     padding: 12px 25px;
// //     border: none;
// //     border-radius: 8px;
// //     font-weight: bold;
// //     font-size: 1rem;
// //     cursor: pointer;
// //     color: white;
// //   }

// //   .start {
// //     background-color: #f25d80ff;
// //   }

// //   .deliver {
// //     background-color: #f25d80ff;
// //   }

// //   .stop {
// //     background-color: #f25d80ff;
// //   }

// //   .action-buttons button:hover {
// //     opacity: 0.9;
// //   }
// // `;

// // const StatusCard = styled.div`
// //   background: white;
// //   border-radius: 12px;
// //   padding: 20px;
// //   text-align: center;
// //   border: 1px solid rgba(0, 0, 0, 0.06);
// //   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

// //   svg {
// //     font-size: 28px;
// //     color: #f73864;
// //     margin-bottom: 8px;
// //   }

// //   .label {
// //     display: block;
// //     font-size: 0.85rem;
// //     opacity: 0.7;
// //   }

// //   .value {
// //     font-size: 1.4rem;
// //     font-weight: bold;
// //   }
// // `;

// // const MainCard = styled.div`
// //   background: white;
// //   border-radius: 12px;
// //   padding: 20px;
// //   border: 1px solid rgba(0, 0, 0, 0.06);
// //   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

// //   h3 {
// //     margin-bottom: 15px;
// //     font-size: 1.2rem;
// //   }

// //   table {
// //     width: 100%;
// //     border-collapse: collapse;
// //   }

// //   th, td {
// //     text-align: left;
// //     padding: 8px;
// //   }

// //   th {
// //     font-weight: bold;
// //     opacity: 0.8;
// //   }

// //   tbody tr:nth-child(even) {
// //     background-color: #f9f9f9;
// //   }

// //   .activity-list {
// //     list-style: none;
// //     padding: 0;
// //     margin: 0;
// //   }

// //   .activity-list li {
// //     margin-bottom: 8px;
// //     font-size: 0.95rem;
// //   }
// // `;


// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { FaBatteryThreeQuarters, FaClipboardList, FaUsers, FaRobot } from "react-icons/fa";
// import { db } from "../firebase";
// import { ref, onValue, update } from "firebase/database";

// const Dashboard = () => {
//   // ✅ Static robot/system data (later can also come from Firebase)
//   const batteryLevel = "85%";
//   const activeGuests = 5;
//   const robotStatus = "Delivering";

//   // ✅ Dynamic data from Firebase
//   const [pendingTasks, setPendingTasks] = useState([]);
//   const [recentActivity, setRecentActivity] = useState([]);

//   useEffect(() => {
//     const requestRef = ref(db, "requests");
//     onValue(requestRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const formatted = Object.keys(data).map((key) => ({
//           id: key,
//           ...data[key],
//         }));
//         setPendingTasks(formatted.filter((t) => t.status !== "completed"));
//         setRecentActivity(formatted.slice(-5).reverse()); // last 5 activities
//       }
//     });
//   }, []);

//   // ✅ Update status in Firebase
//   const updateStatus = (id, status) => {
//     const requestRef = ref(db, `requests/${id}`);
//     update(requestRef, { status });
//   };

//   return (
//     <Wrapper>
//       <div className="dashboard">
//         {/* Heading */}
//         <header>
//           <h1>Admin Dashboard</h1>
//         </header>

//         {/* Top Status Cards */}
//         <div className="status-grid">
//           <StatusCard>
//             <FaBatteryThreeQuarters />
//             <span className="label">Battery Level</span>
//             <span className="value">{batteryLevel}</span>
//           </StatusCard>
//           <StatusCard>
//             <FaClipboardList />
//             <span className="label">Pending Tasks</span>
//             <span className="value">{pendingTasks.length}</span>
//           </StatusCard>
//           <StatusCard>
//             <FaUsers />
//             <span className="label">Active Guests</span>
//             <span className="value">{activeGuests}</span>
//           </StatusCard>
//           <StatusCard>
//             <FaRobot />
//             <span className="label">Robot Status</span>
//             <span className="value">{robotStatus}</span>
//           </StatusCard>
//         </div>

//         {/* Middle Panels */}
//         <div className="main-grid">
//           {/* Pending Tasks */}
//           <MainCard>
//             <h3>Pending Tasks</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Task</th>
//                   <th>Room</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {pendingTasks.map((task, idx) => (
//                   <tr key={task.id}>
//                     <td>{task.task}</td>
//                     <td>{task.location}</td>
//                     <td>{task.status}</td>
//                     <td>
//                       {task.status === "pending" && (
//                         <button
//                           onClick={() => updateStatus(task.id, "in-progress")}
//                           className="btn-action"
//                         >
//                           Accept
//                         </button>
//                       )}
//                       {task.status === "in-progress" && (
//                         <button
//                           onClick={() => updateStatus(task.id, "completed")}
//                           className="btn-complete"
//                         >
//                           Done
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </MainCard>

//           {/* Recent Activity */}
//           <MainCard>
//             <h3>Recent Activity</h3>
//             <ul className="activity-list">
//               {recentActivity.map((item) => (
//                 <li key={item.id}>
//                   <strong>[{new Date(item.timestamp).toLocaleTimeString()}]</strong>{" "}
//                   {item.task} → {item.location} ({item.status})
//                 </li>
//               ))}
//             </ul>
//           </MainCard>
//         </div>

//         {/* Bottom Action Buttons (robot controls, static for now) */}
//         <div className="action-buttons">
//           <button className="start">Start Cleaning</button>
//           <button className="deliver">Deliver Order</button>
//           <button className="stop">Emergency Stop</button>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Dashboard;

// // Styled Components
// const Wrapper = styled.div`
//   min-height: 100vh;
//   background: linear-gradient(135deg, #fde2e4, #f9bcc3);
//   padding: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;

//   .dashboard {
//     width: 100%;
//     max-width: 1000px;
//   }

//   header {
//     text-align: center;
//     margin-bottom: 25px;
//   }

//   header h1 {
//     font-size: 2rem;
//     font-weight: bold;
//     color: #222;
//   }

//   .status-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//     gap: 20px;
//     margin-bottom: 20px;
//   }

//   .main-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 20px;
//     margin-bottom: 20px;

//     @media (max-width: 768px) {
//       grid-template-columns: 1fr;
//     }
//   }

//   .action-buttons {
//     display: flex;
//     gap: 15px;
//     justify-content: center;
//     flex-wrap: wrap;
//   }

//   .action-buttons button {
//     padding: 12px 25px;
//     border: none;
//     border-radius: 8px;
//     font-weight: bold;
//     font-size: 1rem;
//     cursor: pointer;
//     color: white;
//   }

//   .start {
//     background-color: #f25d80;
//   }

//   .deliver {
//     background-color: #f25d80;
//   }

//   .stop {
//     background-color: #f25d80;
//   }

//   .action-buttons button:hover {
//     opacity: 0.9;
//   }

//   .btn-action {
//     background: #007bff;
//     color: white;
//     border: none;
//     padding: 5px 10px;
//     border-radius: 6px;
//     cursor: pointer;
//   }

//   .btn-complete {
//     background: #28a745;
//     color: white;
//     border: none;
//     padding: 5px 10px;
//     border-radius: 6px;
//     cursor: pointer;
//   }
// `;

// const StatusCard = styled.div`
//   background: white;
//   border-radius: 12px;
//   padding: 20px;
//   text-align: center;
//   border: 1px solid rgba(0, 0, 0, 0.06);
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

//   svg {
//     font-size: 28px;
//     color: #f73864;
//     margin-bottom: 8px;
//   }

//   .label {
//     display: block;
//     font-size: 0.85rem;
//     opacity: 0.7;
//   }

//   .value {
//     font-size: 1.4rem;
//     font-weight: bold;
//   }
// `;

// const MainCard = styled.div`
//   background: white;
//   border-radius: 12px;
//   padding: 20px;
//   border: 1px solid rgba(0, 0, 0, 0.06);
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

//   h3 {
//     margin-bottom: 15px;
//     font-size: 1.2rem;
//   }

//   table {
//     width: 100%;
//     border-collapse: collapse;
//   }

//   th,
//   td {
//     text-align: left;
//     padding: 8px;
//   }

//   th {
//     font-weight: bold;
//     opacity: 0.8;
//   }

//   tbody tr:nth-child(even) {
//     background-color: #f9f9f9;
//   }

//   .activity-list {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }

//   .activity-list li {
//     margin-bottom: 8px;
//     font-size: 0.95rem;
//   }
// `
// ;

/*
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBatteryThreeQuarters, FaClipboardList, FaRobot } from "react-icons/fa";
import { db } from "../firebase";
import { ref, onValue, update } from "firebase/database";

const Dashboard = () => {
  // ✅ Static robot/system data (could come from Firebase later)
  const batteryLevel = "85%";
  const robotStatus = "Idle";

  // ✅ Dynamic data from Firebase
  const [tasks, setTasks] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    const requestRef = ref(db, "requests");
    onValue(requestRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTasks(formatted);
        setRecentActivity(formatted.slice(-5).reverse()); // last 5 updates
      }
    });
  }, []);

  // ✅ Update task status
  const updateStatus = (id, status) => {
    const requestRef = ref(db, `requests/${id}`);
    update(requestRef, { status, updatedAt: Date.now() });
  };

  return (
    <Wrapper>
      <div className="dashboard">
        <header>
          <h1>Admin Dashboard</h1>
        </header>

       
        <div className="status-grid">
          <StatusCard>
            <FaBatteryThreeQuarters />
            <span className="label">Battery Level</span>
            <span className="value">{batteryLevel}</span>
          </StatusCard>
          <StatusCard>
            <FaClipboardList />
            <span className="label">Pending Tasks</span>
            <span className="value">{tasks.filter((t) => t.status !== "completed").length}</span>
          </StatusCard>
          <StatusCard>
            <FaRobot />
            <span className="label">Robot Status</span>
            <span className="value">{robotStatus}</span>
          </StatusCard>
        </div>

    
        <div className="main-grid">
          <MainCard>
            <h3>Pending Tasks</h3>
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Room</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks
                  .filter((t) => t.status !== "completed")
                  .map((task) => (
                    <tr key={task.id}>
                      <td>{task.task}</td>
                      <td>{task.location}</td>
                      <td>{task.status}</td>
                      <td>
                        {task.status === "pending" && (
                          <>
                            <button
                              onClick={() => updateStatus(task.id, "in-progress")}
                              className="btn-action"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => updateStatus(task.id, "assigned")}
                              className="btn-assign"
                            >
                              Assign to Robot
                            </button>
                          </>
                        )}
                        {task.status === "in-progress" && (
                          <button
                            onClick={() => updateStatus(task.id, "completed")}
                            className="btn-complete"
                          >
                            Done
                          </button>
                        )}
                        {task.status === "assigned" && (
                          <span className="robot-label">📡 Sent to Robot</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </MainCard>

          <MainCard>
            <h3>Recent Activity</h3>
            <ul className="activity-list">
              {recentActivity.map((item) => (
                <li key={item.id}>
                  <strong>
                    [{new Date(item.updatedAt || item.timestamp).toLocaleTimeString()}]
                  </strong>{" "}
                  {item.task} → {item.location} ({item.status})
                </li>
              ))}
            </ul>
          </MainCard>
        </div>

        
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
    background-color: #f25d80;
  }

  .deliver {
    background-color: #f25d80;
  }

  .stop {
    background-color: #f25d80;
  }

  .action-buttons button:hover {
    opacity: 0.9;
  }

  .btn-action {
    background: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 6px;
    cursor: pointer;
  }

  .btn-assign {
    background: #ff9800;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
  }

  .btn-complete {
    background: #28a745;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
  }

  .robot-label {
    font-size: 0.9rem;
    font-weight: bold;
    color: #555;
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

  th,
  td {
ch    text-align: left;
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


*/
/*
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBatteryThreeQuarters, FaClipboardList, FaRobot } from "react-icons/fa";
import { db } from "../firebase";
import { ref, onValue, update } from "firebase/database";

const Dashboard = () => {
  const batteryLevel = "85%";
  const robotStatus = "Idle";

  const [tasks, setTasks] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    const requestRef = ref(db, "requests");
    onValue(requestRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTasks(formatted);
        setRecentActivity(formatted.slice(-5).reverse());
      }
    });
  }, []);

  const updateStatus = (id, status) => {
    const requestRef = ref(db, `requests/${id}`);
    update(requestRef, { status, updatedAt: Date.now() });
  };

  return (
    <Wrapper>
      <div className="dashboard">
        <header>
          <h1>Admin Dashboard</h1>
        </header>

       
        <div className="status-grid">
          <StatusCard>
            <FaBatteryThreeQuarters />
            <span className="label">Battery Level</span>
            <span className="value">{batteryLevel}</span>
          </StatusCard>
          <StatusCard>
            <FaClipboardList />
            <span className="label">Pending Tasks</span>
            <span className="value">{tasks.filter((t) => t.status !== "completed").length}</span>
          </StatusCard>
          <StatusCard>
            <FaRobot />
            <span className="label">Robot Status</span>
            <span className="value">{robotStatus}</span>
          </StatusCard>
        </div>

       
        <div className="main-grid">
          <MainCard>
            <h3>Pending Tasks</h3>
            <ScrollArea>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Room</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks
                    .filter((t) => t.status !== "completed")
                    .map((task) => (
                      <tr key={task.id}>
                        <td>{task.task}</td>
                        <td>{task.location}</td>
                        <td>{task.status}</td>
                        <td>
                          {task.status === "pending" && (
                            <>
                              <button
                                onClick={() => updateStatus(task.id, "in-progress")}
                                className="btn-action"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() => updateStatus(task.id, "assigned")}
                                className="btn-assign"
                              >
                                Assign to Robot
                              </button>
                            </>
                          )}
                          {task.status === "in-progress" && (
                            <button
                              onClick={() => updateStatus(task.id, "completed")}
                              className="btn-complete"
                            >
                              Done
                            </button>
                          )}
                          {task.status === "assigned" && (
                            <span className="robot-label">Sent to Robot</span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </ScrollArea>
          </MainCard>

          <MainCard>
            <h3>Recent Activity</h3>
            <ScrollArea>
              <ul className="activity-list">
                {recentActivity.map((item) => (
                  <li key={item.id}>
                    <strong>
                      [{new Date(item.updatedAt || item.timestamp).toLocaleTimeString()}]
                    </strong>{" "}
                    {item.task} → {item.location} ({item.status})
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </MainCard>
        </div>

        
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

  .start,
  .deliver,
  .stop {
    background-color: #f25d80;
  }

  .action-buttons button:hover {
    opacity: 0.9;
  }

  .btn-action {
    background: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 6px;
    cursor: pointer;
  }

  .btn-assign {
    background: #ff9800;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
  }

  .btn-complete {
    background: #28a745;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
  }

  .robot-label {
    font-size: 0.9rem;
    font-weight: bold;
    color: #555;
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
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 15px;
    font-size: 1.2rem;
    font-weight: 700;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
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


const ScrollArea = styled.div`
  max-height: 250px;
  overflow-y: auto;
  padding-right: 6px;


  &::-webkit-scrollbar {
    width: 4px;   
  }
  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
*/

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaBatteryThreeQuarters,
  FaClipboardList,
  FaRobot,
  FaBars,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

// Firebase imports
import { ref as rtdbRef, onValue, update } from "firebase/database";
import { db, auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const fs = getFirestore();

const Dashboard = () => {
  // UI + Data state
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  // Auth user + profile
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  });

  const navigate = useNavigate();

  // ----- Auth listener -----
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) await ensureAndLoadUserDoc(u);
    });
    return () => unsub();
  }, []);

  // ----- Load/initialize Firestore user doc -----
  const ensureAndLoadUserDoc = async (u) => {
    try {
      const userRef = doc(fs, "users", u.uid);
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        await setDoc(userRef, { status: "Admin" }, { merge: true });
      }
      setProfile({
        displayName: u.displayName || "Admin User",
        email: u.email || "",
        photoURL: u.photoURL || "",
      });
    } catch (err) {
      console.error("Failed to load admin profile:", err);
    }
  };

  // ----- Realtime DB: requests list -----
  useEffect(() => {
    const requestRef = rtdbRef(db, "requests");
    const unsub = onValue(requestRef, (snapshot) => {
      const data = snapshot.val() || {};
      const formatted = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setTasks(formatted);
      setRecentActivity(formatted.slice(-5).reverse());
    });
    return () => unsub();
  }, []);

  // ----- Update request status -----
  const updateStatus = (id, status) => {
    const requestRef = rtdbRef(db, `requests/${id}`);
    update(requestRef, { status, updatedAt: Date.now() });
  };

  // ----- Logout -----
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      alert("❌ Error signing out: " + err.message);
    }
  };

  // Fallback: if not logged in
  if (!user) {
    return (
      <Centered>
        <div className="card">
          <h2>You’re not signed in</h2>
          <button onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </Centered>
    );
  }

  const batteryLevel = "85%";
  const robotStatus = "Idle";

  return (
    <Wrapper>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen}>
        <div className="top">
          <FaBars
            className="toggle"
            onClick={() => setSidebarOpen((v) => !v)}
          />
        </div>

        {/* Profile Section */}
        <ProfileSection sidebarOpen={sidebarOpen}>
          <div className="avatar-wrap">
            {profile.photoURL ? (
              <img src={profile.photoURL} alt="Admin" />
            ) : (
              <FaUserCircle className="placeholder" />
            )}
          </div>

          {sidebarOpen && (
            <div className="info">
              <h3>{profile.displayName || "Admin User"}</h3>
              <p className="email">{profile.email || "—"}</p>
              <p>Status: Admin</p>
            </div>
          )}
        </ProfileSection>

        {/* Logout at bottom */}
        <LogoutBtn onClick={handleSignOut}>
          <FaSignOutAlt /> {sidebarOpen && <span>Logout</span>}
        </LogoutBtn>
      </Sidebar>

      {/* Content */}
      <Content>
        <header>
          <h1>Admin Dashboard</h1>
        </header>

        <div className="status-grid">
          <StatusCard>
            <FaBatteryThreeQuarters />
            <span className="label">Battery Level</span>
            <span className="value">{batteryLevel}</span>
          </StatusCard>
          <StatusCard>
            <FaClipboardList />
            <span className="label">Pending Tasks</span>
            <span className="value">
              {tasks.filter((t) => t.status !== "completed").length}
            </span>
          </StatusCard>
          <StatusCard>
            <FaRobot />
            <span className="label">Robot Status</span>
            <span className="value">{robotStatus}</span>
          </StatusCard>
        </div>

        <div className="main-grid">
          {/* Pending Tasks */}
          <MainCard>
            <h3>Pending Tasks</h3>
            <ScrollArea>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Room</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks
                    .filter((t) => t.status !== "completed")
                    .map((task) => (
                      <tr key={task.id}>
                        <td>{task.task}</td>
                        <td>{task.location}</td>
                        <td>{task.status}</td>
                        <td>
                          {task.status === "pending" && (
                            <>
                              <button
                                onClick={() =>
                                  updateStatus(task.id, "in-progress")
                                }
                                className="btn-action"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() =>
                                  updateStatus(task.id, "assigned")
                                }
                                className="btn-assign"
                              >
                                Assign to Robot
                              </button>
                            </>
                          )}
                          {task.status === "in-progress" && (
                            <button
                              onClick={() =>
                                updateStatus(task.id, "completed")
                              }
                              className="btn-complete"
                            >
                              Done
                            </button>
                          )}
                          {task.status === "assigned" && (
                            <span className="robot-label">Sent to Robot</span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </ScrollArea>
          </MainCard>

          {/* Recent Activity */}
          <MainCard>
            <h3>Recent Activity</h3>
            <ScrollArea>
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Task</th>
                    <th>Room</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((item) => (
                    <tr key={item.id}>
                      <td>
                        {new Date(
                          item.updatedAt || item.timestamp || Date.now()
                        ).toLocaleTimeString()}
                      </td>
                      <td>{item.task}</td>
                      <td>{item.location}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollArea>
          </MainCard>
        </div>

        {/* Action Buttons */}
        <ActionButtons>
          <button className="start">Start Cleaning</button>
          <button className="deliver">Deliver Order</button>
          <button className="stop">Emergency Stop</button>
        </ActionButtons>
      </Content>
    </Wrapper>
  );
};

export default Dashboard;

/* ===================== STYLES ===================== */
const Centered = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #fde2e4, #f9bcc3);
  .card {
    background: #fff;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
    text-align: center;
  }
  button {
    margin-top: 10px;
    padding: 10px 16px;
    border-radius: 10px;
    border: none;
    background: #f73864;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #fde2e4, #f9bcc3);
`;

const Sidebar = styled.aside`
  width: ${({ sidebarOpen }) => (sidebarOpen ? "260px" : "80px")};
  background: #ffffff;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  padding: 16px;
  transition: width 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 14px;
  .top {
    display: flex;
    justify-content: ${({ sidebarOpen }) =>
      sidebarOpen ? "flex-end" : "center"};
  }
  .toggle {
    font-size: 20px;
    cursor: pointer;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 8px 6px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  .avatar-wrap {
    display: grid;
    place-items: center;
    gap: 10px;
  }
  img {
    width: 78px;
    height: 78px;
    border-radius: 50%;
    object-fit: cover;
  }
  .placeholder {
    font-size: 78px;
    color: #bbb;
  }
  .info {
    text-align: center;
  }
  h3 {
    margin: 2px 0;
    font-size: 1rem;
  }
  .email {
    font-size: 0.85rem;
    color: #666;
  }
`;

const LogoutBtn = styled.button`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #f25d80;
  color: #fff;
  border: none;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 800;
  &:hover {
    opacity: 0.9;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 28px;
  header {
    text-align: center;
    margin-bottom: 22px;
  }
  header h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #1f1f1f;
  }
  .status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 18px;
    margin-bottom: 20px;
  }
  .main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 900px) {
    .main-grid {
      grid-template-columns: 1fr;
    }
  }
  .btn-action {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 6px 10px;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 6px;
  }
  .btn-assign {
    background: #ff9800;
    color: #fff;
    border: none;
    padding: 6px 10px;
    border-radius: 8px;
    cursor: pointer;
  }
  .btn-complete {
    background: #28a745;
    color: #fff;
    border: none;
    padding: 6px 10px;
    border-radius: 8px;
    cursor: pointer;
  }
  .robot-label {
    font-weight: 700;
    color: #555;
  }
`;

const StatusCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 18px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
  svg {
    font-size: 26px;
    color: #f73864;
    margin-bottom: 8px;
  }
  .label {
    display: block;
    font-size: 0.9rem;
    opacity: 0.75;
  }
  .value {
    font-size: 1.3rem;
    font-weight: 800;
  }
`;

const MainCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 18px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  h3 {
    margin-bottom: 12px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    text-align: left;
    padding: 8px;
  }
  tbody tr:nth-child(even) {
    background: #fafafa;
  }
`;

const ScrollArea = styled.div`
  max-height: 260px;
  overflow-y: auto;
  padding-right: 6px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  button {
    padding: 12px 25px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    color: white;
    transition: all 0.2s ease-in-out;
  }
  .start {
    background: #fc516bff;
  }
  .deliver {
    background: #fc516bff;
  }
  .stop {
    background: #fc516bff;
  }
  button:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;
