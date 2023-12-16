import { NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

function NavBar() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="h-16 w-full flex justify-between items-center px-6">
      <div className="flex  justify-center items-center">
        <img src="./images/logo.jpg" className="w-12 h-12" />
        <h1 className="ml-2 text-2xl font-bold">Treeleaf Ai</h1>
      </div>
      <div>
        <NavLink to="/">
          <Button
            variant={"link"}
            className={`text-md  lg:text-lg ${
              pathName === "/" ? "font-bold text-orange-500" : ""
            }`}
          >
            Home
          </Button>
        </NavLink>
        <NavLink to="/profile">
          <Button
            variant={"link"}
            className={`text-md  lg:text-lg ${
              pathName === "/profile" ? "font-bold text-orange-500" : ""
            }`}
          >
            Profile
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
