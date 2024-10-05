import React, { useState } from "react";

// Define the Form component
const Form = () => {
  // State to hold first name, last name, and submission status
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (firstName && lastName) {
      setSubmitted(true); // Show full name if both fields are filled
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h1>
          Full Name: {firstName} {lastName}
        </h1>
      )}
    </div>
  );
};

// Export the Form component as default
export default Form;
