import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Adduser } from "./Components/CURD/Adduser";
import { Edituser } from "./Components/CURD/Edituser";
import Main from "./Components/UI/Main";
import Dashboard from "./Components/CURD/Dashboard";
import DataFilterApp from "./Components/DataFilter/index";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="datafilterapp" element={<DataFilterApp />} />
        <Route path="curd" element={<Dashboard />} />
        <Route path="adduser" element={<Adduser />} />
        <Route path="edituser/*" element={<Edituser />} />
        <Route path="counter" element={<Main />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
