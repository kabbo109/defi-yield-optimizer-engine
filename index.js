import { connectRPC } from "./rpc.client.js";
import { simulateStrategy } from "./strategy.simulator.js";
import { calculateAPY } from "./yield.calculator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("DeFi Yield Optimizer Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const strategy = simulateStrategy("POOL_A", 1000);
const apy = calculateAPY(strategy);

generateReport(strategy, apy);
