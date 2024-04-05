import React from "react"

import { User } from "@/lib/types"
import { H1 } from "@/components/ui/typography"

import Users from "../_components/users"

const ServerPage = async () => {
  const users = (await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  )) as User[]
  return (
    <>
      <H1>Loading Server Components</H1>
      <Users />
    </>
  )
}

export default ServerPage
