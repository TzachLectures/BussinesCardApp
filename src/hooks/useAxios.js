import axios from "axios";
import { useSnack } from "../providers/SnackbarProvider";

export default function useAxios() {
  const snack = useSnack();

  axios.interceptors.request.use((data) => {
    console.log("This log came from interceptor request");
    return Promise.resolve(data);
  }, null);

  axios.interceptors.response.use(null, (error) => {
    if (error.message) snack("error", error.message);
    return Promise.reject(error);
  });
}
