import axios from "axios";

const apiUrl = "http://localhost:8181";

export const getCards = async () => {
  //כתוב פונקציה המבקשת את הכרטיסים מציגה בלוג ומטפלת בשגיאה
  try {
    const { data } = await axios.get(`${apiUrl}/cards`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
