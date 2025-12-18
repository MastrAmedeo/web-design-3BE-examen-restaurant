import { createTask, getTasks, deleteTask } from '@/lib/tasks'



export default async function Booking_display() {
  const tasks = await getTasks()
  return (
    <>
      <ul>
        {tasks.map((task, id) => (
          <form action={deleteTask.bind(null, id)} key={id}>
            <li className = "px-5 italic list-disc">
              {task.title};
              {task.res_time};
              {task.phone}
            </li>
            <button className= "text-xs inline-flex items-center rounded-md bg-[#313727]/80 px-3 py-1 text-m font-medium inset-ring inset-ring-gray-400/20">
              Supprimer le message 
            </button>
          </form>  
        ))}
      </ul>
    </>
    )
}