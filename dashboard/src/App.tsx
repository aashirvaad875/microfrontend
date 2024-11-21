// import React, { Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";

// const App: React.FC = () => {
//   return <div>asfasf</div>;
// };

// export default App;

// In the dashboard app
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
