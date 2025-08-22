import { createBrowserRouter } from 'react-router';
import Login from '../pages/Login';
import Home from '../pages/Home/';
import User from '../pages/Home/User';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    children: [
      {
        index: true,
        Component: User,
      },
      {
        path: '/user',
        Component: User,
      },
    ],
  },
  {
    path: '/login',
    Component: Login,
  },
]);

export default router;
