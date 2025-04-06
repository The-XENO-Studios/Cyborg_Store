import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cpu, Eye } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485163819542-13adeb5e0068?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Upgrade Your Human Experience
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium cybernetic enhancements for the modern human. Step into
              the future with our cutting-edge augmentations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/products" className="group">
                  <p className="group-hover:translate-x-5 transition-all">
                    Explore Products
                  </p>
                  <ArrowRight className="ml-2 group-hover:translate-x-16 transition-all" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Featured Augmentations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card">
              <Eye className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">
                Optical Enhancement
              </h3>
              <p className="text-muted-foreground">
                Experience vision beyond human limitations with our advanced
                optical augmentations.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <Brain className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Neural Interface</h3>
              <p className="text-muted-foreground">
                Connect directly with digital systems using our neural interface
                technology.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <Cpu className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Processing Units</h3>
              <p className="text-muted-foreground">
                Enhance your cognitive capabilities with our bio-compatible
                processing units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Evolve?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already taken the
            next step in human evolution.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
