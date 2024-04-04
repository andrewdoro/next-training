import Link from "next/link"

import { Button } from "@/components/ui/button"

export const items = [
  {
    name: "data-fetching",
    items: ["server-components", "streaming-suspense"],
  },
]
const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col gap-4 border-r px-6 py-6">
      {items.map((item) => {
        return (
          <div key={item.name}>
            <Button size="sm" className="font-bold">
              {item.name}
            </Button>
            <ul className="ml-4">
              {item.items.map((subItem) => {
                return (
                  <li key={subItem}>
                    <Link href={`/${item.name}/${subItem}`}>
                      <Button size="sm" variant="outline">
                        {subItem}
                      </Button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar
