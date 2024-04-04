import React from "react"

import { User } from "@/lib/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ServerPage = async () => {
  const users = (await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  )) as User[]
  return (
    <>
      <h1 className="text-4xl font-semibold tracking-tight">
        Server Components
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle className="line-clamp-1 ">{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  )
}

export default ServerPage
