// Master Frame Industries — Product & Company Data
// Design: Architectural Precision — Swiss Grid Modernism

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  features: string[];
  materials: string[];
  sizes: string[];
  priceRange: string;
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  label: string;
  description: string;
  count: number;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All Products", description: "Complete product range", count: 16 },
  { id: "wooden-doors", label: "Wooden Doors", description: "Solid & laminated doors", count: 5 },
  { id: "metal-doors", label: "Metal Doors", description: "Fire & security doors", count: 3 },
  { id: "aluminium", label: "Aluminium", description: "Doors, windows & cabinets", count: 4 },
  { id: "accessories", label: "Accessories", description: "Hardware & fittings", count: 4 },
];

export const PRODUCTS: Product[] = [
  {
    id: "solid-decorative-door",
    name: "Decorative Solid Door",
    category: "wooden-doors",
    subcategory: "Solid Wood",
    description: "Handcrafted from premium hardwood with intricate panel detailing. Each door is individually finished for lasting beauty and structural integrity.",
    features: ["Premium hardwood construction", "Customizable panel designs", "Available in 20+ finishes", "Anti-warp treatment", "Solid core for sound insulation"],
    materials: ["Meranti", "Merbau", "Nyatoh", "Teak"],
    sizes: ["2100×900mm", "2100×1000mm", "2400×1000mm", "Custom"],
    priceRange: "RM 800 – RM 3,500",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/product-wood-doors-VF3y2B8wdPKT8ZWPNcXRvo.webp",
    badge: "Bestseller",
    popular: true,
  },
  {
    id: "laminated-door",
    name: "Laminated Door",
    category: "wooden-doors",
    subcategory: "Laminated",
    description: "Modern laminated surface with a solid core. Resistant to moisture and scratches, ideal for Malaysian climate conditions.",
    features: ["High-pressure laminate surface", "Moisture resistant", "Scratch resistant", "Wide colour range", "Lightweight yet durable"],
    materials: ["HDF Core", "HPL Surface", "PVC Edge"],
    sizes: ["2100×800mm", "2100×900mm", "2100×1000mm", "Custom"],
    priceRange: "RM 350 – RM 900",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    popular: true,
  },
  {
    id: "fire-door",
    name: "Fire Rated Door",
    category: "metal-doors",
    subcategory: "Fire Door",
    description: "SIRIM-certified fire doors providing 30, 60, or 90-minute fire resistance. Mandatory for commercial and high-rise residential buildings.",
    features: ["SIRIM certified", "30/60/90 min fire rating", "Intumescent seals", "Panic bar compatible", "Smoke seal included"],
    materials: ["Steel", "Fire-resistant core", "Mineral wool"],
    sizes: ["2100×900mm", "2100×1000mm", "2400×1200mm", "Custom"],
    priceRange: "RM 1,200 – RM 4,800",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    badge: "Certified",
  },
  {
    id: "aluminium-door",
    name: "Aluminium Door",
    category: "aluminium",
    subcategory: "Aluminium Door",
    description: "Precision-engineered aluminium door systems with powder-coated finish. Corrosion-resistant and low-maintenance for modern architecture.",
    features: ["Powder-coated finish", "Corrosion resistant", "Thermal break option", "Multi-point locking", "Custom RAL colours"],
    materials: ["6063-T5 Aluminium", "Tempered glass", "EPDM seals"],
    sizes: ["2100×900mm", "2400×1200mm", "Custom"],
    priceRange: "RM 1,500 – RM 6,000",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/aluminium-products-NWFhDzkawqgRUDy8yCEEvF.webp",
    badge: "Premium",
    popular: true,
  },
  {
    id: "sliding-door",
    name: "Sliding & Folding Door",
    category: "aluminium",
    subcategory: "Sliding System",
    description: "Space-saving sliding and bi-fold door systems for modern open-plan living. Smooth operation with soft-close mechanism.",
    features: ["Soft-close mechanism", "Anti-jump track", "Double glazing option", "Fly screen compatible", "Wide opening span"],
    materials: ["Aluminium", "Tempered glass", "Stainless steel hardware"],
    sizes: ["1800×2100mm", "2400×2100mm", "3600×2100mm", "Custom"],
    priceRange: "RM 2,000 – RM 8,000",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80",
  },
  {
    id: "wooden-frame",
    name: "Wooden Door Frame",
    category: "wooden-doors",
    subcategory: "Door Frame",
    description: "Solid timber door frames crafted for precise fit and lasting durability. Available in matching wood species to complement any door.",
    features: ["Solid timber construction", "Pre-hung option available", "Rebated or non-rebated", "Primed for painting", "Custom profiles"],
    materials: ["Meranti", "Merbau", "Pine"],
    sizes: ["Standard", "Custom"],
    priceRange: "RM 150 – RM 600",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "metal-frame",
    name: "Metal Door Frame",
    category: "metal-doors",
    subcategory: "Metal Frame",
    description: "Heavy-duty steel door frames for commercial and industrial applications. Hot-dip galvanized for maximum corrosion protection.",
    features: ["Hot-dip galvanized", "Welded construction", "Adjustable width", "Anchor bolt holes", "Powder coat option"],
    materials: ["Mild steel", "Galvanized steel", "Stainless steel"],
    sizes: ["Standard", "Custom"],
    priceRange: "RM 200 – RM 800",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "aluminium-kitchen-cabinet",
    name: "Aluminium Kitchen Cabinet",
    category: "aluminium",
    subcategory: "Kitchen Cabinet",
    description: "Modern aluminium kitchen cabinets — termite-proof, waterproof, and built to last. The smart alternative to traditional wood cabinets.",
    features: ["Termite-proof", "100% waterproof", "Easy to clean", "Modular design", "Soft-close hinges"],
    materials: ["Aluminium extrusion", "Aluminium composite panel", "Tempered glass"],
    sizes: ["Modular", "Custom"],
    priceRange: "RM 3,500 – RM 15,000",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    badge: "New",
    popular: true,
  },
  {
    id: "auto-gate",
    name: "Auto Gate",
    category: "accessories",
    subcategory: "Auto Gate",
    description: "Automated gate systems with remote control and smart access features. Available in swing and sliding configurations.",
    features: ["Remote control", "Auto-reverse safety", "Battery backup", "Smart access option", "Weather resistant motor"],
    materials: ["Mild steel", "Aluminium", "Stainless steel"],
    sizes: ["3m", "4m", "5m", "Custom"],
    priceRange: "RM 2,500 – RM 8,000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "ironmongery",
    name: "Door Hardware & Ironmongery",
    category: "accessories",
    subcategory: "Hardware",
    description: "Complete range of door hardware including locks, handles, hinges, and closers. Sourced from trusted international brands.",
    features: ["Mortise locks", "Lever handles", "Door closers", "Flush bolts", "Door viewers"],
    materials: ["Stainless steel", "Brass", "Zinc alloy"],
    sizes: ["Standard"],
    priceRange: "RM 25 – RM 800",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "wooden-flooring",
    name: "Wooden Flooring",
    category: "accessories",
    subcategory: "Flooring",
    description: "Premium solid and engineered wood flooring. Adds warmth and character to any interior space.",
    features: ["Solid & engineered options", "Pre-finished", "Click-lock system", "UV coating", "Anti-scratch"],
    materials: ["Solid timber", "Engineered wood", "Bamboo"],
    sizes: ["90×900mm", "120×1200mm", "Custom"],
    priceRange: "RM 8 – RM 45 per sq ft",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "staircase-handrail",
    name: "Staircase Wooden Handrail",
    category: "accessories",
    subcategory: "Staircase",
    description: "Elegantly crafted wooden handrails and balustrades for staircases. Custom profiles to match your interior design.",
    features: ["Custom profiles", "Matching newel posts", "Various wood species", "Smooth finish", "Structural grade"],
    materials: ["Meranti", "Oak", "Merbau"],
    sizes: ["Custom"],
    priceRange: "RM 80 – RM 250 per metre",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export const COMPANY_INFO = {
  name: "Master Frame Industries Sdn Bhd",
  shortName: "MasterFrame",
  tagline: "Crafting Entrances Since 1994",
  description: "Malaysia's trusted manufacturer of premium doors, door frames, aluminium products and architectural fittings.",
  yearsExperience: 30,
  phone: "+60 3-XXXX XXXX",
  whatsapp: "+60123456789",
  email: "enquiry@masterframe.com.my",
  address: "No. 12, Jalan Industri 3/5, Taman Industri Selesa Jaya, 43300 Balakong, Selangor, Malaysia",
  showroomHours: "Mon–Sat: 8:30am – 5:30pm | Sun & PH: Closed",
  socialMedia: {
    facebook: "https://facebook.com/masterframeindustries",
    instagram: "https://instagram.com/masterframeindustries",
  },
};

export const TESTIMONIALS = [
  {
    name: "Ahmad Faizal",
    role: "Property Developer",
    company: "Faizal Properties Sdn Bhd",
    text: "We've been sourcing doors from MasterFrame for over 8 years. Their quality is consistent and delivery is always on time. Highly recommended for large-scale projects.",
    rating: 5,
  },
  {
    name: "Sarah Lim",
    role: "Interior Designer",
    company: "Lim & Associates Design",
    text: "The customization options are excellent. I can always find the right door to match my clients' design vision. The team is professional and responsive.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    company: "Petaling Jaya",
    text: "From consultation to installation, the entire process was smooth. The fire door they installed meets all safety requirements and looks great too.",
    rating: 5,
  },
  {
    name: "Tan Wei Ming",
    role: "Contractor",
    company: "WM Construction",
    text: "Competitive pricing, good quality, and they always have stock. The metal frames are solid and installation is straightforward.",
    rating: 4,
  },
];

export const WHY_CHOOSE_US = [
  {
    number: "30+",
    title: "Years of Experience",
    description: "Three decades of manufacturing excellence in Malaysia's door and architectural fittings industry.",
  },
  {
    number: "5,000+",
    title: "Projects Completed",
    description: "From single homes to large commercial developments across Peninsular Malaysia.",
  },
  {
    number: "100%",
    title: "End-to-End Service",
    description: "Manufacturing, delivery, installation, and after-sales support — all under one roof.",
  },
  {
    number: "SIRIM",
    title: "Certified Products",
    description: "Our fire doors and key products carry SIRIM certification for your peace of mind.",
  },
];
