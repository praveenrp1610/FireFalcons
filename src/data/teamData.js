// Fire Falcons team data and player mapping
export const teamMembers = [
  {
    id: 1,
    name: "Ashwin",
    role: "Opening Batsman",
    image: "/src/assets/Ashwin.JPG",
    description: "Aggressive opening batsman with excellent timing and shot selection",
    stats: {
      matches: 45,
      runs: 2340,
      average: 54.5
    }
  },
  {
    id: 2,
    name: "Jaber",
    role: "Fast Bowler",
    image: "/src/assets/Jaber.JPG",
    description: "Express pace bowler with deadly yorkers and swing bowling expertise",
    stats: {
      matches: 42,
      wickets: 78,
      economy: 6.2
    }
  },
  {
    id: 3,
    name: "Joseph",
    role: "All-rounder",
    image: "/src/assets/Joseph.JPG",
    description: "Dynamic all-rounder contributing with both bat and ball",
    stats: {
      matches: 48,
      runs: 1890,
      wickets: 45
    }
  },
  {
    id: 4,
    name: "Praveen",
    role: "Wicketkeeper",
    image: "/src/assets/Praveen.JPG",
    description: "Safe hands behind the stumps with lightning-fast reflexes",
    stats: {
      matches: 50,
      catches: 65,
      stumpings: 12
    }
  },
  {
    id: 5,
    name: "Shibu",
    role: "Spin Bowler",
    image: "/src/assets/Shibu.JPG",
    description: "Crafty spinner who can turn the match with magical deliveries",
    stats: {
      matches: 38,
      wickets: 72,
      economy: 5.8
    }
  },
  {
    id: 6,
    name: "Titus",
    role: "Middle Order Batsman",
    image: "/src/assets/Titus.JPG",
    description: "Reliable middle-order batsman who anchors the innings",
    stats: {
      matches: 44,
      runs: 2100,
      average: 48.2
    }
  },
  {
    id: 7,
    name: "Tjith",
    role: "All-rounder",
    image: "/src/assets/Tjith.JPG",
    description: "Versatile all-rounder bringing balance to the team composition",
    stats: {
      matches: 46,
      runs: 1650,
      wickets: 38
    }
  }
];

export const teamStats = {
  totalMatches: 156,
  wins: 118,
  losses: 32,
  ties: 6,
  winPercentage: 75.6,
  established: "2019",
  homeGround: "Fire Stadium"
};

export const teamColors = {
  primary: "#FF4500", // Fire Orange
  secondary: "#8B0000", // Dark Red
  accent: "#FFD700", // Gold
  background: "#1a1a1a", // Dark
  text: "#FFFFFF"
};
