'use client';

import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  Menu, 
  X, 
  HelpCircle, 
  Info, 
  Star, 
  FileText, 
  BookOpen, 
  HelpCircleIcon 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const mainNavItems = [
    { href: '/how-it-works', label: 'How It Works', icon: HelpCircle },
    { href: '/about', label: 'About', icon: Info },
    { href: '/properties', label: 'Success', icon: Star },
    { href: '/reviews', label: 'Reviews', icon: FileText },
  ];

  const resourcesItems = [
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/faq', label: 'FAQ', icon: HelpCircleIcon },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="nav-container w-full px-0 lg:pr-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="-ml-10 lg:m-0">
            <Link href="/" className="block">
              <Image
                width={300}
                height={300}
                src="https://ik.imagekit.io/pcet3dvcu/4706b285aa-Photoroom.png?updatedAt=1738214228303"
                alt="KNG Home Buyers Logo"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}

            <div className="relative group">
              <button
                className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
                onMouseEnter={() => setShowResources(true)}
                onMouseLeave={() => setShowResources(false)}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {showResources && (
                <div
                  className="absolute top-full right-0 w-48 py-2 bg-white rounded-md shadow-lg"
                  onMouseEnter={() => setShowResources(true)}
                  onMouseLeave={() => setShowResources(false)}
                >
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button size="lg" className="ml-4" asChild>
              <Link href="/sell">Get Cash Offer</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden mr-5">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="py-3 space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 text-base font-medium text-gray-600 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Resources
            </div>
            {resourcesItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-6 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <Button className="w-full" size="lg" asChild>
                <Link href="/sell">Get Cash Offer</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}