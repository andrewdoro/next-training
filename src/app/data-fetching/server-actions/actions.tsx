import { revalidatePath } from "next/cache"

import { baseAPI } from "@/lib/api"

export const deleteUser = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return fetch(`${baseAPI}/users/${id}`, {
    method: "DELETE",
  }).then((res) => res.json())

  // revalidatePath("/data-fetching")
}

export const addUser = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return fetch(`${baseAPI}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  }).then((res) => res.json())
}
