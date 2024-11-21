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
import HomePage from "./pages/ContactPage";
import ContactPage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
