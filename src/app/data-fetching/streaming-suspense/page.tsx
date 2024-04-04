import React, { Suspense } from "react"

import Users from "../_components/users"
import UsersSkeleton from "../_components/users-skeleton"

const ServerPage = async () => {
  return (
    <>
      <h1 className="text-4xl font-semibold tracking-tight">
        Server Components
      </h1>

      <Suspense fallback={<UsersSkeleton />}>
        <Users />
      </Suspense>
    </>
  )
}

export default ServerPage
