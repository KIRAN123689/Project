// IPL Player Mock Data based on the Python analysis structure

export interface Player {
  id: string;
  name: string;
  team: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  age: number;
  nationality: string;
  imageUrl?: string;
  stats: {
    totalRuns: number;
    ballsFaced: number;
    fours: number;
    sixes: number;
    dismissals: number;
    battingAverage: number;
    battingStrikeRate: number;
    wicketsTaken: number;
    runsConceded: number;
    ballsBowled: number;
    bowlingAverage: number;
    bowlingEconomy: number;
  };
  recentForm: {
    last3Runs: number;
    last3Wickets: number;
  };
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  primaryColor: string;
  secondaryColor: string;
  logo?: string;
}

export interface PredictionResult {
  playerId: string;
  playerName: string;
  predictedRuns: number;
  predictedWickets: number;
  confidence: number;
  topPerformerProbability: number;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
  category: 'form' | 'opponent' | 'venue' | 'player' | 'match';
}

export const teams: Team[] = [
  { id: 'csk', name: 'Chennai Super Kings', shortName: 'CSK', primaryColor: '#FFCB05', secondaryColor: '#003366' },
  { id: 'mi', name: 'Mumbai Indians', shortName: 'MI', primaryColor: '#004BA0', secondaryColor: '#D1AB3E' },
  { id: 'rcb', name: 'Royal Challengers Bangalore', shortName: 'RCB', primaryColor: '#EC1C24', secondaryColor: '#000000' },
  { id: 'kkr', name: 'Kolkata Knight Riders', shortName: 'KKR', primaryColor: '#3A225D', secondaryColor: '#B3A123' },
  { id: 'dc', name: 'Delhi Capitals', shortName: 'DC', primaryColor: '#00008B', secondaryColor: '#EF1B23' },
  { id: 'pbks', name: 'Punjab Kings', shortName: 'PBKS', primaryColor: '#ED1B24', secondaryColor: '#DCDDDF' },
  { id: 'rr', name: 'Rajasthan Royals', shortName: 'RR', primaryColor: '#EA1A85', secondaryColor: '#254AA5' },
  { id: 'srh', name: 'Sunrisers Hyderabad', shortName: 'SRH', primaryColor: '#F7A721', secondaryColor: '#000000' },
  { id: 'gt', name: 'Gujarat Titans', shortName: 'GT', primaryColor: '#1C1C1C', secondaryColor: '#D4AF37' },
  { id: 'lsg', name: 'Lucknow Super Giants', shortName: 'LSG', primaryColor: '#A72056', secondaryColor: '#FFCC00' },
];

export const players: Player[] = [
  {
    id: '1',
    name: 'Virat Kohli',
    team: 'rcb',
    role: 'Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm medium',
    age: 35,
    nationality: 'India',
    stats: {
      totalRuns: 7579,
      ballsFaced: 5742,
      fours: 698,
      sixes: 251,
      dismissals: 207,
      battingAverage: 36.61,
      battingStrikeRate: 132.0,
      wicketsTaken: 4,
      runsConceded: 166,
      ballsBowled: 120,
      bowlingAverage: 41.5,
      bowlingEconomy: 8.3,
    },
    recentForm: { last3Runs: 45.3, last3Wickets: 0 },
  },
  {
    id: '2',
    name: 'Rohit Sharma',
    team: 'mi',
    role: 'Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm off break',
    age: 36,
    nationality: 'India',
    stats: {
      totalRuns: 6211,
      ballsFaced: 4678,
      fours: 512,
      sixes: 283,
      dismissals: 201,
      battingAverage: 30.90,
      battingStrikeRate: 132.8,
      wicketsTaken: 15,
      runsConceded: 321,
      ballsBowled: 228,
      bowlingAverage: 21.4,
      bowlingEconomy: 8.4,
    },
    recentForm: { last3Runs: 38.7, last3Wickets: 0 },
  },
  {
    id: '3',
    name: 'MS Dhoni',
    team: 'csk',
    role: 'Wicketkeeper Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm medium',
    age: 42,
    nationality: 'India',
    stats: {
      totalRuns: 5082,
      ballsFaced: 3536,
      fours: 292,
      sixes: 242,
      dismissals: 144,
      battingAverage: 35.29,
      battingStrikeRate: 143.7,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 28.3, last3Wickets: 0 },
  },
  {
    id: '4',
    name: 'Jasprit Bumrah',
    team: 'mi',
    role: 'Bowler',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm fast',
    age: 30,
    nationality: 'India',
    stats: {
      totalRuns: 56,
      ballsFaced: 78,
      fours: 5,
      sixes: 2,
      dismissals: 15,
      battingAverage: 3.73,
      battingStrikeRate: 71.8,
      wicketsTaken: 165,
      runsConceded: 3542,
      ballsBowled: 2418,
      bowlingAverage: 21.5,
      bowlingEconomy: 7.4,
    },
    recentForm: { last3Runs: 2.3, last3Wickets: 2.7 },
  },
  {
    id: '5',
    name: 'Rashid Khan',
    team: 'gt',
    role: 'Bowler',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm leg break',
    age: 25,
    nationality: 'Afghanistan',
    stats: {
      totalRuns: 367,
      ballsFaced: 215,
      fours: 23,
      sixes: 29,
      dismissals: 42,
      battingAverage: 8.74,
      battingStrikeRate: 170.7,
      wicketsTaken: 128,
      runsConceded: 2756,
      ballsBowled: 2136,
      bowlingAverage: 21.5,
      bowlingEconomy: 6.5,
    },
    recentForm: { last3Runs: 15.0, last3Wickets: 1.7 },
  },
  {
    id: '6',
    name: 'Suryakumar Yadav',
    team: 'mi',
    role: 'Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm off break',
    age: 33,
    nationality: 'India',
    stats: {
      totalRuns: 2644,
      ballsFaced: 1842,
      fours: 234,
      sixes: 142,
      dismissals: 78,
      battingAverage: 33.9,
      battingStrikeRate: 143.5,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 52.3, last3Wickets: 0 },
  },
  {
    id: '7',
    name: 'Hardik Pandya',
    team: 'mi',
    role: 'All-rounder',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm medium fast',
    age: 30,
    nationality: 'India',
    stats: {
      totalRuns: 2344,
      ballsFaced: 1523,
      fours: 156,
      sixes: 132,
      dismissals: 86,
      battingAverage: 27.3,
      battingStrikeRate: 153.9,
      wicketsTaken: 56,
      runsConceded: 1456,
      ballsBowled: 894,
      bowlingAverage: 26.0,
      bowlingEconomy: 9.8,
    },
    recentForm: { last3Runs: 35.0, last3Wickets: 1.0 },
  },
  {
    id: '8',
    name: 'KL Rahul',
    team: 'lsg',
    role: 'Wicketkeeper Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm off break',
    age: 31,
    nationality: 'India',
    stats: {
      totalRuns: 4683,
      ballsFaced: 3542,
      fours: 412,
      sixes: 168,
      dismissals: 145,
      battingAverage: 32.3,
      battingStrikeRate: 132.2,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 41.7, last3Wickets: 0 },
  },
  {
    id: '9',
    name: 'Yuzvendra Chahal',
    team: 'rr',
    role: 'Bowler',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm leg break',
    age: 33,
    nationality: 'India',
    stats: {
      totalRuns: 78,
      ballsFaced: 112,
      fours: 8,
      sixes: 2,
      dismissals: 28,
      battingAverage: 2.79,
      battingStrikeRate: 69.6,
      wicketsTaken: 187,
      runsConceded: 4123,
      ballsBowled: 3012,
      bowlingAverage: 22.0,
      bowlingEconomy: 8.2,
    },
    recentForm: { last3Runs: 0, last3Wickets: 2.3 },
  },
  {
    id: '10',
    name: 'Ravindra Jadeja',
    team: 'csk',
    role: 'All-rounder',
    battingStyle: 'Left-handed',
    bowlingStyle: 'Left-arm orthodox',
    age: 35,
    nationality: 'India',
    stats: {
      totalRuns: 2502,
      ballsFaced: 1687,
      fours: 182,
      sixes: 98,
      dismissals: 108,
      battingAverage: 23.2,
      battingStrikeRate: 148.3,
      wicketsTaken: 152,
      runsConceded: 3245,
      ballsBowled: 2634,
      bowlingAverage: 21.3,
      bowlingEconomy: 7.4,
    },
    recentForm: { last3Runs: 28.0, last3Wickets: 1.3 },
  },
];

