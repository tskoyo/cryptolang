import type { Plugin } from "@elizaos/core";
import { createProposal } from "./actions/createProposal";
import { vote} from "./actions/vote";

export const daoPlugin: Plugin = {
    name: "dao",
    description: "Plugin designed to easily integrate with variou DAO systems",
    actions: [
        createProposal,
        vote
    ],
    evaluators: [],
    providers: [],
};

export default daoPlugin;
