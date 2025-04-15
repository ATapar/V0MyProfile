"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  User,
  Users,
  Phone,
  Mail,
  Linkedin,
  FileText,
  CreditCard,
  Calendar,
  Users2,
  Bell,
  ShoppingCart,
  Lock,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const menuItems = [
  { name: "My Profile", href: "/profile", icon: User },
  { name: "My Full Profile", href: "/profile/full", icon: Users },
  { name: "My Full Contact Info", href: "/profile/contact", icon: Phone },
  { name: "My Divisions", href: "/profile/divisions", icon: Users2 },
  { name: "My Social Communities Links", href: "/profile/social", icon: Linkedin },
  { name: "My Invoices", href: "/profile/invoices", icon: FileText },
  { name: "My Membership", href: "/profile/membership", icon: CreditCard },
  { name: "My Events", href: "/profile/events", icon: Calendar },
  { name: "My Committees", href: "/profile/committees", icon: Users },
  { name: "My Subscriptions", href: "/profile/subscriptions", icon: Bell },
  { name: "Interests/Email Preferences", href: "/profile/preferences", icon: Mail },
  { name: "My Transactions", href: "/profile/transactions", icon: CreditCard },
  { name: "Change My Password", href: "/profile/password", icon: Lock },
  { name: "Shopping Cart", href: "/cart", icon: ShoppingCart },
]

export function AccountSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center justify-end p-2">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2 text-xs text-sidebar-foreground/70">© {new Date().getFullYear()} NDIA</div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
