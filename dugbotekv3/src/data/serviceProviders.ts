export interface ServiceProvider {
  id: string;
  name: string;
  logo: string;
  emoji: string;
  description: string;
  isInitiallyVisible: boolean;
  color: string;
  backgroundColor: string;
}

export const serviceProviders: ServiceProvider[] = [
  {
    id: "openai",
    name: "OpenAI",
    logo: "/src/assets/providers/openai.png",
    emoji: "🤖",
    description: "AI language models and GPT integration",
    isInitiallyVisible: true,
    color: "#10a37f",
    backgroundColor: "rgba(16, 163, 127, 0.1)"
  },
  {
    id: "google-gemini",
    name: "Google Gemini",
    logo: "/src/assets/providers/google gemini.png",
    emoji: "🧠",
    description: "Advanced AI model for multimodal tasks",
    isInitiallyVisible: true,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "mistral",
    name: "Mistral AI",
    logo: "/src/assets/providers/mistral.png",
    emoji: "🌪️",
    description: "Open-source AI language models",
    isInitiallyVisible: false,
    color: "#000000",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    logo: "/src/assets/providers/perplexityai.png",
    emoji: "🔍",
    description: "AI-powered search and analysis",
    isInitiallyVisible: true,
    color: "#5436DA",
    backgroundColor: "rgba(84, 54, 218, 0.1)"
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logo: "/src/assets/providers/Salesforce.com_logo.svg.webp",
    emoji: "☁️",
    description: "CRM and cloud solutions platform",
    isInitiallyVisible: true,
    color: "#00a1e0",
    backgroundColor: "rgba(0, 161, 224, 0.1)"
  },
  {
    id: "hubspot",
    name: "HubSpot",
    logo: "/src/assets/providers/hubspot_icon.jpeg.svg",
    emoji: "🎯",
    description: "Marketing and CRM automation",
    isInitiallyVisible: false,
    color: "#ff7a59",
    backgroundColor: "rgba(255, 122, 89, 0.1)"
  },
  {
    id: "dynamics-crm",
    name: "Dynamics 365",
    logo: "/src/assets/providers/Dynamics 360 CRM.png",
    emoji: "💼",
    description: "Microsoft's enterprise CRM solution",
    isInitiallyVisible: false,
    color: "#002050",
    backgroundColor: "rgba(0, 32, 80, 0.1)"
  },
  {
    id: "salesloft",
    name: "SalesLoft",
    logo: "/src/assets/providers/Salesloft.webp",
    emoji: "📈",
    description: "Sales engagement platform",
    isInitiallyVisible: true,
    color: "#00bfb3",
    backgroundColor: "rgba(0, 191, 179, 0.1)"
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    logo: "/src/assets/providers/google workspace.svg",
    emoji: "📝",
    description: "Integrated productivity suite",
    isInitiallyVisible: true,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    logo: "/src/assets/providers/googlesheets.svg",
    emoji: "📊",
    description: "Cloud-based spreadsheet solution",
    isInitiallyVisible: true,
    color: "#0f9d58",
    backgroundColor: "rgba(15, 157, 88, 0.1)"
  },
  {
    id: "google-docs",
    name: "Google Docs",
    logo: "/src/assets/providers/googledocs.png",
    emoji: "📄",
    description: "Collaborative document editing",
    isInitiallyVisible: false,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "notion",
    name: "Notion",
    logo: "/src/assets/providers/notion.jpeg",
    emoji: "📓",
    description: "All-in-one workspace platform",
    isInitiallyVisible: true,
    color: "#000000",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  {
    id: "airtable",
    name: "Airtable",
    logo: "/src/assets/providers/airtable.svg",
    emoji: "🗂️",
    description: "Flexible database and spreadsheet hybrid",
    isInitiallyVisible: false,
    color: "#2d7ff9",
    backgroundColor: "rgba(45, 127, 249, 0.1)"
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    logo: "/src/assets/providers/postgres.svg",
    emoji: "🐘",
    description: "Advanced open-source database",
    isInitiallyVisible: true,
    color: "#336791",
    backgroundColor: "rgba(51, 103, 145, 0.1)"
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: "/src/assets/providers/stripe.svg",
    emoji: "💳",
    description: "Payment processing platform",
    isInitiallyVisible: true,
    color: "#635bff",
    backgroundColor: "rgba(99, 91, 255, 0.1)"
  },
  {
    id: "github",
    name: "GitHub",
    logo: "/src/assets/providers/github.svg",
    emoji: "🐙",
    description: "Code hosting and collaboration",
    isInitiallyVisible: true,
    color: "#24292e",
    backgroundColor: "rgba(36, 41, 46, 0.1)"
  },
  {
    id: "google-maps",
    name: "Google Maps",
    logo: "/src/assets/providers/google maps.svg",
    emoji: "🗺️",
    description: "Location and mapping services",
    isInitiallyVisible: false,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "google-translate",
    name: "Google Translate",
    logo: "/src/assets/providers/google translate.png",
    emoji: "🌐",
    description: "Language translation service",
    isInitiallyVisible: false,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "youtube",
    name: "YouTube",
    logo: "/src/assets/providers/youtube.png",
    emoji: "▶️",
    description: "Video content platform",
    isInitiallyVisible: true,
    color: "#ff0000",
    backgroundColor: "rgba(255, 0, 0, 0.1)"
  },
  {
    id: "instagram",
    name: "Instagram",
    logo: "/src/assets/providers/instagram.svg",
    emoji: "📸",
    description: "Social media and photo sharing",
    isInitiallyVisible: false,
    color: "#e4405f",
    backgroundColor: "rgba(228, 64, 95, 0.1)"
  }
]; 