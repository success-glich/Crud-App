import { useAppSelector } from "@/app/hooks";
import { columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";

function Profile() {
  const userList = useAppSelector((state) => state.users.userList);
  return (
    <>
      <div className="container">
        <div className="flex justify-center flex-col  items-center">
          <h1 className="text-4xl font-bold">Profile Page </h1>
          <p className="text-2xl text-center md:">
            Lorem ipsum dolor sit amet consectetur adipisicing elit !
          </p>

          <div className="mt-5 p-10 ">
            <DataTable data={userList} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
