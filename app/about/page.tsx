import { Button } from "@/components/ui/button";
import {
  Award,
  Shield,
  Users,
  Star,
  ChevronRight,
  Clock,
  Globe,
  Zap,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-900 text-5xl orbitron font-bold mb-6">
              About CyberTech
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Leading the revolution in human augmentation technology since
              2020. We believe in enhancing human capabilities through ethical
              and cutting-edge cybernetic solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl orbitron font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center relative z-10">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl orbitron font-bold mb-2 text-gray-800">
                  10,000+
                </div>
                <div className="text-gray-600">Satisfied Clients</div>
              </CardContent>
            </Card>
            <Card className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center relative z-10">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl orbitron font-bold mb-2 text-gray-800">
                  50+
                </div>
                <div className="text-gray-600">Countries Served</div>
              </CardContent>
            </Card>
            <Card className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center relative z-10">
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl orbitron font-bold mb-2 text-gray-800">
                  99.9%
                </div>
                <div className="text-gray-600">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl orbitron font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center orbitron text-gray-800">
                  Safety First
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600">
                  All our products undergo rigorous testing and meet the highest
                  safety standards in the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center orbitron text-gray-800">
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600">
                  We continuously push the boundaries of what's possible in
                  human augmentation technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center orbitron text-gray-800">
                  Customer Focus
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600">
                  Our clients' satisfaction and success are at the heart of
                  everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Card className="border border-primary/30 shadow-lg bg-white relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-10 flex flex-col items-center text-center relative z-10">
              <h2 className="text-3xl orbitron font-bold mb-4 text-gray-800">
                Ready to Join the Future?
              </h2>
              <p className="text-lg mb-8 max-w-2xl text-gray-600">
                Schedule a consultation with our experts and discover how we can
                enhance your capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 orbitron bg-primary/80 hover:bg-primary relative overflow-hidden group"
                  asChild
                >
                  <Link href="/contact">
                    <span className="relative z-10">Contact Us Today</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 orbitron border-primary/30 text-primary hover:bg-primary/20 hover:text-primary"
                  asChild
                >
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