export const featureImportanceRuns: FeatureImportance[] = [
  { feature: 'Rolling Avg Runs (Last 3)', importance: 0.342, category: 'form' },
  { feature: 'Player Age', importance: 0.156, category: 'player' },
  { feature: 'Avg Runs vs Opponent', importance: 0.134, category: 'opponent' },
  { feature: 'Batting Style', importance: 0.098, category: 'player' },
  { feature: 'Venue History', importance: 0.087, category: 'venue' },
  { feature: 'Playing Role', importance: 0.072, category: 'player' },
  { feature: 'City', importance: 0.045, category: 'venue' },
  { feature: 'Opponent Team', importance: 0.034, category: 'opponent' },
  { feature: 'Player Team', importance: 0.022, category: 'match' },
  { feature: 'Bowling Style', importance: 0.010, category: 'player' },
];

export const featureImportanceWickets: FeatureImportance[] = [
  { feature: 'Rolling Avg Wickets (Last 3)', importance: 0.298, category: 'form' },
  { feature: 'Bowling Style', importance: 0.187, category: 'player' },
  { feature: 'Avg Wickets vs Opponent', importance: 0.142, category: 'opponent' },
  { feature: 'Playing Role', importance: 0.112, category: 'player' },
  { feature: 'Venue History', importance: 0.095, category: 'venue' },
  { feature: 'Player Age', importance: 0.067, category: 'player' },
  { feature: 'City', importance: 0.042, category: 'venue' },
  { feature: 'Opponent Team', importance: 0.031, category: 'opponent' },
  { feature: 'Player Team', importance: 0.018, category: 'match' },
  { feature: 'Batting Style', importance: 0.008, category: 'player' },
];

export const venues = [
  'Wankhede Stadium, Mumbai',
  'M. Chinnaswamy Stadium, Bangalore',
  'MA Chidambaram Stadium, Chennai',
  'Eden Gardens, Kolkata',
  'Arun Jaitley Stadium, Delhi',
  'Rajiv Gandhi Intl Stadium, Hyderabad',
  'Punjab Cricket Association IS Bindra Stadium, Mohali',
  'Sawai Mansingh Stadium, Jaipur',
  'Narendra Modi Stadium, Ahmedabad',
  'BRSABV Ekana Cricket Stadium, Lucknow',
];

export const modelMetrics = {
  runs: {
    mae: 12.45,
    mse: 298.34,
    r2: 0.4823,
    trainSize: 45678,
    testSize: 11420,
  },
  wickets: {
    mae: 0.67,
    mse: 0.89,
    r2: 0.3156,
    trainSize: 45678,
    testSize: 11420,
  },
};

export const platformStats = {
  playersAnalyzed: 847,
  matchesProcessed: 1024,
  ballsAnalyzed: 245678,
  predictionAccuracy: 82.4,
};
