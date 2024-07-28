/* eslint-disable no-undef */
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals';
import { TrainingCardViewModel } from '@trainingsapp/components/TrainingCard/ViewModel';
import React from 'react';

describe('Test of TrainingCard ViewModel', () => {
  const setStateMock = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');

  beforeEach(() => {
    useStateSpy.mockImplementation((state) => [state, setStateMock]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should change the colors for title and bg on handleMouseEnterCard', () => {
    const { handleMouseEnterCard } = TrainingCardViewModel();
    handleMouseEnterCard();

    expect(setStateMock).toHaveBeenCalledTimes(2);
    expect(setStateMock).toHaveBeenCalledWith('primary.0');
    expect(setStateMock).toHaveBeenCalledWith('gray.700');
  });

  test('Should change the colors for title and bg on handleMouseLeaveCard', () => {
    const { handleMouseLeaveCard } = TrainingCardViewModel();
    handleMouseLeaveCard();

    expect(setStateMock).toHaveBeenCalledTimes(2);
    expect(setStateMock).toHaveBeenCalledWith('black');
    expect(setStateMock).toHaveBeenCalledWith('primary.0');
  });
});
