import { addTask, getTasks } from '@/lib/tasks'

export default async function ToDoList() {
  const tasks = await getTasks()
  return (
    <>
      <form action={addTask}>
        <label>
          New task: <input name="title" />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {tasks.map((task, id) => (
          <li key={id}>{task.title}</li>
        ))}
      </ul>
    </>
  )
}