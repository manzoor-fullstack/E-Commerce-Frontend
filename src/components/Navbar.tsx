"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, Heart, ShoppingCart, User, User2, ListOrdered, Cross, OctagonX, LogOut, CircleX } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState(3);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          ShopEase
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`text-sm font-medium ${
                    pathname === "/"
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <div className="grid gap-2 w-[200px]">
                    <Link href="/shop/men" className="hover:text-blue-600">
                      Men
                    </Link>
                    <Link href="/shop/women" className="hover:text-blue-600">
                      Women
                    </Link>
                    <Link
                      href="/shop/accessories"
                      className="hover:text-blue-600"
                    >
                      Accessories
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="relative hidden lg:flex items-center">
            <Input type="text" placeholder="Search..." className="pl-8 w-64" />
            <Search className="absolute left-2 h-4 w-4 text-gray-500" />
          </div>
        </div>

        {/* Icons & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>

          {/* Shopping Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>

          <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="p-2 rounded-full bg-green-500 hover:bg-green-400">
      <User className="h-5 w-5 text-white" />
    </button>
  </DropdownMenuTrigger>

  <DropdownMenuContent
    align="end"
    className="
      w-60
      text-white
      bg-gradient-to-r from-stone-500/60 to-gray-700/60
      backdrop-blur-md
      border border-white/20
      shadow-xl
      rounded-md
      p-2
    "
  >
    <DropdownMenuItem
      className="
        flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer
        data-[highlighted]:bg-white/20
        data-[highlighted]:text-black
      "
    >
      <User2 className="h-4 w-4 text-white" />
      Manage My Account
    </DropdownMenuItem>

    <DropdownMenuItem
      className="
        flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer
        data-[highlighted]:bg-white/20
        data-[highlighted]:text-black
      "
    >
      <ListOrdered className="h-4 w-4 text-white" />
      My Order
    </DropdownMenuItem>

    <DropdownMenuItem
      className="
        flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer
        data-[highlighted]:bg-white/20
        data-[highlighted]:text-black
      "
    >
      <CircleX className="h-4 w-4 text-white" />
      My Cancellations
    </DropdownMenuItem>

    <DropdownMenuItem
      className="
        flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer
        data-[highlighted]:bg-white/20
        data-[highlighted]:text-black
      "
    >
      <LogOut className="h-4 w-4 text-white" />
      Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] p-4">
              <nav className="flex flex-col gap-3 mt-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
                <Link
                  href="/shop/men"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Men
                </Link>
                <Link
                  href="/shop/women"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Women
                </Link>
                <Link
                  href="/shop/accessories"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Accessories
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
