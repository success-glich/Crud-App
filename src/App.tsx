import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { IUser } from "./type";
import { useAppSelector } from "./app/hooks";

function App() {
  // const userData = useAppSelector((state) => state.users.userList);

  // console.log(userData);
  return (
    <>
      <div>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
