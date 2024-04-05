import React from "react"

import { localAPI } from "@/lib/api"
import Users from "@/app/data-fetching/_components/users"

export const revalidate = 10

const RevalidateCaching = async () => {
  const { time } = await fetch(`${localAPI}/api/revalidate`).then(
    (res) => res.json() as Promise<{ time: string }>
  )
  return (
    <div>
      <p>This fetches on this page are revalidate every 10s</p>
      <div>{time}</div>
      <Users />
    </div>
  )
}

export default RevalidateCaching
