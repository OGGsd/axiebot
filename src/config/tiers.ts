import { ChatTier } from '../types';

export const CHAT_TIERS: ChatTier[] = [
  { 
    key: "10", 
    label: "Basic Analysis (10 Credits)", 
    limit: 10, 
    password: null 
  },
  { 
    key: "30", 
    label: "Pro Analysis (30 Credits)", 
    limit: 30, 
    password: import.meta.env.VITE_PASSWORD_30 || "" 
  },
  { 
    key: "50", 
    label: "Elite Analysis (50 Credits)", 
    limit: 50, 
    password: import.meta.env.VITE_PASSWORD_50 || "" 
  }
];

export const STRIPE_URLS = {
  "30": import.meta.env.VITE_STRIPE_30_URL || "https://buy.stripe.com/aFa3cuagabhb78k4bacQU03",
  "50": import.meta.env.VITE_STRIPE_50_URL || "https://buy.stripe.com/bJe3cu5ZU0Cx50c5fecQU04"
};

export const WEBHOOK_URLS = [
  import.meta.env.VITE_WEBHOOK_URL || "https://asdfasfdsvd.app.n8n.cloud/webhook/2d83855b-305b-40fe-90d9-628f9b2de054",
  "https://asdfasfdsvd.app.n8n.cloud/webhook-test/2d83855b-305b-40fe-90d9-628f9b2de054",
  "https://asdfasfdsvd.app.n8n.cloud/webhook/9217edfc-1597-4fee-a29b-3aaef2acdc86",
  "https://asdfasfdsvd.app.n8n.cloud/webhook/ab8855b5-6d74-4111-a115-71e6f34a82f3",
  "https://asdfasfdsvd.app.n8n.cloud/webhook/8eb39d48-785a-4b8f-bd6a-4812e4639f29",
  "https://asdfasfdsvd.app.n8n.cloud/webhook/dba346f3-6f5d-47df-81ed-c3cb518181a5"
];

export const FIXED_AI_RESPONSE = "Your Analysis is being process and on its way to your E-mail Inbox! As we delve into advance search! It may take about 5-15 minutes for you to have the analysis in your Inbox!";

export const LOCAL_STORAGE_KEYS = {
  EMAIL: "forexBotEmail",
  COUNTS: "forexBotCounts", 
  HISTORY: "forexBotHistory",
  SESSION: "forexBotSession",
  FINGERPRINT: "forexBotFingerprint"
};