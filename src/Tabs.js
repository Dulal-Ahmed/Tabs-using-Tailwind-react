import React from 'react';
import { useState } from 'react'; 

export const  Tab =()=>{
const [currentState, setcurrentState] = useState(1);

const onclickFuntion = (indext)=>{
  setcurrentState(indext);
};
  return(
    <div className=' flex flex-col justify-center items-center'>
      <div className=' flex '>
        <button className={currentState === 1 ? ' text-3xl font-bold  text-gray-50 bg-gray-500 px-5  py-2 m-2 border-0 border-t-2 border-blue-600' : ' text-3xl font-bold  text-gray-50 bg-gray-800 px-5  py-2 m-2 border-0 border-t-2 border-blue-600'} 
         onClick={()=> onclickFuntion(1)}
        >Tab 1</button>
        <button className={currentState === 2 ? ' text-3xl font-bold  text-gray-50 bg-gray-500 px-5  py-2 m-2 border-0 border-t-2 border-blue-600' : ' text-3xl font-bold  text-gray-50 bg-gray-800 px-5  py-2 m-2 border-0 border-t-2 border-blue-600'} 
         onClick={()=> onclickFuntion(2)}
        >Tab 2</button>
        <button className={currentState === 3 ? ' text-3xl font-bold  text-gray-50 bg-gray-500 px-5  py-2 m-2 border-0 border-t-2 border-blue-600' : ' text-3xl font-bold  text-gray-50 bg-gray-800 px-5  py-2 m-2 border-0 border-t-2 border-blue-600'} 
         onClick={()=> onclickFuntion(3)}
        >Tab 3</button>

      </div>
      <div className=' w-1/3 border border-gray-700'>
         <div className={ currentState === 1? ' p-3 flex flex-col' : ' p-3 hidden flex-col'}>
            <h2 className=' font-semibold underline text-xl '>  Heading 1 </h2>
            <p> <br/>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content her
            </p>
         </div>
         <div className={ currentState === 2? ' p-3 flex flex-col' : ' p-3 hidden flex-col'}>
            <h2 className=' font-semibold underline text-xl '>  Heading 2 </h2>
            <p> <br/>
            this is firs tab in this container this is firs tab in this container this is firs tab in this container this is firs tab in this container this is firs tab in this container this is firs tab in this container this is firs tab in this container this is firs tab in this container this is firs tab in this container this is firs tab in this container this is firs tab in this container this is firs tab in this container 
            </p>
         </div>
         <div className={ currentState === 3? ' p-3 flex flex-col' : ' p-3 hidden flex-col'}>
            <h2 className=' font-semibold underline text-xl '>  Heading 3 </h2>
            <p> <br/>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
           </p>
         </div>

      </div>
    </div>


    )
}

