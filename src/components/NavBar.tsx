import {  NavLink } from "react-router-dom";
import { Button } from "./ui/button";

function NavBar() {
  return (
    <div className="h-16 w-full flex justify-between items-center px-6">
      <div>
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <div>
        <NavLink to="/">
          <Button variant={"link"}>Home</Button>
        </NavLink>
        <NavLink to="/">
          <Button variant={"link"}>Profile</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
