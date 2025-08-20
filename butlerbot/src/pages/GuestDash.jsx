// import React, { useState } from "react"; 
// import styled from "styled-components";
// import {
//   FaBatteryThreeQuarters,
//   FaMapMarkerAlt,
//   FaUtensils,
//   FaBroom,
//   FaTrash,
//   FaTasks,
// } from "react-icons/fa";

// const GuestDash = () => {
//   const [taskName, setTaskName] = useState("");
//   const [location, setLocation] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Task: ${taskName}, Location: ${location}`);
//     setTaskName("");
//     setLocation("");
//   };
//   return (
//     <Wrapper>
//       <div className="container">
//         <header>
//           <h1>Guest Dashboard</h1>
//           <p>Welcome! Check robot status and request services.</p>
//         </header>
//         {/* Status Cards */}
//         <div className="status-grid">
//           <div className="stat-card">
//             <FaBatteryThreeQuarters />
//             <span className="label">Battery Level</span>
//             <span className="value">85%</span>
//           </div>
//           <div className="stat-card">
//             <FaMapMarkerAlt />
//             <span className="label">Location</span>
//             <span className="value">Lobby</span>
//           </div>
//           <div className="stat-card">
//             <FaTasks />
//             <span className="label">Current Task</span>
//             <span className="value">Delivering Food</span>
//           </div>
//           <div className="stat-card">
//             <FaUtensils />
//             <span className="label">Robot Status</span>
//             <span className="value">Active</span>
//           </div>
//         </div>
//         {/* Bottom Grid */}
//         <div className="bottom-grid">
//           {/* Quick Actions */}
//           <div className="card">
//             <h3>Quick Actions</h3>
//             <div className="actions">
//               <button>
//                 <FaBroom size={20} />
//                 <span>Request Cleaning</span>
//               </button>
//               <button>
//                 <FaUtensils size={20} />
//                 <span>Order Food</span>
//               </button>
//               <button>
//                 <FaTrash size={20} />
//                 <span>Request Waste Pickup</span>
//               </button>
//             </div>
//           </div>
//           {/* Request Task */}
//           <div className="card">
//             <h3>Request a Task</h3>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Task Name"
//                 value={taskName}
//                 onChange={(e) => setTaskName(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Location / Room No."
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 required
//               />
//               <button type="submit">Send Request</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   min-height: 100vh;
//   background: linear-gradient(135deg, #f8f0f1ff, #f9bcc3ff);
//   padding: 40px;
//   display: flex;
//   justify-content: center;

//   .container {
//     width: 100%;
//     max-width: 1100px;
//   }

//   header {
//     margin-bottom: 30px;
//     text-align: center;
//   }
//   header h1 {
//     font-size: 2rem;
//     font-weight: bold;
//     color: #0e0e0e;
//   }
//   header p {
//     color: rgba(39, 37, 37, 0.8);
//   }

//   .status-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//     gap: 20px;
//     margin-bottom: 30px;
//   }

//   /* <-- Solid white stat cards --> */
//   .stat-card {
//     background: #ffffff;
//     border-radius: 16px;
//     padding: 22px;
//     text-align: center;
//     color: #222;
//     /* subtle border + shadow to make white pop on pink */
//     border: 1px solid rgba(0, 0, 0, 0.06);
//     box-shadow: 0 8px 24px rgba(11, 10, 10, 0.06);
//     transition: transform 0.18s ease, box-shadow 0.18s ease;
//   }
//   .stat-card:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 14px 34px rgba(11, 10, 10, 0.09);
//   }
//   .stat-card svg {
//     font-size: 28px;
//     margin-bottom: 8px;
//     color: #f73864; /* accent color for the icon */
//   }
//   .label {
//     display: block;
//     font-size: 0.9rem;
//     opacity: 0.8;
//     margin-bottom: 6px;
//   }
//   .value {
//     font-size: 1.3rem;
//     font-weight: bold;
//   }

//   .bottom-grid {
//     display: grid;
//     grid-template-columns: 2fr 1fr;
//     gap: 20px;
//     flex-wrap: wrap;
//   }

