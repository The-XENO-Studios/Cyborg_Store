"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Cpu,
  Eye,
  Heart,
  Zap,
  ShoppingCart,
  Crosshair,
  Star,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: React.ElementType;
  category: string;
  bodyPart: string;
  rating: number;
  reviews: number;
  badge: {
    text: string;
    variant: "default" | "secondary" | "outline";
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "NeuroLink Pro",
    description: "Advanced neural interface for seamless digital integration",
    price: 29999,
    icon: Brain,
    category: "Neural",
    bodyPart: "head",
    rating: 5,
    reviews: 128,
    badge: { text: "New", variant: "default" },
  },
  {
    id: 2,
    name: "OptiTech Elite",
    description: "4K ultra-HD vision with night vision capabilities",
    price: 19999,
    icon: Eye,
    category: "Optical",
    bodyPart: "head",
    rating: 4,
    reviews: 96,
    badge: { text: "Popular", variant: "secondary" },
  },
  {
    id: 3,
    name: "CardioBoost X1",
    description: "Military-grade synthetic heart with 200-year lifespan",
    price: 49999,
    icon: Heart,
    category: "Cardiovascular",
    bodyPart: "torso",
    rating: 5,
    reviews: 214,
    badge: { text: "Premium", variant: "outline" },
  },
  {
    id: 4,
    name: "QuickThink Module",
    description: "Cognitive enhancement processor with 1TB storage",
    price: 24999,
    icon: Cpu,
    category: "Neural",
    bodyPart: "head",
    rating: 4,
    reviews: 87,
    badge: { text: "Advanced", variant: "secondary" },
  },
  {
    id: 5,
    name: "PowerCore Implant",
    description: "Self-sustaining energy source for cybernetic components",
    price: 34999,
    icon: Zap,
    category: "Power",
    bodyPart: "torso",
    rating: 5,
    reviews: 156,
    badge: { text: "Bestseller", variant: "default" },
  },
  {
    id: 6,
    name: "TitanArm Pro",
    description: "Military-grade cybernetic arm enhancement",
    price: 39999,
    icon: Crosshair,
    category: "Limb",
    bodyPart: "arms",
    rating: 4,
    reviews: 103,
    badge: { text: "Military", variant: "outline" },
  },
  {
    id: 7,
    name: "SwiftLeg Elite",
    description: "High-performance leg augmentation with enhanced speed",
    price: 44999,
    icon: Crosshair,
    category: "Limb",
    bodyPart: "legs",
    rating: 4,
    reviews: 78,
    badge: { text: "Athletic", variant: "secondary" },
  },
];

