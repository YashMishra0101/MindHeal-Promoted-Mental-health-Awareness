import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import ProtectedRoute from "./component/ProtectedRoute.jsx"; // Import Protected Route

import {
  About,
  EmergencyContacts,
  Home,
  Login,
  ReachOut,
  SignUp,
  SupportResources,
  VideosHelp,
  AiBot,
  PrivacyPolicy,
  PageNotFound,
} from "./component/index.js";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="emergencycontacts" element={<EmergencyContacts />} />
      <Route path="supportresources" element={<SupportResources />} />
      <Route path="login" element={<Login />} />
      <Route path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="reachout" element={<ReachOut />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />

      {/* Protected Routes */}
      <Route
        path="videoHelp"
        element={
          <ProtectedRoute>
            <VideosHelp />
          </ProtectedRoute>
        }
      />
      <Route
        path="aibot"
        element={
          <ProtectedRoute>
            <AiBot />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </div>
);
