import { createContext, useReducer } from 'react';
import { taskReducer } from '../reducer/TaskReducer';
/*
El Context, provee un camino para pasar datos mediante el arbol de componentes de react, sin tener que pasar props manualmente en cada nivel
*/

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
