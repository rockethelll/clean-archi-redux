import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import DashboardPage from './userinterface/pages/dashboard/Dashboard';
import TrainingConfigurationPage from './userinterface/pages/production/configuration/Configuration';
import TrainingPresentationPage from './userinterface/pages/production/presentation/Presentation';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <DashboardPage /> },
    { path: '/production', element: <TrainingConfigurationPage /> },
    {
      path: '/production/edit/:trainingId',
      element: <TrainingConfigurationPage edition={true} />,
    },
    {
      path: '/presentation/:trainingId',
      element: <TrainingPresentationPage />,
    },
    { path: '*', element: <Navigate to='/' replace /> },
  ]);
  return (
    <RouterProvider
      router={router}
      fallbackElement={<DashboardPage />}
    ></RouterProvider>
  );
}

export default App;
