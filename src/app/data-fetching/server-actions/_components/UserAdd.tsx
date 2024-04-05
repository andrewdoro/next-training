"use client"

import React, { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { PlusIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import LoadingButton from "@/components/ui/loading-button"

import { addUser } from "../actions"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
})

export type FormSchema = z.infer<typeof formSchema>

const UserAdd = () => {
  const [open, setOpen] = useState(false)
  let [isPending, startTransition] = useTransition()

  const router = useRouter()
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })
  const onSubmit = (data: FormSchema) => {
    startTransition(() =>
      addUser(data.name).then(() => {
        router.refresh()
        setOpen(false)
      })
    )
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <PlusIcon /> Add user
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <Form {...form}>
            <form id="user" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </DialogHeader>
        <DialogFooter>
          <LoadingButton
            isPending={isPending}
            form="user"
            onClick={form.handleSubmit(onSubmit)}
          >
            Submit
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default UserAdd
