import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import UserDeleteBtn from "./UserDeleteBtn";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
// import DatePicker from "./DatePicker";

import { userErrorType } from "@/type";
import {
  generateUniqueId,
  getCurrentDate,
  validateEmail,
  validatePhone,
} from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addUser } from "@/app/userSlice";
import SelectInput from "./SelectInput";

interface IUser {
  id: string;
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

const provinceOptions = [
  { value: "1", label: "Province 1" },
  { value: "2", label: "Province 2" },
  { value: "3", label: "Province 3" },
  { value: "4", label: "Province 4" },
  { value: "5", label: "Province 5" },
  { value: "6", label: "Province 6" },
  { value: "7", label: "Province 7" },
];
const countryOptions = [
  { value: "Nepal", label: "Nepal" },
  { value: "Australia", label: "Australia" },
  { value: "Other", label: "Other" },
];
const initialState = {
  id: "",
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
};

export default function AddUser() {
  const [formData, setFormData] = useState<IUser>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<userErrorType>({});
  const dispatch = useAppDispatch();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (
      name === "city" ||
      name === "district" ||
      name === "province" ||
      name == "country"
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        address: {
          ...prevFormData.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  console.log("user Data", formData);

  const submit = () => {
    setLoading(true);
    const errRecords: Record<string, string> = {};
    setErrors({});
    if (!formData.name.trim()) {
      errRecords.name = "* Name is required";
    }
    if (!formData.email.trim()) {
      errRecords.email = "* Email is required";
    } else if (!validateEmail(formData.email)) {
      errRecords.email = "* Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      errRecords.phoneNumber = "* Phone Number is required";
    } else if (!validatePhone(formData.phoneNumber)) {
      errRecords.phoneNumber =
        "* Invalid Phone Number Format or  at least 7 digits ";
    }
    setErrors(errRecords);

    if (Object.keys(errRecords).length > 0) {
      setLoading(false);
      return;
    }
    setErrors({});

    dispatch(addUser({ ...formData, id: generateUniqueId() }));
  };
  const clear = () => {
    setErrors({});
    setFormData(initialState);
  };

  return (
    <div className=" flex  flex-col justify-center md:flex md:flex-col md:justify-center lg:items-center  p-2 ">
      <h1 className="text-bold text-3xl border-l-2 border-orange-200 ml-8 ">
        Add User profile
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  p-4    ">
        <div className="mt-4  ml-4  md:ml-4 md:col-span-2 lg:col-span-3 w-full">
          <Label htmlFor="name">
            Name <span className="text-red-500 font-bold text-sm"></span>
          </Label>
          <Input type="text" name="name" id="name" onChange={handleChange} />
          <span className="text-red-500 font-bold text-sm">{errors?.name}</span>
        </div>
        <div className="mt-4 ml-4 ">
          <Label htmlFor="email">
            Email <span className="text-red-500 font-bold text-sm">*</span>
          </Label>
          <Input type="text" name="email" id="email" onChange={handleChange} />
          <span className="text-red-500 font-bold text-sm">
            {errors?.email}
          </span>
        </div>
        <div className="mt-4 ml-4 ">
          <Label htmlFor="phoneNumber">
            Phone Number
            <span className="text-red-500 font-bold text-sm"> *</span>
          </Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={handleChange}
          />
          <span className="text-red-500 font-bold text-sm">
            {errors?.phoneNumber}
          </span>
        </div>
        <div className="mt-4 ml-4 ">
          <Label htmlFor="dob">DOB:</Label>
          <div>
            <Input
              type="date"
              name="dob"
              id="dob"
              max={getCurrentDate()}
              onChange={handleChange}
            />
          </div>
          <span className="text-red-500 font-bold text-sm"></span>
        </div>
        <div className="mt-4 ml-4 ">
          <Label htmlFor="city">City</Label>
          <Input
            type="text"
            name="city"
            id="city"
            placeholder="Eg: Kathmandu"
            onChange={handleChange}
          />
          <span className="text-red-500 font-bold text-sm">
            {"* Email field is required"}
          </span>
        </div>
        <div className="mt-4 ml-4 ">
          <Label htmlFor="district">District</Label>
          <Input
            type="text"
            name="district"
            id="district"
            placeholder="Ex. Laliptur"
            onChange={handleChange}
          />
          <span className="text-red-500 font-bold text-sm"></span>
        </div>
        <div className="mt-4 ml-4">
          <Label htmlFor="province">Province</Label>

          <SelectInput
            name="province"
            options={provinceOptions}
            onChange={handleChange}
            selectedValue={formData.address.province}
          />
        </div>
        <div className="mt-4 ml-4">
          <Label htmlFor="province">Country</Label>

          <SelectInput
            name="country"
            options={countryOptions}
            onChange={handleChange}
            selectedValue={formData.address.country}
          />
        </div>
        <div className="mt-4 flex gap-2 md:col-span-2 lg:col-span-3 justify-items-center w-full ">
          <Button
            variant="default"
            onClick={submit}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Processing..." : "Submit"}
          </Button>
          <Button variant="destructive" className="w-full" onClick={clear}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
