import React from 'react'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
  }

  //const Home :React.FC<Props>=({todo,setTodo}) OR const Home=({todo,setTodo}:Props)
const Home :React.FC<Props>=({todo,setTodo,handleAdd}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
        <div className='home-container fluid-container'>
            <div className="row">
                <div className='col-12'>
                    <form onSubmit={(e)=>{
                        handleAdd(e);
                        inputRef.current?.blur();
                    }}>
                        <input ref={inputRef} type="input" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter todo lists'style={{padding:'12px'}} className='input__item'/>
                        <button className='btn btn-primary' >Enter</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;
