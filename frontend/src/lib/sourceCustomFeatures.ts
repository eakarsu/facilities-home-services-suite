import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Commercial Cleaning Operations Source Feature",
    "href": "/features/source-ai-commercial-cleaning-operations",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICommercialCleaningOperations: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Home Renovation Project Manager Source Feature",
    "href": "/features/source-ai-home-renovation-project-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIHomeRenovationProjectManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "8 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Alfresco Source Feature",
    "href": "/features/source-alfresco",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in alfresco: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "8 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Home Services Salesforce Source Feature",
    "href": "/features/source-home-services-salesforce",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in homeServices_salesforce: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "53 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Pest Control Source Feature",
    "href": "/features/source-pest-control",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in pestControl: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "11 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Repair Shop Source Feature",
    "href": "/features/source-repair-shop",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in repairShop: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "35 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Commercial Cleaning Operations Source Feature",
      "AI Home Renovation Project Manager Source Feature",
      "Alfresco Source Feature",
      "Home Services Salesforce Source Feature",
      "Pest Control Source Feature",
      "Repair Shop Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-commercial-cleaning-operations": {
    "title": "AI Commercial Cleaning Operations Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AICommercialCleaningOperations, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICommercialCleaningOperations: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "16",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-home-renovation-project-manager": {
    "title": "AI Home Renovation Project Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIHomeRenovationProjectManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIHomeRenovationProjectManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "8 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "8",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-alfresco": {
    "title": "Alfresco Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from alfresco, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in alfresco: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "8 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "8",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-home-services-salesforce": {
    "title": "Home Services Salesforce Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from homeServices_salesforce, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in homeServices_salesforce: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "53 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "53",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-pest-control": {
    "title": "Pest Control Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from pestControl, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in pestControl: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "11 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "11",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-repair-shop": {
    "title": "Repair Shop Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from repairShop, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in repairShop: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "35 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "35",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Commercial Cleaning Operations Source Feature": {
    "sourceOwners": [
      "AICommercialCleaningOperations"
    ],
    "operatingQueues": [
      "AI Insights Page",
      "Agentic Operations Coordinator Dispatching Crews M Page",
      "Gap0 Mounted Chat Style AI Endpoints Despite Ainew Js Page",
      "No AI Auto Quote Generator From Rfp Page"
    ],
    "outputs": [
      "AI Commercial Cleaning Operations merged workflow register",
      "AI Commercial Cleaning Operations API and route coverage map",
      "AI Commercial Cleaning Operations AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Home Renovation Project Manager Source Feature": {
    "sourceOwners": [
      "AIHomeRenovationProjectManager"
    ],
    "operatingQueues": [
      "Openrouter",
      "Dailylog",
      "Advanced AI Tools",
      "Cf Agentic Project Coordinator Scheduling I"
    ],
    "outputs": [
      "AI Home Renovation Project Manager merged workflow register",
      "AI Home Renovation Project Manager API and route coverage map",
      "AI Home Renovation Project Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Alfresco Source Feature": {
    "sourceOwners": [
      "alfresco"
    ],
    "operatingQueues": [
      "Package Lock",
      "Package",
      "Index",
      "Email"
    ],
    "outputs": [
      "Alfresco merged workflow register",
      "Alfresco API and route coverage map",
      "Alfresco AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Home Services Salesforce Source Feature": {
    "sourceOwners": [
      "homeServices_salesforce"
    ],
    "operatingQueues": [
      "Prompt:Prompt Home Services Trades AI",
      "Tool:Prompt Home Services Trades AI",
      "Tool:Tailwind.Config",
      "AI Features.Spec"
    ],
    "outputs": [
      "Home Services Salesforce merged workflow register",
      "Home Services Salesforce API and route coverage map",
      "Home Services Salesforce AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Pest Control Source Feature": {
    "sourceOwners": [
      "pestControl"
    ],
    "operatingQueues": [
      "Tailwind.Config",
      "Main",
      "AI Advisors",
      "AI Tools"
    ],
    "outputs": [
      "Pest Control merged workflow register",
      "Pest Control API and route coverage map",
      "Pest Control AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Repair Shop Source Feature": {
    "sourceOwners": [
      "repairShop"
    ],
    "operatingQueues": [
      "Tool:Tailwind.Config",
      "AI",
      "Email",
      "AI Diagnostic Chat"
    ],
    "outputs": [
      "Repair Shop merged workflow register",
      "Repair Shop API and route coverage map",
      "Repair Shop AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-commercial-cleaning-operations": {
    "workItems": [
      {
        "id": "source-ai-commercial-cleaning-operations-work-1",
        "item": "AI Insights Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIInsightsPage.js"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-work-2",
        "item": "Agentic Operations Coordinator Dispatching Crews M Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AgenticOperationsCoordinatorDispatchingCrewsMPage.js"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-work-3",
        "item": "Gap0 Mounted Chat Style AI Endpoints Despite Ainew Js Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/Gap0MountedChatStyleAiEndpointsDespiteAinewJsPage.js"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-work-4",
        "item": "No AI Auto Quote Generator From Rfp Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/NoAiAutoQuoteGeneratorFromRfpPage.js"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-work-5",
        "item": "No AI Dynamic Scheduling Vs Travel Time And Crew S Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/NoAiDynamicSchedulingVsTravelTimeAndCrewSPage.js"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-work-6",
        "item": "No AI Safety Incident Classifier Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/NoAiSafetyIncidentClassifierPage.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-commercial-cleaning-operations-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-commercial-cleaning-operations-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-commercial-cleaning-operations-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-commercial-cleaning-operations-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-commercial-cleaning-operations-log-1",
        "message": "Deep-merge feature generated from AICommercialCleaningOperations",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-home-renovation-project-manager": {
    "workItems": [
      {
        "id": "source-ai-home-renovation-project-manager-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/openrouter.js"
      },
      {
        "id": "source-ai-home-renovation-project-manager-work-2",
        "item": "Dailylog",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/dailylog.js"
      },
      {
        "id": "source-ai-home-renovation-project-manager-work-3",
        "item": "Advanced AI Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/AdvancedAITools.js"
      },
      {
        "id": "source-ai-home-renovation-project-manager-work-4",
        "item": "Cf Agentic Project Coordinator Scheduling I",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/CfAgenticProjectCoordinatorSchedulingI.jsx"
      },
      {
        "id": "source-ai-home-renovation-project-manager-work-5",
        "item": "Cf Change Order AI Advisor Estimating Costt",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/CfChangeOrderAiAdvisorEstimatingCostt.jsx"
      },
      {
        "id": "source-ai-home-renovation-project-manager-work-6",
        "item": "Cf Material Supply Chain Optimization Monit",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/CfMaterialSupplyChainOptimizationMonit.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-home-renovation-project-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-home-renovation-project-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-home-renovation-project-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-home-renovation-project-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-home-renovation-project-manager-log-1",
        "message": "Deep-merge feature generated from AIHomeRenovationProjectManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-home-renovation-project-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-alfresco": {
    "workItems": [
      {
        "id": "source-alfresco-work-1",
        "item": "Package Lock",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for alfresco-ecm/services/email/package-lock.json"
      },
      {
        "id": "source-alfresco-work-2",
        "item": "Package",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for alfresco-ecm/services/email/package.json"
      },
      {
        "id": "source-alfresco-work-3",
        "item": "Index",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for alfresco-ecm/services/email/src/index.ts"
      },
      {
        "id": "source-alfresco-work-4",
        "item": "Email",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for alfresco-ecm/services/auth/src/utils/email.ts"
      },
      {
        "id": "source-alfresco-work-5",
        "item": "Package Lock",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for alfresco-ecm/services/ai/package-lock.json"
      },
      {
        "id": "source-alfresco-work-6",
        "item": "Package",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for alfresco-ecm/services/ai/package.json"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-alfresco-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-alfresco-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-alfresco-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-alfresco-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-alfresco-log-1",
        "message": "Deep-merge feature generated from alfresco",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-alfresco-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-home-services-salesforce": {
    "workItems": [
      {
        "id": "source-home-services-salesforce-work-1",
        "item": "Prompt:Prompt Home Services Trades AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for prompt-home-services-trades-ai.md"
      },
      {
        "id": "source-home-services-salesforce-work-2",
        "item": "Tool:Prompt Home Services Trades AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for prompt-home-services-trades-ai.md"
      },
      {
        "id": "source-home-services-salesforce-work-3",
        "item": "Tool:Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tailwind.config.ts"
      },
      {
        "id": "source-home-services-salesforce-work-4",
        "item": "AI Features.Spec",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tests/ai-features.spec.ts"
      },
      {
        "id": "source-home-services-salesforce-work-5",
        "item": "AI Utils",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/ai-utils.ts"
      },
      {
        "id": "source-home-services-salesforce-work-6",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/ai.ts"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-home-services-salesforce-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-home-services-salesforce-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-home-services-salesforce-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-home-services-salesforce-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-home-services-salesforce-log-1",
        "message": "Deep-merge feature generated from homeServices_salesforce",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-home-services-salesforce-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-pest-control": {
    "workItems": [
      {
        "id": "source-pest-control-work-1",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/tailwind.config.js"
      },
      {
        "id": "source-pest-control-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-pest-control-work-3",
        "item": "AI Advisors",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAdvisors.jsx"
      },
      {
        "id": "source-pest-control-work-4",
        "item": "AI Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AITools.jsx"
      },
      {
        "id": "source-pest-control-work-5",
        "item": "Customer Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CustomerDetail.jsx"
      },
      {
        "id": "source-pest-control-work-6",
        "item": "Service Order Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/ServiceOrderDetail.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-pest-control-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-pest-control-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-pest-control-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-pest-control-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-pest-control-log-1",
        "message": "Deep-merge feature generated from pestControl",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-pest-control-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-repair-shop": {
    "workItems": [
      {
        "id": "source-repair-shop-work-1",
        "item": "Tool:Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tailwind.config.ts"
      },
      {
        "id": "source-repair-shop-work-2",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/ai.ts"
      },
      {
        "id": "source-repair-shop-work-3",
        "item": "Email",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/email.ts"
      },
      {
        "id": "source-repair-shop-work-4",
        "item": "AI Diagnostic Chat",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/components/AiDiagnosticChat.tsx"
      },
      {
        "id": "source-repair-shop-work-5",
        "item": "Detail Modal",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/components/DetailModal.tsx"
      },
      {
        "id": "source-repair-shop-work-6",
        "item": "Route",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/app/api/warranty-claims/route.ts"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-repair-shop-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-repair-shop-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-repair-shop-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-repair-shop-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-repair-shop-log-1",
        "message": "Deep-merge feature generated from repairShop",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-repair-shop-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-commercial-cleaning-operations": {
    "title": "AI Commercial Cleaning Operations Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-commercial-cleaning-operations-entity-1",
        "name": "AI Insights Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-entity-2",
        "name": "Agentic Operations Coordinator Dispatching Crews M Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-entity-3",
        "name": "Gap0 Mounted Chat Style AI Endpoints Despite Ainew Js Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-entity-4",
        "name": "No AI Auto Quote Generator From Rfp Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-commercial-cleaning-operations-entity-5",
        "name": "No AI Dynamic Scheduling Vs Travel Time And Crew S Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-home-renovation-project-manager": {
    "title": "AI Home Renovation Project Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-home-renovation-project-manager-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-home-renovation-project-manager-entity-2",
        "name": "Dailylog",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-home-renovation-project-manager-entity-3",
        "name": "Advanced AI Tools",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-home-renovation-project-manager-entity-4",
        "name": "Cf Agentic Project Coordinator Scheduling I",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-home-renovation-project-manager-entity-5",
        "name": "Cf Change Order AI Advisor Estimating Costt",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-alfresco": {
    "title": "Alfresco Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-alfresco-entity-1",
        "name": "Package Lock",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-alfresco-entity-2",
        "name": "Package",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-alfresco-entity-3",
        "name": "Index",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-alfresco-entity-4",
        "name": "Email",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-alfresco-entity-5",
        "name": "Package Lock",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-home-services-salesforce": {
    "title": "Home Services Salesforce Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-home-services-salesforce-entity-1",
        "name": "Prompt:Prompt Home Services Trades AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-home-services-salesforce-entity-2",
        "name": "Tool:Prompt Home Services Trades AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-home-services-salesforce-entity-3",
        "name": "Tool:Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-home-services-salesforce-entity-4",
        "name": "AI Features.Spec",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-home-services-salesforce-entity-5",
        "name": "AI Utils",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-pest-control": {
    "title": "Pest Control Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-pest-control-entity-1",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-pest-control-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-pest-control-entity-3",
        "name": "AI Advisors",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-pest-control-entity-4",
        "name": "AI Tools",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-pest-control-entity-5",
        "name": "Customer Detail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-repair-shop": {
    "title": "Repair Shop Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-repair-shop-entity-1",
        "name": "Tool:Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-repair-shop-entity-2",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-repair-shop-entity-3",
        "name": "Email",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-repair-shop-entity-4",
        "name": "AI Diagnostic Chat",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-repair-shop-entity-5",
        "name": "Detail Modal",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AICommercialCleaningOperations": "/features/source-ai-commercial-cleaning-operations",
  "AIHomeRenovationProjectManager": "/features/source-ai-home-renovation-project-manager",
  "alfresco": "/features/source-alfresco",
  "homeServices_salesforce": "/features/source-home-services-salesforce",
  "pestControl": "/features/source-pest-control",
  "repairShop": "/features/source-repair-shop"
};
