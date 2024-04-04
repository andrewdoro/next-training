"use client"

import React, { useEffect } from "react"

import { baseAPI } from "@/lib/api"
import { User } from "@/lib/types"
import { H1 } from "@/components/ui/typography"

import { UserCard } from "../_components/users"

const ClientPage = () => {
  const [users, setUsers] = React.useState<User[]>([])
  useEffect(() => {
    fetch(`${baseAPI}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
  }, [])

  if (!users.length) return <div>Loading...</div>
  return (
    <>
      <H1>Client</H1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  )
}

export default ClientPage
