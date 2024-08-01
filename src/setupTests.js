// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { setupServer } from 'msw/node';
import { handlers } from '@trainingsapp/infrastructure/inMemory/server';
import { beforeAll, afterAll, afterEach } from '@jest/globals';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
