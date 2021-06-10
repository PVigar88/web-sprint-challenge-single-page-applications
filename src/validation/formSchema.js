import * as yup from "yup";

export default yup.object().shape({
  first_name: yup.string().min(2).required("First Name is required"),
  last_name: yup.string().min(2).required("Last Name is required"),
  size: yup.string().oneOf(["S", "M", "L", "XL"]),
  sauce: yup.string().oneOf(["none", "classic", "bbq", "alfredo"]),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  greenPeppers: yup.boolean(),
  onion: yup.boolean(),
  blackOlives: yup.boolean(),
  greenOlives: yup.boolean(),
  mushroom: yup.boolean(),
  bananaPeppers: yup.boolean(),
  pineapple: yup.boolean(),
  specialInstructions: yup.string(),
});
