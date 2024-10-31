// import React, { useState } from "react";
// import "./ContactAgent.css"; // Import CSS for styling

// const ContactAgent = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle the form submission, e.g., sending data to an API or backend
//     console.log("Contact form submitted:", formData);
//     // Reset form after submission
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="contact-agent-container">
//       <h2 className="contact-agent-title">Contact Your Nearest Agent</h2>
//       <p className="contact-agent-message">
//         Please fill out the form below to get in touch with your nearest agent.
//       </p>
//       <form className="contact-agent-form" onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//           required
//         />

//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactAgent;

import React, { useState } from "react";
import "./ContactAgent.css"; // Import CSS for styling

const ContactAgent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      // Here you can handle the form submission, e.g., sending data to an API or backend
      const response = await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-agent-container">
      <h2 className="contact-agent-title">Contact Your Nearest Agent</h2>
      <p className="contact-agent-message">
        Please fill out the form below to get in touch with your nearest agent.
      </p>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
      <form className="contact-agent-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactAgent;
