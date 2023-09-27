import React, { Fragment, useState, useEffect } from "react";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  authRequest,
  authFail,
  authSuccess,
} from "../../store/slices/authReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../utils/DynamicTitle";
function Register() {
  DynamicTitle("Men's Fashion | Register");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthorised } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (isAuthorised) {
      navigate(`/login`);
    }
  });
  const [userReg, setUserReg] = useState({ name: "", email: "", password: "" });
  const [userStatus, setUserStatus] = useState({});
  const handleChange = (e) => {
    setUserReg({ ...userReg, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userErr = {};
    if (!userReg.name.trim()) {
      userErr.userNamestatus = "Username is required";
    } else if (userReg.name.length < 6) {
      userErr.userNamestatus = "Name should be at least 3 char";
    } else if (userReg.name.length > 15) {
      userErr.userNamestatus = "Name should be max 15 char";
    }
    if (!userReg.email.trim()) {
      userErr.emailstatus = "Email is required";
    } else if (!/\S+@+\S+.+\S/.test(userReg.email)) {
      userErr.emailstatus = "Email is not valid(to valid @ and .com)";
    }
    if (!userReg.password.trim()) {
      userErr.passwordstatus = "Password is required";
    } else if (userReg.password.length < 6) {
      userErr.passwordstatus = "Password should be at least 6 char";
    }
    setUserStatus(userErr);
    if (Object.keys(userErr).length === 0) {
      dispatch(authRequest());
      axios
        .post("/user/usersignup", userReg)
        .then((res) => {
          if (res.data.status === "user created") {
            setUserStatus({});
            dispatch(authSuccess(res.data.newUser));
            toast.success("Account created", {
              position: "bottom-center",
              autoClose: 3000,
              closeOnClick: true,
              theme: "dark",
              pauseOnHover: true,
            });
          } else if (res.data.status === "user exist") {
            setUserStatus({ emailstatus: `* user exist` });
          }
        })
        .catch((err) => dispatch(authFail(err.message)));
    }
  };
  return (
    <Fragment>
      <ToastContainer />
      <div className="container row mx-auto justify-content-center my-5 py-5">
        <form
          onSubmit={handleSubmit}
          className="col-12 col-sm-8 col-md-6 col-lg-5 rounded bg-white shadow d-flex flex-column py-2 mx-1 mx-sm-0"
        >
          <label className="my-2 ms-2">Name</label>
          <input
            type="text"
            placeholder="Enter ur name"
            name="name"
            onChange={handleChange}
            className="mb-2 form-control shadow-none"
            autoComplete="off"
          />
          <div className="text-danger fs-10px text-end">
            {userStatus?.userNamestatus}
          </div>
          <label className="my-2 ms-2">Email</label>
          <input
            type="email"
            placeholder="Enter ur Email"
            name="email"
            onChange={handleChange}
            className="mb-2 form-control shadow-none"
            autoComplete="off"
          />
          <div className="text-danger fs-10px text-end">
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
          />
          <div className="text-danger fs-10px text-end">
            {userStatus?.passwordstatus}
          </div>
          <div className="text-end my-2 fs-14px ">
            <Link to={`/login`} className="link-primary">
              Already i have account
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

export default Register;
