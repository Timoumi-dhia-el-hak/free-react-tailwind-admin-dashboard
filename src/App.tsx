import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import DeffSignIn from './pages/Authentication/DeffSignIn';
import DeffSignUp from './pages/Authentication/DeffSignUp';
import PrivateRoute from './routes/PrivetRoute';
import Users from'./pages/Users';
import Files from'./pages/Files';
import GeneralSetting from'./components/GeneralSetting';
import Otherssettingsdomain from'./components/Otherssettingsdomain​';
import Keyvaluepage from'./components/Keyvaluepage';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const isauth= localStorage.getItem("login")
  console.log('isauth',isauth)
    useEffect(() => {
      
      if (isauth) {
        setAuthenticated(true);
      }
    }, []);
  console.log('isauthenticated',authenticated)

  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
      ) : 
      (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
         <Routes>
        
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<PrivateRoute isAuthenticated={authenticated } component={undefined} />}>
        <Route element={<DefaultLayout />}>
        <Route path="/Keyvaluepage" element={<Keyvaluepage />} />
        <Route path="/Otherssettingsdomain" element={<Otherssettingsdomain />} />
        <Route path="/GeneralSetting" element={<GeneralSetting />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/files" element={<Files />} />
        </Route>
        </Route>
        <Route element={<DefaultLayout />}>
          <Route index element={<ECommerce />} />
              {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        
        </Route>
        </Routes> 
      
    </>
  );
}

export default App;
