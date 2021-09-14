import { useMutation, useQueryClient } from 'react-query';
import mutation from 'api/mutation';
import { todoKeys } from 'utils/queryKeyFactory';
import { TodoProps } from 'components/molecules/Todo';

export default function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation(mutation.createtTodo, {
    onMutate: async (title) => {
      await queryClient.cancelQueries(todoKeys.list({}));

      const snapShot = queryClient.getQueryData(todoKeys.list({}));

      queryClient.setQueryData(todoKeys.list({}), (old) => {
        return [...(old as TodoProps[]), { id: new Date().toISOString(), title, completed: false }];
      });

      return snapShot;
    },
    onError: (_error, _variables, snapShot) => {
      queryClient.setQueryData(todoKeys.list({}), snapShot);
    },
    onSettled: () => {
      queryClient.invalidateQueries(todoKeys.list({}));
    },
  });
}
