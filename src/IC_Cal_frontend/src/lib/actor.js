import { Actor, HttpAgent } from "@dfinity/agent";

// When in development, we'll connect to the local replica
const host = "http://127.0.0.1:8000";
const agent = new HttpAgent({ host });

// Create an actor using the candid interface
export const calculatorActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: process.env.CANISTER_ID_IC_CAL_BACKEND,
});

// Fetch root key when in development
if (process.env.NODE_ENV !== "production") {
  agent.fetchRootKey().catch(console.error);
}
