import { AddTask } from './tasks/AddTask';
import { TaskList } from './tasks/TaskList';

/**
 * Aqui combinaremos AddTask y TaskList
 */
export const TodoList = () => {
  return (
    <>
      <AddTask />
      <TaskList />
    </>
  );
};
