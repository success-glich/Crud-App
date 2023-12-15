import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { isPending } from "@reduxjs/toolkit";

function NavBar() {
  const isActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-orange-500" : "";
  return (
    <div className="h-16 w-full flex justify-between items-center px-6">
      <div className="flex  justify-center items-center">
        <img src="./images/logo.svg" className="w-10 h-52" />
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <div>
        <NavLink to="/" className={isActive}>
          <Button variant={"link"}>Home</Button>
        </NavLink>
        <NavLink to="/profile" className={isActive}>
          <Button variant={"link"}>Profile</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
