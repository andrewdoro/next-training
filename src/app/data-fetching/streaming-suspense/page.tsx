import React, { Suspense } from "react"

import { H1 } from "@/components/ui/typography"

import Users from "../_components/users"
import UsersSkeleton from "../_components/users-skeleton"

const ServerPage = async () => {
  return (
    <>
      <H1>Server Components</H1>

      <Suspense fallback={<UsersSkeleton />}>
        <Users />
      </Suspense>
    </>
  )
}

export default ServerPage
