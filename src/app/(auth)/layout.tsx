import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="max-w-screen-2xl p-4 mx-auto">
        <nav className="flex items-center justify-between">
          <Image src="/logo.svg" width={152} height={56} alt="logo" />
          <Button variant="secondary">Sign Up</Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
