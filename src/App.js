import TaskManager from "./components/organisms/task-manager.js";
import { TaskProvider } from "./context/task-context";

const App = () => {
  return (
    <TaskProvider>
      <TaskManager />
    </TaskProvider>
  );
};

export default App;