//   /* <-- Solid white main cards --> */
//   .card {
//     background: #ffffff;
//     border-radius: 16px;
//     padding: 20px;
//     color: #201e1e;
//     border: 1px solid rgba(0, 0, 0, 0.06);
//     box-shadow: 0 8px 24px rgba(11, 10, 10, 0.06);
//   }
//   .card h3 {
//     margin-bottom: 15px;
//     font-size: 1.2rem;
//   }

//   .actions {
//     display: flex;
//     gap: 10px;
//     flex-wrap: wrap;
//   }
//   .actions button {
//     flex: 1;
//     min-width: 120px;
//     padding: 15px;
//     background: #ef7b87ff;
//     border: 1px solid rgba(0, 0, 0, 0.06);
//     border-radius: 10px;
//     color: #343232;
//     font-weight: 500;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 8px;
//     cursor: pointer;
//     transition: 0.18s;
//   }
//   .actions button:hover {
//     transform: translateY(-3px);
//     background: #fff7f8;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }
//   input {
//     padding: 12px;
//     border-radius: 8px;
//     border: 1px solid rgba(0, 0, 0, 0.08);
//     font-size: 1rem;
//     background: #e9d8d8ff;
//     color: #d0c2c2ff;
//   }
//   button[type="submit"] {
//     padding: 12px;
//     background: #f73864;
//     color: #170808ff;
//     border: none;
//     border-radius: 8px;
//     font-weight: bold;
//     cursor: pointer;
//   }
//   button[type="submit"]:hover {
//     background: #e22b52;
//   }

//   /* small screen adjustments */
//   @media (max-width: 800px) {
//     .bottom-grid {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

// export default GuestDash;


// import React, { useState } from "react"; 
// import styled from "styled-components";
// import {
//   FaBatteryThreeQuarters,
//   FaMapMarkerAlt,
//   FaUtensils,
//   FaBroom,
//   FaTrash,
//   FaTasks,
// } from "react-icons/fa";

// // ✅ Import Firebase
// import { ref, push, set } from "firebase/database";
// import { db } from "../firebase"; // adjust path if needed

// const GuestDash = () => {
//   const [taskName, setTaskName] = useState("");
//   const [location, setLocation] = useState("");

//   // ✅ Send custom request
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const requestRef = ref(db, "requests");
//     const newRequest = push(requestRef);

//     set(newRequest, {
//       task: taskName,
//       location: location,
//       status: "pending",
//       timestamp: Date.now(),
//     })
//       .then(() => {
//         alert("✅ Request sent successfully!");
//         setTaskName("");
//         setLocation("");
//       })
//       .catch((err) => alert("❌ Failed: " + err.message));
//   };

//   // ✅ Quick Actions (Cleaning / Food / Waste)
//   const sendQuickRequest = (task) => {
//     const requestRef = ref(db, "requests");
//     const newRequest = push(requestRef);

//     set(newRequest, {
//       task,
//       location: "N/A",
//       status: "pending",
//       timestamp: Date.now(),
//     })
//       .then(() => alert(`✅ ${task} request sent!`))
//       .catch((err) => alert("❌ Failed: " + err.message));
//   };

//   return (
//     <Wrapper>
//       <div className="container">
//         <header>
//           <h1>Guest Dashboard</h1>
//           <p>Welcome! Check robot status and request services.</p>
//         </header>

//         {/* Status Cards */}
//         <div className="status-grid">
//           <div className="stat-card">
//             <FaBatteryThreeQuarters />
//             <span className="label">Battery Level</span>
//             <span className="value">85%</span>
//           </div>
//           <div className="stat-card">
//             <FaMapMarkerAlt />
//             <span className="label">Location</span>
//             <span className="value">Lobby</span>
//           </div>
//           <div className="stat-card">
//             <FaTasks />
//             <span className="label">Current Task</span>
//             <span className="value">Delivering Food</span>
//           </div>
//           <div className="stat-card">
//             <FaUtensils />
//             <span className="label">Robot Status</span>
//             <span className="value">Active</span>
//           </div>
//         </div>

