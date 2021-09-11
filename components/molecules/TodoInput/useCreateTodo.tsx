import { useMutation, useQueryClient } from 'react-query';
import mutation from 'api/mutation';
import { todoKeys } from 'utils/queryKeyFactory';
import { TodoProps } from 'components/molecules/Todo';
import { m } from 'framer-motion';

export default function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation(mutation.createtTodo, {
    onMutate: async (title) => {
      await queryClient.cancelQueries(todoKeys.all);

      const snapShot = queryClient.getQueryData(todoKeys.all);

      queryClient.setQueryData(todoKeys.all, (old) => {
        return [...(old as TodoProps[]), { id: new Date().toISOString(), title, completed: false }];
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
