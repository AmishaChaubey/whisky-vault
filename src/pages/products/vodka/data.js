// data.js - Configuration data for About section
import { Award, Clock, Truck, Shield } from 'lucide-react';
export const aboutData = {
  hero: {
    backgroundImage: 'https://images.pexels.com/photos/15523628/pexels-photo-15523628.jpeg',
    title: 'Blu Kings Vodka',
    description: [
      'Blu Kings Vodka — a spirit born of purity and precision.',
      'impeccably balanced, it embodies sophistication in sips.',
      'every moment into an experience of timeless elegance.'
    ]
  },
  
  content: {
    eyebrow: {
      badge: 'Since 2021 • Family Owned',
      hasAnimation: true
    },
    
    heading: {
      line1: 'Elegance in',
      line2: 'Every Drop'
    },
    
    subheading: 'Blu Kings Vodka is made by Blu Kings Distillers Pvt Ltd in technical collaboration with European Region.',
    
    description: [
      'It’s a 100% grain vodka, using natural mineral water and a “secret European ingredient".The vodka undergoes quadruple distillation and multiple filtrations to achieve purity and clean taste. ',
      'Bottle designs are clear & Transparent. Design by Professionals. We offer both plain (unflavoured) and flavoured versions'
    ]
  },
  
  images: {
    main: {
      src: 'https://i.pinimg.com/736x/8f/6b/a1/8f6ba1de910942f9dd4432785a9bdebd.jpg',
      alt: 'Premium whisky craftsmanship'
    },
    secondary: {
      src: 'https://images.pexels.com/photos/8375036/pexels-photo-8375036.jpeg',
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
    text: "I used to think vodka was just a strong drink with no real character, but Blu Kings completely changed that for me. The smoothness and crystal-clear taste made every sip feel premium. It’s the kind of vodka that instantly makes you appreciate refinement and craftsmanship.",
    title: "Redefined smoothness.",
    image: "https://i.pinimg.com/1200x/60/ff/a8/60ffa8744727ed26b6b1ac743853230c.jpg"
  },
  {
    id: 2,
    text: "From the very first sip, I could tell this vodka was something special. Pure, clean, and incredibly balanced — it brought a classy feel to every cocktail I tried. Blu Kings didn’t just enhance the drink, it elevated the entire night. Absolute luxury in a bottle!",
    title: "A taste of luxury.",
    image: "https://i.pinimg.com/1200x/9b/3f/49/9b3f494b99f45dfaaaa31a2c318aef0f.jpg"
  },
  {
    id: 3,
    text: "I’ve tried many vodkas at parties and events, but nothing compares to how smooth Blu Kings feels. No harshness, just a delicate flavor that stands out whether neat or mixed. It made me realize how enjoyable vodka can be when crafted with perfection.",
    title: "Smoothest vodka ever.",
    image: "https://i.pinimg.com/736x/fd/02/f4/fd02f4b5ddd87a5c53822ed7f9768a41.jpg"
  },
  {
    id: 4,
    text: "Choosing Blu Kings for our celebration was the best idea. Everyone loved the premium taste and stylish vibe it brought to the table. The aroma, the finish — every detail spoke elegance. It’s now my go-to vodka for every special moment.",
    title: "Perfect for every celebration.",
    image: "https://i.pinimg.com/736x/e6/2b/31/e62b319defb55871ec619d53254f956f.jpg"
  },
  {
    id: 5,
    text: "Blu Kings Vodka exceeded all expectations! Whether mixed in cocktails or sipped chilled, it delivered flavor and sophistication. I walked away feeling like I’d just discovered the king of vodkas — and trust me, I’m not switching anytime soon!",
    title: "Truly the king of taste.",
    image: "https://i.pinimg.com/736x/e3/8b/d4/e38bd4ba0136ed4efbd77751960882c5.jpg"
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