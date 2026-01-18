export function analyzeRisk(pool) {
  if (pool.risk === "Low") return "Conservative";
  if (pool.risk === "Medium") return "Balanced";
  return "Aggressive";
}
