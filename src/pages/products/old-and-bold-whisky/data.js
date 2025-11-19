// data.js - Configuration data for About section
import { Award, Clock, Truck, Shield } from 'lucide-react';
export const aboutData = {
  hero: {
    backgroundImage: 'https://images.pexels.com/photos/4263111/pexels-photo-4263111.jpeg',
    title: 'Old and Bold Whisky',
    description: [
      'Where every sip speaks of craftsmanship and character.',
      'A whisky that evokes warmth, friendship, and timeless joy',
      'A whisky crafted to be savored, shared, and remembered'
    ]
  },
  
  content: {
    eyebrow: {
      badge: 'Since 2021 • Family Owned',
      hasAnimation: true
    },
    
    heading: {
      line1: 'Gold Moments,',
      line2: 'Bold Spirit'
    },
    
    subheading: 'Bottled at 42.8% ABV, Old N Gold maintains the perfect balance expected from quality Indian whiskies.',
    
    description: [
      'Old N Gold Whisky is a semi-premium Indian whisky brand introduced by Blu Kings Distillers Pvt. Ltd., one of India’s leading spirits companies. Launched in 2025, this blended whisky combines the richness of imported Scotch malts with the smoothness of fine Indian grain spirits.It offers a mild and smooth palate with subtle sweetness, delicate malt and oak notes, and a touch of light smokiness that adds depth without overpowering the senses',
      ''
    ]
  },
  
  images: {
    main: {
      src: 'https://i.pinimg.com/1200x/8a/dd/ab/8addab7b4ae34bd03d56a3275132b036.jpg',
      alt: 'Premium whisky craftsmanship'
    },
    secondary: {
      src: 'https://images.pexels.com/photos/11271794/pexels-photo-11271794.jpeg',
      alt: 'Whisky barrel aging'
    }
  }
};

// ctaData.js - Configuration data for CTA section

export const ctaData = {
  heading: {
    title: 'Discover Your Perfect Dram',
    showDecorator: true
  },
  
  description: 'Experience the finest selection of premium whiskies from around the world. Join our exclusive collection today.',
  
  buttons: [
    {
      text: 'Explore Collection',
      type: 'primary',
      showIcon: true
    },
    {
      text: 'View Gallery',
      type: 'secondary',
      showIcon: true
    }
  ],
  
  statistics: [
    {
      icon: 'layers',
      number: '500+',
      label: 'Premium Selections',
      iconPath: 'M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'
    },
    {
      icon: 'location',
      number: '30+',
      label: 'Countries',
      iconPath: 'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z',
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    },
    {
      icon: 'users',
      number: '50K+',
      label: 'Happy Customers',
      iconPath: 'M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'
    }
  ],
  
  styles: {
    primaryColor: '#040472',
    gradientFrom: 'from-blue-50',
    gradientTo: 'to-indigo-50'
  }
};

// data.js - Testimonials data for the carousel

export const testimonials = [
  {
    id: 1,
    text: "I always looked at whisky as a strong drink that only seasoned drinkers could enjoy. But Old & Bold proved me wrong. The warm, rich flavor with just the right kick made every sip feel like a premium experience. It’s bold, yes, but so smooth that it won me over instantly.",
    title: "Boldness with class.",
    image: "https://i.pinimg.com/1200x/29/20/9e/29209e515f3f595bdf10d23d5520c4c7.jpg"
  },
  {
    id: 2,
    text: "From the moment the aroma hit me, I knew this whisky was special. The blend of deep notes and balanced strength gave an experience I hadn’t felt before. Every pour felt like celebrating something important. Old & Bold is not just whisky — it’s a statement.",
    title: "A true celebration drink.",
    image: "https://i.pinimg.com/1200x/ac/23/1c/ac231c6725223e3a649fe14e0d1a5ecf.jpg"
  },
  {
    id: 3,
    text: "I’ve tried different whiskies over the years, but Old & Bold stands out with its full-bodied flavor and smooth finish. Whether neat or with a splash, it carries a personality that makes you appreciate every second of sipping it. Definitely a whisky for people who know what they want.",
    title: "A flavor that stands out.",
    image: "https://i.pinimg.com/1200x/6b/6b/b8/6b6bb8e3fa9eb1710c587288a21998f8.jpg"
  },
  {
    id: 4,
    text: "Old & Bold made our night unforgettable. The refined taste, the warmth it brings, and the confident profile of the whisky set the tone for a perfect evening. It’s crafted for those who love strength wrapped in sophistication — and that’s exactly what it delivered.",
    title: "Strength with style.",
    image: "https://i.pinimg.com/1200x/26/df/2b/26df2be0ed26a107cccbd2fabb1b527b.jpg"
  },
  {
    id: 5,
    text: "This whisky exceeded everything I expected — smooth, rich, and beautifully bold. It’s the kind that turns casual drinkers into true whisky lovers. Old & Bold has earned a permanent place in my collection and my celebrations.",
    title: "A permanent favorite.",
    image: "https://i.pinimg.com/1200x/b3/fe/e1/b3fee1466d24c648ad7c96b418bb24fb.jpg"
  }
];


// data.js - Card data for the marquee component

export const topRowCards = [
  {
    title: "Glenfiddich 18",
    imageUrl: "https://i.pinimg.com/1200x/b1/a3/32/b1a332060d6cde0480b186032ed18aff.jpg",
  },
  {
    title: "Macallan Rare",
    imageUrl: "https://i.pinimg.com/736x/07/cd/d6/07cdd6e62abaa97aac95b2f4d84debee.jpg",
  },
  {
    title: "Lagavulin 16",
    imageUrl: "https://i.pinimg.com/736x/81/e5/40/81e540bf930f631c66dc9324333318af.jpg",
  },
  {
    title: "Highland Park",
    imageUrl: "https://i.pinimg.com/1200x/f1/e4/65/f1e465995264e1a616334f22d9729233.jpg",
  },
  {
    title: "Talisker Storm",
    imageUrl: "https://i.pinimg.com/736x/c0/ed/5a/c0ed5a3a0d37331d371fe38de881c0d0.jpg",
  }
];
export const bottomRowCards = [
  {
    title: "Ardbeg Uigeadail",
    imageUrl: "https://i.pinimg.com/1200x/a9/fc/f7/a9fcf71c92b5661cae16b915060ffdd1.jpg"
  },
  {
    title: "Oban 14 Year",
    imageUrl: "https://i.pinimg.com/1200x/a4/4d/d9/a44dd940bbf19649c532286679beece3.jpg"
  },
  {
    title: "Bowmore 15",
    imageUrl: "https://i.pinimg.com/736x/a7/d0/5a/a7d05a2b8841b771a0d12f561f9a3540.jpg"
  },
  {
    title: "Dalmore 18",
    imageUrl: "https://i.pinimg.com/736x/fc/6d/70/fc6d7002eb810a42e34fae94e3f4428c.jpg"
  },
  {
    title: "Glenmorangie",
    imageUrl: "https://i.pinimg.com/1200x/1c/4a/04/1c4a04632bc87f24a06aefa1796a37a9.jpg"
  }
];

export const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully curated selection of the finest whiskies from around the world"
  },
  {
    icon: Clock,
    title: "Aged Perfection",
    description: "Every bottle represents years of masterful aging and craftsmanship"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Swift and secure shipping directly to your doorstep nationwide"
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "100% authentic products with verified certificates of origin"
  }
];