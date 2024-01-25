import React from 'react'

const Heading = ({ title,explore,discription }) => {
  return (

<div>
    <div className=" flex justify-between items-center ml-16 m-5  " >
   
      <div className=' text-[#0029FF]   font-bold text-[28px]'>
        {title}
      </div>

      <button className=' w-[121px] ml-[200px] text-white rounded-lg h-[36px] bg-[#0029FF]'>Submit</button>

      

    </div>
    


    <div className='w-[890px] h-[140px] bg-[#E9ECEF] ml-16 p-[20px] px-[30px] rounded-[5px]'>
       <h5 className='font-bold text-[20px]'>{explore} </h5>
       <p className='pt-[8px]'>{discription}</p>
    </div>

</div>


  )
}

export default Heading
