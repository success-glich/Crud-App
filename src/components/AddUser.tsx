import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import UserDeleteBtn from "./UserDeleteBtn";

interface IUser {
  name: string;
  email: string;
  phoneNumber: string;
  dob: string;
  address: {
    city: string;
    district: string;
    province: string;
    country: string;
  };
}
export default function AddUser() {
  const [formData, setFormData] = useState<IUser>({
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
    address: {
      city: "",
      district: "",
      province: "1",
      country: "Nepal",
    },
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      address: {
        ...prevFormData.address,
        [name]: value,
      },
    }));
  };
  return (
    <div>
      {" "}
      <UserDeleteBtn id={1} />
    </div>
  );
}
