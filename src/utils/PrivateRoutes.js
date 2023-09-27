import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function PrivateRoutes() {
  const { isAuthorised } = useSelector((state) => state.authReducer);
  let auth = { isAuthorised: isAuthorised };
  return auth.isAuthorised ? <Outlet /> : <Navigate to={`/login`} />;
}

export default PrivateRoutes;
