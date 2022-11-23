import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { RoutesList } from './routes'
import '@/App.less';
// simplebar scroll styles
import 'simplebar-react/dist/simplebar.min.css';

// Error Boundary
import ErrorBoundary from '@/features/ErrorBoundary/ErrorBoundary';
// route page components
import Header from '@/features/Layout/Header/Header';
import SiderBar from '@/features/Layout/Sidebar/Sidebar';

import { useAppSelector } from '@/app/hooks';
import { selectTheme } from '@/stores/Global/globalSlice'
// import { selectTheme, ThemeType, toggleTheme } from '@/stores/Global/globalSlice'

function App() {
  const theme = useAppSelector(selectTheme)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <BrowserRouter>
      <div className='db-app db-layout'>
        <aside className='db-layout-sidebar'>
          <SiderBar />
        </aside>
        <div className='db-layout-body'>
          <header className='db-layout-header'>
            <Header />
          </header>
          <main className='db-layout-main'>
            <ErrorBoundary>
              <Routes>
                {
                  RoutesList.map(route => {
                    return (
                      <Route key={route.name} path={route.path} element={ <route.component /> }></Route>
                    )
                  })
                }
              </Routes>
            </ErrorBoundary>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