//         {/* Bottom Grid */}
//         <div className="bottom-grid">
//           {/* Quick Actions */}
//           <div className="card">
//             <h3>Quick Actions</h3>
//             <div className="actions">
//               <button onClick={() => sendQuickRequest("Cleaning")}>
//                 <FaBroom size={20} />
//                 <span>Request Cleaning</span>
//               </button>
//               <button onClick={() => sendQuickRequest("Food Delivery")}>
//                 <FaUtensils size={20} />
//                 <span>Order Food</span>
//               </button>
//               <button onClick={() => sendQuickRequest("Waste Pickup")}>
//                 <FaTrash size={20} />
//                 <span>Request Waste Pickup</span>
//               </button>
//             </div>
//           </div>

//           {/* Request Task */}
//           <div className="card">
//             <h3>Request a Task</h3>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Task Name"
//                 value={taskName}
//                 onChange={(e) => setTaskName(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Location / Room No."
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 required
//               />
//               <button type="submit">Send Request</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   min-height: 100vh;
//   background: linear-gradient(135deg, #f8f0f1ff, #f9bcc3ff);
//   padding: 40px;
//   display: flex;
//   justify-content: center;

//   .container {
//     width: 100%;
//     max-width: 1100px;
//   }

//   header {
//     margin-bottom: 30px;
//     text-align: center;
//   }
//   header h1 {
//     font-size: 2rem;
//     font-weight: bold;
//     color: #0e0e0e;
//   }
//   header p {
//     color: rgba(39, 37, 37, 0.8);
//   }

//   .status-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//     gap: 20px;
//     margin-bottom: 30px;
//   }

//   .stat-card {
//     background: #ffffff;
//     border-radius: 16px;
//     padding: 22px;
//     text-align: center;
//     color: #222;
//     border: 1px solid rgba(0, 0, 0, 0.06);
//     box-shadow: 0 8px 24px rgba(11, 10, 10, 0.06);
//     transition: transform 0.18s ease, box-shadow 0.18s ease;
//   }
//   .stat-card:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 14px 34px rgba(11, 10, 10, 0.09);
//   }
//   .stat-card svg {
//     font-size: 28px;
//     margin-bottom: 8px;
//     color: #f73864;
//   }
//   .label {
//     display: block;
//     font-size: 0.9rem;
//     opacity: 0.8;
//     margin-bottom: 6px;
//   }
//   .value {
//     font-size: 1.3rem;
//     font-weight: bold;
//   }

//   .bottom-grid {
//     display: grid;
//     grid-template-columns: 2fr 1fr;
//     gap: 20px;
//     flex-wrap: wrap;
//   }

//   .card {
//     background: #ffffff;
//     border-radius: 16px;
//     padding: 20px;
//     color: #201e1e;
//     border: 1px solid rgba(0, 0, 0, 0.06);
//     box-shadow: 0 8px 24px rgba(11, 10, 10, 0.06);
//   }
//   .card h3 {
//     margin-bottom: 15px;
//     font-size: 1.2rem;
//   }

//   .actions {
//     display: flex;
//     gap: 10px;
//     flex-wrap: wrap;
//   }
//   .actions button {
//     flex: 1;
//     min-width: 120px;
//     padding: 15px;
//     background: #ef7b87ff;
//     border: 1px solid rgba(0, 0, 0, 0.06);
//     border-radius: 10px;
//     color: #343232;
//     font-weight: 500;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 8px;
//     cursor: pointer;
//     transition: 0.18s;
//   }
//   .actions button:hover {
//     transform: translateY(-3px);
//     background: #fff7f8;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }
//   input {
//     padding: 12px;
//     border-radius: 8px;
//     border: 1px solid rgba(0, 0, 0, 0.08);
//     font-size: 1rem;
//     background: #e9d8d8ff;
//     color: #333;
//   }
//   button[type="submit"] {
//     padding: 12px;
//     background: #f73864;
//     color: #fff;
//     border: none;
//     border-radius: 8px;
//     font-weight: bold;
//     cursor: pointer;
//   }
//   button[type="submit"]:hover {
//     background: #e22b52;
//   }

//   @media (max-width: 800px) {
//     .bottom-grid {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

// export default GuestDash;


