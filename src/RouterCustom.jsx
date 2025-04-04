import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTERS } from './routers/router';
import HomePageManagement from './pages/pageManager/quan_ly_trang_chu';
import HomePageLayout from './layouts/HomePageLayout';
import FacilityManagement from './pages/pageManager/quan_ly_co_so/index.jsx';
import FacilityDetailManagement from './pages/pageManager/quan_ly_co_so_chi_tiet/index.jsx';
import InformationManagement from './pages/pageManager/quan_ly_tt_ca_nhan/index.jsx';
import SignUp from './pages/login/SignUp/index.jsx';
import SigIn from './pages/login/SignIn/index.jsx';

export const userRouters = [
  {
    path: ROUTERS.USER.signup,
    component: <SignUp />,
  },
  {
    path: ROUTERS.USER.signin,
    component: <SigIn />,
  },
  {
    path: ROUTERS.USER.home,
    component: <HomePageManagement />,
  },
  {
    path: ROUTERS.USER.homepage,
    component: <HomePageManagement />,
  },
  {
    path: ROUTERS.USER.facility,
    component: <FacilityManagement />,
    layout: HomePageLayout,
  },
  {
    path: ROUTERS.USER.facilityDetail,
    component: <FacilityDetailManagement />,
    layout: HomePageLayout,
  },
  {
    path: ROUTERS.USER.profile,
    component: <InformationManagement />,
    layout: HomePageLayout,
  },
];

const RouterCustom = () => (
  <Routes>
    {userRouters.map((route, key) => {
      const Layout = route.layout || React.Fragment;
      return (
        <Route
          key={key}
          path={route.path}
          element={<Layout>{route.component}</Layout>}
        />
      );
    })}
  </Routes>
);

export default RouterCustom;