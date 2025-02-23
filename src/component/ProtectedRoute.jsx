import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/FirebaseConfig"; // Adjust the import based on your Firebase config
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "./Spinner"; // Importing your custom spinner

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Spinner />; // Show the spinner while checking authentication
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
