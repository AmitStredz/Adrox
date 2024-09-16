import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"; // Adjust based on your routing library
import axios from "axios";

const AutoLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    // Extract the token from the URL 
    console.log("Token: ", token);

    if (token) {
      // Send the token to the backend to authenticate
      axios
        .post(
          "https://adrox-89b6c88377f5.herokuapp.com/api/users/auto-login/",
          { token },
          { withCredentials: true }
        )
        .then((response) => {
          // Handle successful authentication
          // For example, update the user state, redirect to the dashboard
          // You might receive user data or tokens in the response
          // Store authentication info as needed (e.g., in context or local storage)

          // Example: Update global user state
          // dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });

          // Redirect to the desired route
          console.log("response: ", response);
          
          console.log("logged in...");
          
          // navigate("/dashboard");
        })
        .catch((error) => {
          // Handle errors
          console.error("Auto-login failed:", error);
          // Redirect to login page or show error message
          // navigate("/login");
        });
    } else {
      // No token found, redirect to login page
      console.log("no token found...");
      
      // navigate("/login");
    }
  }, [navigate, location]);

  return (
    <div>
      <p>Logging you in...</p>
    </div>
  );
};

export default AutoLogin;
