import { useMutation, useQueryClient } from 'react-query';
import mutation from 'api/mutation';
import { todoKeys } from 'utils/queryKeyFactory';
import { TodoProps } from 'components/molecules/Todo';

export default function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation(mutation.updateTodo, {
    onMutate: async (parameters) => {
      await queryClient.cancelQueries(todoKeys.all);

      const snapShot = queryClient.getQueryData(todoKeys.all);

      queryClient.setQueryData(todoKeys.all, (old) => {
        return (old as TodoProps[]).map((item) => {
          if (item.id === parameters.id) return { item, ...parameters };
          return item;
        });
      });

      return snapShot;
    },
    onError: (_error, _variables, snapShot) => {
      queryClient.setQueryData(todoKeys.all, snapShot);
    },
    onSettled: () => {
      queryClient.invalidateQueries(todoKeys.all);
    },
  });
}
