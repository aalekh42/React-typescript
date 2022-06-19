import React,{useState} from 'react';
import './App.css';
import  Home  from './components/Home';


const App:React.FC=()=> {
  const [todo, setTodo] = useState<string>("");//<string> is used to assign type
  
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Home todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
