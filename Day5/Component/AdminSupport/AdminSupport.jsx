// //import React from 'react';
// import { Link } from "react-router-dom";

// const AdminSupport = () => {
//   // Define event handlers
//   const handleAddBoats = () => {
//     // Logic for adding a boat
//   };

//   const handleViewBoats = () => {
//     // Logic for viewing boats
//   };

//   const handleEditBoats = () => {
//     // Logic for editing boats
//   };

//   const handleDeleteBoats = () => {
//     // Logic for deleting boats
//   };

//   return (
//     <>
//     <div className="button-container" style={containerStyle}>
//       <button
//         style={buttonStyle}
//         onClick={handleAddBoats}
//       >
//         <Link to="/addboats" style={linkStyle}>ADD BOATS</Link><br/>
//       </button><br/>
//       </div>
//       <div className="button-container" style={containerStyle}>
//       <button
//         style={buttonStyle}
//         onClick={handleViewBoats}
//       >
//         <Link to="/Adminget" style={linkStyle}>VIEW BOATS</Link><br/>
//       </button><br/>
//       </div>
//       <div className="button-container" style={containerStyle}>
//       <button
//         style={buttonStyle}
//         onClick={handleEditBoats}
//       >
//         <Link to="/editboats" style={linkStyle}>EDIT BOATS</Link><br/>
//       </button><br/>
//       </div>
//       <div className="button-container" style={containerStyle}>
//       <button
//         style={buttonStyle}
//         onClick={handleDeleteBoats}
//       >
//         <Link to="/deleteboats" style={linkStyle}>DELETE BOATS</Link>
//       </button>
//       </div>
//       </>
//   );
// };

// // CSS styles
// const containerStyle = {
//   display: 'flex',
//   marginleft:'-1000px',
//   justifyContent: 'center',
//   alignItems: 'center',
//   border: '2px solid #4CAF50', // Border style
//   borderRadius: '5px',
//   padding: '20px', // Increase padding to increase container size
//   width: 'fit-content', // Adjust width to fit the content
//   height: 'auto', // Increase the height as needed
// };

// const buttonStyle = {
//   padding: '15px 30px', // Increase padding to increase button size
//   margin: '0 10px', // Adjust margins as needed
//   backgroundColor: '#008CBA', // Change button background color
//   color: 'white',
//   border: '2px solid #008CBA', // Change button border color
//   borderRadius: '5px',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
//   fontSize: '18px', // Increase font size for button text
//   minWidth: '150px', // Set minimum width for the buttons
//   textAlign: 'center', // Center the text inside the button
// };

// const linkStyle = {
//   color: 'white',
//   textDecoration: 'none',
// };

// export default AdminSupport;


// Import React and other necessary modules
import React from 'react';
import { Link } from 'react-router-dom';

// Define functional component AdminSupport
const AdminSupport = () => {
  // Define event handlers
  const handleAddBoats = () => {
    // Logic for adding a boat
  };

  const handleViewBoats = () => {
    // Logic for viewing boats
  };

  const handleEditBoats = () => {
    // Logic for editing boats
  };

  const handleDeleteBoats = () => {
    // Logic for deleting boats
  };

  return (
    <>
      <div className="button-container" style={containerStyle}>
        <button style={buttonStyle} onClick={handleAddBoats}>
          <Link to="/addboats" style={linkStyle}>
            ADD BOATS
          </Link>
        </button><br/><br/>
      {/* </div>
      <div className="button-container" style={containerStyle}> */}
        <button style={buttonStyle} onClick={handleViewBoats}>
          <Link to="/Adminget" style={linkStyle}>
            VIEW BOATS
          </Link>
        </button><br/><br/>
      {/* </div>
      <div className="button-container" style={containerStyle}> */}
        <button style={buttonStyle} onClick={handleEditBoats}>
          <Link to="/editboats" style={linkStyle}>
            EDIT BOATS
          </Link>
        </button><br/><br/>
      {/* </div>
      <div className="button-container" style={containerStyle}> */}
        <button style={buttonStyle} onClick={handleDeleteBoats}>
          <Link to="/deleteboats" style={linkStyle}>
            DELETE BOATS
          </Link>
        </button><br/>
      </div>
    </>
  );
};

// CSS styles
const containerStyle = {
  display: 'flex',
  flexDirection:'column',
  marginLeft: '600px',
  marginTop:'140px',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #4CAF50',
  borderRadius: '5px',
  padding: '30px',
  width: 'fit-content',
  height: 'auto',
};

const buttonStyle = {
  padding: '15px 30px',
  margin: '0 10px',
  backgroundColor: '#008CBA',
  color: 'white',
  border: '2px solid #008CBA',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '18px',
  minWidth: '150px', // Set a fixed width for the buttons
  textAlign: 'center',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

// Export the component
export default AdminSupport;
