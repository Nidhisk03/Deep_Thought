import React from 'react'
import Left from './Left'
import Right from './Right';
import SideBar from './SideBar';
import Tools from './Tools';

const Main = () => {
  return (
    <div className='flex'>
      

      <Left />
    
      <Right />
     <div>
     <SideBar />
     <Tools />

     </div>
      
    </div>
  )
}

export default Main
