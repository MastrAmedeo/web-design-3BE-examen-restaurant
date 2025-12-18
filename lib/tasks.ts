'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'


const tasks: { title: string; done: boolean; }[] = []

export async function getTasks() {
  return tasks
}

export async function createTask(form: FormData) {
  tasks.push({
    title: String(form.get('title')),
    res_time: String(form.get('res_time')),
    phone: String(form.get('phone')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function deleteTask(id: number) {
  tasks.splice(id, 1)
  redirect((await headers()).get('referer') ?? '/')
}