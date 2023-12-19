"use client"

import React from 'react'
import { useRouter } from 'next/navigation' 


function TaskCard({task}) {
  const router = useRouter()

  return (
    <div className="bg-slate-900 font-bold p-4 grid justify-start gap-2 rounded-md hover:cursor-pointer hover:bg-opacity-60"
    onClick={()=> router.push(`/task/edit/${task.id}`)}>
        <h2 className="text-xl"> {task.id} - {task.title}</h2>
        <p className="text-slate-300">{task.description}</p>
        <p className="text-slate-300 text-sm">{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCard