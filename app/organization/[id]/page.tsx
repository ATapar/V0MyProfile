"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter, Edit, User } from "lucide-react"
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
import { AccountSidebar } from "@/components/account-sidebar"

// Mock organization data
const organizationData = {
  id: 1,
  logo: "/placeholder.svg?height=150&width=150",
  name: "Acme Defense Systems",
  customerId: "20054321",
  email: "info@acmedefense.com",
  phone: "(555) 987-6543",
  address: "456 Tech Blvd, Innovation City, NY 54321, USA",
  socialLinks: {
    linkedin: "https://linkedin.com/company/acmedefense",
    facebook: "https://facebook.com/acmedefense",
    instagram: "https://instagram.com/acmedefense",
    twitter: "https://twitter.com/acmedefense",
  },
  primaryContact: {
    name: "Jane Smith",
    email: "jane.smith@acmedefense.com",
  },
}

export default function OrganizationPage({ params }: { params: { id: string } }) {
  const [organization, setOrganization] = useState(organizationData)

  const handleContactUpdate = (formData: FormData) => {
    // In a real app, you would send this to your API
    const updatedOrg = {
      ...organization,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
    }
    setOrganization(updatedOrg)
  }

  const handleSocialUpdate = (formData: FormData) => {
    // In a real app, you would send this to your API
    const updatedOrg = {
      ...organization,
      socialLinks: {
        linkedin: formData.get("linkedin") as string,
        facebook: formData.get("facebook") as string,
        instagram: formData.get("instagram") as string,
        twitter: formData.get("twitter") as string,
      },
    }
    setOrganization(updatedOrg)
  }

  const handlePrimaryContactUpdate = (formData: FormData) => {
    // In a real app, you would send this to your API
    const updatedOrg = {
      ...organization,
      primaryContact: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
      },
    }
    setOrganization(updatedOrg)
  }

  return (
    <div className="flex min-h-screen w-full">
      <AccountSidebar />
      <main className="flex-1 w-full p-6 md:p-8 overflow-x-hidden">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Organization Information</h1>
            <p className="text-muted-foreground">View and manage organization details</p>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Organization Details</CardTitle>
              <CardDescription>Information about this organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Organization Logo and Name */}
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <img
                  src={organization.logo || "/placeholder.svg"}
                  alt="Organization Logo"
                  className="h-24 w-24 rounded-md object-cover border"
                />
                <div>
                  <h3 className="text-xl font-semibold">{organization.name}</h3>
                  <p className="text-sm text-muted-foreground">Customer ID: {organization.customerId}</p>
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
                        <DialogDescription>Update organization contact details.</DialogDescription>
                      </DialogHeader>
                      <form action={handleContactUpdate} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" defaultValue={organization.email} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" name="phone" defaultValue={organization.phone} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" name="address" defaultValue={organization.address} />
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
                    <span>{organization.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{organization.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{organization.address}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Primary Contact */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Primary Contact</h3>

                  {/* Edit Primary Contact Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Primary Contact</DialogTitle>
                        <DialogDescription>Update the primary contact for this organization.</DialogDescription>
                      </DialogHeader>
                      <form action={handlePrimaryContactUpdate} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" name="name" defaultValue={organization.primaryContact.name} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            defaultValue={organization.primaryContact.email}
                            required
                          />
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
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{organization.primaryContact.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{organization.primaryContact.email}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Social Links - Moved to bottom */}
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
                        <DialogDescription>Update organization social media profiles.</DialogDescription>
                      </DialogHeader>
                      <form action={handleSocialUpdate} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="linkedin">LinkedIn</Label>
                          <Input id="linkedin" name="linkedin" defaultValue={organization.socialLinks.linkedin} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="facebook">Facebook</Label>
                          <Input id="facebook" name="facebook" defaultValue={organization.socialLinks.facebook} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="instagram">Instagram</Label>
                          <Input id="instagram" name="instagram" defaultValue={organization.socialLinks.instagram} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="twitter">Twitter</Label>
                          <Input id="twitter" name="twitter" defaultValue={organization.socialLinks.twitter} />
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
                    href={organization.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={organization.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <Facebook className="h-4 w-4 text-muted-foreground" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={organization.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <Instagram className="h-4 w-4 text-muted-foreground" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={organization.socialLinks.twitter}
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
        </div>
      </main>
    </div>
  )
}
