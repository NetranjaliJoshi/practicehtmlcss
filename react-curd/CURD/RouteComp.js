import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddProductComp from "./AddProductComp";
import EditProductComp from "./EditProductComp";

const RouterComp = () => {
  return (
    <div className="container">
      <BrowserRouter>
        {/* curd operation */}
        <Routes>
          <Route>
            <Route path="curd" element={<Dashboard />}></Route>
          </Route>

          <Route>
            <Route path="add" element={<AddProductComp />}></Route>
          </Route>

          <Route>
            <Route path="edit/:id" element={<EditProductComp />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterComp;
