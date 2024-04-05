import React, { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { Button, ButtonProps } from "./button"
import Loader from "./loader"

const LoadingButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { isPending: boolean }
>(({ children, className, isPending, ...props }, ref) => {
  return (
    <Button {...props} className={cn("relative", className)} ref={ref}>
      <span className={cn(isPending && "invisible")}>{children}</span>
      {isPending && <Loader className="absolute inset-0 m-auto" />}
    </Button>
  )
})
LoadingButton.displayName = "LoadingButton"

export default LoadingButton
