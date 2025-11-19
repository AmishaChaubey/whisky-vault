// data.js - Configuration data for About section
import { Award, Clock, Truck, Shield } from 'lucide-react';
export const aboutData = {
  hero: {
    backgroundImage: 'https://images.pexels.com/photos/715995/pexels-photo-715995.jpeg',
    title: 'Black and Black Whisky',
    description: [
      'Savor your indulgence in every pour.',
      'Whisky — a voice of warmth and refinement.',
      'Matured in patience, perfected in flavor .'
    ]
  },
  
  content: {
    eyebrow: {
      badge: 'Since 2021 • Family Owned',
      hasAnimation: true
    },
    
    heading: {
      line1: 'The Essence of',
      line2: 'Darkness'
    },
    
    subheading: 'Black & Black Platinum Scotch Whisky is a distinguished blended Scotch crafted under the expertise of Blu Kings Distillers Pvt. Ltd., launched in 2025 to redefine sophistication in the Indian whisky market.',
    
    description: [
      'Its golden amber hue reflects the richness of its craft, while the aroma reveals delicate layers of honey, fruit, vanilla, and a whisper of smoke. On the palate, it offers a mellow and refined experience with notes of oak, malt, and gentle spice, finishing medium-long with a touch of sweetness that lingers gracefully.',
      'The name “Black & Black”, inspired by the legendary Indian ballad “The Blu Kings,” symbolizes the harmony between Indian heritage and global Scotch tradition, making it a whisky of both legacy and luxury.'    ]
  },
  
  images: {
    main: {
      src: 'https://images.pexels.com/photos/4694322/pexels-photo-4694322.jpeg',
      alt: 'Premium whisky craftsmanship'
    },
    secondary: {
      src: 'https://i.pinimg.com/1200x/9e/3c/82/9e3c8284b0bf0325474e4eccf5b4af15.jpg',
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
    text: "I wasn’t really into darker whiskies before, but Black & Black changed everything. The rich aroma and deep, smoky notes gave the drink a character I didn’t expect. It’s smooth yet powerful — the kind of whisky that instantly feels premium the moment it touches your palate.",
    title: "Dark, bold & unforgettable.",
    image: "https://images.pexels.com/photos/19095111/pexels-photo-19095111.jpeg"
  },
  {
    id: 2,
    text: "The first sip blew me away — intense flavor with a silky finish. Black & Black adds the perfect amount of edge to every celebration. You can feel the craftsmanship behind every drop. It’s not just whisky, it’s a whole mood in a glass.",
    title: "A bold mood setter.",
    image: "https://i.pinimg.com/1200x/09/f8/31/09f831503999f33af0b20097324ab395.jpg"
  },
  {
    id: 3,
    text: "This whisky stands out with its unique blend of strength and smoothness. You taste the boldness first, and then the flavor gently lingers — making you appreciate every sip. Black & Black has that premium vibe without trying too hard.",
    title: "Strength with smooth flavor.",
    image: "https://i.pinimg.com/1200x/e7/d9/03/e7d903aedb340df9369bf2050fa1d03b.jpg"
  },
  {
    id: 4,
    text: "A friend introduced me to Black & Black and I instantly knew it was something special. It’s the kind of whisky you share when the moment matters. Intense, classy, and crafted to perfection — now it’s my first pick for any gathering.",
    title: "Made for special moments.",
    image: "https://i.pinimg.com/736x/1d/a9/98/1da998b39fca4fc3c514ffea7692b90f.jpg"
  },
  {
    id: 5,
    text: "Black & Black delivers everything I love — bold flavor, warm finish, and a style that sets it apart. It has completely earned its place in my bar. Whenever I pour it, I know the night is going to be a great one.",
    title: "A must-have in my bar.",
    image: "https://i.pinimg.com/1200x/3d/89/aa/3d89aa01fffd06b976f24360663f0f49.jpg"
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