import { addTask, getTasks } from '@/lib/tasks'

export default async function Message() {
  const tasks = await getTasks()
  return (
    <>
      <form action={addTask}>
        <label className = "px-5 py-3 rounded-md inset-ring inset-ring-gray-400">
          Laissez nous un message: <input name="title" />
        </label>
        <button className= "inline-flex items-center rounded-md bg-[#313727]/80 px-5 py-3 text-m font-medium inset-ring inset-ring-gray-400/20">
          Envoyer
          </button>
      </form>
      <ul>
        {tasks.map((task, id) => (
          <li key={id} className = "px-5 italic list-disc">
            {task.title}
          </li>
        ))}
      </ul>
    </>
  )
}