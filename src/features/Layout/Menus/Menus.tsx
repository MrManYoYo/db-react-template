import React from 'react';

import { RoutesList } from '@/routes'
import { Link } from 'react-router-dom';

export const Menus = () => {
  return (
    <div className='menus-cont'>
      {
        RoutesList.map(routeData =>
          <div key={routeData.name}>
            <Link to={routeData.path}>{routeData.name}</Link>
          </div>
        )
      }
    </div>
  );
}

export default Menus;
