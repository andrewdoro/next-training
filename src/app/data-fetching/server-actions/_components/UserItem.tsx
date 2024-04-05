"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { toast } from "sonner"

import { User } from "@/lib/types"
import { Button } from "@/components/ui/button"

import { deleteUser } from "../actions"

const UserItem = ({ user }: { user: User }) => {
  const router = useRouter()
  return (
    <li className="relative border p-4" key={user.id}>
      <p>{user.name}</p>
      <p className="text-muted-foreground">User ID: {user.id}</p>
      <Button
        onClick={async () => {
          const promise = deleteUser(user.id).then(() => {
            router.refresh()
          })
          toast.promise(promise, {
            loading: "Deleting user...",
            success: "User deleted",
            error: "Error deleting user",
          })
        }}
        className="absolute right-2 top-2"
        size="icon"
        variant="outline"
      >
        <X className="h-4 w-4" />
      </Button>
    </li>
  )
}

export default UserItem
