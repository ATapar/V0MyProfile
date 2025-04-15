"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [pathname])

  return (
    <header className="w-full">
      <div className="bg-ndia-dark text-white py-2">
        <div className="container flex justify-between items-center">
          <div>
            <span className="font-semibold">National Defense Industrial Association</span>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
            <Link href="/media" className="text-sm hover:underline">
              Media
            </Link>
            <Link href="/magazine" className="text-sm hover:underline">
              National DEFENSE Magazine
            </Link>
            {isLoggedIn ? (
              <Link href="/logout" className="text-sm hover:underline flex items-center gap-1">
                <User size={16} /> LOGOUT
              </Link>
            ) : (
              <Link href="/login" className="text-sm hover:underline flex items-center gap-1">
                <User size={16} /> LOGIN
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="py-4 border-b">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NDIA2017logo.svg/1200px-NDIA2017logo.svg.png"
              alt="NDIA Logo"
              className="h-12"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/meetings-and-events" className="text-sm font-medium hover:text-ndia-red">
              Meetings & Events
            </Link>
            <Link href="/policy" className="text-sm font-medium hover:text-ndia-red">
              Policy
            </Link>
            <Link href="/membership" className="text-sm font-medium hover:text-ndia-red">
              Membership
            </Link>
            <Link href="/divisions" className="text-sm font-medium hover:text-ndia-red">
              Divisions
            </Link>
            <Link href="/education" className="text-sm font-medium hover:text-ndia-red">
              Education
            </Link>
            <Link href="/chapters" className="text-sm font-medium hover:text-ndia-red">
              Chapters
            </Link>
            <Link href="/join">
              <Button className="bg-ndia-red hover:bg-red-700">Join</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
