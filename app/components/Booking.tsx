import { createTask, getTasks, deleteTask } from '@/lib/tasks'


export default async function Booking() {
  const tasks = await getTasks()
  return (
    <>
      <form action={createTask} className="flex gap-4">
        <label className = "px-5 py-3 rounded-md inset-ring inset-ring-gray-400">
          Nom de la réservation: <input name="title" />
        </label>
        <label className = "px-5 py-3 rounded-md inset-ring inset-ring-gray-400">
          Heure et date de la réservation: <input name="res_time" />
        </label>
        <label className = "px-5 py-3 rounded-md inset-ring inset-ring-gray-400">
          Numéro de téléphone: <input name="phone" />
        </label>
        <button className= "inline-flex items-center rounded-md bg-[#313727]/80 px-5 py-3 text-m font-medium inset-ring inset-ring-gray-400/20">
          Envoyer
        </button>
      </form>
      <ul>
        {tasks.map((task, id) => (
          <form action={deleteTask.bind(null, id)} key={id} className = "flex gap-4 py-4">
            <li className = "px-5 italic list-disc">
              {task.title}
            </li>
            <li className = "px-5 italic">
              {task.res_time}
            </li>
            <li className = "px-5 italic">
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

