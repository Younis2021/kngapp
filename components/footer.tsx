'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from './animations/fade-in';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[hsl(35,25%,95%)] to-[hsl(35,30%,98%)] border-t border-[hsl(35,25%,90%)]">
      <div className="container mx-auto px-4 py-16">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="block">
                <Image
                  width={200}
                  height={200}
                  src="https://ik.imagekit.io/pcet3dvcu/4706b285aa-Photoroom.png?updatedAt=1738214228303"
                  alt="KNG Home Buyers Logo"
                  className="w-full"
                  priority
                />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-[hsl(35,41%,47%)] font-semibold mb-4 text-lg">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/about', label: 'About Us' },
                  { href: '/how-it-works', label: 'How It Works' },
                  { href: '/properties', label: 'Success Stories' },
                  { href: '/reviews', label: 'Reviews' },
                  { href: '/sell', label: 'Get Cash Offer' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[hsl(215,22%,27%/0.8)] hover:text-[hsl(35,41%,57%)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-[hsl(35,41%,47%)] font-semibold mb-4 text-lg">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[hsl(35,41%,57%)]" />
                  <span className="text-[hsl(215,22%,27%/0.8)]">
                    Santa Clarita California
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[hsl(35,41%,57%)]" />
                  <a
                    href="tel:(555)123-4567"
                    className="text-[hsl(215,22%,27%/0.8)] hover:text-[hsl(35,41%,57%)] transition-colors duration-200"
                  >
                    (323)-794-7221
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[hsl(35,41%,57%)]" />
                  <a
                    href="mailto:info@knghomebuyers.com"
                    className="text-[hsl(215,22%,27%/0.8)] hover:text-[hsl(35,41%,57%)] transition-colors duration-200"
                  >
                    info@knghomebuyers.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div className="space-y-4">
              <h4 className="text-[hsl(35,41%,47%)] font-semibold mb-4 text-lg">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-white shadow-premium hover:shadow-premium-hover hover:translate-y-[-2px] transition-all duration-200"
                  >
                    <social.icon className="h-5 w-5 text-[hsl(35,41%,57%)]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[hsl(35,25%,90%)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[hsl(215,22%,27%/0.6)]">
              © {new Date().getFullYear()} KNG Home Buyers. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-[hsl(215,22%,27%/0.6)] hover:text-[hsl(35,41%,57%)] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[hsl(215,22%,27%/0.6)] hover:text-[hsl(35,41%,57%)] transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
