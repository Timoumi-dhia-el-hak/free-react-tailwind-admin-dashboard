
import { useLocation, Navigate, Outlet  } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();
  return (
    <> 
       { userInfo ? <Outlet /> : <Navigate to='/auth/signin' state={{ from: location }} replace  />} 
    </>
  );
};
export default PrivateRoute;

