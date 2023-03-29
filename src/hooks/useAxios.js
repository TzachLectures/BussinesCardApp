import axios from "axios";
import { useEffect } from "react";
import { useSnack } from "../providers/SnackbarProvider";
import { useUser } from "./../users/providers/UserProvider";
export default function useAxios() {
  const snack = useSnack();
  const { token } = useUser();
  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;
    axios.interceptors.request.use((data) => {
      console.log("This log came from interceptor request");
      return Promise.resolve(data);
    }, null);

    axios.interceptors.response.use(null, (error) => {
      if (error.message) snack("error", error.message);
      return Promise.reject(error);
    });
  }, [snack, token]);
}
