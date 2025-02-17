"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Calculator,
  Clock,
  DollarSign,
  HandshakeIcon,
  Shield,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "New York",
      text: "KNG Home Buyers made selling my inherited property so easy. They handled everything and I got a fair cash offer.",
      rating: 5,
    },
    {
      name: "John D.",
      location: "Florida",
      text: "I needed to sell quickly due to relocation. They closed in just 7 days! Excellent service.",
      rating: 5,
    },
    {
      name: "Maria R.",
      location: "Texas",
      text: "Very professional team. They helped me avoid foreclosure and gave me a fresh start.",
      rating: 5,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen md:h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-black/50 z-10"
            style={{ backdropFilter: "blur(2px)" }}
          />
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Beautiful home"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-white font-semibold">
                  Top-Rated Home Buyer Nationwide
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Sell Your House Fast For Cash Anywhere in the US
              </h1>
              <p className="md:text-xl text-gray-200 mb-8">
                Get a guaranteed cash offer within 24 hours. No repairs needed,
                no realtor fees, no hassles. We buy properties in any condition.
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <Button size="lg" asChild className="text-lg">
                  <Link href="/sell">
                    Get Your Cash Offer <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white hover:text-white text-lg"
                  asChild
                >
                  <Link href="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-start md:justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">BBB Accredited</p>
                <p className="text-sm text-gray-600">A+ Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">5-Star Rated</p>
                <p className="text-sm text-gray-600">100+ Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <HandshakeIcon className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">200+ Happy Sellers</p>
                <p className="text-sm text-gray-600">Since 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">
              The Easiest Way to Sell Your House
            </h2>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <DollarSign className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Highest Cash Offers
              </h3>
              <p className="text-gray-600">
                We analyze market data to ensure you get the most competitive
                offer for your property.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Close in as little as 7 days
              </h3>
              <p className="text-gray-600">
                Skip months of listing. We can close quickly with cash or work
                on your timeline.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Calculator className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">No Extra Costs</h3>
              <p className="text-gray-600">
                No repairs, no commissions, no closing costs. Keep more money in
                your pocket.
              </p>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Sellers Say
            </h2>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose KNG Home Buyers?
            </h2>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Selling to KNG Home Buyers
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1" />
                    <span>Close in as little as 7 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1" />
                    <span>No repairs or cleaning needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1" />
                    <span>No commissions or fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1" />
                    <span>Guaranteed cash offer</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-600">
                  Traditional Home Sale
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 mt-1" />
                    <span>30-60+ days to close</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 mt-1" />
                    <span>Repairs & cleaning required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 mt-1" />
                    <span>6% agent commissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 mt-1" />
                    <span>No guaranteed sale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-6">
              We Buy Houses Nationwide
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We purchase properties across all 50 states, including these major
              regions:
            </p>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-4 gap-4">
            {[
              "California",
              "Texas",
              "Florida",
              "New York",
              "Arizona",
              "Michigan",
              "Tennessee",
              "Nevada",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <p className="font-semibold">{area}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Your Cash Offer?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Skip the repairs, skip the wait. Get a guaranteed cash offer for
              your property within 24 hours.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-primary"
              asChild
            >
              <Link href="/sell">Get Your Cash Offer Now</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}