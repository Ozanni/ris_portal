import { RouteObject, useRoutes } from 'react-router-dom';

import { NavBarLayout } from '@/components/Layout/NavBarLayout';

import { ExaminationPage } from '../components/ExaminationPage';
export enum registrationListPaths {
  base = '/',
}
export const ROUTE_EXAMINATION_LIST = '/examination';

export const ExaminationRoutes = () => {
  const elements = useRoutes(examinationRoutes);
  return <NavBarLayout>{elements}</NavBarLayout>;
};

const examinationRoutes: RouteObject[] = [
  {
    path: registrationListPaths.base,
    element: <ExaminationPage />,
  },
];
