import { baseAPI } from "@/lib/api"

export const deleteUser = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return fetch(`${baseAPI}/users/${id}`, {
    method: "DELETE",
  }).then((res) => res.json())
}