// src/pages/GuestDash.jsx
/**
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

// ✅ Import Firebase
import { ref, push, set } from "firebase/database";
import { db } from "../firebase"; // adjust path if needed

const GuestDash = () => {
  const [taskName, setTaskName] = useState("");
  const [location, setLocation] = useState("");

  // ✅ Send custom request
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestRef = ref(db, "requests");
    const newRequest = push(requestRef);

    set(newRequest, {
      task: taskName,
      location: location,
      status: "pending",
      timestamp: Date.now(),
    })
      .then(() => {
        alert("✅ Request sent successfully!");
        setTaskName("");
        setLocation("");
      })
      .catch((err) => alert("❌ Failed: " + err.message));
  };

  // ✅ Quick Actions (Step 5)
  const sendQuickRequest = (task) => {
    const requestRef = ref(db, "requests");
    const newRequest = push(requestRef);

    set(newRequest, {
      task,
      location: "N/A",
      status: "pending",
      timestamp: Date.now(),
    })
      .then(() => alert(`✅ ${task} request sent!`))
      .catch((err) => alert("❌ Failed: " + err.message));
  };

  return (
    <Wrapper>
      <div className="container">
        <header>
          <h1>Guest Dashboard</h1>
          <p>Welcome! Check robot status and request services.</p>
        </header>

        
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

        
        <div className="bottom-grid">
         
          <div className="card">
            <h3>Quick Actions</h3>
            <div className="actions">
              <button onClick={() => sendQuickRequest("Cleaning")}>
                <FaBroom size={20} />
                <span>Request Cleaning</span>
              </button>
              <button onClick={() => sendQuickRequest("Food Delivery")}>
                <FaUtensils size={20} />
                <span>Order Food</span>
              </button>
              <button onClick={() => sendQuickRequest("Waste Pickup")}>
                <FaTrash size={20} />
                <span>Request Waste Pickup</span>
              </button>
            </div>
          </div>


          <div className="card">
            <h3>Request a Custom Task</h3>
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

  .stat-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 22px;
    text-align: center;
    color: #222;
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
    color: #f73864;
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
    color: #333;
  }
  button[type="submit"] {
    padding: 12px;
    background: #f73864;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    background: #e22b52;
  }

  @media (max-width: 800px) {
    .bottom-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default GuestDash;
 */
