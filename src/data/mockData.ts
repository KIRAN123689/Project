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

export interface FieldingStats {
  catches: number;
  runOuts: number;
  stumpings: number;
}

export interface DetailedPrediction {
  batting: {
    predictedRuns: number;
    predictedStrikeRate: number;
    boundaryProbability: number;
    confidence: number;
  };
  bowling: {
    predictedWickets: number;
    predictedEconomy: number;
    dotBallPercentage: number;
    confidence: number;
  };
  fielding: {
    catchProbability: number;
    runOutProbability: number;
    confidence: number;
  };
  overallImpact: number;
  topPerformerProbability: number;
}

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
  {
    id: '11',
    name: 'Shubman Gill',
    team: 'gt',
    role: 'Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm off break',
    age: 24,
    nationality: 'India',
    stats: {
      totalRuns: 1851,
      ballsFaced: 1423,
      fours: 178,
      sixes: 56,
      dismissals: 52,
      battingAverage: 35.6,
      battingStrikeRate: 130.1,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 48.7, last3Wickets: 0 },
  },
  {
    id: '12',
    name: 'Rishabh Pant',
    team: 'dc',
    role: 'Wicketkeeper Batsman',
    battingStyle: 'Left-handed',
    bowlingStyle: 'Right-arm off break',
    age: 26,
    nationality: 'India',
    stats: {
      totalRuns: 2838,
      ballsFaced: 1987,
      fours: 234,
      sixes: 132,
      dismissals: 94,
      battingAverage: 30.2,
      battingStrikeRate: 142.8,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 42.3, last3Wickets: 0 },
  },
  {
    id: '13',
    name: 'Mohammed Shami',
    team: 'gt',
    role: 'Bowler',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm fast medium',
    age: 33,
    nationality: 'India',
    stats: {
      totalRuns: 112,
      ballsFaced: 156,
      fours: 12,
      sixes: 3,
      dismissals: 45,
      battingAverage: 2.49,
      battingStrikeRate: 71.8,
      wicketsTaken: 95,
      runsConceded: 2134,
      ballsBowled: 1524,
      bowlingAverage: 22.5,
      bowlingEconomy: 8.4,
    },
    recentForm: { last3Runs: 5.0, last3Wickets: 2.0 },
  },
  {
    id: '14',
    name: 'Faf du Plessis',
    team: 'rcb',
    role: 'Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm leg break',
    age: 39,
    nationality: 'South Africa',
    stats: {
      totalRuns: 3403,
      ballsFaced: 2567,
      fours: 345,
      sixes: 112,
      dismissals: 112,
      battingAverage: 30.4,
      battingStrikeRate: 132.6,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 38.3, last3Wickets: 0 },
  },
  {
    id: '15',
    name: 'Andre Russell',
    team: 'kkr',
    role: 'All-rounder',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm fast',
    age: 35,
    nationality: 'West Indies',
    stats: {
      totalRuns: 2435,
      ballsFaced: 1287,
      fours: 134,
      sixes: 212,
      dismissals: 87,
      battingAverage: 28.0,
      battingStrikeRate: 189.2,
      wicketsTaken: 89,
      runsConceded: 2234,
      ballsBowled: 1245,
      bowlingAverage: 25.1,
      bowlingEconomy: 10.8,
    },
    recentForm: { last3Runs: 32.0, last3Wickets: 1.3 },
  },
  {
    id: '16',
    name: 'Ruturaj Gaikwad',
    team: 'csk',
    role: 'Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm off break',
    age: 27,
    nationality: 'India',
    stats: {
      totalRuns: 2156,
      ballsFaced: 1678,
      fours: 212,
      sixes: 67,
      dismissals: 64,
      battingAverage: 33.7,
      battingStrikeRate: 128.5,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 44.0, last3Wickets: 0 },
  },
  {
    id: '17',
    name: 'David Warner',
    team: 'dc',
    role: 'Batsman',
    battingStyle: 'Left-handed',
    bowlingStyle: 'Right-arm leg break',
    age: 37,
    nationality: 'Australia',
    stats: {
      totalRuns: 6397,
      ballsFaced: 4789,
      fours: 678,
      sixes: 234,
      dismissals: 178,
      battingAverage: 35.9,
      battingStrikeRate: 133.6,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 36.7, last3Wickets: 0 },
  },
  {
    id: '18',
    name: 'Jos Buttler',
    team: 'rr',
    role: 'Wicketkeeper Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm medium',
    age: 33,
    nationality: 'England',
    stats: {
      totalRuns: 3178,
      ballsFaced: 2234,
      fours: 289,
      sixes: 189,
      dismissals: 94,
      battingAverage: 33.8,
      battingStrikeRate: 142.3,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 51.3, last3Wickets: 0 },
  },
  {
    id: '19',
    name: 'Trent Boult',
    team: 'rr',
    role: 'Bowler',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Left-arm fast',
    age: 34,
    nationality: 'New Zealand',
    stats: {
      totalRuns: 67,
      ballsFaced: 98,
      fours: 8,
      sixes: 1,
      dismissals: 32,
      battingAverage: 2.1,
      battingStrikeRate: 68.4,
      wicketsTaken: 87,
      runsConceded: 1956,
      ballsBowled: 1234,
      bowlingAverage: 22.5,
      bowlingEconomy: 9.5,
    },
    recentForm: { last3Runs: 2.0, last3Wickets: 1.7 },
  },
  {
    id: '20',
    name: 'Shreyas Iyer',
    team: 'kkr',
    role: 'Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm off break',
    age: 29,
    nationality: 'India',
    stats: {
      totalRuns: 2776,
      ballsFaced: 2134,
      fours: 234,
      sixes: 98,
      dismissals: 94,
      battingAverage: 29.5,
      battingStrikeRate: 130.1,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 35.7, last3Wickets: 0 },
  },
  {
    id: '21',
    name: 'Pat Cummins',
    team: 'srh',
    role: 'All-rounder',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm fast',
    age: 30,
    nationality: 'Australia',
    stats: {
      totalRuns: 234,
      ballsFaced: 178,
      fours: 18,
      sixes: 12,
      dismissals: 34,
      battingAverage: 6.9,
      battingStrikeRate: 131.5,
      wicketsTaken: 45,
      runsConceded: 1234,
      ballsBowled: 756,
      bowlingAverage: 27.4,
      bowlingEconomy: 9.8,
    },
    recentForm: { last3Runs: 12.0, last3Wickets: 1.7 },
  },
  {
    id: '22',
    name: 'Heinrich Klaasen',
    team: 'srh',
    role: 'Wicketkeeper Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm off break',
    age: 32,
    nationality: 'South Africa',
    stats: {
      totalRuns: 567,
      ballsFaced: 378,
      fours: 45,
      sixes: 34,
      dismissals: 18,
      battingAverage: 31.5,
      battingStrikeRate: 150.0,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 45.3, last3Wickets: 0 },
  },
  {
    id: '23',
    name: 'Mayank Yadav',
    team: 'lsg',
    role: 'Bowler',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm fast',
    age: 21,
    nationality: 'India',
    stats: {
      totalRuns: 12,
      ballsFaced: 18,
      fours: 1,
      sixes: 0,
      dismissals: 5,
      battingAverage: 2.4,
      battingStrikeRate: 66.7,
      wicketsTaken: 21,
      runsConceded: 387,
      ballsBowled: 234,
      bowlingAverage: 18.4,
      bowlingEconomy: 9.9,
    },
    recentForm: { last3Runs: 0, last3Wickets: 2.7 },
  },
  {
    id: '24',
    name: 'Sanju Samson',
    team: 'rr',
    role: 'Wicketkeeper Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm off break',
    age: 29,
    nationality: 'India',
    stats: {
      totalRuns: 3578,
      ballsFaced: 2567,
      fours: 312,
      sixes: 178,
      dismissals: 118,
      battingAverage: 30.3,
      battingStrikeRate: 139.4,
      wicketsTaken: 0,
      runsConceded: 0,
      ballsBowled: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
    },
    recentForm: { last3Runs: 38.7, last3Wickets: 0 },
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

// Real IPL Data from Python Analysis (2016-2025)

// Toss Impact Analysis - Field First vs Bat First win percentages
export interface TossImpactData {
  decision: string;
  winPercentage: number;
  matchCount: number;
}

export const tossImpactData: TossImpactData[] = [
  { decision: 'Field First', winPercentage: 54.40, matchCount: 512 },
  { decision: 'Bat First', winPercentage: 46.21, matchCount: 478 },
];

// Top Teams by Total Wins from Match_Info analysis
export interface TeamWinsData {
  teamName: string;
  teamId: string;
  wins: number;
  winPercentage: number;
}

export const teamWinsData: TeamWinsData[] = [
  { teamName: 'Mumbai Indians', teamId: 'mi', wins: 151, winPercentage: 58.3 },
  { teamName: 'Chennai Super Kings', teamId: 'csk', wins: 142, winPercentage: 56.1 },
  { teamName: 'Kolkata Knight Riders', teamId: 'kkr', wins: 135, winPercentage: 52.7 },
  { teamName: 'Royal Challengers Bangalore', teamId: 'rcb', wins: 118, winPercentage: 48.4 },
  { teamName: 'Delhi Capitals', teamId: 'dc', wins: 105, winPercentage: 47.2 },
  { teamName: 'Rajasthan Royals', teamId: 'rr', wins: 98, winPercentage: 45.8 },
  { teamName: 'Punjab Kings', teamId: 'pbks', wins: 92, winPercentage: 43.1 },
  { teamName: 'Sunrisers Hyderabad', teamId: 'srh', wins: 87, winPercentage: 46.5 },
  { teamName: 'Gujarat Titans', teamId: 'gt', wins: 34, winPercentage: 68.0 },
  { teamName: 'Lucknow Super Giants', teamId: 'lsg', wins: 28, winPercentage: 56.0 },
];

// Player of the Match Award Winners from Match_Info analysis
export interface PlayerOfMatchData {
  playerName: string;
  playerId: string;
  awards: number;
  team: string;
}

export const playerOfMatchData: PlayerOfMatchData[] = [
  { playerName: 'AB de Villiers', playerId: 'abd', awards: 25, team: 'rcb' },
  { playerName: 'Chris Gayle', playerId: 'gayle', awards: 22, team: 'pbks' },
  { playerName: 'Rohit Sharma', playerId: '2', awards: 21, team: 'mi' },
  { playerName: 'David Warner', playerId: '17', awards: 20, team: 'dc' },
  { playerName: 'Virat Kohli', playerId: '1', awards: 19, team: 'rcb' },
  { playerName: 'MS Dhoni', playerId: '3', awards: 18, team: 'csk' },
  { playerName: 'Shane Watson', playerId: 'watson', awards: 17, team: 'csk' },
  { playerName: 'Suresh Raina', playerId: 'raina', awards: 16, team: 'csk' },
  { playerName: 'KL Rahul', playerId: '8', awards: 15, team: 'lsg' },
  { playerName: 'Jos Buttler', playerId: '18', awards: 14, team: 'rr' },
];

// Key Insights from Analysis
export const keyInsights = {
  tossAdvantage: {
    title: 'Toss Impact Analysis',
    description: 'Teams winning the toss and choosing to field first have a 54.40% win rate, compared to 46.21% when batting first.',
    insight: 'Strategic advantage in chasing targets in T20 format',
  },
  topTeam: {
    title: 'Most Successful Team',
    description: 'Mumbai Indians lead with 151 wins, followed by Chennai Super Kings (142) and Kolkata Knight Riders (135).',
    insight: 'Consistent performance across seasons defines champion teams',
  },
  topPerformer: {
    title: 'Impact Player Analysis',
    description: 'AB de Villiers holds the record with 25 Player of the Match awards, showcasing match-winning abilities.',
    insight: 'Individual brilliance often decides crucial matches',
  },
};

// Match condition factors for prediction model
export interface VenueStats {
  venue: string;
  avgFirstInningsScore: number;
  avgSecondInningsScore: number;
  spinFriendly: number; // 0-1 scale
  paceFriendly: number; // 0-1 scale
  totalMatches: number;
}

export const venueStats: VenueStats[] = [
  { venue: 'Wankhede Stadium, Mumbai', avgFirstInningsScore: 178, avgSecondInningsScore: 172, spinFriendly: 0.3, paceFriendly: 0.7, totalMatches: 98 },
  { venue: 'M. Chinnaswamy Stadium, Bangalore', avgFirstInningsScore: 185, avgSecondInningsScore: 179, spinFriendly: 0.2, paceFriendly: 0.6, totalMatches: 89 },
  { venue: 'MA Chidambaram Stadium, Chennai', avgFirstInningsScore: 158, avgSecondInningsScore: 152, spinFriendly: 0.8, paceFriendly: 0.3, totalMatches: 95 },
  { venue: 'Eden Gardens, Kolkata', avgFirstInningsScore: 168, avgSecondInningsScore: 162, spinFriendly: 0.6, paceFriendly: 0.5, totalMatches: 87 },
  { venue: 'Arun Jaitley Stadium, Delhi', avgFirstInningsScore: 172, avgSecondInningsScore: 166, spinFriendly: 0.5, paceFriendly: 0.5, totalMatches: 78 },
  { venue: 'Rajiv Gandhi Intl Stadium, Hyderabad', avgFirstInningsScore: 165, avgSecondInningsScore: 159, spinFriendly: 0.4, paceFriendly: 0.6, totalMatches: 72 },
  { venue: 'Punjab Cricket Association IS Bindra Stadium, Mohali', avgFirstInningsScore: 175, avgSecondInningsScore: 168, spinFriendly: 0.3, paceFriendly: 0.7, totalMatches: 68 },
  { venue: 'Sawai Mansingh Stadium, Jaipur', avgFirstInningsScore: 169, avgSecondInningsScore: 163, spinFriendly: 0.5, paceFriendly: 0.5, totalMatches: 54 },
  { venue: 'Narendra Modi Stadium, Ahmedabad', avgFirstInningsScore: 174, avgSecondInningsScore: 168, spinFriendly: 0.4, paceFriendly: 0.6, totalMatches: 45 },
  { venue: 'BRSABV Ekana Cricket Stadium, Lucknow', avgFirstInningsScore: 171, avgSecondInningsScore: 165, spinFriendly: 0.5, paceFriendly: 0.5, totalMatches: 32 },
];
