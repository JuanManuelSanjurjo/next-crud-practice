
import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/TaskCard"

async function loadTask(){
  // const res = await fetch(`http://localhost:3000/api/task`)
  // const data = res.json()

  // return data

  const tasks = await prisma.task.findMany() // consulta directa a la base de datos
  return tasks
}


async function HomePage() {
  const tasks = await loadTask()

  
  return (
    <>
    <h1 className="p-4 mt-4 text-center text-3xl uppercase tracking-wide">Tasks</h1>
    <div className="container mx-auto grid grid-cols-2 gap-4 justify-center m-4">
      {
        tasks.map( task => (
        <TaskCard key={task.id} task={task}/>
        ))
      }
      
    </div>
    </>
  )
}

export default HomePage