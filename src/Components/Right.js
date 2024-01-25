import React, { useEffect, useState } from 'react'
import Heading from './Heading';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Tools from './Tools';

const Right = () => {
  const [title, settitle] = useState(null);
  const [explore, setexplore] = useState(null);
  const [discription, setdiscriotion] = useState(null);
  const [onename, setonename] = useState(null);
  const [onedes, setonedes] = useState(null);
  const [onevideo, setonevideo] = useState(null);

  const [twoname, settwoname] = useState(null);
  const [twodes, settwodes] = useState(null);

  const [threename, setthreename] = useState(null);
  const [threedes, setthreedes] = useState(null);

  const [fourname, setfourname] = useState(null);
  const [fourdes, setfourdes] = useState(null);











  const fetchData = async () => {
    const data = await fetch("https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json");
    const json = await data.json();
    console.log(json);
    settitle(json.title);
    setexplore(json.tasks[0].task_title);
    setdiscriotion(json.tasks[0].task_description);
    setonename(json.tasks[0].assets[0].asset_title);
    setonedes(json.tasks[0].assets[0].asset_description)
    setonevideo(json.tasks[0].assets[0].asset_content);

    settwoname(json.tasks[0].assets[1].asset_title);
    settwodes(json.tasks[0].assets[1].asset_description);

    setthreename(json.tasks[0].assets[2].asset_title)
    setthreedes(json.tasks[0].assets[2].asset_description)

    setfourname(json.tasks[0].assets[3].asset_title)
    setfourdes(json.tasks[0].assets[3].asset_description)


  }

  useEffect(() => {
    fetchData();
  }, []);



  return (


    <div className=''>
      <div className=''>
      <Heading title={title} explore={explore} discription={discription} />
      </div>
      <div className='flex ml-24 mt-12' >

        <One name={onename} des={onedes} video={onevideo} />

        <Two name={twoname} des={twodes} />
       


    
      </div>
      <div className='flex ml-24 mt-12 mb-4'>
      <Three name={threename} des={threedes} />
        <Four name={fourname} des={fourdes} />

        
      
      </div>
      



    </div>
  )
}

export default Right
