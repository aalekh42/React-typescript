import React from 'react'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
  }

  //const Home :React.FC<Props>=({todo,setTodo}) OR const Home=({todo,setTodo}:Props)
const Home :React.FC<Props>=({todo,setTodo}) => {
  
  return (
    <>
        <div className='home-container fluid-container'>
            <div className="row">
                <div className='col-12'>
                    <form>
                        <input type="text" placeholder='Enter todo lists'style={{padding:'12px'}} className='input__item'/>
                        <button className='btn btn-primary' >Enter</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;
