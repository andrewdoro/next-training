import React from "react"

import { localAPI } from "@/lib/api"
import { H1 } from "@/components/ui/typography"
import Users from "@/app/data-fetching/_components/users"

export const revalidate = 10

const RevalidateCaching = async () => {
  const { time } = await fetch(`${localAPI}/api/revalidate`).then(
    (res) => res.json() as Promise<{ time: string }>
  )
  return (
    <>
      <H1> Fetch calls on this page are revalidated every 10s</H1>
      <div>{time}</div>
      <Users />
    </>
  )
}

export default RevalidateCaching
