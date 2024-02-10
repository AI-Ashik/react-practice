import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
  // Get search parameters and setSearchParams function from react-router-dom
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize form data state using useState
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    id: "",
  });

  // Handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data state with new values
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update search parameters with form data
    setSearchParams(formData);
  };

  return (
    <div>
      <h2>User Page</h2>

      <div>
        {/* Form for user input */}
        <form onSubmit={handleSubmit}>
          {/* Input field for Name */}
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            id="name"
            onChange={handleChange}
          />
          <br />
          {/* Input field for Age */}
          <label htmlFor="age">Age : </label>
          <input
            type="text"
            name="age"
            value={formData.age}
            id="age"
            onChange={handleChange}
          />
          <br />
          {/* Input field for ID */}
          <label htmlFor="id">ID : </label>
          <input
            type="number"
            name="id"
            value={formData.id}
            id="id"
            onChange={handleChange}
          />
          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* Display current search parameters */}
      <h2>ID: {searchParams.get("id")}</h2>
      <h2>Name: {searchParams.get("name")}</h2>
      <h2>Age: {searchParams.get("age")}</h2>
    </div>
  );
};

export default User;
