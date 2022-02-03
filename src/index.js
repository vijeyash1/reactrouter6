import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Expenses from "./pages/expenses";
import Invoices from "./pages/invoices";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
