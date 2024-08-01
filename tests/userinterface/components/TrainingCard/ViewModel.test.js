import React from 'react';
import { TrainingCardViewModel } from '@trainingsapp/components/TrainingCard/ViewModel';
import {
  describe,
  beforeEach,
  afterEach,
  test,
  expect,
  jest,
} from '@jest/globals';

describe('Tests of TrainingCardViewModel', () => {
  const setStateMock = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');

  beforeEach(() => {
    useStateSpy.mockImplementation((state) => [state, setStateMock]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should change the colors for title and bg on handleMouseEnterCard', () => {
    //Act
    const { handleMouseEnterCard } = TrainingCardViewModel();
    handleMouseEnterCard();

    //Assert
    expect(setStateMock).toHaveBeenCalledTimes(2);
    expect(setStateMock).toHaveBeenCalledWith('primary.0');
    expect(setStateMock).toHaveBeenCalledWith('gray.700');
  });

  test('Should change the colors for title and bg on handleMouseLeaveCard', () => {
    //Act
    const { handleMouseLeaveCard } = TrainingCardViewModel();
    handleMouseLeaveCard();

    //Assert
    expect(setStateMock).toHaveBeenCalledTimes(2);
    expect(setStateMock).toHaveBeenCalledWith('black');
    expect(setStateMock).toHaveBeenCalledWith('primary.0');
  });
});
