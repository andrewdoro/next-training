import Link from "next/link"

import { Button } from "@/components/ui/button"

export const items = [
  {
    name: "Data Fetching",
    href: "/data-fetching",
    items: ["client", "server-components", "streaming-suspense"],
  },
  {
    name: "Caching levels",
    href: "/data-fetching",
    items: ["client", "server-components", "streaming-suspense"],
  },
  {
    name: "Layouts",
    href: "/data-fetching",
    items: ["client", "server-components", "streaming-suspense"],
  },
]
const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col gap-4 border-r px-6 py-6">
      {items.map((item) => {
        return (
          <div className="flex flex-col gap-4" key={item.name}>
            <p className="font-bold">{item.name}</p>
            <ul className="ml-4 flex flex-col gap-1">
              {item.items.map((subItem) => {
                return (
                  <li key={subItem}>
                    <Link href={`${item.href}/${subItem}`}>
                      <Button size="sm" className="h-6" variant="outline">
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

      <a href="https://nextjs.org/docs" className="mt-auto w-full">
        <Button variant="ghost" className="w-full">
          Documentation
        </Button>
      </a>
    </div>
  )
}

export default Sidebar
