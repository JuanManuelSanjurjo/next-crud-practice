"use client"

import React, {useState, useEffect} from 'react'
import { headers } from '../../../next.config'
import { useRouter } from 'next/navigation'

function NewPage({params}) {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(()=> {
   if(params.id){
    fetch(`/api/task/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setDescription(data.description)
      })
   }
      
  },[])

  async function handleDelete(){
    const res = await fetch(`/api/task/${params.id}`, {method: "DELETE"})
    const data = await res.json()
    router.push("/")
    router.refresh()
  }

  async function handleSubmit(e){
    e.preventDefault() 
    // const title = e.target.title.value
    // const description = e.target.description.value
    let method = "POST"
    let url = "/api/task"
    if (params.id){
      method = "PUT"
      url += `/${params.id}`
    }
    const res = await fetch(url, {
      method: method,
      body: JSON.stringify({
        title: title,
        description: description
      }),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    
    router.push("/")
    router.refresh()
  
  }


  return (
    <div className='h-screen flex justify-center items-center '>
      <form className='bg-blue-950 flex flex-col p-10 gap-2 md:w-3/6  rounded-md'
        onSubmit={handleSubmit}
      >
      <label htmlFor='title'>Titulo</label>
        <input type="text" className='border-2 border-gray-800 p-2 mb-4 w-full rounded-md text-black'
          placeholder='Task title'
          id='title'
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label htmlFor='description'>Description</label>
        <textarea className='border-2 border-gray-800 p-2 mb-4 w-full rounded-md text-black min-h-[150px]'
          placeholder='Task description'
          id='description'
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
        ></textarea>

        <div className='flex justify-center gap-7'>
          <button type='submit' className='bg-sky-800 border-2 border-gray-800 rounded-md w-1/6 '>CREATE</button>
          
          {params.id && <button type='button' className='bg-red-800 border-2 border-gray-800 rounded-md w-1/6 '
            onClick={handleDelete}
          > Delete</button>}
        </div>
      </form>
    </div>
  );
}

export default NewPage