import React from 'react';
import SimpleBar from 'simplebar-react';
import './menus.less';

import { RoutesList } from '@/routes'
import { NavLink } from 'react-router-dom';

export const Menus = () => {
  return (
    <div className='menus-cont'>
      <SimpleBar style={{ height: '100%' }}>
        {
          RoutesList.map(routeData =>
            <div key={routeData.name} className='menus-item'>
              <NavLink to={routeData.path}>{routeData.name}</NavLink>
            </div>
          )
        }
      </SimpleBar>
    </div>
  );
}

export default Menus;
