// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const AdminRoute = () => {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" />; // Redirect if not logged in
//   }

//   if (user.role !== "admin") {
//     return <Navigate to="/unauthorized" />; // Redirect if not an admin
//   }

//   return <Outlet />; // Render the protected admin route
// };

// export default AdminRoute;
