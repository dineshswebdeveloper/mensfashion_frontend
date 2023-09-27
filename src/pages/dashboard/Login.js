import React, { useState, Fragment, useEffect } from "react";
import axios from "../../api/axios";
import {
  authRequest,
  authSuccess,
  authFail,
} from "../../store/slices/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../utils/DynamicTitle";
function Login() {
  DynamicTitle("Men's Fashion | Login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthorised } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (isAuthorised) {
      navigate("/");
    }
  });
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [userStatus, setUserStatus] = useState({
    emailstatus: null,
    passwordstatus: null,
  });
  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(authRequest());
    axios
      .post("/user/userlogin", userLogin)
      .then((res) => {
        if (res.data.status === "email does not match") {
          setUserStatus({ ...userStatus, emailstatus: `* ${res.data.status}` });
        } else if (res.data.status === "password does not match") {
          setUserStatus({ emailstatus: null });
          setUserStatus({ passwordstatus: `* ${res.data.status}` });
        } else if (res.data.status === "user logined") {
          setUserStatus({ emailstatus: null, passwordstatus: null });
          setUserLogin({ email: "", password: "" });
          toast.success("Your are successfully Login", {
            position: "bottom-center",
            autoClose: 3000,
            closeOnClick: true,
            theme: "dark",
            pauseOnHover: true,
          });
          setTimeout(() => {
            dispatch(authSuccess(res.data.oldUser));
          }, 1000);
        }
      })
      .catch((err) => dispatch(authFail(err.message)));
  };
  return (
    <Fragment>
      <ToastContainer />
      <div className="container row mx-auto justify-content-center align-items-center my-5 py-5">
        <form
          onSubmit={handleSubmit}
          className="col-12 col-sm-8 col-md-6 col-lg-5 rounded bg-white shadow d-flex flex-column py-2 mx-1 mx-sm-0"
        >
          <label className="my-2 ms-2">Email</label>
          <input
            type="Email"
            placeholder="Enter ur Email"
            name="email"
            onChange={handleChange}
            className="mb-2 form-control shadow-none"
            autoComplete="off"
            required
            value={userLogin.email}
          />
          <div className="text-danger fs-14px text-end">
            {userStatus?.emailstatus}
          </div>
          <label className="my-2 ms-2 ">Password</label>
          <input
            type="password"
            placeholder="Enter ur Password"
            name="password"
            onChange={handleChange}
            className="mb-2 form-control shadow-none"
            autoComplete="off"
            required
            value={userLogin.password}
          />
          <div className="text-danger fs-14px text-end">
            {userStatus?.passwordstatus}
          </div>
          <div className="text-end my-2 fs-14px ">
            <Link to={"/register"} className="link-primary">
              New User
            </Link>
          </div>
          <div className="text-end ">
            <input type="submit" className="btn btn-success py-1" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
