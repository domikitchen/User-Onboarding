import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(3, "Name must be at least 3 characters long.")
    .required("Name is Required"),
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is Required"),
//   exp: Yup
//     .string()
//     .oneOf(['html', 'css', 'javascript', 'java', 'python', 'csharp' === true], "Please select at least one language"),
  terms: Yup
    .string()
    .oneOf(["Agree"], "Please agree to our Terms of Service to Continue"),
})

export default formSchema
