import React, { useEffect } from 'react';
import './toggleTheme.less';

import { ReactComponent as IconDark } from '@/assets/icons/icon-theme-dark.svg';
import { ReactComponent as IconLight } from '@/assets/icons/icon-theme-light.svg';

import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { selectTheme, ThemeType, toggleTheme } from '@/stores/Global/globalSlice'

export const ToggleTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme)
  const handleToggleTheme = () => {
    const targetTheme = theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
    dispatch(toggleTheme(targetTheme));
    localStorage.setItem('DB-THEME-TYPE', targetTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])
  return (
    <div className='theme-toggle'>
      <div className='theme-toggle-wrapper' onClick={handleToggleTheme}>
        {
          theme === ThemeType.DARK ? (
            <IconLight className='toggle-theme-icon' />
          ) : (
            <IconDark className='toggle-theme-icon' />
          )
        }
      </div>
    </div>
  );
}

export default ToggleTheme;
