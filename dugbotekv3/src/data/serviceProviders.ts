import openaiLogo from '../assets/providers/openai.png';
import geminiLogo from '../assets/providers/google gemini.png';
import mistralLogo from '../assets/providers/mistral.png';
import perplexityLogo from '../assets/providers/perplexityai.png';
import salesforceLogo from '../assets/providers/Salesforce.com_logo.svg.webp';
import hubspotLogo from '../assets/providers/hubspot_icon.jpeg.svg';
import dynamicsLogo from '../assets/providers/Dynamics 360 CRM.png';
import salesloftLogo from '../assets/providers/Salesloft.webp';
import workspaceLogo from '../assets/providers/google workspace.svg';
import sheetsLogo from '../assets/providers/googlesheets.svg';
import docsLogo from '../assets/providers/googledocs.png';
import notionLogo from '../assets/providers/notion.jpeg';
import airtableLogo from '../assets/providers/airtable.svg';
import postgresLogo from '../assets/providers/postgres.svg';
import stripeLogo from '../assets/providers/stripe.svg';
import githubLogo from '../assets/providers/github.svg';
import mapsLogo from '../assets/providers/google maps.svg';
import translateLogo from '../assets/providers/google translate.png';
import youtubeLogo from '../assets/providers/youtube.png';
import instagramLogo from '../assets/providers/instagram.svg';

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
    logo: openaiLogo,
    emoji: "🤖",
    description: "AI language models and GPT integration",
    isInitiallyVisible: true,
    color: "#10a37f",
    backgroundColor: "rgba(16, 163, 127, 0.1)"
  },
  {
    id: "google-gemini",
    name: "Google Gemini",
    logo: geminiLogo,
    emoji: "🧠",
    description: "Advanced AI model for multimodal tasks",
    isInitiallyVisible: true,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "mistral",
    name: "Mistral AI",
    logo: mistralLogo,
    emoji: "🌪️",
    description: "Open-source AI language models",
    isInitiallyVisible: false,
    color: "#000000",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    logo: perplexityLogo,
    emoji: "🔍",
    description: "AI-powered search and analysis",
    isInitiallyVisible: true,
    color: "#5436DA",
    backgroundColor: "rgba(84, 54, 218, 0.1)"
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logo: salesforceLogo,
    emoji: "☁️",
    description: "CRM and cloud solutions platform",
    isInitiallyVisible: true,
    color: "#00a1e0",
    backgroundColor: "rgba(0, 161, 224, 0.1)"
  },
  {
    id: "hubspot",
    name: "HubSpot",
    logo: hubspotLogo,
    emoji: "🎯",
    description: "Marketing and CRM automation",
    isInitiallyVisible: false,
    color: "#ff7a59",
    backgroundColor: "rgba(255, 122, 89, 0.1)"
  },
  {
    id: "dynamics-crm",
    name: "Dynamics 365",
    logo: dynamicsLogo,
    emoji: "��",
    description: "Microsoft's enterprise CRM solution",
    isInitiallyVisible: false,
    color: "#002050",
    backgroundColor: "rgba(0, 32, 80, 0.1)"
  },
  {
    id: "salesloft",
    name: "SalesLoft",
    logo: salesloftLogo,
    emoji: "📈",
    description: "Sales engagement platform",
    isInitiallyVisible: true,
    color: "#00bfb3",
    backgroundColor: "rgba(0, 191, 179, 0.1)"
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    logo: workspaceLogo,
    emoji: "��",
    description: "Integrated productivity suite",
    isInitiallyVisible: true,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    logo: sheetsLogo,
    emoji: "��",
    description: "Cloud-based spreadsheet solution",
    isInitiallyVisible: true,
    color: "#0f9d58",
    backgroundColor: "rgba(15, 157, 88, 0.1)"
  },
  {
    id: "google-docs",
    name: "Google Docs",
    logo: docsLogo,
    emoji: "📄",
    description: "Collaborative document editing",
    isInitiallyVisible: false,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "notion",
    name: "Notion",
    logo: notionLogo,
    emoji: "📓",
    description: "All-in-one workspace platform",
    isInitiallyVisible: true,
    color: "#000000",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  {
    id: "airtable",
    name: "Airtable",
    logo: airtableLogo,
    emoji: "🗂️",
    description: "Flexible database and spreadsheet hybrid",
    isInitiallyVisible: false,
    color: "#2d7ff9",
    backgroundColor: "rgba(45, 127, 249, 0.1)"
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    logo: postgresLogo,
    emoji: "��",
    description: "Advanced open-source database",
    isInitiallyVisible: true,
    color: "#336791",
    backgroundColor: "rgba(51, 103, 145, 0.1)"
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: stripeLogo,
    emoji: "��",
    description: "Payment processing platform",
    isInitiallyVisible: true,
    color: "#635bff",
    backgroundColor: "rgba(99, 91, 255, 0.1)"
  },
  {
    id: "github",
    name: "GitHub",
    logo: githubLogo,
    emoji: "��",
    description: "Code hosting and collaboration",
    isInitiallyVisible: true,
    color: "#24292e",
    backgroundColor: "rgba(36, 41, 46, 0.1)"
  },
  {
    id: "google-maps",
    name: "Google Maps",
    logo: mapsLogo,
    emoji: "��️",
    description: "Location and mapping services",
    isInitiallyVisible: false,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "google-translate",
    name: "Google Translate",
    logo: translateLogo,
    emoji: "🌐",
    description: "Language translation service",
    isInitiallyVisible: false,
    color: "#4285f4",
    backgroundColor: "rgba(66, 133, 244, 0.1)"
  },
  {
    id: "youtube",
    name: "YouTube",
    logo: youtubeLogo,
    emoji: "▶️",
    description: "Video content platform",
    isInitiallyVisible: true,
    color: "#ff0000",
    backgroundColor: "rgba(255, 0, 0, 0.1)"
  },
  {
    id: "instagram",
    name: "Instagram",
    logo: instagramLogo,
    emoji: "📸",
    description: "Social media and photo sharing",
    isInitiallyVisible: false,
    color: "#e4405f",
    backgroundColor: "rgba(228, 64, 95, 0.1)"
  }
]; 