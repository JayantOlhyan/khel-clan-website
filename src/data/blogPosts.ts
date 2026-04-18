// src/data/blogPosts.ts
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  img: string;
  slug: string;
  content: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Choose the Right Turf for Your Game",
    excerpt: "Tips on selecting the perfect playing surface for football and other sports.",
    img: "/assets/placeholder/blog1.png",
    slug: "choose-right-turf",
    date: "May 10, 2026",
    author: "KhelClan Team",
    content: `Choosing the right turf is crucial for both performance and safety. Artificial turf technology has advanced significantly in recent years, offering surfaces that mimic the feel and bounce of natural grass while providing superior durability.

### Key Factors to Consider:
1. **Pile Height**: Different sports require different heights. For football, a medium pile height is usually preferred.
2. **Infill material**: Rubber granules vs. sand can affect the shock absorption and ball roll.
3. **Drainage**: Essential for outdoor turfs to prevent puddles during monsoon season.

Whether you're organizing a competitive match or a casual kickabout, understanding the surface you're playing on can help you prepare better and reduce the risk of injury.`,
  },
  {
    id: 2,
    title: "Top 5 Warm‑up Exercises for Football Players",
    excerpt: "Prepare your body with these essential warm‑up routines.",
    img: "/assets/placeholder/blog2.png",
    slug: "football-warmup-exercises",
    date: "May 15, 2026",
    author: "Coach Rahul",
    content: `A good warm-up is the foundation of a great game. It increases blood flow to your muscles and improves flexibility, which is vital for preventing strains.

### 5 Essential Exercises:
1. **Leg Swings**: Great for opening up the hips.
2. **High Knees**: Increases heart rate and prepares the lower body.
3. **Butt Kicks**: Focuses on the quads and hamstrings.
4. **Arm Circles**: Don't forget your upper body; balance and agility start there.
5. **Dynamic Stretching**: Short, controlled stretches while moving.

Spend at least 15 minutes warming up before every match to ensure your peak performance on the field.`,
  },
  {
    id: 3,
    title: "Capturing Your Best Game Highlights",
    excerpt: "A guide to recording and sharing your most exciting moments.",
    img: "/assets/placeholder/blog3.png",
    slug: "capture-game-highlights",
    date: "May 20, 2026",
    author: "Tech Insider",
    content: `In the digital age, sharing your best moments is half the fun of playing. KhelClan makes this easier than ever with automated clip delivery.

### How it Works:
Our venues are equipped with strategically placed cameras that capture every angle of the game. Our AI-driven system automatically detects high-energy moments like goals, saves, and tackles.

### Tips for Better Clips:
- **Stay in view**: Our cameras cover the whole field, but knowing where the primary lens is can help you "play to the camera."
- **Check your dashboard**: Your highlights are processed within minutes.
- **Share instantly**: Download high-quality videos directly to your phone.

Your journey from the field to the feed is now seamless with KhelClan's integrated highlights system.`,
  },
];
