import React from 'react'

const Home = () => {


    
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
