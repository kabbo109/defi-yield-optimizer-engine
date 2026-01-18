export function simulateStrategy(poolId, amount) {
  console.log("Simulating strategy for pool:", poolId);

  return {
    pool: poolId,
    deposit: amount,
    rewardRate: 0.15,
    durationDays: 30
  };
}
