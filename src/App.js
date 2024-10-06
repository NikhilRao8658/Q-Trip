
import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css"
import './App.css'

import Bangul from "./Pages/Banguluru";

import AllCombo from "./AllCall";
import Bengsub2 from "./Pages/BengSub";
import ErrorP from "./Pages/Error";



export default class App extends Component {
  render() {
    return (
      <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllCombo />} />
            <Route path="/BangloreSubpage" element={<Bangul />} />
            <Route path="/BangloreSubpage-2" element={<Bengsub2 />} />
            <Route path="*" element={<ErrorP/>} />
          </Routes>
        </BrowserRouter>

      </>
    )
  }
}


