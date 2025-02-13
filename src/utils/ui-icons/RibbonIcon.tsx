import { Icon } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export interface Props {
  boxSize?: string;
}

export const RibbonIcon = (props: PropsWithChildren<Props>) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM15 5H9V14.382L11.5528 13.1056C11.8343 12.9648 12.1657 12.9648 12.4472 13.1056L15 14.382V5ZM7 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H17V16C17 16.3466 16.8205 16.6684 16.5257 16.8507C16.2309 17.0329 15.8628 17.0494 15.5528 16.8944L12 15.118L8.44721 16.8944C8.13723 17.0494 7.76909 17.0329 7.47427 16.8507C7.17945 16.6684 7 16.3466 7 16V5Z'
      fill='currentColor'
    />
  </Icon>
);
