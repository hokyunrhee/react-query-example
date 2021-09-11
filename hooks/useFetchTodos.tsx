import { useQuery } from 'react-query';
import query, { GetFilteredTodosParameter } from 'api/query';
import { todoKeys } from 'utils/queryKeyFactory';

export default function useFetchTodos(filter: GetFilteredTodosParameter) {
  return useQuery(todoKeys.list(filter), () => query.getFilteredTodos(filter));
}
