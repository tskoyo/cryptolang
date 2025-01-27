import { Action, IAgentRuntime, Memory, State } from "@elizaos/core";
import { daoPluginExamples } from "../examples.ts";

export const createProposal: Action = {
    name: "createProposal",
    description: "Create proposal",
    validate: async (runtime: IAgentRuntime, message: Memory) => {},
    handler: async (runtime: IAgentRuntime, message: Memory, state?: State) => {},
    examples: daoPluginExamples as ActionExample[][],
}