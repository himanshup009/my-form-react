import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setMessage("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", formData);
    setMessage("Login successful ✅");

    // Reset form (optional)
    setFormData({ username: "", password: "" });
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Login Form</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="off"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
        <br /><br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"
            onPaste={(e) => e.preventDefault()} // disables paste (optional)
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
        <br /><br />
        <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
      </form>
    </div>
  );
}

export default App;
