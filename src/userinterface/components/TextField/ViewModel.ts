import { useState } from 'react';

export function TextFieldViewModel() {
  const [text, setText] = useState<string>('');

  const onChangeValue = ({
    value,
    maxLength,
  }: {
    value: string;
    maxLength: number;
  }) => {
    if (value?.length <= maxLength) {
      setText(value);
    }
  };

  const onResetValue = () => {
    setText('');
  };

  const colorSelector = ({
    value,
    minLength,
    maxLength,
  }: {
    value: string;
    minLength: number;
    maxLength: number;
  }) => {
    if (
      value?.length >= maxLength ||
      (value?.length < minLength && value?.length > 0) ||
      (typeof value === 'string' && !value?.trim()?.length && value?.length)
    ) {
      return 'red.300';
    }
    return 'gray.500';
  };

  return { text, onResetValue, onChangeValue, colorSelector };
}
