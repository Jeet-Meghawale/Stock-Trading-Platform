import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        window.location.href = "http://localhost:3001";
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-4"></div>

        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Login</h3>

            <div className="form-group p-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group p-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
