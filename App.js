import React from "react";
import { Col } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    {routes.map(({path, Component})=>(
    <Route path = {`${path}`} element = {<Component/>}/>
    ))
    }
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
