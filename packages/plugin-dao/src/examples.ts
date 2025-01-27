import { ActionExample } from "@elizaos/core";

export const daoPluginExamples: ActionExample[][] = [
  // Example 1: Creating a Proposal
  [
    {
      user: "{{user1}}",
      content: {
        text: "/create-proposal",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "What would you like to propose?",
      },
    },
    {
      user: "{{user1}}",
      content: {
        text: "Add 'cryptolang' to the official dictionary",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Creating proposal: 'Add cryptolang to dictionary'. Confirm?",
        action: "CREATE_PROPOSAL",
        metadata: {
          type: "dictionary_update",
          fee: "50 FT"
        }
      },
    },
    {
      user: "{{user1}}",
      content: {
        text: "Yes",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "✅ Proposal #42 created! Voting ends in 7 days.",
      },
    },
  ],

  // Example 2: Voting on a Proposal
  [
    {
      user: "{{user2}}",
      content: {
        text: "/vote",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Which proposal would you like to vote on?",
      },
    },
    {
      user: "{{user2}}",
      content: {
        text: "42",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Vote For (👍) or Against (👎) Proposal #42?",
        action: "VOTE",
        metadata: {
          proposal_id: 42,
          voting_power: "100 FT"
        }
      },
    },
    {
      user: "{{user2}}",
      content: {
        text: "👍",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "🗳️ Vote recorded! You've allocated 100 FT to FOR.",
      },
    },
  ],

  // Example 3: Listing Active Proposals
  [
    {
      user: "{{user3}}",
      content: {
        text: "/list-proposals",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Fetching active proposals...",
        action: "LIST_PROPOSALS",
        metadata: {
          filter: "active"
        }
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "📜 Active Proposals:\n\n" +
          "#42: Add 'cryptolang' (3 days left)\n" +
          "✅ 850 FT FOR • ❌ 120 FT AGAINST\n\n" +
          "#43: Change grammar rules (1 day left)\n" +
          "✅ 320 FT FOR • ❌ 500 FT AGAINST"
      },
    },
  ],

  // Example 4: Error Case (Invalid Proposal)
  [
    {
      user: "{{user1}}",
      content: {
        text: "/vote",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Which proposal would you like to vote on?",
      },
    },
    {
      user: "{{user1}}",
      content: {
        text: "999",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "❌ Proposal #999 not found. Use /list-proposals to see active ones.",
      },
    },
  ]
];