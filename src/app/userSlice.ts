import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/type";

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
      localStorage.setItem("userList", JSON.stringify(state.userList));
    },
    editUser: (
      state,
      action: PayloadAction<{ id: string; updatedUser: IUser }>
    ) => {
      const { id, updatedUser } = action.payload;
      const index = state.userList.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.userList[index] = updatedUser;
      }
      localStorage.setItem("userList", JSON.stringify(state.userList));
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload
      );
      localStorage.setItem("userList", JSON.stringify(state.userList));
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
