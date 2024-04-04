import React from "react"

import { Card, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const UsersSkeleton = () => {
  return (
    <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(12)].map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="mb-2 h-6 w-32" />
            <Skeleton className="h-4" />
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

export default UsersSkeleton
