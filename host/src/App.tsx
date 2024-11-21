import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Dynamically import the Dashboard app from the remote location
const DashboardApp = lazy(() => import("dashboard/App"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardApp />} />
          {/* You can add more routes if you have other micro frontends */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
