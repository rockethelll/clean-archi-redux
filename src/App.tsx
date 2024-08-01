import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import DashboardPage from '@trainingsapp/pages/dashboard/Dashboard';
import TrainingConfigurationPage from '@trainingsapp/pages/production/configuration/Configuration';
import TrainingPresentationPage from '@trainingsapp/pages/production/presentation/Presentation';

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

  return <RouterProvider router={router} fallbackElement={<DashboardPage />} />;
}

export default App;
