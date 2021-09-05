import { Icon, IconProps } from '@chakra-ui/react';

export default function PlusIcon(props: IconProps) {
  return (
    <Icon fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </Icon>
  );
}
