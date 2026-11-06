import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <Button variant="ghost">
              Log In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button>
              Start for free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
