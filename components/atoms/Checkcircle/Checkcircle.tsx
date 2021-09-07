import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

export type CheckcircleProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkcircle = (props: CheckcircleProps) => {
  return (
    <Label>
      <Input {...props} type="checkbox" />
      <Box boxSize="28px" p="3px" border="2px solid #E2E8F0" borderRadius="50%" display="flex" justifyContent="center" alignItems="center">
        <Icon viewBox="0 0 60 40" aria-hidden="true" focusable="false">
          <path
            d="M21,2 C13.4580219,4.16027394 1.62349378,18.3117469 3,19 C9.03653312,22.0182666 25.2482171,10.3758914 30,8 C32.9363621,6.53181896 41.321398,1.67860195 39,4 C36.1186011,6.8813989 3.11316157,27.1131616 5,29 C10.3223659,34.3223659 30.6434647,19.7426141 35,18 C41.2281047,15.5087581 46.3445303,13.6554697 46,14 C42.8258073,17.1741927 36.9154967,19.650702 33,22 C30.3136243,23.6118254 17,31.162498 17,34 C17,40.4724865 54,12.4064021 54,17 C54,23.7416728 34,27.2286213 34,37"
            strokeWidth="4"
            fill="none"
            strokeDasharray="270"
            strokeDashoffset="270"
          />
        </Icon>
      </Box>
    </Label>
  );
};

const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  & input[type='checkbox']:checked + div {
    border-color: var(--chakra-colors-primary);
  }
  & input[type='checkbox']:checked + div svg path {
    stroke-dashoffset: 0;
    stroke: var(--chakra-colors-primary);
  }
  & input[type='checkbox'] + div svg path {
    stroke: #818181;
  }
`;

const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Icon = styled.svg`
  & path {
    transition: stroke-dashoffset 0.4s linear;
  }
`;
