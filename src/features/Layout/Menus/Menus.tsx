import React from 'react';
import SimpleBar from 'simplebar-react';
import './menus.less';

import { RoutesList } from '@/routes'
import { Link } from 'react-router-dom';

export const Menus = () => {
  return (
    <div className='menus-cont'>
      <SimpleBar style={{ height: '100%' }}>
        {
          RoutesList.map(routeData =>
            <div key={routeData.name} className='menus-item'>
              <Link to={routeData.path}>{routeData.name}</Link>
            </div>
          )
        }
      </SimpleBar>
    </div>
  );
}

export default Menus;
