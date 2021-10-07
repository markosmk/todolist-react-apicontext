import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { Action } from '../../reducer/TaskReducer';

export const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  const handleChecked = (id, isChecked) => {
    //console.log(id, !isChecked);
    dispatch({
      type: Action.CHECK_TASK,
      task: {
        id,
        isChecked,
      },
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: Action.REMOVE_TASK,
      id: id,
    });
  };

  return (
    <ul>
      {tasks.length === 0 && <h4>No tasks</h4>}
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            onClick={() => handleChecked(task.id, !task.isChecked)}
            className={task.isChecked ? 'checked' : ''}
          >
            <div className="task-description">
              <span>{task.description}</span>
              <small>{task.created.toDateString()}</small>
            </div>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
