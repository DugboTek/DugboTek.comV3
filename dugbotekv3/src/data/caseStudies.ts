interface Node {
  id: string;
  title: string;
  description: string;
  type: 'api' | 'database' | 'ai' | 'process' | 'trigger' | 'output';
  position: {x: number, y: number}
  connections: string[]
  style?: {
    backgroundColor?: string;
    borderColor?: string;
  }
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challengeDescription: string;
  solution: string;
  results: {
    timeReduction: string;
    costSavings: string;
    qualityImprovement: string;
  };
  timeframe: string;
  roi: string;
  nodes: Node[]
}

export const INDUSTRY_COLORS = {
  healthcare: {
    primary: '#0EA5E9',
    secondary: '#E0F2FE'
  },
  insurance: {
    primary: '#10B981',
    secondary: '#ECFDF5'
  },
  manufacturing: {
    primary: '#8B5CF6',
    secondary: '#EEF2FF'
  }
};

export const caseStudies: CaseStudy[] = [
  {
    id: "order-automation",
    title: "Order Processing Automation",
    industry: "manufacturing",
    challengeDescription: "Manual order entry taking 3+ hours daily",
    solution: "Automated PDF parsing and system integration",
    results: {
      timeReduction: "90%",
      costSavings: "$50,000 annually",
      qualityImprovement: "99.9%"
    },
    timeframe: "1 week",
    roi: "200%",
    nodes: [
      {
        id: "email-intake",
        title: "Email Order Intake",
        description: "Monitor inbox for new PDF orders",
        type: "trigger",
        position: {x: 100, y: 100},
        connections: ["pdf-parser"],
        style: {
          backgroundColor: '#FEF2F2',
          borderColor: '#EF4444'
        }
      },
      {
        id: "pdf-parser",
        title: "PDF Parser",
        description: "Extract order details using AI",
        type: "ai",
        position: {x: 300, y: 100},
        connections: ["validation"],
        style: {
          backgroundColor: '#F5F3FF',
          borderColor: '#8B5CF6'
        }
      },
      {
        id: "validation",
        title: "Data Validation",
        description: "Verify order details and format",
        type: "process",
        position: {x: 500, y: 100},
        connections: ["erp-system"],
        style: {
          backgroundColor: '#FEF3C7',
          borderColor: '#F59E0B'
        }
      },
      {
        id: "erp-system",
        title: "ERP Integration",
        description: "Create order in ERP system",
        type: "api",
        position: {x: 700, y: 100},
        connections: ["confirmation"],
        style: {
          backgroundColor: '#DBEAFE',
          borderColor: '#3B82F6'
        }
      },
      {
        id: "confirmation",
        title: "Order Confirmation",
        description: "Send confirmation to customer",
        type: "output",
        position: {x: 900, y: 100},
        connections: [],
        style: {
          backgroundColor: '#E0E7FF',
          borderColor: '#6366F1'
        }
      }
    ]
  },
  {
    id: "claims-processing",
    title: "Insurance Claims Processing",
    industry: "insurance",
    challengeDescription: "Complex claims taking days to process",
    solution: "AI-powered claims analysis and processing",
    results: {
      timeReduction: "85%",
      costSavings: "$100,000 annually",
      qualityImprovement: "95%"
    },
    timeframe: "2 weeks",
    roi: "180%",
    nodes: [
      {
        id: "claim-intake",
        title: "Claims Intake",
        description: "Receive digital claim forms",
        type: "trigger",
        position: {x: 100, y: 100},
        connections: ["document-analysis"],
        style: {
          backgroundColor: '#FEF2F2',
          borderColor: '#EF4444'
        }
      },
      {
        id: "document-analysis",
        title: "Document Analysis",
        description: "AI analysis of claim documents",
        type: "ai",
        position: {x: 300, y: 100},
        connections: ["risk-assessment"],
        style: {
          backgroundColor: '#F5F3FF',
          borderColor: '#8B5CF6'
        }
      },
      {
        id: "risk-assessment",
        title: "Risk Assessment",
        description: "Automated risk scoring",
        type: "process",
        position: {x: 500, y: 100},
        connections: ["payment-processing"],
        style: {
          backgroundColor: '#FEF3C7',
          borderColor: '#F59E0B'
        }
      },
      {
        id: "payment-processing",
        title: "Payment Processing",
        description: "Process approved claims",
        type: "api",
        position: {x: 700, y: 100},
        connections: ["notification"],
        style: {
          backgroundColor: '#DBEAFE',
          borderColor: '#3B82F6'
        }
      },
      {
        id: "notification",
        title: "Client Notification",
        description: "Send status updates",
        type: "output",
        position: {x: 900, y: 100},
        connections: [],
        style: {
          backgroundColor: '#E0E7FF',
          borderColor: '#6366F1'
        }
      }
    ]
  },
  {
    id: "patient-scheduling",
    title: "Patient Scheduling Optimization",
    industry: "healthcare",
    challengeDescription: "Inefficient manual scheduling causing long wait times",
    solution: "AI-driven scheduling optimization",
    results: {
      timeReduction: "75%",
      costSavings: "$75,000 annually",
      qualityImprovement: "90%"
    },
    timeframe: "3 weeks",
    roi: "150%",
    nodes: [
      {
        id: "appointment-request",
        title: "Appointment Request",
        description: "Patient requests appointment",
        type: "trigger",
        position: {x: 100, y: 100},
        connections: ["availability-check"],
        style: {
          backgroundColor: '#FEF2F2',
          borderColor: '#EF4444'
        }
      },
      {
        id: "availability-check",
        title: "Availability Analysis",
        description: "AI optimization of schedule",
        type: "ai",
        position: {x: 300, y: 100},
        connections: ["scheduling"],
        style: {
          backgroundColor: '#F5F3FF',
          borderColor: '#8B5CF6'
        }
      },
      {
        id: "scheduling",
        title: "Scheduling",
        description: "Book optimal time slot",
        type: "process",
        position: {x: 500, y: 100},
        connections: ["ehr-update"],
        style: {
          backgroundColor: '#FEF3C7',
          borderColor: '#F59E0B'
        }
      },
      {
        id: "ehr-update",
        title: "EHR Update",
        description: "Update patient records",
        type: "api",
        position: {x: 700, y: 100},
        connections: ["confirmation"],
        style: {
          backgroundColor: '#DBEAFE',
          borderColor: '#3B82F6'
        }
      },
      {
        id: "confirmation",
        title: "Appointment Confirmation",
        description: "Send confirmation details",
        type: "output",
        position: {x: 900, y: 100},
        connections: [],
        style: {
          backgroundColor: '#E0E7FF',
          borderColor: '#6366F1'
        }
      }
    ]
  }
]; 