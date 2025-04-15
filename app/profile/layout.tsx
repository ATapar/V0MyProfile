import type React from "react"
import { AccountSidebar } from "@/components/account-sidebar"

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full">
      <AccountSidebar />
      <main className="flex-1 w-full p-6 md:p-8 overflow-x-hidden">{children}</main>
    </div>
  )
}
