import AddUser from "@/components/AddUser";
import { Button } from "@/components/ui/button";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-5xl font-bold">UI Home </h1>
        <p className="text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit !
        </p>

        <div className="mt-10 ">
          <AddUser />
        </div>
      </div>
    </div>
  );
};

export default Home;
