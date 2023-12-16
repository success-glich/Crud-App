import React, { ChangeEvent, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// import { useToast } from "@/components/ui/use-toast";
import { IUser, userErrorType } from "@/type";
import { useNavigate } from "react-router-dom";
import SelectInput from "./SelectInput";
import { countryOptions, provinceOptions } from "./AddUser";
import { getCurrentDate } from "@/lib/utils";
import { Edit2 } from "lucide-react";

export default function EditUser({ user }: { user: IUser }) {
  const userState = {
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    dob: user.dob,
    address: {
      city: user?.address?.city,
      district: user.address.district,
      province: user?.address.province,
      country: user.address.country,
    },
  };
  const [formData, setFormData] = useState<IUser>(userState);
  console.log(user);
  const navigate = useNavigate();
  // const { toast } = useToast();
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const toggleSheet = () => setSheetOpen(!sheetOpen);
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
    // if (
    //   name === "city" ||
    //   name === "district" ||
    //   name === "province" ||
    //   name == "country"
    // ) {
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     address: {
    //       ...prevFormData.address,
    //       [name]: value,
    //     },
    //   }));
    // } else {
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     [name]: value,
    //   }));
    // }
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<userErrorType>({});

  const submit = () => {};
  return (
    <div>
      <Sheet open={sheetOpen}>
        <SheetTrigger>
          {/* <Button variant="secondary" onClick={toggleSheet}>
            Edit
          </Button> */}
          <span onClick={toggleSheet}>
            <Edit2
              size={20}
              className="text-blue-500 hover:scale-125 cursor-pointer transition-all"
            />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit your user data.</SheetTitle>
            <SheetDescription>
              Display your amazing UI/UX Work to the world.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4  ml-4  md:ml-4 md:col-span-2 lg:col-span-3 w-full">
            <Label htmlFor="name">
              Name <span className="text-red-500 font-bold text-sm">*</span>
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <span className="text-red-500 font-bold text-sm">
              {errors?.name}
            </span>
          </div>
          <div className="mt-4 ml-4 ">
            <Label htmlFor="email">
              Email <span className="text-red-500 font-bold text-sm">*</span>
            </Label>
            <Input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
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
              value={formData.phoneNumber}
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
                value={formData.dob}
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
              value={formData.address.city}
              placeholder="Eg: Kathmandu"
              onChange={handleChange}
            />
            <span className="text-red-500 font-bold text-sm"></span>
          </div>
          <div className="mt-4 ml-4 ">
            <Label htmlFor="district">District</Label>
            <Input
              type="text"
              name="district"
              id="district"
              value={formData.address.district}
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
          <SheetFooter>
            <div className="mt-4 flex gap-2 justify-items-start w-full ">
              <Button variant="default" onClick={submit} disabled={loading}>
                {loading ? "Processing..." : "Update"}
              </Button>
              <Button variant="destructive" onClick={toggleSheet}>
                Close
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
