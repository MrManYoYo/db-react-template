import React from 'react';
import './toggleTheme.less';

import { ReactComponent as IconDark } from '@/assets/icons/icon-theme-dark.svg';
import { ReactComponent as IconLight } from '@/assets/icons/icon-theme-light.svg';

import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { selectTheme, ThemeType, toggleTheme } from '@/stores/Global/globalSlice'

export const ToggleTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme)
  const handleToggleTheme = () => {
    dispatch(toggleTheme(theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT));
  }
  return (
    <div className='theme-toggle' onClick={handleToggleTheme}>
      {
        theme === ThemeType.DARK ? (
          <IconLight className='toggle-theme-icon' />
        ) : (
          <IconDark className='toggle-theme-icon' />
        )
      }
    </div>
  );
}

export default ToggleTheme;
