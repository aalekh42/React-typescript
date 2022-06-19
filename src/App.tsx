import React,{useState} from 'react';
import './App.css';
import  Home  from './components/Home';


const App:React.FC=()=> {
  const [todo, setTodo] = useState<String>("");

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Home />
    </div>
  );
}

export default App;