/*
import React, { useState, useEffect } from "react"; 
import styled from "styled-components";
import {
  FaBatteryThreeQuarters,
  FaMapMarkerAlt,
  FaUtensils,
  FaBroom,
  FaTrash,
  FaTasks,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

// Firebase
import { ref, push, set } from "firebase/database";
import { db, auth } from "../firebase"; 
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const GuestDash = () => {
  const [taskName, setTaskName] = useState("");
  const [location, setLocation] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); 
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Get current user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      alert("❌ Error signing out: " + err.message);
    }
  };

  // ✅ Send custom request
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestRef = ref(db, "requests");
    const newRequest = push(requestRef);

    set(newRequest, {
      task: taskName,
      location,
      status: "pending",
      timestamp: Date.now(),
    })
      .then(() => {
        alert("✅ Request sent successfully!");
        setTaskName("");
        setLocation("");
      })
      .catch((err) => alert("❌ Failed: " + err.message));
  };

  // ✅ Quick Actions
  const sendQuickRequest = (task) => {
    const requestRef = ref(db, "requests");
    const newRequest = push(requestRef);

    set(newRequest, {
      task,
      location: "N/A",
      status: "pending",
      timestamp: Date.now(),
    })
      .then(() => alert(`✅ ${task} request sent!`))
      .catch((err) => alert("❌ Failed: " + err.message));
  };

  return (
    <Wrapper>
      <div className="container">
        <header>
          <div>
            <h1>Guest Dashboard</h1>
            <p>Welcome! Check robot status and request services.</p>
          </div>

         
          <div className="profile-menu">
            <button
              className="profile-btn"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <FaUserCircle size={28} />
            </button>

            {menuOpen && (
              <div className="dropdown">
                <button onClick={handleSignOut}>
                  <FaSignOutAlt /> Sign Out
                </button>
              </div>
            )}
          </div>
        </header>

      
        {user && (
          <div className="profile-card">
            <div className="avatar">
              {user.photoURL ? (
                <img src={user.photoURL} alt="User Avatar" />
              ) : (
                <FaUserCircle size={60} />
              )}
            </div>
            <div className="info">
              <h3>{user.displayName || "Guest User"}</h3>
              <p>{user.email}</p>
              <p><strong>Room:</strong> 204</p>
              <p><strong>Status:</strong> Active Guest</p>
            </div>
          </div>
        )}

      
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

       
        <div className="bottom-grid">
         
          <div className="card">
            <h3>Quick Actions</h3>
            <div className="actions">
              <button onClick={() => sendQuickRequest("Cleaning")}>
                <FaBroom size={20} />
                <span>Request Cleaning</span>
              </button>
              <button onClick={() => sendQuickRequest("Food Delivery")}>
                <FaUtensils size={20} />
                <span>Order Food</span>
              </button>
              <button onClick={() => sendQuickRequest("Waste Pickup")}>
                <FaTrash size={20} />
                <span>Request Waste Pickup</span>
              </button>
            </div>
          </div>

       
          <div className="card">
            <h3>Request a Custom Task</h3>
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
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #0e0e0e;
  }
  header p {
    color: rgba(39, 37, 37, 0.8);
  }

  
  .profile-menu {
    position: relative;
  }
  .profile-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    display: flex;
    align-items: center;
  }
  .dropdown {
    position: absolute;
    right: 0;
    margin-top: 8px;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    padding: 10px;
    z-index: 100;
  }
  .dropdown button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    font-size: 0.95rem;
    cursor: pointer;
    width: 100%;
    color: #333;
    transition: background 0.2s ease;
  }
  .dropdown button:hover {
    background: #f8f0f1;
    border-radius: 6px;
  }

  .profile-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    box-shadow: 0 8px 24px rgba(11, 10, 10, 0.06);
    border: 1px solid rgba(0,0,0,0.06);
  }
  .profile-card .avatar img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
  .profile-card h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .profile-card p {
    margin: 2px 0;
    color: #555;
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  .stat-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 22px;
    text-align: center;
    color: #222;
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
    color: #f73864;
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
    color: #333;
  }
  button[type="submit"] {
    padding: 12px;
    background: #f73864;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    background: #e22b52;
  }

  @media (max-width: 800px) {
    .bottom-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default GuestDash;
*/
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaBatteryThreeQuarters,
  FaMapMarkerAlt,
  FaUtensils,
  FaBroom,
  FaTrash,
  FaTasks,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

// ✅ Firebase
import { ref, push, set } from "firebase/database";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase"; // your firebase.js must export auth & db

import { useNavigate } from "react-router-dom";

const fs = getFirestore();

