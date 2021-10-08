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
      return [...state, action.task];
    }
    /**
     * Este caso es particular, ya que necesitamos cambiar una tarea especifica dentro del array, para ello utilizaremos el id del task
     */
    case Action.CHECK_TASK: {
      //const index = state.find(item => item.id === action.task.id)
      // solve with find()
      /*return state.find((item) => {
        if (item.id === action.task.id) {
          item.isCheked = action.task.isChecked;
          return true;
        }
        return false;
      });
      */
      // solve with map()
      return state.map((item) => {
        if (item.id === action.task.id) {
          item.isChecked = action.task.isChecked;
        }
        return item;
      });
      //const taskIndex = state.findIndex
      // return;
    }
    case Action.REMOVE_TASK: {
      return state.filter((task) => task.id !== action.id);
    }
    default:
      return state;
  }
};
