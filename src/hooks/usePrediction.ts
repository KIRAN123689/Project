import { Player, DetailedPrediction } from "@/data/mockData";

export function generateDetailedPrediction(player: Player, opponent: string, venue: string): DetailedPrediction {
  // Simulate ML model prediction based on player stats and match conditions
  const isBatsman = player.role.includes('Batsman');
  const isBowler = player.role === 'Bowler';
  const isAllRounder = player.role === 'All-rounder';
  
  // Venue factors (simulated)
  const venueFactor = venue.includes('Mumbai') || venue.includes('Bangalore') ? 1.15 : 
                      venue.includes('Chennai') ? 0.9 : 1.0;
  
  // Form factor based on recent performance
  const formFactor = (player.recentForm.last3Runs / 40) * 0.3 + 0.7;
  
  // Batting prediction
  const baseBattingRuns = player.stats.battingAverage * formFactor * venueFactor;
  const battingVariance = (Math.random() - 0.5) * 20;
  const predictedRuns = Math.max(0, baseBattingRuns + battingVariance);
  const predictedStrikeRate = player.stats.battingStrikeRate * (0.9 + Math.random() * 0.2) * venueFactor;
  const boundaryProbability = Math.min(0.95, (player.stats.fours + player.stats.sixes) / player.stats.ballsFaced * 2.5);
  const battingConfidence = isBatsman ? 0.75 + Math.random() * 0.2 : isAllRounder ? 0.6 + Math.random() * 0.2 : 0.3 + Math.random() * 0.2;

  // Bowling prediction
  const baseWickets = player.stats.wicketsTaken > 0 ? 
    (player.recentForm.last3Wickets * formFactor + Math.random()) : 0;
  const predictedWickets = Math.max(0, baseWickets);
  const predictedEconomy = player.stats.bowlingEconomy > 0 ? 
    player.stats.bowlingEconomy * (0.85 + Math.random() * 0.3) : 10;
  const dotBallPercentage = player.stats.wicketsTaken > 0 ? 
    Math.min(0.5, 0.25 + (10 - player.stats.bowlingEconomy) * 0.03) : 0.15;
  const bowlingConfidence = isBowler ? 0.75 + Math.random() * 0.2 : isAllRounder ? 0.55 + Math.random() * 0.2 : 0.2 + Math.random() * 0.15;

  // Fielding prediction
  const catchProbability = 0.3 + Math.random() * 0.4;
  const runOutProbability = 0.1 + Math.random() * 0.2;
  const fieldingConfidence = 0.5 + Math.random() * 0.3;

  // Overall impact calculation
  const battingImpact = (predictedRuns / 50) * (isBatsman ? 0.4 : isAllRounder ? 0.25 : 0.1);
  const bowlingImpact = (predictedWickets / 3) * (isBowler ? 0.4 : isAllRounder ? 0.25 : 0.1);
  const fieldingImpact = catchProbability * 0.1;
  const overallImpact = Math.min(1, battingImpact + bowlingImpact + fieldingImpact + 0.2);
  
  // Top performer probability
  const topPerformerProbability = Math.min(0.95, 
    (predictedRuns > 40 ? 0.3 : predictedRuns / 133) + 
    (predictedWickets > 2 ? 0.3 : predictedWickets * 0.15) +
    Math.random() * 0.2
  );

  return {
    batting: {
      predictedRuns,
      predictedStrikeRate,
      boundaryProbability,
      confidence: battingConfidence,
    },
    bowling: {
      predictedWickets,
      predictedEconomy,
      dotBallPercentage,
      confidence: bowlingConfidence,
    },
    fielding: {
      catchProbability,
      runOutProbability,
      confidence: fieldingConfidence,
    },
    overallImpact,
    topPerformerProbability,
  };
}