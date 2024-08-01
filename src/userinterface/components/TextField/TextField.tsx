import { Box, Input } from '@chakra-ui/react';
import { CharacterCounter } from '@trainingsapp/components/TextField/CharcterCounter';
import { useEffect } from 'react';
import DI from '@trainingsapp/di/ioc';

interface TextFieldProps {
  name: string;
  value?: string;
  type: string;
  onReset?: boolean;
  onChange: (text: string) => void;
  testId: string;
  minLength: number;
  maxLength: number;
}

export const TextField = ({
  name,
  value,
  onChange,
  onReset,
  testId,
  minLength,
  maxLength,
}: TextFieldProps) => {
  const { onResetValue, text, onChangeValue, colorSelector } =
    DI.resolve('TextFieldViewModel');

  useEffect(() => {
    if (onReset) {
      onResetValue();
    }
  }, [onReset, onResetValue]);

  useEffect(() => {
    onChangeValue({ value, maxLength });
  }, [maxLength, value, onChangeValue]);

  return (
    <Box
      position='relative'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      width='100%'
    >
      <Input
        w='100%'
        h='5rem'
        padding='1.5rem'
        bg='white'
        fontSize='1.6rem'
        borderRadius='.4rem'
        placeholder='Titre'
        variant='default'
        onChange={(e) => {
          onChangeValue({ value: e.target.value, maxLength }),
            onChange(e.target.value);
        }}
        data-testid={testId}
        minLength={minLength}
        maxLength={maxLength}
        value={text}
        name={name}
      />

      {maxLength && (
        <Box position='absolute' right='1rem' bottom='1rem'>
          <CharacterCounter
            colorSelector={colorSelector}
            minLength={minLength}
            maxLength={maxLength}
            value={text}
          />
        </Box>
      )}
    </Box>
  );
};
