import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Tabs from "./Tabs.js";

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tabs" element={<Tabs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};