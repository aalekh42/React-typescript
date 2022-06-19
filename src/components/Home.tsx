import React from 'react'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
  }

  //const Home :React.FC<Props>=({todo,setTodo}) OR const Home=({todo,setTodo}:Props)
const Home :React.FC<Props>=({todo,setTodo,handleAdd}) => {
  
  return (
    <>
        <div className='home-container fluid-container'>
            <div className="row">
                <div className='col-12'>
                    <form onSubmit={handleAdd}>
                        <input type="input" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter todo lists'style={{padding:'12px'}} className='input__item'/>
                        <button className='btn btn-primary' >Enter</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;
