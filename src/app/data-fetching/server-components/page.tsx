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

import Users from "../_components/users"

const ServerPage = async () => {
  const users = (await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  )) as User[]
  return (
    <>
      <h1 className="text-4xl font-semibold tracking-tight">
        Server Components
      </h1>
      <Users />
    </>
  )
}

export default ServerPage