export default function Products() {
  const categories = [
    "All",
    "Neural",
    "Optical",
    "Cardiovascular",
    "Power",
    "Limb",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const searchParams = useSearchParams();

  // Handle category from URL parameter
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const bodyPartMatch =
      !selectedBodyPart || product.bodyPart === selectedBodyPart;
    return categoryMatch && bodyPartMatch;
  });

  const handleBodyPartClick = (part: string) => {
    setSelectedBodyPart((prev) => (prev === part ? null : part));
    setSelectedCategory("All");
  };

  const getPartClassName = (part: string) => {
    if (selectedBodyPart && selectedBodyPart !== part) {
      // Gray out all parts except the selected one
      return "fill-gray-200 stroke-[3] stroke-gray-300 cursor-pointer transition-all duration-300";
    }
    if (selectedBodyPart === part) {
      return "fill-primary stroke-[3] stroke-primary-foreground cursor-pointer transition-all duration-300";
    }
    if (hoveredPart === part) {
      return "fill-primary/50 stroke-[3] stroke-primary-foreground cursor-pointer transition-all duration-300";
    }
    return "fill-muted/50 stroke-[3] stroke-muted-foreground cursor-pointer transition-all duration-300 hover:fill-primary/30";
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-[#FAFAFA]">
      <Dialog>
        <div className="container mx-auto px-4">
          <h1 className="text-gray-900 text-5xl orbitron font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Our Products
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Interactive Body Diagram */}
            <div className="hidden lg:block lg:col-span-4 bg-white rounded-lg p-6 border border-primary/20 shadow-md relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl orbitron font-semibold text-gray-800">
                  Select Body Region
                </h2>
                {selectedBodyPart && (
                  <Badge className="bg-primary/10 text-primary border-primary/30 orbitron">
                    {selectedBodyPart.charAt(0).toUpperCase() +
                      selectedBodyPart.slice(1)}
                  </Badge>
                )}
              </div>
              <div className="relative w-full max-w-[300px] mx-auto">
                <svg
                  viewBox="0 0 200 400"
                  className="w-full h-full"
                  style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))" }}
                >
                  {/* Grid Background */}
                  <pattern
                    id="grid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="stroke-muted-foreground/20"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Head */}
                  <path
                    d="M 100 60
                     C 130 60, 150 90, 150 120
                     C 150 150, 130 170, 100 170
                     C 70 170, 50 150, 50 120
                     C 50 90, 70 60, 100 60
                     M 70 110 L 85 110
                     M 115 110 L 130 110"
                    className={getPartClassName("head")}
                    onMouseEnter={() => setHoveredPart("head")}
                    onMouseLeave={() => setHoveredPart(null)}
                    onClick={() => handleBodyPartClick("head")}
                  />

                  {/* Torso */}
                  <path
                    d="M 70 170
                     L 70 280
                     C 70 300, 130 300, 130 280
                     L 130 170
                     C 130 180, 100 190, 70 170
                     M 80 200 L 120 200
                     M 80 230 L 120 230"
                    className={getPartClassName("torso")}
                    onMouseEnter={() => setHoveredPart("torso")}
                    onMouseLeave={() => setHoveredPart(null)}
                    onClick={() => handleBodyPartClick("torso")}
                  />

                  {/* Arms */}
                  <path
                    d="M 70 180
                     L 40 220
                     C 20 240, 20 280, 40 290
                     L 50 280
                     C 35 270, 35 240, 50 230
                     L 70 200
                     M 45 240 L 45 260"
                    className={getPartClassName("arms")}
                    onMouseEnter={() => setHoveredPart("arms")}
                    onMouseLeave={() => setHoveredPart(null)}
                    onClick={() => handleBodyPartClick("arms")}
                  />
                  <path
                    d="M 130 180
                     L 160 220
                     C 180 240, 180 280, 160 290
                     L 150 280
                     C 165 270, 165 240, 150 230
                     L 130 200
                     M 155 240 L 155 260"
                    className={getPartClassName("arms")}
                    onMouseEnter={() => setHoveredPart("arms")}
                    onMouseLeave={() => setHoveredPart(null)}
                    onClick={() => handleBodyPartClick("arms")}
                  />

                  {/* Legs */}
                  <path
                    d="M 70 280
                     L 70 350
                     C 60 370, 60 380, 70 390
                     L 80 380
                     C 75 370, 75 360, 85 350
                     L 85 280
                     M 70 320 L 85 320"
                    className={getPartClassName("legs")}
                    onMouseEnter={() => setHoveredPart("legs")}
                    onMouseLeave={() => setHoveredPart(null)}
                    onClick={() => handleBodyPartClick("legs")}
                  />
                  <path
                    d="M 130 280
                     L 130 350
                     C 140 370, 140 380, 130 390
                     L 120 380
                     C 125 370, 125 360, 115 350
                     L 115 280
                     M 115 320 L 130 320"
                    className={getPartClassName("legs")}
                    onMouseEnter={() => setHoveredPart("legs")}
                    onMouseLeave={() => setHoveredPart(null)}
                    onClick={() => handleBodyPartClick("legs")}
                  />

                  {/* Circuit Lines */}
                  <g className="stroke-primary/30" strokeWidth="1">
                    <path d="M 100 90 L 140 50" />
                    <path d="M 100 90 L 60 50" />
                    <path d="M 100 230 L 180 230" />
                    <path d="M 100 230 L 20 230" />
                    <path d="M 100 350 L 160 350" />
                    <path d="M 100 350 L 40 350" />
                  </g>
                </svg>
              </div>
              {selectedBodyPart && (
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="w-full orbitron border-primary/30 text-primary hover:bg-primary/20 hover:text-primary"
                    onClick={() => setSelectedBodyPart(null)}
                  >
                    Clear Selection
                  </Button>
                </div>
              )}
            </div>

            <DialogTrigger asChild>
              <Button
                className="lg:hidden orbitron bg-primary/80 hover:bg-primary"
                variant={"default"}
              >
                Show Body Diagram
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="orbitron text-gray-800">
                  Select Body Part
                </DialogTitle>
                <DialogDescription>
                  Choose the body part you want to enhance or replace.
                </DialogDescription>
              </DialogHeader>
              <div className="lg:col-span-4 bg-white rounded-lg p-6 border border-primary/20 shadow-md relative">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl orbitron font-semibold text-gray-800">
                    Select Body Region
                  </h2>
                  {selectedBodyPart && (
                    <Badge className="bg-primary/10 text-primary border-primary/30 orbitron">
                      {selectedBodyPart.charAt(0).toUpperCase() +
                        selectedBodyPart.slice(1)}
                    </Badge>
                  )}
                </div>
                <div className="relative w-full max-w-[300px] mx-auto">
                  <svg
                    viewBox="0 0 200 400"
                    className="w-full h-full"
                    style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))" }}
                  >
                    {/* Grid Background */}
                    <pattern
                      id="grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="stroke-muted-foreground/20"
                      />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Head */}
                    <path
                      d="M 100 60
                     C 130 60, 150 90, 150 120
                     C 150 150, 130 170, 100 170
                     C 70 170, 50 150, 50 120
                     C 50 90, 70 60, 100 60
                     M 70 110 L 85 110
                     M 115 110 L 130 110"
                      className={getPartClassName("head")}
                      onMouseEnter={() => setHoveredPart("head")}
                      onMouseLeave={() => setHoveredPart(null)}
                      onClick={() => handleBodyPartClick("head")}
                    />

                    {/* Torso */}
                    <path
                      d="M 70 170
                     L 70 280
                     C 70 300, 130 300, 130 280
                     L 130 170
                     C 130 180, 100 190, 70 170
                     M 80 200 L 120 200
                     M 80 230 L 120 230"
                      className={getPartClassName("torso")}
                      onMouseEnter={() => setHoveredPart("torso")}
                      onMouseLeave={() => setHoveredPart(null)}
                      onClick={() => handleBodyPartClick("torso")}
                    />

                    {/* Arms */}
                    <path
                      d="M 70 180
                     L 40 220
                     C 20 240, 20 280, 40 290
                     L 50 280
                     C 35 270, 35 240, 50 230
                     L 70 200
                     M 45 240 L 45 260"
                      className={getPartClassName("arms")}
                      onMouseEnter={() => setHoveredPart("arms")}
                      onMouseLeave={() => setHoveredPart(null)}
                      onClick={() => handleBodyPartClick("arms")}
                    />
                    <path
                      d="M 130 180
                     L 160 220
                     C 180 240, 180 280, 160 290
                     L 150 280
                     C 165 270, 165 240, 150 230
                     L 130 200
                     M 155 240 L 155 260"
                      className={getPartClassName("arms")}
                      onMouseEnter={() => setHoveredPart("arms")}
                      onMouseLeave={() => setHoveredPart(null)}
                      onClick={() => handleBodyPartClick("arms")}
                    />

                    {/* Legs */}
                    <path
                      d="M 70 280
                     L 70 350
                     C 60 370, 60 380, 70 390
                     L 80 380
                     C 75 370, 75 360, 85 350
                     L 85 280
                     M 70 320 L 85 320"
                      className={getPartClassName("legs")}
                      onMouseEnter={() => setHoveredPart("legs")}
                      onMouseLeave={() => setHoveredPart(null)}
                      onClick={() => handleBodyPartClick("legs")}
                    />
                    <path
                      d="M 130 280
                     L 130 350
                     C 140 370, 140 380, 130 390
                     L 120 380
                     C 125 370, 125 360, 115 350
                     L 115 280
                     M 115 320 L 130 320"
                      className={getPartClassName("legs")}
                      onMouseEnter={() => setHoveredPart("legs")}
                      onMouseLeave={() => setHoveredPart(null)}
                      onClick={() => handleBodyPartClick("legs")}
                    />

                    {/* Circuit Lines */}
                    <g className="stroke-primary/30" strokeWidth="1">
                      <path d="M 100 90 L 140 50" />
                      <path d="M 100 90 L 60 50" />
                      <path d="M 100 230 L 180 230" />
                      <path d="M 100 230 L 20 230" />
                      <path d="M 100 350 L 160 350" />
                      <path d="M 100 350 L 40 350" />
                    </g>
                  </svg>
                </div>
                {selectedBodyPart && (
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="w-full orbitron border-primary/30 text-primary hover:bg-primary/20 hover:text-primary"
                      onClick={() => setSelectedBodyPart(null)}
                    >
                      Clear Selection
                    </Button>
                  </div>
                )}
              </div>
            </DialogContent>

            <div className="lg:col-span-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    className={
                      selectedCategory === category
                        ? "orbitron bg-primary/80 hover:bg-primary"
                        : "orbitron border-primary/30 text-primary hover:bg-primary/20 hover:text-primary"
                    }
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedBodyPart(null);
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => {
                  const Icon = product.icon;
                  return (
                    <Card
                      key={product.id}
                      className="border border-primary/20 shadow-lg overflow-hidden group bg-white hover:border-primary/40 transition-all relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="bg-primary/5 p-8 flex justify-center items-center border-b border-primary/20">
                        <Icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <CardHeader className="relative z-10">
                        <div className="flex justify-between items-start">
                          <CardTitle className="orbitron text-gray-800">
                            {product.name}
                          </CardTitle>
                          {product.badge && (
                            <Badge
                              variant={product.badge.variant as any}
                              className={`${
                                product.badge.variant === "default"
                                  ? "bg-primary/10"
                                  : ""
                              } ${
                                product.badge.variant === "secondary"
                                  ? "bg-primary/10"
                                  : ""
                              } text-primary border-primary/30 orbitron`}
                            >
                              {product.badge.text}
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-gray-500">
                          {product.description}
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
                                  i < product.rating
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-gray-400"
                                }`}
                              />
                            ))}
                          <span className="text-sm text-gray-500 ml-2">
                            ({product.reviews} reviews)
                          </span>
                        </div>
                        <div className="space-y-2 text-sm mb-4">
                          <div className="flex items-center">
                            <span className="w-32 text-gray-500">
                              Category:
                            </span>
                            <span className="font-medium text-gray-700">
                              {product.category}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-32 text-gray-500">
                              Body Part:
                            </span>
                            <span className="font-medium text-gray-700 capitalize">
                              {product.bodyPart}
                            </span>
                          </div>
                        </div>
                        <p className="text-2xl font-bold orbitron text-gray-800">
                          ${product.price.toLocaleString()}
                        </p>
                      </CardContent>
                      <CardFooter className="relative z-10">
                        <Button className="w-full gap-2 orbitron bg-primary/80 hover:bg-primary">
                          <ShoppingCart className="h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
