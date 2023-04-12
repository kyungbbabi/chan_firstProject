import React, { useState } from "react";
import LoginImg from "../test.png";

export default function Login(props) {
  
  //chat GPT가 만든거

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission here
  };

  
  return (
    <>
      <section
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            maxHeight: "500px",
          }}
        >
          <div>
            <img src={LoginImg} style={{ maxWidth: "500px", maxHeight: "500px" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "white",
              width: "350px",
              height: "500px",
            }}
          >
            <h1 style={{ fontSize: "xxx-large" }}>Sign In</h1>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div style={{ position: "relative" }}>
                <input
                  type="email"
                  id="email-input"
                  value={email}
                  onChange={handleEmailChange}
                  style={{ width: "100%", height: "35px" }}
                  placeholder=" "
                  autoComplete="username"
                />
                <label
                  htmlFor="email-input"
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: "10px",
                    pointerEvents: "none",
                    color: "#aaa",
                    transition: "0.2s",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif"
                  }}
                >
                  Email Address
                </label>
              </div>
              <div style={{ position: "relative", marginBottom: "20px" }}>
                <input
                  type="password"
                  id="password-input"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{ width: "100%", height: "35px" }}
                  placeholder=" "
                  autoComplete="current-password"
                />
                <label
                  htmlFor="password-input"
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: "10px",
                    pointerEvents: "none",
                    color: "#aaa",
                    transition: "0.2s",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif"
                  }}
                >
                  Password
                </label>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                style={{
                  width: "40%",
                  borderRadius: "5%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                Sign In
              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}
