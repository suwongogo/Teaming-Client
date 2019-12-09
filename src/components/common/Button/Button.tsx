import React, {ReactNode, FC} from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button``;

interface IProps {
  children: ReactNode;
  className?: string;
}

const Button: FC<IProps> = ({children, className}) => {
  return <ButtonWrapper className={className}>{children}</ButtonWrapper>;
};

export default Button;
