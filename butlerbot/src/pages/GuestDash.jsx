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
import React, { useEffect, useRef, useState } from "react";
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
  FaChevronDown,
} from "react-icons/fa";

// ✅ Firebase
import { ref, push, set } from "firebase/database";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase"; // make sure your firebase.js exports initialized `auth` & `db`

import { useNavigate } from "react-router-dom";

const fs = getFirestore();

const GuestDash = () => {
  // ----- UI state -----
  const [taskName, setTaskName] = useState("");
  const [location, setLocation] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    room: "N/A",
    status: "Guest",
    photoURL: "",
  });

  const navigate = useNavigate();

  // ----- refs for outside-click handling -----
  const menuRef = useRef(null);
  const modalRef = useRef(null);

  // ----- auth listener -----
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        await ensureAndLoadUserDoc(u);
      }
    });
    return () => unsub();
  }, []);

  // ----- close dropdown on outside click / Esc -----
  useEffect(() => {
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setEditOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
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
      console.error("Failed to load user profile:", err);
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

  // ----- save profile from modal -----
  const handleProfileSave = async (e) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    try {
      // Update Firestore custom fields
      const userDocRef = doc(fs, "users", user.uid);
      await setDoc(
        userDocRef,
        {
          room: String(profile.room || "N/A").trim(),
          status: String(profile.status || "Guest").trim(),
        },
        { merge: true }
      );

      // Optionally update display name in Auth if changed
      if (profile.displayName && profile.displayName !== (user.displayName || "")) {
        await updateProfile(user, { displayName: profile.displayName });
      }

      // Reload minimal fields
      await ensureAndLoadUserDoc({ ...user, displayName: profile.displayName });
      setEditOpen(false);
    } catch (err) {
      alert("❌ Failed to update profile: " + err.message);
    } finally {
      setSaving(false);
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

  // ----- helpers for modal overlay click -----
  const handleOverlayClick = (e) => {
    if (e.target.getAttribute("data-overlay")) setEditOpen(false);
  };

  return (
    <Wrapper>
      <div className="container">
        {/* Header */}
        <header>
          <div className="header-left">
            <h1>Guest Dashboard</h1>
            <p>Welcome! Check robot status and request services.</p>
          </div>

          {/* Profile Dropdown */}
          <div className="profile-menu" ref={menuRef}>
            <button
              className="profile-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
            >
              {profile.photoURL ? (
                <img src={profile.photoURL} alt="Profile" />
              ) : (
                <FaUserCircle />
              )}
              <span className="profile-name">{profile.displayName || "Guest"}</span>
              <FaChevronDown className={`chev ${menuOpen ? "open" : ""}`} />
            </button>

            {menuOpen && user && (
              <div className="dropdown" role="menu">
                <div className="profile-info">
                  <div className="avatar">
                    {profile.photoURL ? (
                      <img src={profile.photoURL} alt="User avatar" />
                    ) : (
                      <FaUserCircle size={56} />
                    )}
                  </div>
                  <div className="info">
                    <h4>{profile.displayName || "Guest User"}</h4>
                    {profile.email && <p>{profile.email}</p>}
                    <p>
                      <strong>Room:</strong> {profile.room}
                    </p>
                    
                  </div>
                </div>

                <button className="edit-btn" onClick={() => setEditOpen(true)}>
                  ✏️ Edit Profile
                </button>

                <hr />

                <button className="signout-btn" onClick={handleSignOut}>
                  <FaSignOutAlt /> Sign Out
                </button>
              </div>
            )}
          </div>
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

      {/* Edit Profile Modal */}
      {editOpen && (
        <div
          className="modal-overlay"
          data-overlay
          onClick={handleOverlayClick}
        >
          <div className="modal" ref={modalRef} role="dialog" aria-modal>
            <h2>Edit Profile</h2>
            <form onSubmit={handleProfileSave}>
              <label>
                <span>Display Name</span>
                <input
                  type="text"
                  value={profile.displayName}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, displayName: e.target.value }))
                  }
                />
              </label>

              <label>
                <span>Room Number</span>
                <input
                  type="text"
                  value={profile.room}
                  onChange={(e) => setProfile((p) => ({ ...p, room: e.target.value }))}
                />
              </label>

             

              <div className="modal-actions">
                <button type="button" className="btn-light" onClick={() => setEditOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={saving}>
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f0f1ff, #f9bcc3ff);
  padding: 40px;
  display: flex;
  justify-content: center;

  .container { width: 100%; max-width: 1100px; }

  header {
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-left h1 { font-size: 2rem; font-weight: 800; color: #0e0e0e; }
  .header-left p { color: rgba(39,37,37,.8); margin-top: 4px; }

  /* Profile dropdown */
  .profile-menu { position: relative; }
  .profile-btn {
    background: #ffffff;
    border: 1px solid rgba(0,0,0,.06);
    padding: 8px 10px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 14px rgba(0,0,0,.06);
    cursor: pointer;
    transition: transform .15s ease, box-shadow .2s ease;
  }
  .profile-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,.08); }
  .profile-btn > svg { font-size: 24px; color: #444; }
  .profile-btn img { width: 28px; height: 28px; border-radius: 999px; object-fit: cover; }
  .profile-name { font-size: .95rem; color: #333; font-weight: 600; }
  .chev { font-size: .8rem; opacity: .7; transition: transform .2s ease; }
  .chev.open { transform: rotate(180deg); }

  .dropdown {
    position: absolute;
    right: 0; top: calc(100% + 10px);
    width: 290px;
    background: #fff;
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 16px;
    box-shadow: 0 12px 30px rgba(0,0,0,.14);
    padding: 14px;
    z-index: 200;
    display: flex; flex-direction: column; gap: 12px;
  }
  .profile-info { display: flex; gap: 12px; align-items: center; }
  .profile-info .avatar img { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; }
  .profile-info h4 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #111; }
  .profile-info p { margin: 2px 0; font-size: .9rem; color: #555; }

  .edit-btn {
    padding: 10px 12px;
    background: #ef7b87;
    border: 0; border-radius: 10px;
    color: #fff; font-weight: 700; font-size: .92rem;
    cursor: pointer; transition: background .2s ease, transform .05s ease;
  }
  .edit-btn:hover { background: #f73864; }
  .edit-btn:active { transform: translateY(1px); }

  .dropdown hr { border: none; border-top: 1px solid rgba(0,0,0,.08); margin: 6px 0 2px; }

  .signout-btn {
    background: none; border: none; width: 100%;
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 8px; font-size: .95rem;
    color: #b00020; font-weight: 700; cursor: pointer;
    border-radius: 8px; transition: background .15s ease;
  }
  .signout-btn:hover { background: #fff3f4; }

  /* Status cards */
  .status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px; margin-bottom: 28px;
  }
  .stat-card {
    background: #fff; border-radius: 16px; padding: 22px; text-align: center; color: #222;
    border: 1px solid rgba(0,0,0,.06); box-shadow: 0 8px 24px rgba(11,10,10,.06);
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .stat-card:hover { transform: translateY(-4px); box-shadow: 0 14px 34px rgba(11,10,10,.09); }
  .stat-card svg { font-size: 28px; margin-bottom: 8px; color: #f73864; }
  .label { display: block; font-size: .9rem; opacity: .8; margin-bottom: 6px; }
  .value { font-size: 1.3rem; font-weight: 800; }

  /* Bottom */
  .bottom-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }

  .card { background: #fff; border-radius: 16px; padding: 20px; color: #201e1e; border: 1px solid rgba(0,0,0,.06); box-shadow: 0 8px 24px rgba(11,10,10,.06); }
  .card h3 { margin-bottom: 15px; font-size: 1.2rem; }

  .actions { display: flex; gap: 10px; flex-wrap: wrap; }
  .actions button {
    flex: 1; min-width: 120px; padding: 15px;
    background: #ef7b87; border: 1px solid rgba(0,0,0,.06);
    border-radius: 10px; color: #343232; font-weight: 700;
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    cursor: pointer; transition: transform .18s ease, background .18s ease;
  }
  .actions button:hover { transform: translateY(-3px); background: #fff7f8; }

  form { display: flex; flex-direction: column; gap: 10px; }
  input { padding: 12px; border-radius: 8px; border: 1px solid rgba(0,0,0,.08); font-size: 1rem; background: #e9d8d8ff; color: #333; }
  button[type="submit"] { padding: 12px; background: #f73864; color: #fff; border: none; border-radius: 8px; font-weight: 800; cursor: pointer; }
  button[type="submit"]:hover { background: #e22b52; }

  /* Modal */
  .modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,.45);
    display: flex; align-items: center; justify-content: center; z-index: 500;
  }
  .modal {
    background: #fff; padding: 24px; border-radius: 16px; width: 440px; max-width: 92%;
    box-shadow: 0 18px 48px rgba(0,0,0,.22);
  }
  .modal h2 { margin: 0 0 12px; font-size: 1.2rem; }
  .modal form label { display: flex; flex-direction: column; gap: 6px; font-weight: 600; font-size: .9rem; color: #333; }
  .modal form input { background: #f7f4f4; }
  .modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 12px; }
  .btn-light { background: #ddd; color: #111; border: none; padding: 10px 14px; border-radius: 10px; font-weight: 700; cursor: pointer; }
  .btn-primary { background: #f73864; color: #fff; border: none; padding: 10px 16px; border-radius: 10px; font-weight: 800; cursor: pointer; }
  .btn-primary[disabled] { opacity: .7; cursor: not-allowed; }

  @media (max-width: 900px) {
    .bottom-grid { grid-template-columns: 1fr; }
    header { align-items: flex-start; gap: 12px; }
  }
`;

export default GuestDash;
