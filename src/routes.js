// import
import React from 'react';
import Dashboard from "views/Dashboard/Dashboard";
import { HomeIcon } from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/live-status",
    name: "Dashboard",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "",
  }
];
export default dashRoutes;
