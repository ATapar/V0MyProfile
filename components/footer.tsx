import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-ndia-dark text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About NDIA</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Leadership & Staff
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Press Room
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Membership</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Join NDIA
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Member Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Corporate Membership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Individual Membership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Renew Membership
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Events & Education</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Conferences
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Event Calendar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>2101 Wilson Boulevard</p>
              <p>Suite 700</p>
              <p>Arlington, VA 22201</p>
              <p className="mt-2">Phone: (703) 522-1820</p>
              <p>Fax: (703) 522-1885</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} National Defense Industrial Association. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Accessibility
            </Link>
          </div>
        </div>
        <div className="text-center text-xs mt-4 text-gray-400">Copyright belongs to AMS Office.</div>
      </div>
    </footer>
  )
}
