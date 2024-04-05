import React from "react"

import { baseAPI } from "@/lib/api"
import { User } from "@/lib/types"
import { H1 } from "@/components/ui/typography"

import UserItem from "./_components/UserItem"

export const revalidate = 0
const ServerActions = async () => {
  const users = (await fetch(`${baseAPI}/users`).then((res) =>
    res.json()
  )) as User[]
  return (
    <>
      <H1>Server Actions</H1>
      <ul className="grid grid-cols-4 gap-4">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </>
  )
}

export default ServerActions
