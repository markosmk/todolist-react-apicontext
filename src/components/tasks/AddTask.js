import { useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import { TaskContext } from '../../context/TaskContext';
import { Action } from '../../reducer/TaskReducer';

export const AddTask = () => {
  const { dispatch } = useContext(TaskContext);
  const [description, setDescription] = useState('');

  // procesar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: Action.ADD_TASK,
      task: {
        id: nanoid(8),
        isChecked: false,
        created: new Date(),
        description: description,
      },
    });
    // vaciamos el estado
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        placeholder="...write new task and hit ENTER"
        required
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
};
