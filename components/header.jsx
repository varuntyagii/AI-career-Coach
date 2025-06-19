// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
// import { Button } from './ui/button'
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
// const Header = () => {
//     return (
//         <header className="fixed top-0 w-full border-b bg  bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
//             <nav className="container mx-auto flex h-16 items-center justify-between px-4">
//                 <Link href="/" >
//                     <Image src="/logo.png" alt="AI Coach" width={200} height={60}
//                         className="h-20 py-1 w-auto object-contain" />
//                 </Link>
//                 <div className="flex items-center space-x-2 md:space-x-4">
//                     <SignedIn>
//                         <Link href="/dashboard">
//                             <Button variant={"outline"} className="cursor-pointer">
//                                 <LayoutDashboard className="h-4 w-4" />
//                                 <span className="hidden md:block ">

//                                     Industry Insights
//                                 </span>
//                             </Button>
//                         </Link>
                    
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button className="cursor-pointer">
//                                 <StarsIcon className="h-4 w-4" />
//                                 <span className="hidden md:block ">
//                                     Growth Tools
//                                 </span>
//                                 <ChevronDown className="h-4 w-4" />
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuItem className="cursor-pointer">
//                                 <Link href={"/resume"} className="flex items-center gap-2">
//                                     <FileText className="h-4 w-4" />
//                                     <span >
//                                         Build Resume
//                                     </span>
//                                 </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem className="cursor-pointer">
//                                 <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
//                                     <PenBox className="h-4 w-4" />
//                                     <span >
//                                       Cover Letter
//                                     </span>
//                                 </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem className="cursor-pointer"><Link href={"/interview"} className="flex items-center gap-2">
//                                 <GraduationCap className="h-4 w-4" />
//                                 <span >
//                                   Interview Prep
//                                 </span>
//                             </Link></DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//             </SignedIn>
    
//             <SignedOut>
//                 <SignInButton>
//                     <Button variant={"outline"} className="cursor-pointer">
//                         Sign In
//                     </Button>
//                     </SignInButton>
//             </SignedOut>
//             <SignedIn>
//                 <UserButton 
//                 appearance={{
//                     elements: {
//                         userButtonAvatarBox: {
//                             width: '40px',
//                             height: '40px',
//                         },
//                         userButton: {
//                             style: {
//                                 border: 'none',
//                                 background: 'transparent',
//                                 padding: 0,
//                                 margin: 0,
//                                 width: 'auto',
//                                 height: 'auto',
//                             },
//                         },
//                     },
//                 }}
//                 afterSignOutUrl="/"
//                 />
//             </SignedIn>
//                 </div>
//             </nav>

//         </header>
//     )
// }

// export default Header


import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser(); // Ensure user is checked before rendering
  // This will ensure that the user is checked before rendering the header
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/logo.png"
            alt="AI Coach"
            width={160}
            height={40}
            className="object-contain h-12 w-auto hover:opacity-90 transition-all"
            priority
          />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="cursor-pointer">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="cursor-pointer">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="cursor-pointer">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "40px",
                    height: "40px",
                  },
                  userButton: {
                    style: {
                      border: "none",
                      background: "transparent",
                      padding: 0,
                      margin: 0,
                      width: "auto",
                      height: "auto",
                    },
                  },
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
