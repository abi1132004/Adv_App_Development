import { useState } from 'react';
import './Adminget.css'; // Import the CSS file

const Adminget = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfBoats: 0,
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (formData.name.trim() === '' || formData.email.trim() === '') {
      alert('Name and Email are required fields.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (formData.numberOfBoats < 0) {
      alert('Number of boats should be a non-negative integer.');
      return;
    }

    // Update the table data
    setTableData([...tableData, formData]);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      numberOfBoats: 0,
    });
  };

  return (
    <div className="admin-get-container">
      <form className="form-widget" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Boats:
          <input
            type="number"
            name="numberOfBoats"
            value={formData.numberOfBoats}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add to Table</button>
      </form>

      {tableData.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number of Boats</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.numberOfBoats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Adminget;
