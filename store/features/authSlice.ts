import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {UserType} from "@/types/user";


type AuthState = {
  token: string;
  user: UserType;
  isLoggedIn: boolean;
  payload: any;
}

const initialState = {
  token: "",
  user: {},
  isLoggedIn: false,
  payload: {},
} as AuthState;


export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("payload");
      return initialState;
    },
    login: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.payload = action.payload;
    //   save initial state to local storage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("payload", JSON.stringify(action.payload));
    },
  }
});

export const {login, logOut} = auth.actions;
export default auth.reducer;