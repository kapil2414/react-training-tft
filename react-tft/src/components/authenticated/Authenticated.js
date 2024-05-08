import { Outlet, Navigate } from "react-router-dom";
// import { useAuth } from "../../utils/auth";
import { PAGE_ROUTES } from "../../utils/constants";

const Authenticated = () => {
  const token = localStorage.getItem("authToken");
//   const auth = useAuth();
  return !!token ? <Outlet /> : <Navigate to={PAGE_ROUTES.LOGIN} />;
};

export default Authenticated