"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SplitType from "split-type";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Cpu,
  Eye,
  Heart,
  Zap,
  ShoppingCart,
  Crosshair,
  TrendingUp,
  Users,
  Award,
  Star,
  ArrowUpRight,
  ChevronRight,
  BarChart2,
  PieChart as PieChartIcon,
  Activity,
} from "lucide-react";

// Sample data for charts
const salesData = [
  { month: "Jan", sales: 4000, target: 2400 },
  { month: "Feb", sales: 3000, target: 2800 },
  { month: "Mar", sales: 5000, target: 3200 },
  { month: "Apr", sales: 8000, target: 3600 },
  { month: "May", sales: 7000, target: 4000 },
  { month: "Jun", sales: 9000, target: 4400 },
];

const satisfactionData = [
  { name: "Very Satisfied", value: 65 },
  { name: "Satisfied", value: 25 },
  { name: "Neutral", value: 7 },
  { name: "Unsatisfied", value: 3 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Neural Interface User",
    content:
      "The NeuroLink Pro has completely transformed how I interact with technology. Response time is incredible.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Cybernetic Enhancement User",
    content:
      "After my OptiTech Elite implant, my vision capabilities have increased by 300%. Night vision is a game-changer.",
    avatar: "/avatar.jpg",
    rating: 4,
  },
  {
    name: "Marcus Williams",
    role: "Military Contractor",
    content:
      "The durability and performance of these enhancements under extreme conditions is unmatched in the industry.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
];

const metrics = [
  { title: "Total Users", value: "24,521", icon: Users, change: "+12.5%" },
  { title: "Satisfaction", value: "96.8%", icon: Star, change: "+3.2%" },
  { title: "Revenue", value: "$4.2M", icon: TrendingUp, change: "+18.4%" },
];

export default function Home() {
  const container = useRef<any>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = new SplitType("#hero-text", { splitClass: "split_char" });

    const timeline1 = gsap.timeline();

    timeline1
      .to(".split_char", {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      })
      .from("#cyborg_img", { opacity: 0, y: 100, duration: 1, delay: 0.15 });

    const timeline_hero = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero_section",
        start: "51% center",
        end: "150% center",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    timeline_hero
      .to("#hero_section", {
        scale: 0.7,
        duration: 1,
        borderColor: "black",
        borderRadius: "15px",
      })
      .from("#secondary_section", {
        borderColor: "black",
        borderRadius: "15px",
        y: -100,
        scale: 0.7,
        duration: 1,
      });
  });

  return (
    <main className="min-h-screen bg-white" ref={container}>
      {/* Hero Section */}
      <section
        id="hero_section"
        className="flex flex-col items-center relative h-screen z-20 border bg-[#FAFAFA]"
      >
        <div
          id="cyborg"
          className="relative w-full h-full flex flex-col items-center justify-end z-10 overflow-hidden"
        >
          <img
            id="cyborg_img"
            src="/img.png"
            className="z-10 max-h-[90vh] relative"
          />
        </div>
        <h1
          id="hero-text"
          className="w-full text-[13vw] orbitron z-0 font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          CYBERTECH
        </h1>
      </section>

      <section
        id="secondary_section"
        className="flex flex-col items-center relative min-h-screen p-10 z-30 border bg-[#FAFAFA] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-primary/50 after:to-transparent"
      >
        {/* Welcome Section */}
        <div className="w-full max-w-7xl my-20">
          <h2 className="text-gray-900 text-5xl orbitron font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Welcome to CyberTech
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600">
            Revolutionizing human potential through cutting-edge cybernetic
            enhancements and neural interfaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-white shadow-md border border-primary/20 hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl orbitron font-semibold mb-2 relative z-10 text-gray-800">
                Cybernetic Enhancements
              </h3>
              <p className="text-gray-600 relative z-10">
                Advanced augmentations to boost physical capabilities.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-md border border-primary/20 hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl orbitron font-semibold mb-2 relative z-10 text-gray-800">
                Neural Interfaces
              </h3>
              <p className="text-gray-600 relative z-10">
                Seamless brain-computer connections for enhanced cognition.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-md border border-primary/20 hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl orbitron font-semibold mb-2 relative z-10 text-gray-800">
                Ethical Innovation
              </h3>
              <p className="text-gray-600 relative z-10">
                Committed to responsible advancement of human augmentation.
              </p>
            </div>
          </div>
        </div>

        {/* Sales Statistics Section */}
        <div className="w-full max-w-7xl mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Performance Metrics
            </h2>
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-primary/10 border-primary/30 orbitron"
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>Q2 2023</span>
            </Badge>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1 orbitron">
                        {metric.title}
                      </p>
                      <h3 className="text-3xl orbitron font-bold text-gray-800">
                        {metric.value}
                      </h3>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-full border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <metric.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <ArrowUpRight className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-green-500 font-medium">
                      {metric.change}
                    </span>
                    <span className="text-gray-500 ml-1">vs last quarter</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sales Chart */}
          <Card className="border border-primary/20 shadow-lg mb-10 bg-white hover:border-primary/40 transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="orbitron text-gray-800">
                    Sales Performance
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    Monthly sales vs targets
                  </CardDescription>
                </div>
                <div className="bg-primary/10 p-2 rounded-full border border-primary/30">
                  <BarChart2 className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={salesData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorSales"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorTarget"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#82ca9d"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#82ca9d"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="month"
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="sales"
                      stroke="hsl(var(--primary))"
                      fillOpacity={1}
                      fill="url(#colorSales)"
                    />
                    <Area
                      type="monotone"
                      dataKey="target"
                      stroke="#82ca9d"
                      fillOpacity={1}
                      fill="url(#colorTarget)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Satisfaction Section */}
        <div className="w-full max-w-7xl mb-20">
          <h2 className="text-3xl orbitron font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Customer Satisfaction
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Satisfaction Chart */}
            <Card className="border border-primary/20 shadow-lg lg:col-span-1 bg-white hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="orbitron text-gray-800">
                    Satisfaction Ratings
                  </CardTitle>
                  <div className="bg-primary/10 p-2 rounded-full border border-primary/30">
                    <PieChartIcon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={satisfactionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {satisfactionData.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <div className="lg:col-span-2 space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12 border-2 border-primary ring-2 ring-primary/30 ring-offset-2 ring-offset-white">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-primary/20 text-primary orbitron">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h4 className="font-semibold orbitron text-gray-800">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                          </div>
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < testimonial.rating
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-gray-400"
                                  }`}
                                />
                              ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Company Overview Section */}
        <div className="w-full max-w-7xl mb-20">
          <h2 className="text-3xl orbitron font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            About CyberTech
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader>
                <CardTitle className="orbitron text-gray-800">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="mb-4 text-gray-600">
                  Founded in 2030, CyberTech has been at the forefront of human
                  augmentation technology, pushing the boundaries of what's
                  possible through ethical innovation and cutting-edge research.
                </p>
                <p className="mb-4 text-gray-600">
                  Our mission is to enhance human capabilities through seamless
                  integration of technology and biology, creating a future where
                  limitations are overcome through responsible advancement.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge
                    variant="secondary"
                    className="text-xs orbitron bg-primary/10 text-primary border-primary/30"
                  >
                    ISO 27001 Certified
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs orbitron bg-primary/10 text-primary border-primary/30"
                  >
                    Medical Grade
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs orbitron bg-primary/10 text-primary border-primary/30"
                  >
                    Military Approved
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs orbitron bg-primary/10 text-primary border-primary/30"
                  >
                    Ethical AI
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 shadow-lg bg-white hover:border-primary/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader>
                <CardTitle className="orbitron text-gray-800">
                  Company Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold orbitron text-gray-800">
                        Innovation Award 2032
                      </h4>
                      <p className="text-sm text-gray-500">
                        Global recognition for our NeuroLink technology
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold orbitron text-gray-800">
                        100,000+ Enhanced Lives
                      </h4>
                      <p className="text-sm text-gray-500">
                        Milestone of successful augmentations worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold orbitron text-gray-800">
                        99.98% Success Rate
                      </h4>
                      <p className="text-sm text-gray-500">
                        Industry-leading reliability in neural interfaces
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="w-full max-w-7xl mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Featured Products
            </h2>
            <Button
              variant="outline"
              className="gap-1 orbitron border-primary/30 text-primary hover:bg-primary/20 hover:text-primary"
            >
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-primary/20 shadow-lg overflow-hidden group bg-white hover:border-primary/40 transition-all relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-primary/5 p-8 flex justify-center items-center border-b border-primary/20">
                <Brain className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="orbitron text-gray-800">
                    NeuroLink Pro
                  </CardTitle>
                  <Badge className="bg-primary/10 text-primary border-primary/30 orbitron">
                    New
                  </Badge>
                </div>
                <CardDescription className="text-gray-500">
                  Advanced neural interface for seamless digital integration
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  <span className="text-sm text-gray-500 ml-2">
                    (128 reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold orbitron text-gray-800">
                  $29,999
                </p>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button className="w-full gap-2 orbitron bg-primary/80 hover:bg-primary">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-primary/20 shadow-lg overflow-hidden group bg-white hover:border-primary/40 transition-all relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-primary/5 p-8 flex justify-center items-center border-b border-primary/20">
                <Eye className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="orbitron text-gray-800">
                    OptiTech Elite
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/30 orbitron"
                  >
                    Popular
                  </Badge>
                </div>
                <CardDescription className="text-gray-500">
                  4K ultra-HD vision with night vision capabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 4
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  <span className="text-sm text-gray-500 ml-2">
                    (96 reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold orbitron text-gray-800">
                  $19,999
                </p>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button className="w-full gap-2 orbitron bg-primary/80 hover:bg-primary">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-primary/20 shadow-lg overflow-hidden group bg-white hover:border-primary/40 transition-all relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-primary/5 p-8 flex justify-center items-center border-b border-primary/20">
                <Heart className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="orbitron text-gray-800">
                    CardioBoost X1
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary orbitron"
                  >
                    Premium
                  </Badge>
                </div>
                <CardDescription className="text-gray-500">
                  Military-grade synthetic heart with 200-year lifespan
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 5
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  <span className="text-sm text-gray-500 ml-2">
                    (214 reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold orbitron text-gray-800">
                  $49,999
                </p>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button className="w-full gap-2 orbitron bg-primary/80 hover:bg-primary">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full max-w-7xl mb-10">
          <Card className="border border-primary/30 shadow-lg bg-gradient-to-r from-primary/10 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <CardContent className="p-10 flex flex-col items-center text-center relative z-10">
              <h2 className="text-3xl orbitron font-bold mb-4 text-gray-800">
                Ready to Enhance Your Potential?
              </h2>
              <p className="text-lg mb-8 max-w-2xl text-gray-600">
                Join thousands of satisfied customers who have transformed their
                lives with our cutting-edge cybernetic technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 orbitron bg-primary/80 hover:bg-primary relative overflow-hidden group"
                >
                  <span className="relative z-10">Schedule Consultation</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 orbitron border-primary/30 text-primary hover:bg-primary/20 hover:text-primary"
                >
                  Browse Products
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
