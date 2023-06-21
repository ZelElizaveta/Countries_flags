import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Theme } from './theme-slice';

import { setTheme } from './theme-slice';
import { selectTheme } from './theme-selectors';

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = ():void => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme]
}
