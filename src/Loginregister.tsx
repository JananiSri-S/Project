import React, { useState } from "react";

export default function Loginregister() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showForm, setShowForm] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");

  // Handle login
  const handleLoginSubmit = () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      alert(`Login successful! Welcome, ${username}`);
    } else {
      alert("Invalid username or password!");
    }
    setUsername("");
    setPassword("");
  };

  // Handle register
  const handleRegisterSubmit = () => {
    if (!username || !password || !confirmPassword || !mobile) {
      alert("All fields are required.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      alert("Enter a valid Indian mobile number (10 digits starting with 6–9).");
      return;
    }

    const userData = { username, password, mobile };
    localStorage.setItem("userData", JSON.stringify(userData));

    alert(`Registration successful for ${username}`);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setMobile("");
  };

  return (
    <div style={styles.page}>
      {/* Top buttons */}
      <div style={styles.topButtons}>
        <button
          style={styles.topButton}
          onClick={() => {
            setShowForm("login");
            setIsFlipped(false);
          }}
        >
          Login
        </button>
        <button
          style={styles.topButton}
          onClick={() => {
            setShowForm("register");
            setIsFlipped(true);
          }}
        >
          Register
        </button>
      </div>

      {/* Card */}
      {showForm && (
        <div style={styles.container}>
          <div
            style={{
              ...styles.card,
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front - Login */}
            <div style={{ ...styles.side, ...styles.front }}>
              <h3>Login</h3>
              <input
                type="text"
                placeholder="Username"
                style={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button style={styles.button} onClick={handleLoginSubmit}>
                Login
              </button>
              <p
                style={styles.link}
                onClick={() => {
                  setShowForm("register");
                  setIsFlipped(true);
                }}
              >
                Don't have an account? Register
              </p>
            </div>

            {/* Back - Register */}
            <div style={{ ...styles.side, ...styles.back }}>
              <h3>Register</h3>
              <input
                type="text"
                placeholder="Username"
                style={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Re-enter Password"
                style={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {/* Mobile input */}
              <div style={styles.mobileContainer}>
                <span style={styles.prefix}>+91</span>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  style={styles.mobileInput}
                  value={mobile}
                  maxLength={10}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) setMobile(value);
                  }}
                />
              </div>

              <button style={styles.button} onClick={handleRegisterSubmit}>
                Register
              </button>
              <p
                style={styles.link}
                onClick={() => {
                  setShowForm("login");
                  setIsFlipped(false);
                }}
              >
                Already have an account? Login
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    backgroundImage: "url('src/BackGround for linkedin.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
  },
  topButtons: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  topButton: {
    padding: "8px 16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    background: "#fff",
    color: "blue",
    fontWeight: "bold",
    flex: "1 1 auto",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1000px",
    width: "100%",
    padding: "10px",
  },
  card: {
    width: "100%",
    maxWidth: "320px",
    height: "360px",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.8s",
  },
  side: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#f0f0f0",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  front: {},
  back: {
    transform: "rotateY(180deg)",
  },
  input: {
    padding: "8px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  mobileContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    overflow: "hidden",
  },
  prefix: {
    background: "#ddd",
    padding: "8px",
    fontSize: "14px",
    color: "#333",
    whiteSpace: "nowrap",
  },
  mobileInput: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
    border: "none",
    background: "#2b41bfff",
    color: "white",
    borderRadius: "4px",
    width: "100%",
  },
  link: {
    color: "blue",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "center",
  },
};
