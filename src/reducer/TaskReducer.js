/**
 * Reducers:
 * Utilizaremos 3 acciones para trabajar con nuestro TODOLIST
 */
export const Action = {
  ADD_TASK: 'add-task',
  CHECK_TASK: 'check-task',
  REMOVE_TASK: 'remove-task',
};

export const taskReducer = (state, action) => {
  /**
   * Aqui atraves de un switch seleccionaremos el tipo de accion que definimos y la tarea a realizar en cada una
   */
  switch (action.type) {
    case Action.ADD_TASK: {
      return;
    }
    case Action.CHECK_TASK: {
      return;
    }
    case Action.REMOVE_TASK: {
      return;
    }
    default:
      return state;
  }
};
