import { useState } from 'react';
import Tasks from './components/tasks/Tasks';
import CreateTask from './components/create-task/CreateTask';
import './App.css'

const App = () => {
  const [reload, setReload] = useState(false);

  return (
    <>
      <CreateTask setReload={setReload} />
      <Tasks reload={reload} />
    </>
  )
}

export default App
