export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-commercial-cleaning-operations-ai-insights-page-1xd9fc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInsightsPage.js"
    }
  ],
  "ai-commercial-cleaning-operations-agentic-operations-coordinator-dispatching-crews-m-page-hfjz5s-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Operations Coordinator Dispatching Crews M Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticOperationsCoordinatorDispatchingCrewsMPage.js"
    }
  ],
  "ai-commercial-cleaning-operations-gap0-mounted-chat-style-ai-endpoints-despite-ainew-js-page-1ino9l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap0 Mounted Chat Style AI Endpoints Despite Ainew Js Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Gap0MountedChatStyleAiEndpointsDespiteAinewJsPage.js"
    }
  ],
  "ai-commercial-cleaning-operations-no-ai-auto-quote-generator-from-rfp-page-191a8h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Auto Quote Generator From Rfp Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiAutoQuoteGeneratorFromRfpPage.js"
    }
  ],
  "ai-commercial-cleaning-operations-no-ai-dynamic-scheduling-vs-travel-time-and-crew-s-page-1t6ivh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Dynamic Scheduling Vs Travel Time And Crew S Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiDynamicSchedulingVsTravelTimeAndCrewSPage.js"
    }
  ],
  "ai-commercial-cleaning-operations-no-ai-safety-incident-classifier-page-z2min2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Safety Incident Classifier Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiSafetyIncidentClassifierPage.js"
    }
  ],
  "ai-commercial-cleaning-operations-no-ai-vision-based-pre-post-clean-verification-fro-page-bl5h8m-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Vision Based Pre Post Clean Verification Fro Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiVisionBasedPrePostCleanVerificationFroPage.js"
    }
  ],
  "ai-commercial-cleaning-operations-ai-new-7q6oy0-exact-ai": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "chemicals",
      "label": "Chemicals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "crew_id",
      "label": "Crew Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "days = 60",
      "label": "Days = 60",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "horizon_days = 30",
      "label": "Horizon Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "inspection_id",
      "label": "Inspection Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "location_id",
      "label": "Location Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "location_name",
      "label": "Location Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "period_days = 30",
      "label": "Period Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-commercial-cleaning-operations-gap-0-mounted-chat-style-ai-endpoints-despite-ainew-js-q4b4rz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap 0 Mounted Chat Style AI Endpoints Despite Ainew Js source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_0_mounted_chat_style_ai_endpoints_despite_ainew_js.js"
    }
  ],
  "ai-commercial-cleaning-operations-gap-no-ai-auto-quote-generator-from-rfp-13c9dt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Auto Quote Generator From Rfp source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_auto_quote_generator_from_rfp.js"
    }
  ],
  "ai-commercial-cleaning-operations-gap-no-ai-dynamic-scheduling-vs-travel-time-and-crew-s-1n6i5r-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Dynamic Scheduling Vs Travel Time And Crew S source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_dynamic_scheduling_vs_travel_time_and_crew_s.js"
    }
  ],
  "ai-commercial-cleaning-operations-gap-no-ai-safety-incident-classifier-vx7xzd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Safety Incident Classifier source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_safety_incident_classifier.js"
    }
  ],
  "ai-commercial-cleaning-operations-gap-no-ai-vision-based-pre-post-clean-verification-fro-wxdib5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Vision Based Pre Post Clean Verification Fro source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_vision_based_pre_post_clean_verification_fro.js"
    }
  ],
  "ai-commercial-cleaning-operations-ops-coordinator-agent-960bg3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Ops Coordinator Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/opsCoordinatorAgent.js"
    }
  ],
  "ai-commercial-cleaning-operations-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInsightsPage.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "chemicals",
      "label": "Chemicals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "crew_id",
      "label": "Crew Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "days = 60",
      "label": "Days = 60",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "horizon_days = 30",
      "label": "Horizon Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "inspection_id",
      "label": "Inspection Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "location_id",
      "label": "Location Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "location_name",
      "label": "Location Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "period_days = 30",
      "label": "Period Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-commercial-cleaning-operations-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInsightsPage.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "chemicals",
      "label": "Chemicals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "crew_id",
      "label": "Crew Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "days = 60",
      "label": "Days = 60",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "horizon_days = 30",
      "label": "Horizon Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "inspection_id",
      "label": "Inspection Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "location_id",
      "label": "Location Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "location_name",
      "label": "Location Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "period_days = 30",
      "label": "Period Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-home-renovation-project-manager-dailylog-1k1ngs-exact-ai": [
    {
      "name": "crew_size",
      "label": "Crew Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "hours_worked",
      "label": "Hours Worked",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "issues",
      "label": "Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "log_date",
      "label": "Log Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "materials_used",
      "label": "Materials Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "safety_incidents",
      "label": "Safety Incidents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "temperature",
      "label": "Temperature",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "visitor_log",
      "label": "Visitor Log",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "work_performed",
      "label": "Work Performed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    }
  ],
  "ai-home-renovation-project-manager-advanced-ai-tools-nq5skb-exact-ai": [
    {
      "name": "inspection_id",
      "label": "Inspection Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "tier",
      "label": "Tier",
      "type": "text",
      "defaultValue": "mid",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    }
  ],
  "ai-home-renovation-project-manager-cf-agentic-project-coordinator-scheduling-i-1x9w3i-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Project Coordinator Scheduling I source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfAgenticProjectCoordinatorSchedulingI.jsx"
    }
  ],
  "ai-home-renovation-project-manager-cf-change-order-ai-advisor-estimating-costt-1rj6bg-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Change Order AI Advisor Estimating Costt source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfChangeOrderAiAdvisorEstimatingCostt.jsx"
    }
  ],
  "ai-home-renovation-project-manager-cf-material-supply-chain-optimization-monit-10jltj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Material Supply Chain Optimization Monit source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfMaterialSupplyChainOptimizationMonit.jsx"
    }
  ],
  "ai-home-renovation-project-manager-daily-log-1fm783-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Daily Log source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/DailyLog.js"
    }
  ],
  "ai-home-renovation-project-manager-source-workflow": [
    {
      "name": "crew_size",
      "label": "Crew Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "hours_worked",
      "label": "Hours Worked",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "issues",
      "label": "Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "log_date",
      "label": "Log Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "materials_used",
      "label": "Materials Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "safety_incidents",
      "label": "Safety Incidents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "temperature",
      "label": "Temperature",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "visitor_log",
      "label": "Visitor Log",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "work_performed",
      "label": "Work Performed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "inspection_id",
      "label": "Inspection Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "tier",
      "label": "Tier",
      "type": "text",
      "defaultValue": "mid",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Project Coordinator Scheduling I source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfAgenticProjectCoordinatorSchedulingI.jsx"
    }
  ],
  "ai-home-renovation-project-manager-ai-tools": [
    {
      "name": "crew_size",
      "label": "Crew Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "hours_worked",
      "label": "Hours Worked",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "issues",
      "label": "Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "log_date",
      "label": "Log Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "materials_used",
      "label": "Materials Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "safety_incidents",
      "label": "Safety Incidents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "temperature",
      "label": "Temperature",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "visitor_log",
      "label": "Visitor Log",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "work_performed",
      "label": "Work Performed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailylog.js"
    },
    {
      "name": "inspection_id",
      "label": "Inspection Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "tier",
      "label": "Tier",
      "type": "text",
      "defaultValue": "mid",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AdvancedAITools.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Project Coordinator Scheduling I source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfAgenticProjectCoordinatorSchedulingI.jsx"
    }
  ],
  "alfresco-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste alfresco source AI context",
      "options": [],
      "required": false,
      "source": "generated"
    }
  ],
  "alfresco-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste alfresco source AI context",
      "options": [],
      "required": false,
      "source": "generated"
    }
  ],
  "home-services-salesforce-page-1br1rw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/docs/scheduling/ai-scheduling/page.tsx"
    }
  ],
  "home-services-salesforce-page-1fqwia-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/reports/daily/page.tsx"
    }
  ],
  "home-services-salesforce-page-1atzk6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/batch10/gap-no-post-job-feedback-nps-ai/page.tsx"
    }
  ],
  "home-services-salesforce-page-156hpl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/batch10/gap-no-parts-auto-replenish-ai-predictive/page.tsx"
    }
  ],
  "home-services-salesforce-page-1qci4x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/batch10/gap-no-automated-warranty-claim-processing/page.tsx"
    }
  ],
  "home-services-salesforce-page-94bhr8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/batch10/cf-predictive-parts-supply-chain-region-level/page.tsx"
    }
  ],
  "home-services-salesforce-page-jg3kjs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    }
  ],
  "home-services-salesforce-page-1sn8ex-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/subscription-health/page.tsx"
    }
  ],
  "home-services-salesforce-page-16imas-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/smart-scheduling/page.tsx"
    }
  ],
  "home-services-salesforce-page-1yvd44-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/route-optimizer/page.tsx"
    }
  ],
  "home-services-salesforce-page-1urgbc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/quote-generator/page.tsx"
    }
  ],
  "home-services-salesforce-page-hkblrk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/predictive-maintenance/page.tsx"
    }
  ],
  "home-services-salesforce-page-14pxs9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/photo-intake/page.tsx"
    }
  ],
  "home-services-salesforce-page-1w6xk8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/job-summary/page.tsx"
    }
  ],
  "home-services-salesforce-page-o3qn8b-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/inventory-forecast/page.tsx"
    }
  ],
  "home-services-salesforce-page-1x5nf0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/dispatch-optimizer/page.tsx"
    }
  ],
  "home-services-salesforce-page-wmqo43-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/diagnostics/page.tsx"
    }
  ],
  "home-services-salesforce-page-2a7xa3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/customer-insights/page.tsx"
    }
  ],
  "home-services-salesforce-page-19rug5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/blog/servicecrew-ai-vs-servicetitan/page.tsx"
    }
  ],
  "home-services-salesforce-page-1jd5yb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/blog/free-vs-paid-fsm-software/page.tsx"
    }
  ],
  "home-services-salesforce-page-994dj4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/blog/ai-revolutionizing-field-service/page.tsx"
    }
  ],
  "home-services-salesforce-route-15fw4q-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/reports/daily/route.ts"
    }
  ],
  "home-services-salesforce-route-1cq133-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-no-post-job-feedback-nps-ai/route.ts"
    }
  ],
  "home-services-salesforce-route-d36ma7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-no-parts-auto-replenish-ai-predictive/route.ts"
    }
  ],
  "home-services-salesforce-route-6ikv1z-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-no-automated-warranty-claim-processing/route.ts"
    }
  ],
  "home-services-salesforce-route-cjotr3-exact-ai": [
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    }
  ],
  "home-services-salesforce-route-1qr2wz-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-intake/route.ts"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-intake/route.ts"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-intake/route.ts"
    }
  ],
  "home-services-salesforce-route-j59zvm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/tech-safety/route.ts"
    }
  ],
  "home-services-salesforce-route-1x0lbt-exact-ai": [
    {
      "name": "agreementPlanId",
      "label": "Agreement Plan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subscription-health/route.ts"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subscription-health/route.ts"
    }
  ],
  "home-services-salesforce-route-1q20q8-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "amountUSD",
      "label": "Amount USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "eta",
      "label": "Eta",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "jobLat",
      "label": "Job Lat",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "jobLng",
      "label": "Job Lng",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "lat",
      "label": "Lat",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "lng",
      "label": "Lng",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "maxKm = 50",
      "label": "Max Km = 50",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "stars",
      "label": "Stars",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "subId",
      "label": "Sub Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "trade",
      "label": "Trade",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "trades",
      "label": "Trades",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    }
  ],
  "home-services-salesforce-route-jhi49p-exact-ai": [
    {
      "name": "customerData",
      "label": "Customer Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "preferredDate",
      "label": "Preferred Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "preferredTime",
      "label": "Preferred Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "serviceData",
      "label": "Service Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "serviceTypeId",
      "label": "Service Type Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "useSampleData",
      "label": "Use Sample Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    }
  ],
  "home-services-salesforce-route-hy9dal-exact-ai": [
    {
      "name": "additionalNotes",
      "label": "Additional Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "customerName",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "propertySize",
      "label": "Property Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "service",
      "label": "Service",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "tradeType",
      "label": "Trade Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    }
  ],
  "home-services-salesforce-route-186ff8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-parts/route.ts"
    }
  ],
  "home-services-salesforce-route-tiwem6-exact-ai": [
    {
      "name": "analyzeAll",
      "label": "Analyze All",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "equipmentData",
      "label": "Equipment Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "useSampleData",
      "label": "Use Sample Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    }
  ],
  "home-services-salesforce-route-ys7ems-exact-ai": [
    {
      "name": "imageUrl",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/photo-intake/route.ts"
    },
    {
      "name": "propertyId",
      "label": "Property Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/photo-intake/route.ts"
    },
    {
      "name": "tradeType",
      "label": "Trade Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/photo-intake/route.ts"
    }
  ],
  "home-services-salesforce-route-1k3ydg-exact-ai": [
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-route/route.ts"
    },
    {
      "name": "jobIds",
      "label": "Job Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-route/route.ts"
    },
    {
      "name": "technicianId",
      "label": "Technician Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-route/route.ts"
    }
  ],
  "home-services-salesforce-route-2uqvt9-exact-ai": [
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "jobsData",
      "label": "Jobs Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "optimizeFor = 'balanced'",
      "label": "Optimize For = 'Balanced'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "techniciansData",
      "label": "Technicians Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "useSampleData",
      "label": "Use Sample Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    }
  ],
  "home-services-salesforce-route-1b3bzv-exact-ai": [
    {
      "name": "job",
      "label": "Job",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "partsUsedText",
      "label": "Parts Used Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "technicianNotes",
      "label": "Technician Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "timeSpent",
      "label": "Time Spent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "workDescription",
      "label": "Work Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    }
  ],
  "home-services-salesforce-route-6qx3it-exact-ai": [
    {
      "name": "forecastPeriod",
      "label": "Forecast Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/inventory-forecast/route.ts"
    },
    {
      "name": "inventoryData",
      "label": "Inventory Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/inventory-forecast/route.ts"
    }
  ],
  "home-services-salesforce-route-bftwa1-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "costUSD",
      "label": "Cost USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "gallons",
      "label": "Gallons",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "lat",
      "label": "Lat",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "lng",
      "label": "Lng",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "odometerMi = 0",
      "label": "Odometer Mi = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "speed = 0",
      "label": "Speed = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "truckId",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    }
  ],
  "home-services-salesforce-route-flr0v1-exact-ai": [
    {
      "name": "additionalInfo",
      "label": "Additional Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "equipmentAge",
      "label": "Equipment Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "equipmentType",
      "label": "Equipment Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "tradeType",
      "label": "Trade Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    }
  ],
  "home-services-salesforce-route-d0ad-exact-ai": [
    {
      "name": "customersData",
      "label": "Customers Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-insights/route.ts"
    }
  ],
  "home-services-salesforce-route-1tol3a-exact-ai": [
    {
      "name": "companyId",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-diagnostic/route.ts"
    },
    {
      "name": "equipmentType",
      "label": "Equipment Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-diagnostic/route.ts"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-diagnostic/route.ts"
    },
    {
      "name": "tradeType",
      "label": "Trade Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-diagnostic/route.ts"
    }
  ],
  "home-services-salesforce-route-1jw5ve-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/clv-optimizer/route.ts"
    }
  ],
  "home-services-salesforce-route-1pv51h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/chat/route.ts"
    },
    {
      "name": "messages",
      "label": "Messages",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/chat/route.ts"
    }
  ],
  "home-services-salesforce-page-8ecj2z-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(auth)/verify-email/page.tsx"
    }
  ],
  "home-services-salesforce-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/docs/scheduling/ai-scheduling/page.tsx"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-intake/route.ts"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-intake/route.ts"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-intake/route.ts"
    },
    {
      "name": "agreementPlanId",
      "label": "Agreement Plan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subscription-health/route.ts"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subscription-health/route.ts"
    },
    {
      "name": "amountUSD",
      "label": "Amount USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "eta",
      "label": "Eta",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "jobLat",
      "label": "Job Lat",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "jobLng",
      "label": "Job Lng",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "lat",
      "label": "Lat",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "lng",
      "label": "Lng",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "maxKm = 50",
      "label": "Max Km = 50",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "stars",
      "label": "Stars",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "subId",
      "label": "Sub Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "trade",
      "label": "Trade",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "trades",
      "label": "Trades",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "customerData",
      "label": "Customer Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "preferredDate",
      "label": "Preferred Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "preferredTime",
      "label": "Preferred Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "serviceData",
      "label": "Service Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "serviceTypeId",
      "label": "Service Type Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "useSampleData",
      "label": "Use Sample Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "additionalNotes",
      "label": "Additional Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "customerName",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "propertySize",
      "label": "Property Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "service",
      "label": "Service",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "tradeType",
      "label": "Trade Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "analyzeAll",
      "label": "Analyze All",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "equipmentData",
      "label": "Equipment Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "imageUrl",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/photo-intake/route.ts"
    },
    {
      "name": "propertyId",
      "label": "Property Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/photo-intake/route.ts"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-route/route.ts"
    },
    {
      "name": "jobIds",
      "label": "Job Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-route/route.ts"
    },
    {
      "name": "technicianId",
      "label": "Technician Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-route/route.ts"
    },
    {
      "name": "jobsData",
      "label": "Jobs Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "optimizeFor = 'balanced'",
      "label": "Optimize For = 'Balanced'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "techniciansData",
      "label": "Technicians Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "job",
      "label": "Job",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "partsUsedText",
      "label": "Parts Used Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "technicianNotes",
      "label": "Technician Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "timeSpent",
      "label": "Time Spent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "workDescription",
      "label": "Work Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "forecastPeriod",
      "label": "Forecast Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/inventory-forecast/route.ts"
    },
    {
      "name": "inventoryData",
      "label": "Inventory Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/inventory-forecast/route.ts"
    },
    {
      "name": "costUSD",
      "label": "Cost USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "gallons",
      "label": "Gallons",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "odometerMi = 0",
      "label": "Odometer Mi = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "speed = 0",
      "label": "Speed = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "truckId",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "additionalInfo",
      "label": "Additional Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "equipmentAge",
      "label": "Equipment Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "equipmentType",
      "label": "Equipment Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "customersData",
      "label": "Customers Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-insights/route.ts"
    },
    {
      "name": "companyId",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-diagnostic/route.ts"
    },
    {
      "name": "messages",
      "label": "Messages",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/chat/route.ts"
    }
  ],
  "home-services-salesforce-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/docs/scheduling/ai-scheduling/page.tsx"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-intake/route.ts"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-intake/route.ts"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-intake/route.ts"
    },
    {
      "name": "agreementPlanId",
      "label": "Agreement Plan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subscription-health/route.ts"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subscription-health/route.ts"
    },
    {
      "name": "amountUSD",
      "label": "Amount USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "eta",
      "label": "Eta",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "jobLat",
      "label": "Job Lat",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "jobLng",
      "label": "Job Lng",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "lat",
      "label": "Lat",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "lng",
      "label": "Lng",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "maxKm = 50",
      "label": "Max Km = 50",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "stars",
      "label": "Stars",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "subId",
      "label": "Sub Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "trade",
      "label": "Trade",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "trades",
      "label": "Trades",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/subcontractor-marketplace/route.ts"
    },
    {
      "name": "customerData",
      "label": "Customer Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "preferredDate",
      "label": "Preferred Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "preferredTime",
      "label": "Preferred Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "serviceData",
      "label": "Service Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "serviceTypeId",
      "label": "Service Type Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "useSampleData",
      "label": "Use Sample Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/smart-scheduling/route.ts"
    },
    {
      "name": "additionalNotes",
      "label": "Additional Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "customerName",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "propertySize",
      "label": "Property Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "service",
      "label": "Service",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "tradeType",
      "label": "Trade Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote-generator/route.ts"
    },
    {
      "name": "analyzeAll",
      "label": "Analyze All",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "equipmentData",
      "label": "Equipment Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "imageUrl",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/photo-intake/route.ts"
    },
    {
      "name": "propertyId",
      "label": "Property Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/photo-intake/route.ts"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-route/route.ts"
    },
    {
      "name": "jobIds",
      "label": "Job Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-route/route.ts"
    },
    {
      "name": "technicianId",
      "label": "Technician Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-route/route.ts"
    },
    {
      "name": "jobsData",
      "label": "Jobs Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "optimizeFor = 'balanced'",
      "label": "Optimize For = 'Balanced'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "techniciansData",
      "label": "Technicians Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/optimize-dispatch/route.ts"
    },
    {
      "name": "job",
      "label": "Job",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "partsUsedText",
      "label": "Parts Used Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "technicianNotes",
      "label": "Technician Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "timeSpent",
      "label": "Time Spent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "workDescription",
      "label": "Work Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/job-summary/route.ts"
    },
    {
      "name": "forecastPeriod",
      "label": "Forecast Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/inventory-forecast/route.ts"
    },
    {
      "name": "inventoryData",
      "label": "Inventory Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/inventory-forecast/route.ts"
    },
    {
      "name": "costUSD",
      "label": "Cost USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "gallons",
      "label": "Gallons",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "odometerMi = 0",
      "label": "Odometer Mi = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "speed = 0",
      "label": "Speed = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "truckId",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/fleet-gps-fuel/route.ts"
    },
    {
      "name": "additionalInfo",
      "label": "Additional Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "equipmentAge",
      "label": "Equipment Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "equipmentType",
      "label": "Equipment Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostics/route.ts"
    },
    {
      "name": "customersData",
      "label": "Customers Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-insights/route.ts"
    },
    {
      "name": "companyId",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-diagnostic/route.ts"
    },
    {
      "name": "messages",
      "label": "Messages",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/chat/route.ts"
    }
  ],
  "pest-control-ai-advisors-1dms5l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advisors source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvisors.jsx"
    }
  ],
  "pest-control-ai-tools-zzepmy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITools.jsx"
    }
  ],
  "pest-control-customer-detail-6l8fjw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Customer Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CustomerDetail.jsx"
    }
  ],
  "pest-control-gap-sms-email-dispatch-page-1c3phi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Sms Email Dispatch Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/gap/GapSmsEmailDispatchPage.jsx"
    }
  ],
  "pest-control-ai-1lp99l-exact-ai": [
    {
      "name": "applicationContext",
      "label": "Application Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "equipment",
      "label": "Equipment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "fleetSummary",
      "label": "Fleet Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "horizonDays",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "imageUrl",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "observations",
      "label": "Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "pestType",
      "label": "Pest Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "productName",
      "label": "Product Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "propertySize",
      "label": "Property Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "propertyType",
      "label": "Property Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "sensitiveOccupants",
      "label": "Sensitive Occupants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "serviceOrderId",
      "label": "Service Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "services",
      "label": "Services",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "technicianId",
      "label": "Technician Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "zipCode",
      "label": "Zip Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "pest-control-ai-extras-mzgkwg-exact-ai": [
    {
      "name": "commonName",
      "label": "Common Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "fleet = []",
      "label": "Fleet = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "frequency = 'quarterly'",
      "label": "Frequency = 'Quarterly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "gps",
      "label": "Gps",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "knownPests = []",
      "label": "Known Pests = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "photos = []",
      "label": "Photos = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "photoUrls = []",
      "label": "Photo Urls = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "plan",
      "label": "Plan",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "productUsage = []",
      "label": "Product Usage = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "propertyId",
      "label": "Property Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "propertyType",
      "label": "Property Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "regionTags = []",
      "label": "Region Tags = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "scheduledFor",
      "label": "Scheduled For",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "scientificName",
      "label": "Scientific Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "signatureBase64",
      "label": "Signature Base64",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "sqft",
      "label": "Sqft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "technicianId",
      "label": "Technician Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "treatmentProtocol",
      "label": "Treatment Protocol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "urgency = 'standard'",
      "label": "Urgency = 'Standard'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    }
  ],
  "pest-control-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advisors source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvisors.jsx"
    },
    {
      "name": "applicationContext",
      "label": "Application Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "equipment",
      "label": "Equipment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "fleetSummary",
      "label": "Fleet Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "horizonDays",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "imageUrl",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "observations",
      "label": "Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "pestType",
      "label": "Pest Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "productName",
      "label": "Product Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "propertySize",
      "label": "Property Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "propertyType",
      "label": "Property Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "sensitiveOccupants",
      "label": "Sensitive Occupants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "serviceOrderId",
      "label": "Service Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "services",
      "label": "Services",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "technicianId",
      "label": "Technician Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "zipCode",
      "label": "Zip Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "commonName",
      "label": "Common Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "fleet = []",
      "label": "Fleet = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "frequency = 'quarterly'",
      "label": "Frequency = 'Quarterly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "gps",
      "label": "Gps",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "knownPests = []",
      "label": "Known Pests = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "photos = []",
      "label": "Photos = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "photoUrls = []",
      "label": "Photo Urls = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "plan",
      "label": "Plan",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "productUsage = []",
      "label": "Product Usage = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "propertyId",
      "label": "Property Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "regionTags = []",
      "label": "Region Tags = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "scheduledFor",
      "label": "Scheduled For",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "scientificName",
      "label": "Scientific Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "signatureBase64",
      "label": "Signature Base64",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "sqft",
      "label": "Sqft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "treatmentProtocol",
      "label": "Treatment Protocol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "urgency = 'standard'",
      "label": "Urgency = 'Standard'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    }
  ],
  "pest-control-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advisors source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvisors.jsx"
    },
    {
      "name": "applicationContext",
      "label": "Application Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "equipment",
      "label": "Equipment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "fleetSummary",
      "label": "Fleet Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "horizonDays",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "imageUrl",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "observations",
      "label": "Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "pestType",
      "label": "Pest Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "productName",
      "label": "Product Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "propertySize",
      "label": "Property Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "propertyType",
      "label": "Property Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "sensitiveOccupants",
      "label": "Sensitive Occupants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "serviceOrderId",
      "label": "Service Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "services",
      "label": "Services",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "technicianId",
      "label": "Technician Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "zipCode",
      "label": "Zip Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "commonName",
      "label": "Common Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "fleet = []",
      "label": "Fleet = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "frequency = 'quarterly'",
      "label": "Frequency = 'Quarterly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "gps",
      "label": "Gps",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "knownPests = []",
      "label": "Known Pests = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "photos = []",
      "label": "Photos = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "photoUrls = []",
      "label": "Photo Urls = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "plan",
      "label": "Plan",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "productUsage = []",
      "label": "Product Usage = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "propertyId",
      "label": "Property Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "regionTags = []",
      "label": "Region Tags = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "scheduledFor",
      "label": "Scheduled For",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "scientificName",
      "label": "Scientific Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "signatureBase64",
      "label": "Signature Base64",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "sqft",
      "label": "Sqft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "treatmentProtocol",
      "label": "Treatment Protocol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    },
    {
      "name": "urgency = 'standard'",
      "label": "Urgency = 'Standard'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtras.js"
    }
  ],
  "repair-shop-route-1k2p7k-exact-ai": [
    {
      "name": "claimAmount",
      "label": "Claim Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "issueDescription",
      "label": "Issue Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "productDescription",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "purchaseDate",
      "label": "Purchase Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "ticketId",
      "label": "Ticket Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "warrantyEndDate",
      "label": "Warranty End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    }
  ],
  "repair-shop-route-smp405-exact-ai": [
    {
      "name": "deviceCreatedAt",
      "label": "Device Created At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/auto-validate/route.ts"
    },
    {
      "name": "issueCause",
      "label": "Issue Cause",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/auto-validate/route.ts"
    },
    {
      "name": "priorApprovedClaims = 0",
      "label": "Prior Approved Claims = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/auto-validate/route.ts"
    }
  ],
  "repair-shop-route-1lqae5-exact-ai": [
    {
      "name": "approvedAmount",
      "label": "Approved Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "issueDescription",
      "label": "Issue Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "productDescription",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "resolution",
      "label": "Resolution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    }
  ],
  "repair-shop-route-1y34im-exact-ai": [
    {
      "name": "device",
      "label": "Device",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "elapsedHours",
      "label": "Elapsed Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "owner",
      "label": "Owner",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "promisedHours",
      "label": "Promised Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "stage",
      "label": "Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "ticket",
      "label": "Ticket",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    }
  ],
  "repair-shop-route-cjotr3-exact-ai": [
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    }
  ],
  "repair-shop-route-biv8-exact-ai": [
    {
      "name": "endpoint",
      "label": "Endpoint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "latencyMs",
      "label": "Latency Ms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "tokensUsed",
      "label": "Tokens Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    }
  ],
  "repair-shop-route-pxo1l3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/summary/route.ts"
    }
  ],
  "repair-shop-route-1aujc5-exact-ai": [
    {
      "name": "attachedPhotos = []",
      "label": "Attached Photos = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "claimDescription",
      "label": "Claim Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "purchaseDate",
      "label": "Purchase Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "serialNumber",
      "label": "Serial Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "warrantyTermMonths",
      "label": "Warranty Term Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    }
  ],
  "repair-shop-route-1c7ppj-exact-ai": [
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty/route.ts"
    },
    {
      "name": "purchaseDate",
      "label": "Purchase Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty/route.ts"
    },
    {
      "name": "serialNumber",
      "label": "Serial Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty/route.ts"
    }
  ],
  "repair-shop-route-q352ia-exact-ai": [
    {
      "name": "ticketId",
      "label": "Ticket Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/timeline/route.ts"
    }
  ],
  "repair-shop-route-5uifm7-exact-ai": [
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "conversationHistory = []",
      "label": "Conversation History = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "symptoms = []",
      "label": "Symptoms = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    }
  ],
  "repair-shop-route-zsf98r-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/supplier-auto-reorder/route.ts"
    }
  ],
  "repair-shop-route-xb7maj-exact-ai": [
    {
      "name": "additionalNotes",
      "label": "Additional Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/status-message/route.ts"
    },
    {
      "name": "ticketId",
      "label": "Ticket Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/status-message/route.ts"
    }
  ],
  "repair-shop-route-57666b-exact-ai": [
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/repair-guide/route.ts"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/repair-guide/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/repair-guide/route.ts"
    },
    {
      "name": "repairType",
      "label": "Repair Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/repair-guide/route.ts"
    }
  ],
  "repair-shop-route-1vpeii-exact-ai": [
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote/route.ts"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote/route.ts"
    },
    {
      "name": "diagnosticNotes",
      "label": "Diagnostic Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote/route.ts"
    },
    {
      "name": "issueDescription",
      "label": "Issue Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote/route.ts"
    }
  ],
  "repair-shop-route-ud25bw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/preventive-care-bundle/route.ts"
    }
  ],
  "repair-shop-route-tiwem6-exact-ai": [
    {
      "name": "ageMonths",
      "label": "Age Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "deviceId",
      "label": "Device Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "pastIssues",
      "label": "Past Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "pastTicketCount",
      "label": "Past Ticket Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    }
  ],
  "repair-shop-route-1mmdhj-exact-ai": [
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/parts-finder/route.ts"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/parts-finder/route.ts"
    },
    {
      "name": "issueDescription",
      "label": "Issue Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/parts-finder/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/parts-finder/route.ts"
    }
  ],
  "repair-shop-route-qxhzz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/dispatch-optimizer/route.ts"
    }
  ],
  "repair-shop-route-ge8ty5-exact-ai": [
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic-chat/route.ts"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic-chat/route.ts"
    },
    {
      "name": "ticketId",
      "label": "Ticket Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic-chat/route.ts"
    }
  ],
  "repair-shop-route-1jioht-exact-ai": [
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic/route.ts"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic/route.ts"
    },
    {
      "name": "issueDescription",
      "label": "Issue Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic/route.ts"
    }
  ],
  "repair-shop-route-8q3ojd-exact-ai": [
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/damage-assessment/route.ts"
    },
    {
      "name": "photoId",
      "label": "Photo Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/damage-assessment/route.ts"
    },
    {
      "name": "ticketId",
      "label": "Ticket Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/damage-assessment/route.ts"
    }
  ],
  "repair-shop-route-1vxipe-exact-ai": [
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-service/route.ts"
    },
    {
      "name": "ticketNumber",
      "label": "Ticket Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-service/route.ts"
    }
  ],
  "repair-shop-route-h3bfa9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/comms-sequence-ai/route.ts"
    }
  ],
  "repair-shop-page-sf8o26-exact-ai": [
    {
      "name": "breachRisk",
      "label": "Breach Risk",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/repair-sla-monitor/page.tsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/repair-sla-monitor/page.tsx"
    }
  ],
  "repair-shop-page-bb9gtm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/warranty-claims/page.tsx"
    }
  ],
  "repair-shop-page-wg27yx-exact-ai": [
    {
      "name": "customerId",
      "label": "Customer *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{customer.firstName} {customer.lastName} - {customer.phone}"
      ],
      "required": true,
      "source": "src/app/(dashboard)/dashboard/warranty-claims/new/page.tsx"
    },
    {
      "name": "issueDescription",
      "label": "Issue Description *",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Describe the issue with the product...",
      "options": [],
      "required": true,
      "source": "src/app/(dashboard)/dashboard/warranty-claims/new/page.tsx"
    },
    {
      "name": "productDescription",
      "label": "Product Description *",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "e.g., iPhone 14 Pro Max 256GB Space Black",
      "options": [],
      "required": true,
      "source": "src/app/(dashboard)/dashboard/warranty-claims/new/page.tsx"
    },
    {
      "name": "claimAmount",
      "label": "Claim Amount ($)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "0.00",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/warranty-claims/new/page.tsx"
    },
    {
      "name": "purchaseDate",
      "label": "Purchase Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/warranty-claims/new/page.tsx"
    },
    {
      "name": "ticketId",
      "label": "Link to Repair Ticket (optional)",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{ticket.ticketNumber} - {ticket.device?.deviceType || 'N/A'} {ticket.device?.brand || ''} {ticket.device?.model || ''}"
      ],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/warranty-claims/new/page.tsx"
    },
    {
      "name": "warrantyEndDate",
      "label": "Warranty End Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/warranty-claims/new/page.tsx"
    }
  ],
  "repair-shop-page-19dg9a-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/warranty-claims/[id]/page.tsx"
    }
  ],
  "repair-shop-page-mqu4de-exact-ai": [
    {
      "name": "ageMonths",
      "label": "Age Months",
      "type": "text",
      "defaultValue": "12",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/page.tsx"
    },
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/page.tsx"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/page.tsx"
    },
    {
      "name": "issueDescription",
      "label": "Issue Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/page.tsx"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/page.tsx"
    },
    {
      "name": "pastIssues",
      "label": "Past Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/page.tsx"
    },
    {
      "name": "pastTicketCount",
      "label": "Past Ticket Count",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/page.tsx"
    },
    {
      "name": "purchaseDate",
      "label": "Purchase Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/page.tsx"
    },
    {
      "name": "serialNumber",
      "label": "Serial Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/page.tsx"
    }
  ],
  "repair-shop-page-a6cwnu-exact-ai": [
    {
      "name": "ageMonths",
      "label": "Age Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/predictive-maintenance/page.tsx"
    },
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/predictive-maintenance/page.tsx"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/predictive-maintenance/page.tsx"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/predictive-maintenance/page.tsx"
    },
    {
      "name": "pastIssues",
      "label": "Past Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/predictive-maintenance/page.tsx"
    },
    {
      "name": "pastTicketCount",
      "label": "Past Ticket Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/dashboard/ai/predictive-maintenance/page.tsx"
    }
  ],
  "repair-shop-source-workflow": [
    {
      "name": "claimAmount",
      "label": "Claim Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "0.00",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{customer.firstName} {customer.lastName} - {customer.phone}"
      ],
      "required": true,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "issueDescription",
      "label": "Issue Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Describe the issue with the product...",
      "options": [],
      "required": true,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "productDescription",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "e.g., iPhone 14 Pro Max 256GB Space Black",
      "options": [],
      "required": true,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "purchaseDate",
      "label": "Purchase Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "ticketId",
      "label": "Ticket Id",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{ticket.ticketNumber} - {ticket.device?.deviceType || 'N/A'} {ticket.device?.brand || ''} {ticket.device?.model || ''}"
      ],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "warrantyEndDate",
      "label": "Warranty End Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "deviceCreatedAt",
      "label": "Device Created At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/auto-validate/route.ts"
    },
    {
      "name": "issueCause",
      "label": "Issue Cause",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/auto-validate/route.ts"
    },
    {
      "name": "priorApprovedClaims = 0",
      "label": "Prior Approved Claims = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/auto-validate/route.ts"
    },
    {
      "name": "approvedAmount",
      "label": "Approved Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "resolution",
      "label": "Resolution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "device",
      "label": "Device",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "elapsedHours",
      "label": "Elapsed Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "owner",
      "label": "Owner",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "promisedHours",
      "label": "Promised Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "stage",
      "label": "Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "ticket",
      "label": "Ticket",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "endpoint",
      "label": "Endpoint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "latencyMs",
      "label": "Latency Ms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "tokensUsed",
      "label": "Tokens Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/summary/route.ts"
    },
    {
      "name": "attachedPhotos = []",
      "label": "Attached Photos = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "claimDescription",
      "label": "Claim Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "serialNumber",
      "label": "Serial Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "warrantyTermMonths",
      "label": "Warranty Term Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty/route.ts"
    },
    {
      "name": "conversationHistory = []",
      "label": "Conversation History = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "symptoms = []",
      "label": "Symptoms = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "additionalNotes",
      "label": "Additional Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/status-message/route.ts"
    },
    {
      "name": "repairType",
      "label": "Repair Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/repair-guide/route.ts"
    },
    {
      "name": "diagnosticNotes",
      "label": "Diagnostic Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote/route.ts"
    },
    {
      "name": "ageMonths",
      "label": "Age Months",
      "type": "text",
      "defaultValue": "12",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "deviceId",
      "label": "Device Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "pastIssues",
      "label": "Past Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "pastTicketCount",
      "label": "Past Ticket Count",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic-chat/route.ts"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic-chat/route.ts"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/damage-assessment/route.ts"
    },
    {
      "name": "photoId",
      "label": "Photo Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/damage-assessment/route.ts"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-service/route.ts"
    },
    {
      "name": "ticketNumber",
      "label": "Ticket Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-service/route.ts"
    },
    {
      "name": "breachRisk",
      "label": "Breach Risk",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/repair-sla-monitor/page.tsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/repair-sla-monitor/page.tsx"
    }
  ],
  "repair-shop-ai-tools": [
    {
      "name": "claimAmount",
      "label": "Claim Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "0.00",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{customer.firstName} {customer.lastName} - {customer.phone}"
      ],
      "required": true,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "issueDescription",
      "label": "Issue Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Describe the issue with the product...",
      "options": [],
      "required": true,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "productDescription",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "e.g., iPhone 14 Pro Max 256GB Space Black",
      "options": [],
      "required": true,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "purchaseDate",
      "label": "Purchase Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "ticketId",
      "label": "Ticket Id",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{ticket.ticketNumber} - {ticket.device?.deviceType || 'N/A'} {ticket.device?.brand || ''} {ticket.device?.model || ''}"
      ],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "warrantyEndDate",
      "label": "Warranty End Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/route.ts"
    },
    {
      "name": "deviceCreatedAt",
      "label": "Device Created At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/auto-validate/route.ts"
    },
    {
      "name": "issueCause",
      "label": "Issue Cause",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/auto-validate/route.ts"
    },
    {
      "name": "priorApprovedClaims = 0",
      "label": "Prior Approved Claims = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/auto-validate/route.ts"
    },
    {
      "name": "approvedAmount",
      "label": "Approved Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "resolution",
      "label": "Resolution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/warranty-claims/[id]/route.ts"
    },
    {
      "name": "device",
      "label": "Device",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "elapsedHours",
      "label": "Elapsed Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "owner",
      "label": "Owner",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "promisedHours",
      "label": "Promised Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "stage",
      "label": "Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "ticket",
      "label": "Ticket",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/repair-sla-monitor/route.ts"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "endpoint",
      "label": "Endpoint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "latencyMs",
      "label": "Latency Ms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "tokensUsed",
      "label": "Tokens Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/route.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai-telemetry/summary/route.ts"
    },
    {
      "name": "attachedPhotos = []",
      "label": "Attached Photos = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "claimDescription",
      "label": "Claim Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "serialNumber",
      "label": "Serial Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "warrantyTermMonths",
      "label": "Warranty Term Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty-smart-process/route.ts"
    },
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/warranty/route.ts"
    },
    {
      "name": "conversationHistory = []",
      "label": "Conversation History = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "deviceType",
      "label": "Device Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "symptoms = []",
      "label": "Symptoms = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/symptom-root-cause/route.ts"
    },
    {
      "name": "additionalNotes",
      "label": "Additional Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/status-message/route.ts"
    },
    {
      "name": "repairType",
      "label": "Repair Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/repair-guide/route.ts"
    },
    {
      "name": "diagnosticNotes",
      "label": "Diagnostic Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/quote/route.ts"
    },
    {
      "name": "ageMonths",
      "label": "Age Months",
      "type": "text",
      "defaultValue": "12",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "deviceId",
      "label": "Device Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "pastIssues",
      "label": "Past Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "pastTicketCount",
      "label": "Past Ticket Count",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/predictive-maintenance/route.ts"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic-chat/route.ts"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/diagnostic-chat/route.ts"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/damage-assessment/route.ts"
    },
    {
      "name": "photoId",
      "label": "Photo Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/damage-assessment/route.ts"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-service/route.ts"
    },
    {
      "name": "ticketNumber",
      "label": "Ticket Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/customer-service/route.ts"
    },
    {
      "name": "breachRisk",
      "label": "Breach Risk",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/repair-sla-monitor/page.tsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/repair-sla-monitor/page.tsx"
    }
  ]
};
