import React, { useState } from 'react'
 
 const App = () => {
    const [heading , setHeading]=useState("")
    const [details,setDetails]= useState('')

    let [tasks ,setTasks]= useState([])


  let submitHandler= (e)=>{
    e.preventDefault()
    const copyTasks = [...tasks]

    copyTasks.push({heading ,details})
      setTasks(copyTasks)
    
    setHeading('')
    setDetails('')
  }

  let deleteTask = (idx)=>{
    const copyTask=[...tasks]
    copyTask.splice(idx,1)
    setTasks(copyTask)    
    
  }

   return (
     <div className='bg-black h-screen w-full text-white  lg:flex gap-5 '> 
        <form className='flex gap-4 flex-col items-start lg:w-1/2 p-10' action=""
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        >
          <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input 
          className='px-5 py-2 w-full border-2 outline-none rounded font-medium' 
          type="text" value={heading}
          placeholder='Enter Notes Heading' 
          onChange={(e)=>{
            setHeading(e.target.value)
          }}
          />

          <textarea 
           className='px-5 py-2 w-full h-32 border-2 outline-none rounded font-medium' 
          placeholder='Write Details' 
          name="" value={details} 
          onChange={(e)=>{
            setDetails(e.target.value)
          }}>
          </textarea>

          <button 
          className=' bg-white px-5 text-black py-2 w-full border-2 outline-none rounded'>
            Add Notes
          </button>
        </form>
        <div className=' lg:w-1/2  lg:border-l-2 bg-gray-600 p-10 overflow-auto  '>
          <h1 className='text-4xl font-boldt Notes'>Recent Notes</h1>
          <div className='flex flex-wrap  gap-5 mt-5 '>

          {tasks.map((ele,idx)=>{
            return <div key={idx} className='h-70 w-50 bg-[url("https://i.pinimg.com/originals/1d/7b/7e/1d7b7e0a4cf08f09a9417768fe1ea386.png")] bg-cover text-black rounded-2xl  flex flex-col justify-between items-start gap-4 pt-14 pb-4 px-4   '>
              <div>
                <h1 className='font-bold leading-tight  text-xl'>{ele.heading}</h1>
              <hr />
              <p className='text-gray-500  font-medium leading-tight mt-4'>{ele.details}</p>
              </div>
              
                <button onClick={()=>{
                  deleteTask(idx)
                  }} className='bg-red-600 text-lg cursor-pointer active:scale-95  w-full rounded-full p-1 text-white'>
                  Delete
               </button>
             
            </div>

          })}
             
          </div>
        
        </div>
     </div>
   )
 }
 
 export default App
 