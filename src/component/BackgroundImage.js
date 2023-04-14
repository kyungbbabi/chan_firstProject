import React, {useState} from "react";
import image from "../newyork.png"
import "../style.css"
import styled from "styled-components"

export default function BackgroundImage(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return(
    <>
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
                <label htmlFor="email-input" style={{ position: "absolute", top: 0, bottom: 0}}>Email Address</label>
              </div>
              <div style={{ marginBottom: "20px", position: "relative" }}>
                <input
                  type="password"
                  id="password-input"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder=" "
                  autoComplete="current-password"
                />
                <label 
                  htmlFor="password-input"
                  style={{ position: "absolute", top: 0, bottom: 0}}
                  >
                    
                    Password</label>
                    </div>







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
                          fontWeight: "normal",
                          fontFamily: "Arial, sans-serif"
                        }}
                      >
                        Email Address
                      </label>
                    </div>
                    <div style={{ marginBottom: "20px", position: "relative" }}>
                      <input
                        type="password"
                        id="password-input"
                        value={password}
                        onChange={handlePasswordChange}
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
                          fontWeight: "normal",
                          fontFamily: "Arial, sans-serif"
                        }}
                      >
                        Password
                      </label>
                    </div>










                    </>
  );
}