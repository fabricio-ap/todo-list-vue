import type { Todo } from '@/types/todo';

export function useTodos(todos: Todo[]) {
  const getTotalTodos = () => {
    return todos.length;
  };

  const getCompletedTodos = () => {
    return todos.filter(({ completed }) => completed).length;
  };

  return {
    getTotalTodos,
    getCompletedTodos
  };
}
