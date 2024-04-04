import React, { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const DataFetchingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-[calc(100vh-128px)] flex-col justify-between">
      <div className="flex flex-col gap-8">{children}</div>
      <div className="flex w-full justify-between">
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </div>
  )
}

export default DataFetchingLayout
