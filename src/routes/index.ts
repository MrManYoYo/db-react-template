import { FC } from 'react';
import { RouteProps } from 'react-router-dom'
import loadable, {LoadableComponent} from '@loadable/component'
import RouteLoading from './RouteLoading';

export type RouteMenu = {
  name: string;
  path: string;
  component: LoadableComponent<RouteProps> | FC
  children?: RouteMenu[]
}

function makeLazyRoute (compName: string, loadTemplate = RouteLoading) {
  return loadable(() => import(`@/features/${compName}/${compName}`), {
    fallback: loadTemplate
  })
}

export const RoutesList: RouteMenu[] = [
  {
    name: 'Home',
    path: '/',
    component: makeLazyRoute('Home')
  },
  {
    name: 'Setting',
    path: '/setting',
    component: makeLazyRoute('Setting')
  }
]

export default RoutesList
