export function calculateAPY(strategy) {
  const yearlyReward = strategy.deposit * strategy.rewardRate;
  const apy = (yearlyReward / strategy.deposit) * 100;

  return apy.toFixed(2) + "%";
}
