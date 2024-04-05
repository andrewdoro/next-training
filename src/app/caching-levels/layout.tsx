import React, { ReactNode } from "react"

const DataFetchingLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full flex-col gap-8 px-4 py-6">{children}</div>
}

export default DataFetchingLayout
