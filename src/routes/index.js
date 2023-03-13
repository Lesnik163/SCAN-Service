import React from "react";
import CommonAccessMain from "../components/CommonAccessMain";
import {Route,Routes} from "react-router-dom";
import AuthorizationMain from "../components/AuthorizationMain/AuthorizationMain";
import SearchPageMain from "../components/SearchPageMain/SearchPageMain";
import ResultPageMain from "../components/ResultPageMain/ResultPageMain";
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<CommonAccessMain />}/>
        <Route path="/login" element={<AuthorizationMain/>} />
        <Route path="/search" element={<SearchPageMain/>}/>
        <Route path="/result" element={<ResultPageMain/>}/>
    </Routes>
  )
}

export default AppRoutes
