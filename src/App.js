import './styles/App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="flex flex-col justify-start text-center mt-8 mr-auto rounded-lg pb-8 tablet:w-5/6  justify-center m-auto laptop:w-2/3">
      <h1 className="flex flex-col items-center justify-center font-sans text-xl uppercase">To Do List</h1>
      <TaskList />      
    </div>
  );
}

export default App;
