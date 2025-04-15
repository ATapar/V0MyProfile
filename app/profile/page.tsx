"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter, Edit, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Mock user data
const userData = {
  profilePicture: "/placeholder.svg?height=150&width=150",
  prefix: "Mr.",
  firstName: "John",
  lastName: "Doe",
  suffix: "Jr.",
  customerId: "10054321",
  email: "john.doe@example.com",
  phone: "(555) 123-4567",
  address: "123 Main St, Anytown, CA 12345, USA",
  socialLinks: {
    linkedin: "https://linkedin.com/in/johndoe",
    facebook: "https://facebook.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
}

// Mock organizations data
const organizations = [
  {
    id: 1,
    name: "Acme Defense Systems",
    address: "456 Tech Blvd, Innovation City, NY 54321, USA",
  },
  {
    id: 2,
    name: "Global Security Solutions",
    address: "789 Security Ave, Safetown, TX 67890, USA",
  },
  {
    id: 3,
    name: "Advanced Defense Technologies",
    address: "101 Military Rd, Fortress City, VA 12345, USA",
  },
]

export default function ProfilePage() {
  const [user, setUser] = useState(userData)

  const handleProfileUpdate = (formData: FormData) => {
    // In a real app, you would send this to your API
    const updatedUser = {
      ...user,
      prefix: formData.get("prefix") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      suffix: formData.get("suffix") as string,
    }
    setUser(updatedUser)
  }

  const handleContactUpdate = (formData: FormData) => {
    // In a real app, you would send this to your API
    const updatedUser = {
      ...user,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
    }
    setUser(updatedUser)
  }

  const handleSocialUpdate = (formData: FormData) => {
    // In a real app, you would send this to your API
    const updatedUser = {
      ...user,
      socialLinks: {
        linkedin: formData.get("linkedin") as string,
        facebook: formData.get("facebook") as string,
        instagram: formData.get("instagram") as string,
        twitter: formData.get("twitter") as string,
      },
    }
    setUser(updatedUser)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and settings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 w-full">
        {/* Personal Information Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your personal details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <img
                src={user.profilePicture || "/placeholder.svg"}
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-xl font-semibold">{`${user.prefix} ${user.firstName} ${user.lastName} ${user.suffix}`}</h3>
                <p className="text-sm text-muted-foreground">Customer ID: {user.customerId}</p>

                {/* Edit Name Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Name
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Name</DialogTitle>
                      <DialogDescription>Update your name information below.</DialogDescription>
                    </DialogHeader>
                    <form action={handleProfileUpdate} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="prefix">Prefix</Label>
                          <Input id="prefix" name="prefix" defaultValue={user.prefix} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="suffix">Suffix</Label>
                          <Input id="suffix" name="suffix" defaultValue={user.suffix} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" name="firstName" defaultValue={user.firstName} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" name="lastName" defaultValue={user.lastName} required />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <Separator />

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Contact Information</h3>

                {/* Edit Contact Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Contact Information</DialogTitle>
                      <DialogDescription>Update your contact details below.</DialogDescription>
                    </DialogHeader>
                    <form action={handleContactUpdate} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" defaultValue={user.email} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" defaultValue={user.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" defaultValue={user.address} />
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{user.address}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Social Links</h3>

                {/* Edit Social Links Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Social Links</DialogTitle>
                      <DialogDescription>Update your social media profiles.</DialogDescription>
                    </DialogHeader>
                    <form action={handleSocialUpdate} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input id="linkedin" name="linkedin" defaultValue={user.socialLinks.linkedin} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="facebook">Facebook</Label>
                        <Input id="facebook" name="facebook" defaultValue={user.socialLinks.facebook} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input id="instagram" name="instagram" defaultValue={user.socialLinks.instagram} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input id="twitter" name="twitter" defaultValue={user.socialLinks.twitter} />
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={user.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={user.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  <Facebook className="h-4 w-4 text-muted-foreground" />
                  <span>Facebook</span>
                </a>
                <a
                  href={user.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  <Instagram className="h-4 w-4 text-muted-foreground" />
                  <span>Instagram</span>
                </a>
                <a
                  href={user.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  <Twitter className="h-4 w-4 text-muted-foreground" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Organizations Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Related Organizations</CardTitle>
            <CardDescription>Organizations you are associated with</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {organizations.map((org) => (
                <AccordionItem key={org.id} value={`org-${org.id}`}>
                  <AccordionTrigger className="text-left">{org.name}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 p-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">{org.address}</span>
                      </div>
                      <Link href={`/organization/${org.id}`}>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Building className="mr-2 h-4 w-4" />
                          View Organization
                        </Button>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
