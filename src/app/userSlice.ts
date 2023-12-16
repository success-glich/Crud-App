import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/type";
import { useAppSelector } from "./hooks";

interface UserState {
  userList: IUser[];
}
const initialState: UserState = {
  userList: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {},
    editUser: (
      state,
      action: PayloadAction<{ id: string; updatedUser: IUser }>
    ) => {},
    deleteUser: (state, action: PayloadAction<string>) => {},
  },
});

// * Function to generate unique ids
const generateUniqueId = (): string => {
  return "_" + Math.random().toString(36).slice(2, 9);
};

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
