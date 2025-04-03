import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTERS } from './routers/router';
import HomePageManagement from './pages/pageManager/quan_ly_trang_chu';
import HomePageLayout from './layouts/HomePageLayout';
import FacilityManagement from './pages/pageManager/quan_ly_co_so/index.jsx';
import FacilityDetailManagement from './pages/pageManager/quan_ly_co_so_chi_tiet/index.jsx';
import InformationManagement from './pages/pageManager/quan_ly_tt_ca_nhan/index.jsx';

export const userRouters = [
  {
    path: ROUTERS.USER.home,
    component: <HomePageManagement />,
    layout: HomePageLayout,
  },
  {
    path: ROUTERS.USER.homepage,
    component: <HomePageManagement />,
    layout: HomePageLayout,
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