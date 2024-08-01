import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@trainingsapp/store';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@trainingsapp/utils/ui-theme/theme';
import App from '../../src/App';
import { describe, test, expect } from '@jest/globals';

describe('Tests of Trainings usecases', () => {
  test('Should getTrainings on load DashboardPage', async () => {
    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>,
    );

    expect(
      await screen.findByText(
        'Formation présentiel - Computer Science, les bases',
      ),
    ).toBeVisible();
    expect(
      await screen.findByText('Formation - Computer Science, avancée'),
    ).toBeVisible();
    expect(
      await screen.findByText('Formation - CSS 4, les nouvelles possibilités'),
    ).toBeVisible();
    expect(
      await screen.findByText('Coaching présentiel - React, les bases'),
    ).toBeVisible();
    expect(
      await screen.findByText(
        'Rencontre - Robert Martin, le père du clean code',
      ),
    ).toBeVisible();
  });
});
