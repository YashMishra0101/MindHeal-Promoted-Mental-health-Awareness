import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";


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
      <Route path="supportresources" element={<SupportResources/>} />
      <Route path="videoHelp" element={<VideosHelp/>} />
      <Route path="aibot" element={<AiBot/>} />
      <Route path="login" element={<Login />} />
      <Route path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="reachout" element={<ReachOut />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <Toaster position="top-center"
 />
  </div>
);
