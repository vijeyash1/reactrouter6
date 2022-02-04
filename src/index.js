import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Expenses from "./pages/expenses";
import Invoices from "./pages/invoices";
import Invoice from "./pages/invoice";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);
