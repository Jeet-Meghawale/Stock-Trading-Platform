import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/signup",
        { email, password, username },
        { withCredentials: true }
      );

      if (res.data.success) {
        window.location.href = "http://localhost:3001";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group p-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group p-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-3"
              onClick={() => navigate("/login")}
            >
              Already have an account? Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
