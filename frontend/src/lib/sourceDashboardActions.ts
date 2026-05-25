export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AICommercialCleaningOperations",
      "AIHomeRenovationProjectManager",
      "alfresco",
      "homeServices_salesforce",
      "pestControl",
      "repairShop"
    ],
    "examples": [
      "alfresco-ecm/apps/web/components/DetailPanel",
      "alfresco-ecm/services/ai/package",
      "alfresco-ecm/services/ai/package-lock",
      "alfresco-ecm/services/ai/src/index",
      "alfresco-ecm/services/auth/src/utils/email",
      "alfresco-ecm/services/email/package"
    ],
    "count": 6
  }
];
