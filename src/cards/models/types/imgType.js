import { shape, string } from "prop-types";

const imgType = shape({
  url: string.isRequired,
  alt: string.isRequired,
});

export default imgType;
