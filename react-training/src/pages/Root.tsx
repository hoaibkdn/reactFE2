/** @format */
import { Outlet } from 'react-router-dom';

import Tabs from './../components/Tabs';

const Root = () => {
  return (
    <div>
      <Tabs />
      <Outlet />
    </div>
  );
};

export default Root;
