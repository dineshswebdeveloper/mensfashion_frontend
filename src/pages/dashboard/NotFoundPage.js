import React, { Fragment } from "react";
import { CgArrowLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import DynamicTitle from "../../utils/DynamicTitle";
function NotFoundPage() {
  DynamicTitle("Men's Fashion | 404");
  return (
    <Fragment>
      <div className="container">
        <h4 className="d-flex bg-white align-items-center container shadow ">
          <span
            onClick={() => window.history.back()}
            className="ms-4 my-1 text-nowrap border-hover-light px-1 rounded text-danger curser-pointer fs-6 px-0"
          >
            <CgArrowLeft className="" />
            GO BACK
          </span>
        </h4>

        <Fragment>
          <div className="py-5 my-5 bg-white shadow h-300">
            <div className="d-flex justify-content-center h-100 align-items-center flex-column">
              <div className="link-danger fs-1">404</div>
              <div className="link-danger fs-3">Page Not Found</div>
              <div className="mt-4">
                <Link to={`/`} className="btn btn-primary">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
}

export default NotFoundPage;
