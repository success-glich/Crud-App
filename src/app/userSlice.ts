import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/type";
import { useAppSelector } from "./hooks";

interface UserState {
  userList: IUser[];
}
const initialState: UserState = {
  userList: JSON.parse(localStorage.getItem("userList")!) || [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.userList.push(action.payload);
      console.log(state.userList);
      localStorage.setItem("userList", JSON.stringify(state.userList));
    },
    editUser: (
      state,
      action: PayloadAction<{ id: string; updatedUser: IUser }>
    ) => {},
    deleteUser: (state, action: PayloadAction<string>) => {},
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
