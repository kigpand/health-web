import { create } from "zustand";

interface ILoginState {
  loginState: boolean;
  changeLoginState: (loginState: boolean) => void;
}

const useLogin = create<ILoginState>((set) => ({
  loginState: false,
  changeLoginState: (loginState: boolean) => set({ loginState }),
}));

export default useLogin;
