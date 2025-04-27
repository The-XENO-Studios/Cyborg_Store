"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  Zap,
  Layers,
  Brain,
  Eye,
  Heart,
  Cpu,
  Crosshair,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle theme mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Navigation items
  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "Products",
      href: "/products",
      submenu: [
        {
          title: "All Products",
          description:
            "Browse our complete collection of cybernetic enhancements",
          href: "/products",
          icon: <Zap className="h-5 w-5" />,
        },
        {
          title: "Neural",
          description:
            "Advanced neural interfaces for seamless digital integration",
          href: "/products?category=Neural",
          icon: <Brain className="h-5 w-5" />,
        },
        {
          title: "Optical",
          description: "Enhanced vision systems with cutting-edge capabilities",
          href: "/products?category=Optical",
          icon: <Eye className="h-5 w-5" />,
        },
        {
          title: "Cardiovascular",
          description: "Military-grade synthetic heart replacements",
          href: "/products?category=Cardiovascular",
          icon: <Heart className="h-5 w-5" />,
        },
        {
          title: "Power",
          description:
            "Self-sustaining energy sources for cybernetic components",
          href: "/products?category=Power",
          icon: <Zap className="h-5 w-5" />,
        },
        {
          title: "Limb",
          description: "High-performance limb augmentations and replacements",
          href: "/products?category=Limb",
          icon: <Crosshair className="h-5 w-5" />,
        },
      ],
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-primary/50 after:to-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden">
              <div className="absolute inset-0 bg-primary rounded-sm flex items-center justify-center before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary/50 before:to-transparent before:animate-pulse">
                <Zap className="h-5 w-5 text-primary-foreground relative z-10" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tighter orbitron bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              CyberTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) =>
                  item.submenu ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="orbitron text-xs font-medium relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-1/2">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center gap-2">
                                    {subItem.icon}
                                    <div className="text-sm font-medium orbitron">
                                      {subItem.title}
                                    </div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} orbitron text-xs font-medium relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-1/2`}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Button className="orbitron text-xs relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="orbitron text-left">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                    <div key={item.title} className="border-b pb-4">
                      {item.submenu ? (
                        <div className="space-y-3">
                          <div className="font-medium orbitron text-sm">
                            {item.title}
                          </div>
                          <div className="pl-4 space-y-2">
                            {item.submenu.map((subItem) => (
                              <SheetClose asChild key={subItem.title}>
                                <Link
                                  href={subItem.href}
                                  className="flex items-center gap-2 py-2 text-sm hover:text-primary transition-colors relative pl-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:bg-primary hover:before:w-1 hover:before:h-1 before:transition-all before:rounded-full"
                                >
                                  {subItem.icon}
                                  <span>{subItem.title}</span>
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="flex items-center py-2 orbitron text-sm hover:text-primary transition-colors relative pl-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:bg-primary hover:before:w-1 hover:before:h-1 before:transition-all before:rounded-full"
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                  <SheetClose asChild>
                    <Button className="w-full orbitron text-xs relative overflow-hidden group">
                      <span className="relative z-10">Get Started</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
