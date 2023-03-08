import axios from "axios";
const apiUrl = "http://localhost:8181";
export const getCards = async () => {
  try {
    const response = await axios.get(`${apiUrl}/cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
