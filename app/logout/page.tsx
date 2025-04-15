"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function LogoutPage() {
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Clear token from localStorage
    localStorage.removeItem("token")

    // Show toast notification
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    })

    // Redirect to home page
    router.push("/")
  }, [router, toast])

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Logging out...</h1>
        <p className="text-muted-foreground">Please wait while we log you out.</p>
      </div>
    </div>
  )
}
