import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { Home } from './modules/home/Home';
import { Layout } from './components/page/Layout';
import { pathes } from './pathes';
import { Projects } from './modules/projects/Projects';
import { Skills } from './modules/skills/Skills';
import { Contact } from './modules/contact/Contact';
import { NotFound } from './modules/not-found/NotFound';
import './scss/_global.scss';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: pathes.HOME,
        element: <Home />,
      },
      {
        path: pathes.PROJECTS,
        element: <Projects />,
      },
      {
        path: pathes.SKILLS,
        element: <Skills />,
      },
      {
        path: pathes.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
