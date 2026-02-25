import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../css/FormLogin.css";
import { checkLogin } from "../storage/storage";
const FormLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const user = checkLogin(values.email, values.password);
      if (user) {
        localStorage.setItem("Dashboard", JSON.stringify(user));
        navigate("/Dashboards");
      } else {
        alert("چنین اطلاعاتی وجود ندارد! لطفا ابتدا ثبت نام کنید.");
      }
    },
  });

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form className="frm" onSubmit={formik.handleSubmit}>
          <label htmlFor="email">email :</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
          <button className="btn" type="submit">
            Login
          </button>
          <h6>
            Lorem ipsum dolor consectetur adipisicing.
            <Link className="lin" to="/Formsignup">
              Signup!!
            </Link>
          </h6>
        </form>
      </div>
    </>
  );
};
export default FormLogin;
