import React from 'react';
import {
  describe,
  beforeEach,
  afterEach,
  test,
  expect,
  jest,
} from '@jest/globals';
import { TextFieldViewModel } from '@trainingsapp/components/TextField/ViewModel';

describe('Tests of TextFieldViewModel', () => {
  const setStateMock = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');

  beforeEach(() => {
    useStateSpy.mockImplementation((state) => [state, setStateMock]);
  });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  test('', () => {
  });
});
