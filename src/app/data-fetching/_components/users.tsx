import React from "react"

import { baseAPI } from "@/lib/api"
import { User } from "@/lib/types"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Users = async () => {
  const users = (await fetch(`${baseAPI}/users`).then((res) =>
    res.json()
  )) as User[]

  //add artificial delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export const UserCard = ({ user }: { user: User }) => {
  return (
    <Card key={user.id}>
      <CardHeader>
        <CardTitle className="line-clamp-1 ">{user.name}</CardTitle>
        {/* <CardDescription>{user.email}</CardDescription> */}
      </CardHeader>
    </Card>
  )
}

export default Users
