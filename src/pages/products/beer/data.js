// data.js - Configuration data for About section
import { Award, Clock, Truck, Shield } from 'lucide-react';
export const aboutData = {
  hero: {
    backgroundImage: 'https://images.pexels.com/photos/65210/beer-a-pint-cup-alcohol-65210.jpeg',
    title: 'Red Signal Beers',
    description: [
        'Crafted with passion, brewed with character.',
      'Every pint tells a story of flavor, culture, and craft.',
      'Sip, savor & celebrate the taste of true beer artistry'
    ]
  },
  
  content: {
    eyebrow: {
      badge: 'Since 2021 • Family Owned',
      hasAnimation: true
    },
    
    heading: {
      line1: 'Brewed to ',
      line2: 'Perfection'
    },
    
    subheading: 'Red Signal Beer is a bold and dynamic Indian beer brand produced by Blu Kings Distillers Pvt. Ltd., a name synonymous with quality and innovation in the beverage industry.',
    
    description: [
      'Crafted with the perfect blend of premium barley, aromatic hops, and pure Himalayan-sourced water.Indian states including Uttar Pradesh, Delhi, Punjab, Chandigarh, Haryana, and Jammu & Kashmir.',
      'Red Signal offers two distinctive variants — Red Signal Strong / Super Strong, with an approximate 8% ABV, designed for those who prefer a robust and full-bodied flavour; and Red Signal Mild, with around 5% ABV, offering a smoother.'
    ]
  },
  
  images: {
    main: {
      src: 'https://images.pexels.com/photos/5054619/pexels-photo-5054619.jpeg',
      alt: 'Premium whisky craftsmanship'
    },
    secondary: {
      src: 'https://i.pinimg.com/736x/22/7d/ec/227decce285198af3ce7be1b59a1f514.jpg',
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
    text: "Before I tried their brew, I honestly thought beer was just… beer. But the first sip completely changed my mind. The balance of flavors, the aroma, everything was so refined. It felt like discovering a whole new world of craft. Now I appreciate the craft behind every pour and can’t wait to try more varieties.",
    title: "A new appreciation unlocked.",
    image: "https://i.pinimg.com/736x/0b/de/7d/0bde7d895107503f85657eeea2d5270a.jpg"
  },
  {
    id: 2,
    text: "Every glass felt like a story told by the brewmaster. Smooth, bold, and surprisingly refreshing. The staff helped me discover flavors I didn’t even know existed in beer. From the first taste, I knew this wasn't just a drink — it was an experience that would stay with me.",
    title: "Beer tasting elevated.",
    image: "https://i.pinimg.com/1200x/cd/86/dd/cd86dd136cf29c54f2aa5a90e1bacadc.jpg"
  },
  {
    id: 3,
    text: "I’ve always enjoyed beer casually, but the tasting session here opened my eyes to the art behind brewing. I could taste hints of citrus, malt, and unique notes that made every sip exciting. It was fun, interactive, and honestly made me feel like a beer connoisseur!",
    title: "Discovered real flavor.",
    image: "https://i.pinimg.com/1200x/e7/4f/af/e74faf782132f6f2522c9833553f0667.jpg"
  },
  {
    id: 4,
    text: "Trying their signature brew was one of the best decisions ever. The quality, the craftsmanship, the vibe — all top-notch. I met amazing people, tasted incredible beers, and left feeling like I finally understood what good beer really is. Can’t wait to return for more.",
    title: "Best beer experience ever.",
    image: "https://i.pinimg.com/736x/87/4f/02/874f02e2d404d5bf6e3a4f7920b59e1e.jpg"
  },
  {
    id: 5,
    text: "Never thought a tasting event could be so memorable! The variety was impressive and each flavor had something unique to offer. I walked out not just with new favorites but with a real passion for craft beer. Cheers to discovering something that brings so much joy!",
    title: "Cheers to new flavors!",
    image: "https://i.pinimg.com/736x/89/f9/98/89f9983d8674d08b139ba3ea6f98715a.jpg"
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