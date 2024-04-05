import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const Loader = ({ className }: { className?: string }) => {
  return (
    <Loader2
      className={cn(" h-4 w-4 animate-spin text-primary-foreground", className)}
    />
  )
}

export default Loader
