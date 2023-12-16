export interface IUser {
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

export type userErrorType = {
  name?: string;
  email?: string;
  phoneNumber?: string;
};
