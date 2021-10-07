import './App.css';
import { Navbar } from './components/Navbar';
import { TodoList } from './components/TodoList';
import TaskContextProvider from './context/TaskContext';

function App() {
  return (
    <main>
      <h1>
        TodoList <span>with Api Context ReactJS</span>
      </h1>
      <TaskContextProvider>
        <Navbar />
        <TodoList />
      </TaskContextProvider>
    </main>
  );
}

export default App;
