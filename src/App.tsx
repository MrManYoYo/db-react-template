import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { RoutesList } from './routes'
import '@/App.less';

// Error Boundary
import ErrorBoundary from '@/features/ErrorBoundary/ErrorBoundary';
// route page components
import Header from '@/features/Layout/Header/Header';
import SiderBar from '@/features/Layout/SiderBar/SiderBar';

function App() {
  return (
    <BrowserRouter>
      <div className='db-app'>
        <Header />
        <SiderBar />
        <div className='db-main'>
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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
