import React from 'react';
import './sidebar.less';
import { ReactComponent as Logo } from './React.svg';
import { Menus } from '@/features/Layout/Menus/Menus';
import { ToggleTheme } from '@/features/ToggleTheme/ToggleTheme';
import { useNavigate } from 'react-router-dom'



export const SiderBar = () => {
  const navigate = useNavigate()
  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <div className='db-sidebar-cont'>
      <div className='db-sidebar-header logo-cont' onClick={handleBackHome}>
        <Logo width={30} height={30} className='logo-asset' />
        React Template
      </div>

      <div className='db-sidebar-body'>
        <Menus />
      </div>

      <div className='db-sidebar-footer'>
        <ToggleTheme />
      </div>
    </div>
  );
}

export default SiderBar;
