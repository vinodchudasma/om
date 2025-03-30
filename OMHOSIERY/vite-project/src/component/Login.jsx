import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";  // Import eye icons
import img1 from "../assets/login.avif";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [isMatch, setIsMatch] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);  // For toggling login password visibility
  const [showNewPassword, setShowNewPassword] = useState(false); // For toggling new password visibility

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData && storedData.email === data.email && storedData.password === data.password) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  }, [data]);

  const handleLogin = () => {
    if (data.email && data.password) {
      const storedData = JSON.parse(localStorage.getItem("data"));
      if (storedData && storedData.email === data.email && storedData.password === data.password) {
        alert("Login Successful");
        navigate("/navbar");
      } else {
        alert("Invalid Email or Password");
      }
    } else {
      alert("Please enter both Email and Password");
    }
  };

  const handleSignUp = () => {
    if (data.email && data.password) {
      localStorage.setItem("data", JSON.stringify(data));
      alert("Sign Up Successful! Please Login.");
      setData({ email: "", password: "" });
    } else {
      alert("Please enter both Email and Password to Sign Up");
    }
  };

  const handleForgotPassword = () => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData && storedData.email === forgotEmail) {
      setShowForgotPassword(true);
    } else {
      alert("Email not found! Please enter a registered email.");
    }
  };

  const handleResetPassword = () => {
    if (newPassword) {
      localStorage.setItem("data", JSON.stringify({ email: forgotEmail, password: newPassword }));
      alert("Password reset successful! Please login with your new password.");
      setForgotEmail("");
      setNewPassword("");
      setShowForgotPassword(false);
    } else {
      alert("Please enter a new password.");
    }
  };

  return (
    <>
      <div className="container1">
        <div className="row loginpage">
          <div className="col-6 bg-dark p-0 bhai">
            <img src={img1} alt="Login Illustration" />
          </div>

          <div className="col-6 bg-info p-0 m-0 bhai2">
            <h1 className="text-align-center mt-4">{showForgotPassword ? "Reset Password" : "Log in"}</h1>

            {!showForgotPassword ? (
              <>
                <div className="input_box pt-4">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      placeholder="Email address"
                    />
                    <label>Email</label>
                  </div>

                  <div className="form-floating position-relative">
                    <input
                      type={showPassword ? "text" : "password"}  // Toggle password visibility
                      className="form-control"
                      value={data.password}
                      placeholder="Password"
                      onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                    <label>Password</label>
                    <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-4 pt-4">
                  <div className="form-check align-item-center">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Remember me</label>
                  </div>
                  <button className="btn btn-link p-0" onClick={() => setShowForgotPassword(true)}>
                    Forgot Password?
                  </button>
                </div>

                <div className="btn1">
                  {isMatch ? (
                    <button type="button" onClick={handleLogin} className="btn btn-success">
                      Login
                    </button>
                  ) : (
                    <button type="button" onClick={handleSignUp} className="btn btn-primary">
                      Sign Up
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="input_box pt-4">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="Enter your registered email"
                    />
                    <label>Enter Registered Email</label>
                  </div>
                </div>

                <div className="btn1">
                  <button type="button" onClick={handleForgotPassword} className="btn btn-warning">
                    Verify Email
                  </button>
                </div>

                {showForgotPassword && (
                  <>
                    <div className="input_box pt-4">
                      <div className="form-floating position-relative">
                        <input
                          type={showNewPassword ? "text" : "password"}  // Toggle new password visibility
                          className="form-control"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter new password"
                        />
                        <label>New Password</label>
                        <span className="eye-icon" onClick={() => setShowNewPassword(!showNewPassword)}>
                          {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>

                    <div className="btn1">
                      <button type="button" onClick={handleResetPassword} className="btn btn-success">
                        Reset Password
                      </button>
                    </div>
                  </>
                )}

                <button className="btn btn-link mt-3" onClick={() => setShowForgotPassword(false)}>
                  Back to Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
