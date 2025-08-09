// Fire Falcons team data and player mapping
// Import images as modules for proper Vite asset handling
import FoysalImg from '../assets/Foysal.jpg';
import ArvinImg from '../assets/Arvin.jpg';
import ArunImg from '../assets/Arun.jpg';
import MelbinImg from '../assets/Melbin.jpg';
import VishnuImg from '../assets/Vishnu.jpg';
import AnumonImg from '../assets/Anumon.jpg';
import AshwinImg from '../assets/Ashwin.jpg';
import JaberImg from '../assets/Jaber.jpg';
import JosephImg from '../assets/Joseph.jpg';
import PraveenImg from '../assets/Praveen.jpg';
import ShibuImg from '../assets/Shibu.jpg';
import TitusImg from '../assets/Titus.jpg';
import TjithImg from '../assets/Tjith.jpg';
import AnoopImg from '../assets/Anoop.jpg';

// Import owner images
import JoyalettanImg from '../assets/Joyalettan.jpg';
import NibinImg from '../assets/Nibin.jpg';

export const teamMembers = [
  {
    id: 1,
    name: "Foysal",
    role: "All-rounder",
    image: FoysalImg,
    description: "Versatile all-rounder with exceptional skills in both batting and bowling",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 2,
    name: "Arvin",
    role: "All-rounder",
    image: ArvinImg,
    description: "Dynamic all-rounder bringing energy and skill to every match",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 3,
    name: "Arun",
    role: "All-rounder",
    image: ArunImg,
    description: "Reliable all-rounder with consistent performance across all formats",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 4,
    name: "Melbin",
    role: "All-rounder",
    image: MelbinImg,
    description: "Talented all-rounder with a passion for the game",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 5,
    name: "Vishnu",
    role: "All-rounder",
    image: VishnuImg,
    description: "Skilled all-rounder contributing to team success",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 6,
    name: "Anumon",
    role: "All-rounder",
    image: AnumonImg,
    description: "Promising all-rounder with great potential",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 7,
    name: "Ashwin",
    role: "Opening Batsman",
    image: AshwinImg,
    description: "Aggressive opening batsman with excellent timing and shot selection",
    stats: {
      matches: 0,
      runs: 0,
      average: 0
    }
  },
  {
    id: 8,
    name: "Jaber",
    role: "All-rounder",
    image: JaberImg,
    description: "Versatile all-rounder with bowling expertise",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 9,
    name: "Joseph",
    role: "All-rounder",
    image: JosephImg,
    description: "Dynamic all-rounder contributing with both bat and ball",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 10,
    name: "Praveen",
    role: "All-rounder",
    image: PraveenImg,
    description: "All-rounder with safe hands and quick reflexes",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 11,
    name: "Shibu",
    role: "All-rounder",
    image: ShibuImg,
    description: "All-rounder who can turn the match with magical deliveries",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 12,
    name: "Titus",
    role: "All-rounder",
    image: TitusImg,
    description: "Reliable all-rounder who anchors the team",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  },
  {
    id: 13,
    name: "Tjith",
    role: "All-rounder",
    image: TjithImg,
    description: "Versatile all-rounder bringing balance to the team composition",
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0
    }
  }
];

export const iconPlayer = {
  id: 1,
  name: "Anoop",
  role: "Icon Player",
  image: AnoopImg,
  description: "Anoop is an allrounder, who can hit any ball to six and bowl at an express speed",
  stats: {
    matches: 0,
    runs: 0,
    wickets: 0,
    sixes: 0,
    bowlingSpeed: "Express"
  }
};

export const teamOwners = [
  {
    id: 1,
    name: "Joyalettan",
    role: "Team Owner",
    image: JoyalettanImg,
    description: "Visionary leader and founder of Fire Falcons cricket team"
  },
  {
    id: 2,
    name: "Nibin",
    role: "Team Owner",
    image: NibinImg,
    description: "Co-owner and strategic mind behind the team's success"
  }
];

export const teamStats = {
  totalMatches: 0,
  wins: 0,
  losses: 0,
  ties: 0,
  winPercentage: 0,
  established: "2025",
  homeGround: "Fire Stadium"
};

export const teamColors = {
  primary: "#FF4500", // Fire Orange
  secondary: "#8B0000", // Dark Red
  accent: "#FFD700", // Gold
  background: "#1a1a1a", // Dark
  text: "#FFFFFF"
};
