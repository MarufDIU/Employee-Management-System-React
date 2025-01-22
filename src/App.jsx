import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);

  // Check if a user is already logged in when the app loads
  useEffect(() => {
    // Fetch logged-in user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // Handle Login
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const admin = { role: "admin", firstName: "Admin" };
      setUser(admin);
      localStorage.setItem("loggedInUser", JSON.stringify(admin));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const empData = { role: "employee", ...employee };
        setUser(empData);
        localStorage.setItem("loggedInUser", JSON.stringify(empData));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard data={user} onLogout={handleLogout} />
      ) : (
        <EmployeeDashboard data={user} onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;
