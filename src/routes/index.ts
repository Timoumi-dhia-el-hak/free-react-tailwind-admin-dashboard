import { lazy } from 'react';
const Otherssettingsdomain = lazy(() => import( '../components/Otherssettingsdomain​'));
const Keyvaluepage = lazy(() => import( '../components/Keyvaluepage'));
const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const ECommerce= lazy(() => import('../pages/Dashboard/ECommerce'));
const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));
const Dashboard = lazy(() => import('../Dashboard'));
const Users = lazy(() => import('../pages/Users'));
const Files = lazy(() => import('../pages/Files'));
const GeneralSetting = lazy(() => import('../components/GeneralSetting'));


const coreRoutes = [
  {
    path: '/Keyvaluepage',
    title: 'Keyvaluepage',
    component:Keyvaluepage,
  },
  {
    path: '/Otherssettingsdomain',
    title: 'Otherssettingsdomain',
    component:Otherssettingsdomain,
  },
  {
    path: '/GeneralSetting',
    title: 'GeneralSetting',
    component:GeneralSetting,
  },
  {
    path: '/users',
    title: 'users',
    component:Users,
  },
  {
    path: '/files',
    title: 'files',
    component:Files,
  },
  {
    path: '/Dashboard',
    title: 'Dashboard',
    component:Dashboard,
  },
    {
    path: '/DefaultLayout',
    title: 'DefaultLayout',
    component: DefaultLayout,
  },
  {
    path: '/ECommerce',
    title: 'ECommerce',
    component: ECommerce,
  },
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
