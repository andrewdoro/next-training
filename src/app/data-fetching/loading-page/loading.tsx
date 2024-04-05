import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

import UsersSkeleton from "../_components/users-skeleton"

const LoadingPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1>Loading</h1>
      <UsersSkeleton />
    </div>
  )
}

export default LoadingPage
