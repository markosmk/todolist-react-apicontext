import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  console.log('tasks', tasks);
  return (
    <>
      <h2>Tasks ({tasks.length})</h2>
    </>
  );
};
