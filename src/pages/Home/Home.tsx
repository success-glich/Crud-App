import { useAppSelector } from "@/app/hooks";
import AddUser from "@/components/AddUser";
import { columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const userList = useAppSelector((state) => state.users.userList);
  return (
    <div className="container">
      <div className="flex justify-center flex-col  items-center">
        <h1 className="text-4xl font-bold">UI Home </h1>
        <p className="text-2xl text-center md:">
          Lorem ipsum dolor sit amet consectetur adipisicing elit !
        </p>

        <div className="py-5 w-full mt-5 rounded-xl border-red-100 bottom-5 ">
          <AddUser />
        </div>

        <div className="mt-5 px-10 pt-10 ">
          <DataTable data={userList} columns={columns} />
        </div>

        <div className="bg-[#111827]  text-white p-2 mb-3 border-l-orange-300 border-l-4 rounded-md hover:bg-[#1a2233]">
          <Link to="/profile">
            <span>Go To Profile Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
