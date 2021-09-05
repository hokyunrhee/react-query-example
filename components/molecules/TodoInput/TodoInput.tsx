import { FormControl, HStack, Input, IconButton } from '@chakra-ui/react';
import PlusIcon from 'components/icons/PlusIcon';

export interface TodoInputProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const TodoInput = ({ onSubmit }: TodoInputProps) => {
  return (
    <form onSubmit={onSubmit}>
      <FormControl id="todo">
        <HStack spacing="18px">
          <Input placeholder="what needs to be done?" size="lg" borderRadius="99px" />
          <IconButton type="submit" aria-label="add todo" boxSize="48px" borderRadius="99px" flexShrink={0} icon={<PlusIcon boxSize="24px" />} />
        </HStack>
      </FormControl>
    </form>
  );
};
