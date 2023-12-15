import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <main className="container">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
