
import { useLocation, Navigate, Outlet  } from 'react-router-dom';


const PrivateRoute = ({ isAuthenticated }) => {
     const location = useLocation();
  return (
    <> 
    {isAuthenticated ?  <Outlet /> : <Navigate to="/auth/signin" state={{ from: location }} replace />} 
    </>
  );
};

export default PrivateRoute;

