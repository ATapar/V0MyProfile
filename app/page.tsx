import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-ndia-red sm:text-5xl">
          National Defense Industrial Association
        </h1>
        <p className="text-xl text-gray-600">NDIA is a 501(c)(3) educational nonprofit that engages thoughtful and innovative leaders to promote the best policies, practices, products, and technology for warfighters and others who ensure the safety and security of our nation.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/login">
            <Button className="bg-ndia-red hover:bg-red-700">Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" className="border-ndia-red text-ndia-red hover:bg-ndia-red hover:text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