const GuestDash = () => {
  // ----- UI state -----
  const [taskName, setTaskName] = useState("");
  const [location, setLocation] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    room: "N/A",
    status: "Guest",
    photoURL: "",
  });

  const navigate = useNavigate();

  // ----- auth listener -----
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) await ensureAndLoadUserDoc(u);
    });
    return () => unsub();
  }, []);

  // ----- fetch or create Firestore user doc -----
  const ensureAndLoadUserDoc = async (u) => {
    try {
      const userDocRef = doc(fs, "users", u.uid);
      const snap = await getDoc(userDocRef);
      if (!snap.exists()) {
        await setDoc(userDocRef, { room: "N/A", status: "Guest" }, { merge: true });
      }
      const data = (await getDoc(userDocRef)).data();
      setProfile({
        displayName: u.displayName || "Guest User",
        email: u.email || "",
        photoURL: u.photoURL || "",
        room: data?.room ?? "N/A",
        status: data?.status ?? "Guest",
      });
    } catch (err) {
      console.error("Failed to load guest profile:", err);
    }
  };

  // ----- sign out -----
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      alert("❌ Error signing out: " + err.message);
    }
  };

  // ----- requests handlers -----
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestRef = ref(db, "requests");
      const newRequest = push(requestRef);
      await set(newRequest, {
        task: taskName,
        location,
        status: "pending",
        timestamp: Date.now(),
        userId: user?.uid || null,
      });
      alert("✅ Request sent successfully!");
      setTaskName("");
      setLocation("");
    } catch (err) {
      alert("❌ Failed: " + err.message);
    }
  };

  const sendQuickRequest = async (task) => {
    try {
      const requestRef = ref(db, "requests");
      const newRequest = push(requestRef);
      await set(newRequest, {
        task,
        location: "N/A",
        status: "pending",
        timestamp: Date.now(),
        userId: user?.uid || null,
      });
      alert(`✅ ${task} request sent!`);
    } catch (err) {
      alert("❌ Failed: " + err.message);
    }
  };

  const batteryLevel = "85%";
  const robotLocation = "Lobby";
  const robotTask = "Delivering Food";
  const robotStatus = "Active";

  return (
    <Wrapper>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen}>
        <div className="top">
          <FaBars className="toggle" onClick={() => setSidebarOpen((v) => !v)} />
        </div>

        {/* Profile Section */}
        <ProfileSection sidebarOpen={sidebarOpen}>
          <div className="avatar-wrap">
            {profile.photoURL ? (
              <img src={profile.photoURL} alt="Guest" />
            ) : (
              <FaUserCircle className="placeholder" />
            )}
          </div>

          {sidebarOpen && (
            <div className="info">
              <h3>{profile.displayName || "Guest User"}</h3>
              <p className="email">{profile.email || "—"}</p>
              <p>Room: {profile.room}</p>
              <p>Status: {profile.status}</p>
            </div>
          )}
        </ProfileSection>

        {/* Logout button */}
        <LogoutBtn onClick={handleSignOut}>
          <FaSignOutAlt />
          {sidebarOpen && <span>Logout</span>}
        </LogoutBtn>
      </Sidebar>

      {/* Main Content */}
      <Content>
        <header>
          <h1>Guest Dashboard</h1>
          <p>Welcome! Check robot status and request services.</p>
        </header>

        {/* Status Cards */}
        <div className="status-grid">
          <StatusCard>
            <FaBatteryThreeQuarters />
            <span className="label">Battery Level</span>
            <span className="value">{batteryLevel}</span>
          </StatusCard>
          <StatusCard>
            <FaMapMarkerAlt />
            <span className="label">Location</span>
            <span className="value">{robotLocation}</span>
          </StatusCard>
          <StatusCard>
            <FaTasks />
            <span className="label">Current Task</span>
            <span className="value">{robotTask}</span>
          </StatusCard>
          <StatusCard>
            <FaUtensils />
            <span className="label">Robot Status</span>
            <span className="value">{robotStatus}</span>
          </StatusCard>
        </div>

        {/* Actions */}
        <div className="bottom-grid">
          <Card>
            <h3>Quick Actions</h3>
            <div className="actions">
              <button onClick={() => sendQuickRequest("Cleaning")}>
                <FaBroom size={20} />
                <span>Request Cleaning</span>
              </button>
              <button onClick={() => sendQuickRequest("Food Delivery")}>
                <FaUtensils size={20} />
                <span>Order Food</span>
              </button>
              <button onClick={() => sendQuickRequest("Waste Pickup")}>
                <FaTrash size={20} />
                <span>Request Waste Pickup</span>
              </button>
            </div>
          </Card>

          <Card>
            <h3>Request a Custom Task</h3>
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
          </Card>
        </div>
      </Content>
    </Wrapper>
  );
};

export default GuestDash;

/* ===================== STYLES ===================== */
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f0f1ff, #f9bcc3ff);
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
    justify-content: ${({ sidebarOpen }) => (sidebarOpen ? "flex-end" : "center")};
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
    margin-bottom: 22px;
  }
  header h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #1f1f1f;
  }
  header p {
    color: rgba(39, 37, 37, 0.8);
    margin-top: 4px;
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 28px;
  }

  .bottom-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
  }

  @media (max-width: 900px) {
    .bottom-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const StatusCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 22px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  svg {
    font-size: 28px;
    margin-bottom: 8px;
    color: #f73864;
  }
  .label {
    display: block;
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 6px;
  }
  .value {
    font-size: 1.3rem;
    font-weight: 800;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  color: #201e1e;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  h3 {
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
    background: #ef7b87;
    border-radius: 10px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border: none;
    color: #fff;
  }
  .actions button:hover {
    background: #f73864;
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
    background: #f7f4f4;
  }
  button[type="submit"] {
    padding: 12px;
    background: #f73864;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 800;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    background: #e22b52;
  }
`;
