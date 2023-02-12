import { array, number, shape, string } from "prop-types";
import addressType from "./addressType";
import imgType from "./imgType";

const cardType = shape({
  _id: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
  phone: string.isRequired,
  email: string.isRequired,
  web: string.isRequired,
  image: imgType.isRequired,
  address: addressType.isRequired,
  bizNumber: number.isRequired,
  likes: array,
  user_id: string.isRequired,
});

export default cardType;
