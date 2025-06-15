import { Routes, Route, Link, Outlet } from "react-router-dom";

import Sidebar from "../components/SideBar";

const dsaLinks = [
  { to: "array", name: "Array Data Structure" },
  { to: "string", name: "String in Data Structure" },
  { to: "matrix", name: "Matrix Data Structure" },
  
  // Add more if you want to test scroll
];


const DsaTutorial = () => {
  return (
    <div className="flex">
     
      <Sidebar links={dsaLinks} title="DSA Topics" />
      
      {/* Main content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DsaTutorial;
