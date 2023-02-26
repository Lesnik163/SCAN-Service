import React from "react";
import CommonAccessMain from "../components/CommonAccessMain";
import {Route,Routes} from "react-router-dom";
import AuthorizationMain from "../components/AuthorizationMain/AuthorizationMain";
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<CommonAccessMain />}/>
        <Route path="/login" element={<AuthorizationMain/>} />
    </Routes>
  )
}

export default AppRoutes
