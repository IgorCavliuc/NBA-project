import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import NotFound from "./Component/NotFound/NotFound";
import Profile from "./Component/Profile/Profile";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="signup" element={<SignUp />} />
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="profile/*" element={<Profile />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
