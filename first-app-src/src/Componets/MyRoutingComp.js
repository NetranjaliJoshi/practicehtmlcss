import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import MyImagesComp from "./MyImagesComp";
import FavColor from "./FavColor";
import PageNotFount from "./PageNotFount";
import Classcomp from "./Classcomp";
import MyCssComp from "./MyCssComp";
import HoverComp from "./HoverComp";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import ReactHooksComp from "./Hooks/ReactHooksComp";
import UseStateHookComp from "./Hooks/UseStateHookComp";
import UseEffectComp from "./Hooks/UseEffectComp";
import DashboardComp from "../CRUD/DashboardComp";
import AddProductComp from "../CRUD/AddProductComp";

import EditProductComp from "../CRUD/EditProductComp";
import MyCorosalComp from "../React-Bootstrap/MyCorosalComp";
import LoginComp from "../session/LoginComp";
const MyRoutingComp = () => {
  return (
    <div className="container">
      <BrowserRouter>
        {" "}
        <div className="card border-primary">
          <div className="card-header border-primary">
            <NavComp></NavComp>
          </div>
          <div className="card-body border-primary">
            <Routes>
              {/* //default routing */}
              <Route>
                <Route path="" element={<LoginComp />}></Route>
              </Route>

              {/* naming Routing */}
              <Route path="multimedia" element={<MyImagesComp />}></Route>
              <Route path="list" element={<FavColor />}></Route>

              {/* child routing */}
              <Route path="classcomp" element={<Classcomp />}>
                <Route path="mycss" element={<MyCssComp />}></Route>
                <Route path="my" element={<HoverComp />}></Route>
              </Route>

              <Route path="hooks" element={<ReactHooksComp />}>
                <Route path="" element={<UseStateHookComp />}></Route>
                <Route path="usestate" element={<UseStateHookComp />}></Route>
                <Route path="useffect" element={<UseEffectComp />}></Route>
              </Route>

              {/* curd operation */}
              <Route>
                <Route path="curd" element={<DashboardComp />}></Route>
              </Route>

              <Route>
                <Route path="add" element={<AddProductComp />}></Route>
              </Route>

              <Route>
                <Route path="edit/:id" element={<EditProductComp />}></Route>
              </Route>

              {/* parametared routing */}

              <Route>
                <Route path="carosal" element={<MyCorosalComp />}></Route>
              </Route>

              <Route path="frm/:id" element={<FavColor />}></Route>
              <Route path="/*" element={<PageNotFount />}></Route>
            </Routes>
          </div>
          <div className="card-footer border-primary">
            <FooterComp />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutingComp;
