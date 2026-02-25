import { Link, useNavigate } from "react-router-dom";
import "../css/FormSignup.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { saveUser } from "../storage/storage";
const FormSignup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      UserName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      UserName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values, { setFieldError, resetForm }) => {
      console.log(values);
      const saved = saveUser(values);
      if (saved) {
        alert("ثبت نام با موفقیت انجام شد!");
        resetForm();
        navigate("/");
      } else {
        setFieldError("email", "این ایمیل قبلاً ثبت نام کرده است");
      }
    },
  });

  return (
    <>
      <div className="container2">
        <h1>Sign up</h1>
        <form className="frm2" onSubmit={formik.handleSubmit}>
          <label htmlFor="UserName">UserName :</label>
          <input
            name="UserName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.UserName}
          />
          {formik.touched.UserName && formik.errors.UserName ? (
            <div style={{ color: "red" }}>{formik.errors.UserName}</div>
          ) : null}
          <label htmlFor="Email">Email :</label>
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="Passeword">Passeword :</label>
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red", fontSize: "15px" }}>
              {formik.errors.password}
            </div>
          ) : null}
          <button className="btn2" type="submit">
            Sign up
          </button>
          <h6 id="h6">
            <Link className="lins" to="/">
              Login
            </Link>
          </h6>
        </form>
      </div>
    </>
  );
};
export default FormSignup;
