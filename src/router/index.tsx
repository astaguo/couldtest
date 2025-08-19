import { createBrowserRouter } from 'react-router';
import Login from '../pages/Login';
import Home from '../pages/Home/';
import Root from '../pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/home',
        Component: Home,
      },
    ],
  },
  {
    path: '/login',
    Component: Login,
  },
]);

export default router;
