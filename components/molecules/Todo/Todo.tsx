import { HStack, Editable, EditableInput, EditablePreview, IconButton } from '@chakra-ui/react';
import Checkcircle from 'components/atoms/Checkcircle';
import TrashIcon from 'components/icons/TrashIcon';

import debounce from 'lodash.debounce';

import { Todo as T } from 'api/types';

type DebouncedFunc = ReturnType<typeof debounce>;

export interface TodoProps extends T {
  updateTodo: DebouncedFunc;
  deleteTodo: DebouncedFunc;
}

export const Todo = ({ id, title, completed, updateTodo, deleteTodo }: TodoProps) => {
  const textDecoration = completed ? 'line-through' : 'none';
  const color = completed ? 'lightgray' : 'currentColor';

  return (
    <HStack spacing="12px" width="100%">
      <Checkcircle defaultChecked={completed} onChange={(event) => updateTodo({ id, completed: event.target.checked })} />
      <Editable flexGrow={1} defaultValue={title} onSubmit={(newText) => updateTodo({ id, title: newText })}>
        <EditablePreview px="8px" display="inline-flex" alignItems="center" color={color} textDecoration={textDecoration} />
        <EditableInput px="8px" color={color} textDecoration={textDecoration} />
      </Editable>
      <IconButton aria-label="delete todo" variant="unstyled" color="gray.400" onClick={() => deleteTodo(id)} icon={<TrashIcon />} />
    </HStack>
  );
};
