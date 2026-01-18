export function trackRewards(deposit, rate, days) {
  const rewards = (deposit * rate * days) / 365;
  return rewards.toFixed(4);
}
