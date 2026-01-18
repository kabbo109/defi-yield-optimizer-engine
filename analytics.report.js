export function generateReport(strategy, apy) {
  console.log("----- Yield Strategy Report -----");
  console.log("Pool:", strategy.pool);
  console.log("Deposit:", strategy.deposit);
  console.log("Reward Rate:", strategy.rewardRate);
  console.log("Duration (Days):", strategy.durationDays);
  console.log("Estimated APY:", apy);
  console.log("--------------------------------");
}
