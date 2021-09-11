import { useState } from 'react';

import { Todos } from './Todos';
import { Box } from '@chakra-ui/react';

import useFetchTodos from 'hooks/useFetchTodos';
import { GetFilteredTodosParameter } from 'api/query';

import debounce from 'lodash.debounce';

export const TodosContainer = () => {
  const [filter, setFilter] = useState<GetFilteredTodosParameter>({});

  const filterTodos = debounce((parameter: GetFilteredTodosParameter) => setFilter(parameter), 100);

  // DONE: use custom hook to handle all case
  const { data } = useFetchTodos(filter);

  if (!data) {
    return <Box>loding...</Box>;
  }

  return <Todos todos={data} filterTodos={filterTodos} />;
};
