"use client"
{/*
In Next.js, every file in the 'app' folder - is considered to be the
SERVER component - SSR
So, it will be incorrect to say, that component is chnage to client, but it will more nicer to say -
that we have opened up the boundry between the server & client
*/}


import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="max-w-screen-2xl p-4 mx-auto">
        <nav className="flex items-center justify-between">
          <Image src="/logo.svg" width={152} height={56} alt="logo" priority />
          <Button asChild variant="secondary">
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
            {isSignIn ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
