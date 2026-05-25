export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-commercial-cleaning-operations-backend-models-checklist-js-checklists",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "checklists",
    "displayName": "Checklists",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Checklist.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "property_type",
        "type": "ENUM('office'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'general'",
        "sourceLine": "property_type: { ... }"
      },
      {
        "name": "service_type",
        "type": "ENUM('regular'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'regular'",
        "sourceLine": "service_type: { ... }"
      },
      {
        "name": "items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "items: { ... }"
      },
      {
        "name": "assigned_crew",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_crew: { ... }"
      },
      {
        "name": "assigned_client",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_client: { ... }"
      },
      {
        "name": "due_date",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date: { ... }"
      },
      {
        "name": "completed_date",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('template'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'template'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "completion_percentage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "completion_percentage: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "created_by",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-client-js-clients",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "clients",
    "displayName": "Clients",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Client.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "company_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name: { ... }"
      },
      {
        "name": "contact_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name: { ... }"
      },
      {
        "name": "email",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email: { ... }"
      },
      {
        "name": "phone",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone: { ... }"
      },
      {
        "name": "address",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address: { ... }"
      },
      {
        "name": "industry",
        "type": "ENUM('healthcare'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "industry: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('active'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "monthly_revenue",
        "type": "DECIMAL(10",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "monthly_revenue: { ... }"
      },
      {
        "name": "satisfaction_score",
        "type": "DECIMAL(3",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "satisfaction_score: { ... }"
      },
      {
        "name": "since",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "since: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "properties_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "properties_count: { ... }"
      },
      {
        "name": "ai_retention_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_retention_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-compliance-js-compliance-records",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "compliance_records",
    "displayName": "Compliance Records",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Compliance.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "category",
        "type": "ENUM('osha'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "due_date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date: { ... }"
      },
      {
        "name": "completed_date",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('compliant'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "assigned_to",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to: { ... }"
      },
      {
        "name": "documentation_url",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentation_url: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "renewal_frequency",
        "type": "ENUM('monthly'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'annual'",
        "sourceLine": "renewal_frequency: { ... }"
      },
      {
        "name": "priority",
        "type": "ENUM('low'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority: { ... }"
      },
      {
        "name": "ai_recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_recommendations: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-contract-js-contracts",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "contracts",
    "displayName": "Contracts",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Contract.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "client_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_name: { ... }"
      },
      {
        "name": "property_type",
        "type": "ENUM('office'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_type: { ... }"
      },
      {
        "name": "square_footage",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "square_footage: { ... }"
      },
      {
        "name": "frequency",
        "type": "ENUM('daily'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency: { ... }"
      },
      {
        "name": "services",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "services: { ... }"
      },
      {
        "name": "monthly_price",
        "type": "DECIMAL(10",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthly_price: { ... }"
      },
      {
        "name": "contract_start",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_start: { ... }"
      },
      {
        "name": "contract_end",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_end: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('draft'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "ai_pricing_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_pricing_analysis: { ... }"
      },
      {
        "name": "special_requirements",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "special_requirements: { ... }"
      },
      {
        "name": "contact_person",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_person: { ... }"
      },
      {
        "name": "contact_email",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email: { ... }"
      },
      {
        "name": "contact_phone",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-crew-js-crews",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "crews",
    "displayName": "Crews",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Crew.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "team_lead",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_lead: { ... }"
      },
      {
        "name": "members",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "members: { ... }"
      },
      {
        "name": "specializations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "specializations: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('active'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "shift",
        "type": "ENUM('morning'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'morning'",
        "sourceLine": "shift: { ... }"
      },
      {
        "name": "region",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region: { ... }"
      },
      {
        "name": "performance_score",
        "type": "DECIMAL(3",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "performance_score: { ... }"
      },
      {
        "name": "total_jobs_completed",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_jobs_completed: { ... }"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL(6",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate: { ... }"
      },
      {
        "name": "certifications",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "certifications: { ... }"
      },
      {
        "name": "phone",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone: { ... }"
      },
      {
        "name": "ai_performance_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_performance_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-equipment-js-equipment",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "equipment",
    "displayName": "Equipment",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Equipment.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "type",
        "type": "ENUM('vacuum'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type: { ... }"
      },
      {
        "name": "serial_number",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "serial_number: { ... }"
      },
      {
        "name": "purchase_date",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchase_date: { ... }"
      },
      {
        "name": "purchase_cost",
        "type": "DECIMAL(10",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchase_cost: { ... }"
      },
      {
        "name": "condition",
        "type": "ENUM('excellent'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'good'",
        "sourceLine": "condition: { ... }"
      },
      {
        "name": "assigned_to",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to: { ... }"
      },
      {
        "name": "last_maintenance",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_maintenance: { ... }"
      },
      {
        "name": "next_maintenance",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_maintenance: { ... }"
      },
      {
        "name": "maintenance_interval_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "90",
        "sourceLine": "maintenance_interval_days: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('in_service'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'in_service'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "hours_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "hours_used: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "ai_maintenance_prediction",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_maintenance_prediction: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-expense-js-expenses",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "expenses",
    "displayName": "Expenses",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Expense.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "description",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "category",
        "type": "ENUM('supplies'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "amount",
        "type": "DECIMAL(10",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount: { ... }"
      },
      {
        "name": "date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date: { ... }"
      },
      {
        "name": "vendor",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor: { ... }"
      },
      {
        "name": "payment_method",
        "type": "ENUM('cash'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'credit_card'",
        "sourceLine": "payment_method: { ... }"
      },
      {
        "name": "receipt_number",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receipt_number: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('pending'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "submitted_by",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_by: { ... }"
      },
      {
        "name": "approved_by",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by: { ... }"
      },
      {
        "name": "crew_name",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_name: { ... }"
      },
      {
        "name": "client_name",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_name: { ... }"
      },
      {
        "name": "is_recurring",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_recurring: { ... }"
      },
      {
        "name": "recurrence_frequency",
        "type": "ENUM('weekly'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recurrence_frequency: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "tax_deductible",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "tax_deductible: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-0-mounted-chat-style-ai-endpoints-despite-ainew-js-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_0_mounted_chat_style_ai_endpoints_despite_ainew_js.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-no-ai-auto-quote-generator-from-rfp-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_auto_quote_generator_from_rfp.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-no-ai-dynamic-scheduling-vs-travel-time-and-crew-s-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_dynamic_scheduling_vs_travel_time_and_crew_s.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-no-ai-safety-incident-classifier-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_safety_incident_classifier.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-no-ai-vision-based-pre-post-clean-verification-fro-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_vision_based_pre_post_clean_verification_fro.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-no-customer-self-service-portal-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_customer_self_service_portal.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-no-direct-accounting-api-client-quickbooks-xero-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_direct_accounting_api_client_quickbooks_xero.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-no-gps-clock-in-live-route-optimization-for-crews-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_gps_clock_in_live_route_optimization_for_crews.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-no-mobile-app-for-cleaning-crews-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_mobile_app_for_cleaning_crews.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-routes-gap-notification-routes-exist-but-no-sms-push-delivery-js-gap-features",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_notification_routes_exist_but_no_sms_push_delivery.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-incident-js-incidents",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "incidents",
    "displayName": "Incidents",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Incident.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "type",
        "type": "ENUM('injury'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type: { ... }"
      },
      {
        "name": "severity",
        "type": "ENUM('minor'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'minor'",
        "sourceLine": "severity: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "reported_by",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by: { ... }"
      },
      {
        "name": "incident_date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_date: { ... }"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "actions_taken",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actions_taken: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('reported'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'reported'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "witnesses",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "witnesses: { ... }"
      },
      {
        "name": "cost_impact",
        "type": "DECIMAL(10",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cost_impact: { ... }"
      },
      {
        "name": "insurance_claim",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "insurance_claim: { ... }"
      },
      {
        "name": "follow_up_date",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "follow_up_date: { ... }"
      },
      {
        "name": "resolution_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution_notes: { ... }"
      },
      {
        "name": "ai_risk_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_risk_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-invoice-js-invoices",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "invoices",
    "displayName": "Invoices",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Invoice.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "invoice_number",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "invoice_number: { ... }"
      },
      {
        "name": "client_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_name: { ... }"
      },
      {
        "name": "issue_date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issue_date: { ... }"
      },
      {
        "name": "due_date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date: { ... }"
      },
      {
        "name": "line_items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "line_items: { ... }"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL(10",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "subtotal: { ... }"
      },
      {
        "name": "tax_rate",
        "type": "DECIMAL(5",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "8.5",
        "sourceLine": "tax_rate: { ... }"
      },
      {
        "name": "tax_amount",
        "type": "DECIMAL(10",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax_amount: { ... }"
      },
      {
        "name": "total",
        "type": "DECIMAL(10",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('draft'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "payment_method",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method: { ... }"
      },
      {
        "name": "paid_date",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paid_date: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "ai_billing_insights",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_billing_insights: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-quality-inspection-js-quality-inspections",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "quality_inspections",
    "displayName": "Quality Inspections",
    "framework": "Sequelize",
    "sourceFile": "backend/models/QualityInspection.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "location_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_name: { ... }"
      },
      {
        "name": "inspector_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name: { ... }"
      },
      {
        "name": "inspection_date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_date: { ... }"
      },
      {
        "name": "overall_score",
        "type": "DECIMAL(3",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overall_score: { ... }"
      },
      {
        "name": "categories",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "{}",
        "sourceLine": "categories: { ... }"
      },
      {
        "name": "photo_urls",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "photo_urls: { ... }"
      },
      {
        "name": "ai_photo_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_photo_analysis: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('pending'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "follow_up_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "follow_up_required: { ... }"
      },
      {
        "name": "follow_up_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "follow_up_notes: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-route-js-routes",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "routes",
    "displayName": "Routes",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Route.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "crew_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_name: { ... }"
      },
      {
        "name": "date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('pending'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "total_stops",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_stops: { ... }"
      },
      {
        "name": "estimated_duration_hours",
        "type": "DECIMAL(5",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_duration_hours: { ... }"
      },
      {
        "name": "total_distance_miles",
        "type": "DECIMAL(8",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_distance_miles: { ... }"
      },
      {
        "name": "stops",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "stops: { ... }"
      },
      {
        "name": "optimized_order",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "optimized_order: { ... }"
      },
      {
        "name": "ai_suggestions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_suggestions: { ... }"
      },
      {
        "name": "region",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region: { ... }"
      },
      {
        "name": "priority",
        "type": "ENUM('low'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-schedule-js-schedules",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "schedules",
    "displayName": "Schedules",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Schedule.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "crew_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_name: { ... }"
      },
      {
        "name": "client_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_name: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date: { ... }"
      },
      {
        "name": "start_time",
        "type": "TIME",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time: { ... }"
      },
      {
        "name": "end_time",
        "type": "TIME",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time: { ... }"
      },
      {
        "name": "recurrence",
        "type": "ENUM('none'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'none'",
        "sourceLine": "recurrence: { ... }"
      },
      {
        "name": "service_type",
        "type": "ENUM('regular'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'regular'",
        "sourceLine": "service_type: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('scheduled'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "priority",
        "type": "ENUM('low'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority: { ... }"
      },
      {
        "name": "estimated_hours",
        "type": "DECIMAL(4",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_hours: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "contact_name",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name: { ... }"
      },
      {
        "name": "contact_phone",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-supply-js-supplies",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "supplies",
    "displayName": "Supplies",
    "framework": "Sequelize",
    "sourceFile": "backend/models/Supply.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "category",
        "type": "ENUM('chemicals'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "current_stock",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_stock: { ... }"
      },
      {
        "name": "unit",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit: { ... }"
      },
      {
        "name": "reorder_level",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10",
        "sourceLine": "reorder_level: { ... }"
      },
      {
        "name": "unit_cost",
        "type": "DECIMAL(10",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_cost: { ... }"
      },
      {
        "name": "supplier",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier: { ... }"
      },
      {
        "name": "monthly_usage_avg",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "monthly_usage_avg: { ... }"
      },
      {
        "name": "last_ordered",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_ordered: { ... }"
      },
      {
        "name": "lead_time_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "7",
        "sourceLine": "lead_time_days: { ... }"
      },
      {
        "name": "forecast_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "forecast_data: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('in_stock'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'in_stock'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-time-entry-js-time-entries",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "time_entries",
    "displayName": "Time Entries",
    "framework": "Sequelize",
    "sourceFile": "backend/models/TimeEntry.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "employee_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee_name: { ... }"
      },
      {
        "name": "crew_name",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_name: { ... }"
      },
      {
        "name": "client_name",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_name: { ... }"
      },
      {
        "name": "date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date: { ... }"
      },
      {
        "name": "clock_in",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clock_in: { ... }"
      },
      {
        "name": "clock_out",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clock_out: { ... }"
      },
      {
        "name": "break_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "break_minutes: { ... }"
      },
      {
        "name": "total_hours",
        "type": "DECIMAL(5",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_hours: { ... }"
      },
      {
        "name": "overtime_hours",
        "type": "DECIMAL(5",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "overtime_hours: { ... }"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL(6",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate: { ... }"
      },
      {
        "name": "total_pay",
        "type": "DECIMAL(8",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_pay: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('clocked_in'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'clocked_in'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "job_type",
        "type": "ENUM('regular'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'regular'",
        "sourceLine": "job_type: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-user-js-users",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "users",
    "displayName": "Users",
    "framework": "Sequelize",
    "sourceFile": "backend/models/User.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "email",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email: { ... }"
      },
      {
        "name": "password",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "role",
        "type": "ENUM('admin'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manager'",
        "sourceLine": "role: { ... }"
      }
    ]
  },
  {
    "id": "ai-commercial-cleaning-operations-backend-models-work-order-js-work-orders",
    "sourceProject": "AICommercialCleaningOperations",
    "name": "work_orders",
    "displayName": "Work Orders",
    "framework": "Sequelize",
    "sourceFile": "backend/models/WorkOrder.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "client_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_name: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "assigned_crew",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_crew: { ... }"
      },
      {
        "name": "type",
        "type": "ENUM('regular'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'regular'",
        "sourceLine": "type: { ... }"
      },
      {
        "name": "priority",
        "type": "ENUM('low'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('open'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "scheduled_date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date: { ... }"
      },
      {
        "name": "completed_date",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date: { ... }"
      },
      {
        "name": "estimated_hours",
        "type": "DECIMAL(5",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_hours: { ... }"
      },
      {
        "name": "actual_hours",
        "type": "DECIMAL(5",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_hours: { ... }"
      },
      {
        "name": "cost",
        "type": "DECIMAL(10",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost: { ... }"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "checklist",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "checklist: { ... }"
      },
      {
        "name": "ai_scheduling_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "ai_scheduling_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-projects-js-ai-analyses",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "ai_analyses",
    "displayName": "Ai Analyses",
    "framework": "SQL",
    "sourceFile": "server/routes/projects.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "route",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "route TEXT"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-budget-items",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "budget_items",
    "displayName": "Budget Items",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL(12,2)"
      },
      {
        "name": "actual_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "actual_cost DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planned'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-change-orders",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "change_orders",
    "displayName": "Change Orders",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "original_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_cost DECIMAL(12,2)"
      },
      {
        "name": "new_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "new_cost DECIMAL(12,2)"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT"
      },
      {
        "name": "impact_timeline",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_timeline VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "requested_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-change-order-advisor-js-change-orders",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "change_orders",
    "displayName": "Change Orders",
    "framework": "SQL",
    "sourceFile": "server/routes/changeOrderAdvisor.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload JSONB"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status TEXT DEFAULT 'draft'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-communications",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "communications",
    "displayName": "Communications",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "from_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "from_name VARCHAR(255)"
      },
      {
        "name": "to_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "to_name VARCHAR(255)"
      },
      {
        "name": "comm_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'note'",
        "sourceLine": "comm_type VARCHAR(50) DEFAULT 'note'"
      },
      {
        "name": "comm_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comm_date DATE"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'normal'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "related_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "related_to VARCHAR(255)"
      },
      {
        "name": "follow_up_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "follow_up_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-contractors",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "contractors",
    "displayName": "Contractors",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "license_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_number VARCHAR(100)"
      },
      {
        "name": "insurance_verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "insurance_verified BOOLEAN DEFAULT false"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "rating DECIMAL(3,2) DEFAULT 0"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate DECIMAL(10,2)"
      },
      {
        "name": "years_experience",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "years_experience INTEGER"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "availability_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "availability_status VARCHAR(50) DEFAULT 'available'"
      },
      {
        "name": "portfolio_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio_url VARCHAR(500)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-daily-logs",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "daily_logs",
    "displayName": "Daily Logs",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "log_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "log_date DATE NOT NULL"
      },
      {
        "name": "weather",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather VARCHAR(50)"
      },
      {
        "name": "temperature",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature VARCHAR(20)"
      },
      {
        "name": "crew_size",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crew_size INTEGER"
      },
      {
        "name": "hours_worked",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_worked DECIMAL(4,1)"
      },
      {
        "name": "work_performed",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "work_performed TEXT"
      },
      {
        "name": "issues",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issues TEXT"
      },
      {
        "name": "materials_used",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materials_used TEXT"
      },
      {
        "name": "visitor_log",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visitor_log TEXT"
      },
      {
        "name": "safety_incidents",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "safety_incidents TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-designs",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "designs",
    "displayName": "Designs",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "room_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "style",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "style VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "color_palette",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color_palette VARCHAR(500)"
      },
      {
        "name": "materials",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materials TEXT"
      },
      {
        "name": "dimensions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions VARCHAR(255)"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL(12,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'concept'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'concept'"
      },
      {
        "name": "designer_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "designer_name VARCHAR(255)"
      },
      {
        "name": "inspiration_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspiration_url VARCHAR(500)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-documents",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "documents",
    "displayName": "Documents",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(100)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "file_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_name VARCHAR(500)"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "tags",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags VARCHAR(500)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'1.0'",
        "sourceLine": "version VARCHAR(20) DEFAULT '1.0'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-budget-optimizer-overspend-flagger-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-budget-optimizer-overspend-flagger.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-contractor-recommendation-engine-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-contractor-recommendation-engine.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-contractorsupplier-marketplace-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-contractorsupplier-marketplace.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-formal-change-order-workflow-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-formal-change-order-workflow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-lien-management-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-lien-management.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-material-cost-estimator-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-material-cost-estimator.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-real-time-homeowner-update-feed-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-real-time-homeowner-update-feed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-schedule-conflict-detector-across-tra-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-schedule-conflict-detector-across-tra.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-timeline-predictor-based-on-scope-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-timeline-predictor-based-on-scope.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-vision-based-inspection-analyzer-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-vision-based-inspection-analyzer.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-gap-no-webhook-surface-js-gap-features",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-webhook-surface.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-inspections",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "inspections",
    "displayName": "Inspections",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "inspection_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "inspector_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name VARCHAR(255)"
      },
      {
        "name": "inspector_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_phone VARCHAR(50)"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE"
      },
      {
        "name": "completed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(100)"
      },
      {
        "name": "area",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area VARCHAR(255)"
      },
      {
        "name": "permit_ref",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "permit_ref VARCHAR(100)"
      },
      {
        "name": "follow_up_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "follow_up_required BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-materials",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "materials",
    "displayName": "Materials",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "quantity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity DECIMAL(10,2)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "unit_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_price DECIMAL(10,2)"
      },
      {
        "name": "total_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_cost DECIMAL(12,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'needed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'needed'"
      },
      {
        "name": "delivery_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_date DATE"
      },
      {
        "name": "room",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-payments",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "payments",
    "displayName": "Payments",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "payee_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payee_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "payment_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'progress'",
        "sourceLine": "payment_type VARCHAR(50) DEFAULT 'progress'"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(12,2)"
      },
      {
        "name": "payment_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'check'",
        "sourceLine": "payment_method VARCHAR(50) DEFAULT 'check'"
      },
      {
        "name": "payment_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_date DATE"
      },
      {
        "name": "invoice_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice_number VARCHAR(100)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-permits",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "permits",
    "displayName": "Permits",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "permit_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "permit_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "jurisdiction",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jurisdiction VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "submission_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submission_date DATE"
      },
      {
        "name": "approval_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approval_date DATE"
      },
      {
        "name": "expiration_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiration_date DATE"
      },
      {
        "name": "fee",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fee DECIMAL(10,2)"
      },
      {
        "name": "inspector_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name VARCHAR(255)"
      },
      {
        "name": "inspector_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_phone VARCHAR(50)"
      },
      {
        "name": "project_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_address VARCHAR(500)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-photos",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "photos",
    "displayName": "Photos",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "room",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room VARCHAR(100)"
      },
      {
        "name": "phase",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'before'",
        "sourceLine": "phase VARCHAR(20) DEFAULT 'before'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "photo_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photo_url VARCHAR(500)"
      },
      {
        "name": "taken_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taken_date DATE"
      },
      {
        "name": "tags",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags VARCHAR(500)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-projects",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "projects",
    "displayName": "Projects",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address VARCHAR(500)"
      },
      {
        "name": "project_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_type VARCHAR(100)"
      },
      {
        "name": "total_budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_budget DECIMAL(12,2)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planning'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planning'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "client_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_name VARCHAR(255)"
      },
      {
        "name": "client_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_phone VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-punchlist",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "punchlist",
    "displayName": "Punchlist",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "room",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room VARCHAR(100)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "reported_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-rooms",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "rooms",
    "displayName": "Rooms",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "floor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor VARCHAR(50)"
      },
      {
        "name": "room_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_type VARCHAR(100)"
      },
      {
        "name": "dimensions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions VARCHAR(100)"
      },
      {
        "name": "square_footage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "square_footage DECIMAL(10,2)"
      },
      {
        "name": "current_condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_condition VARCHAR(100)"
      },
      {
        "name": "renovation_scope",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "renovation_scope TEXT"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL(12,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'not_started'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'not_started'"
      },
      {
        "name": "assigned_contractor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_contractor VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-timeline-tasks",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "timeline_tasks",
    "displayName": "Timeline Tasks",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "task_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "phase",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phase VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "assigned_contractor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_contractor VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'not_started'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'not_started'"
      },
      {
        "name": "dependencies",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dependencies VARCHAR(500)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "completion_percentage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "completion_percentage INTEGER DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-users",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-vendors",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "vendors",
    "displayName": "Vendors",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "website",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website VARCHAR(500)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "rating DECIMAL(3,2) DEFAULT 0"
      },
      {
        "name": "payment_terms",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_terms VARCHAR(100)"
      },
      {
        "name": "delivery_speed",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_speed VARCHAR(100)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-routes-vision-progress-tracker-js-vision-progress-reports",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "vision_progress_reports",
    "displayName": "Vision Progress Reports",
    "framework": "SQL",
    "sourceFile": "server/routes/visionProgressTracker.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "project_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_id INTEGER"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-home-renovation-project-manager-server-seed-js-warranties",
    "sourceProject": "AIHomeRenovationProjectManager",
    "name": "warranties",
    "displayName": "Warranties",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "item_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "provider",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider VARCHAR(255)"
      },
      {
        "name": "warranty_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warranty_type VARCHAR(100)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "expiration_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiration_date DATE"
      },
      {
        "name": "coverage_details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverage_details TEXT"
      },
      {
        "name": "claim_process",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claim_process TEXT"
      },
      {
        "name": "contact_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone VARCHAR(50)"
      },
      {
        "name": "contact_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email VARCHAR(255)"
      },
      {
        "name": "cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost DECIMAL(10,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-activities",
    "sourceProject": "alfresco",
    "name": "activities",
    "displayName": "Activities",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "site_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_id UUID REFERENCES collaboration.sites(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "activity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "activity_summary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activity_summary TEXT"
      },
      {
        "name": "post_user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "post_user_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "object_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "object_id UUID"
      },
      {
        "name": "object_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "object_type VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-audit-entries",
    "sourceProject": "alfresco",
    "name": "audit_entries",
    "displayName": "Audit Entries",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "username",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "username VARCHAR(255)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(100) NOT NULL"
      },
      {
        "name": "resource_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_type VARCHAR(100)"
      },
      {
        "name": "resource_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_id UUID"
      },
      {
        "name": "resource_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_name VARCHAR(500)"
      },
      {
        "name": "values_before",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "values_before JSONB"
      },
      {
        "name": "values_after",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "values_after JSONB"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(50)"
      },
      {
        "name": "error_message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_message TEXT"
      },
      {
        "name": "ip_address",
        "type": "INET",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address INET"
      },
      {
        "name": "user_agent",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_agent TEXT"
      },
      {
        "name": "session_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session_id UUID"
      },
      {
        "name": "correlation_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "correlation_id UUID"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-calendars",
    "sourceProject": "alfresco",
    "name": "calendars",
    "displayName": "Calendars",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "site_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_id UUID REFERENCES collaboration.sites(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color VARCHAR(7)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-categories",
    "sourceProject": "alfresco",
    "name": "categories",
    "displayName": "Categories",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "parent_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_id UUID REFERENCES content.categories(id)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "path",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "path TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-comments",
    "sourceProject": "alfresco",
    "name": "comments",
    "displayName": "Comments",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "node_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "node_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "parent_comment_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_comment_id UUID REFERENCES content.comments(id) ON DELETE CASCADE"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT NOT NULL"
      },
      {
        "name": "author_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "edited_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "edited_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "deleted_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deleted_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-data-lists",
    "sourceProject": "alfresco",
    "name": "data_lists",
    "displayName": "Data Lists",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "site_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_id UUID REFERENCES collaboration.sites(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "item_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_type VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-discussions",
    "sourceProject": "alfresco",
    "name": "discussions",
    "displayName": "Discussions",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "site_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_id UUID REFERENCES collaboration.sites(id) ON DELETE CASCADE"
      },
      {
        "name": "topic",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "topic VARCHAR(500) NOT NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "author_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "is_pinned",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_pinned BOOLEAN DEFAULT false"
      },
      {
        "name": "is_locked",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_locked BOOLEAN DEFAULT false"
      },
      {
        "name": "views",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "views INT DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-events",
    "sourceProject": "alfresco",
    "name": "events",
    "displayName": "Events",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "calendar_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "calendar_id UUID REFERENCES collaboration.calendars(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(500)"
      },
      {
        "name": "start_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIMESTAMP NOT NULL"
      },
      {
        "name": "end_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIMESTAMP NOT NULL"
      },
      {
        "name": "all_day",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "all_day BOOLEAN DEFAULT false"
      },
      {
        "name": "recurrence_rule",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recurrence_rule TEXT"
      },
      {
        "name": "organizer_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "organizer_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "attendees",
        "type": "UUID[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attendees UUID[]"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-favorites",
    "sourceProject": "alfresco",
    "name": "favorites",
    "displayName": "Favorites",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE"
      },
      {
        "name": "node_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "node_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-file-plans",
    "sourceProject": "alfresco",
    "name": "file_plans",
    "displayName": "File Plans",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES auth.users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-groups",
    "sourceProject": "alfresco",
    "name": "groups",
    "displayName": "Groups",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "display_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "display_name VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "parent_group_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_group_id UUID REFERENCES auth.groups(id)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'custom'",
        "sourceLine": "type VARCHAR(50) DEFAULT 'custom'"
      },
      {
        "name": "metadata",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "metadata JSONB DEFAULT '{}'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-hold-records",
    "sourceProject": "alfresco",
    "name": "hold_records",
    "displayName": "Hold Records",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "hold_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hold_id UUID REFERENCES records.legal_holds(id) ON DELETE CASCADE"
      },
      {
        "name": "record_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "record_id UUID REFERENCES records.records(id) ON DELETE CASCADE"
      },
      {
        "name": "added_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "added_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "added_by UUID REFERENCES auth.users(id)"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-legal-holds",
    "sourceProject": "alfresco",
    "name": "legal_holds",
    "displayName": "Legal Holds",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "case_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "case_number VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT"
      },
      {
        "name": "legal_officer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "legal_officer VARCHAR(255)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE NOT NULL"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES auth.users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "released_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "released_at TIMESTAMP"
      },
      {
        "name": "released_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "released_by UUID REFERENCES auth.users(id)"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-links",
    "sourceProject": "alfresco",
    "name": "links",
    "displayName": "Links",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "site_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_id UUID REFERENCES collaboration.sites(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "url",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT[]"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES auth.users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-metadata-schemas",
    "sourceProject": "alfresco",
    "name": "metadata_schemas",
    "displayName": "Metadata Schemas",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "namespace",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "namespace VARCHAR(255) NOT NULL"
      },
      {
        "name": "prefix",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prefix VARCHAR(50)"
      },
      {
        "name": "schema_definition",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schema_definition JSONB NOT NULL"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-node-categories",
    "sourceProject": "alfresco",
    "name": "node_categories",
    "displayName": "Node Categories",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "node_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "node_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID REFERENCES content.categories(id) ON DELETE CASCADE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-node-tags",
    "sourceProject": "alfresco",
    "name": "node_tags",
    "displayName": "Node Tags",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "node_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "node_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "tag_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tag_id UUID REFERENCES content.tags(id) ON DELETE CASCADE"
      },
      {
        "name": "tagged_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tagged_by UUID REFERENCES auth.users(id)"
      },
      {
        "name": "tagged_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "tagged_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-nodes",
    "sourceProject": "alfresco",
    "name": "nodes",
    "displayName": "Nodes",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "parent_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "node_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "node_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "mime_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mime_type VARCHAR(255)"
      },
      {
        "name": "content_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content_url TEXT"
      },
      {
        "name": "content_size",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content_size BIGINT"
      },
      {
        "name": "content_hash",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content_hash VARCHAR(255)"
      },
      {
        "name": "encoding",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "encoding VARCHAR(50)"
      },
      {
        "name": "locale",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locale VARCHAR(10)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author VARCHAR(255)"
      },
      {
        "name": "creator_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creator_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "modifier_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "modifier_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "owner_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "is_locked",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_locked BOOLEAN DEFAULT false"
      },
      {
        "name": "lock_owner_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lock_owner_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "lock_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lock_type VARCHAR(50)"
      },
      {
        "name": "lock_expires_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lock_expires_at TIMESTAMP"
      },
      {
        "name": "version_label",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version_label VARCHAR(50)"
      },
      {
        "name": "is_major_version",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_major_version BOOLEAN DEFAULT true"
      },
      {
        "name": "is_latest_version",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_latest_version BOOLEAN DEFAULT true"
      },
      {
        "name": "properties",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "properties JSONB DEFAULT '{}'"
      },
      {
        "name": "aspects",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "aspects JSONB DEFAULT '[]'"
      },
      {
        "name": "permissions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "permissions JSONB DEFAULT '{}'"
      },
      {
        "name": "path",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "path TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "modified_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "accessed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "deleted_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deleted_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-permissions",
    "sourceProject": "alfresco",
    "name": "permissions",
    "displayName": "Permissions",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "resource",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource VARCHAR(255) NOT NULL"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-process-definitions",
    "sourceProject": "alfresco",
    "name": "process_definitions",
    "displayName": "Process Definitions",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "version",
        "type": "INT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version INT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "deployment_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deployment_id VARCHAR(255)"
      },
      {
        "name": "resource_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_name VARCHAR(255)"
      },
      {
        "name": "diagram_resource_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "diagram_resource_name VARCHAR(255)"
      },
      {
        "name": "has_start_form",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "has_start_form BOOLEAN DEFAULT false"
      },
      {
        "name": "has_graphical_notation",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "has_graphical_notation BOOLEAN DEFAULT true"
      },
      {
        "name": "is_suspended",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_suspended BOOLEAN DEFAULT false"
      },
      {
        "name": "tenant_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tenant_id VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-process-instances",
    "sourceProject": "alfresco",
    "name": "process_instances",
    "displayName": "Process Instances",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "process_definition_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "process_definition_id UUID REFERENCES workflow.process_definitions(id)"
      },
      {
        "name": "business_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "business_key VARCHAR(255)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "start_user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_user_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "start_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "end_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIMESTAMP"
      },
      {
        "name": "duration",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration BIGINT"
      },
      {
        "name": "variables",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "variables JSONB DEFAULT '{}'"
      },
      {
        "name": "state",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "state VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "tenant_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tenant_id VARCHAR(255)"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-ratings",
    "sourceProject": "alfresco",
    "name": "ratings",
    "displayName": "Ratings",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "node_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "node_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "rating",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating INT CHECK (rating >= 1 AND rating <= 5)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-record-categories",
    "sourceProject": "alfresco",
    "name": "record_categories",
    "displayName": "Record Categories",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "parent_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_id UUID REFERENCES records.record_categories(id)"
      },
      {
        "name": "file_plan_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_plan_id UUID REFERENCES records.file_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "identifier",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "identifier VARCHAR(100) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "disposition_authority",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "disposition_authority TEXT"
      },
      {
        "name": "vital_record_indicator",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "vital_record_indicator BOOLEAN DEFAULT false"
      },
      {
        "name": "path",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "path TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-records",
    "sourceProject": "alfresco",
    "name": "records",
    "displayName": "Records",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "node_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "node_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID REFERENCES records.record_categories(id)"
      },
      {
        "name": "identifier",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "identifier VARCHAR(100) UNIQUE NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "date_filed",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "date_filed TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "originator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "originator VARCHAR(255)"
      },
      {
        "name": "originating_organization",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "originating_organization VARCHAR(255)"
      },
      {
        "name": "publication_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "publication_date DATE"
      },
      {
        "name": "cutoff_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cutoff_date DATE"
      },
      {
        "name": "retention_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retention_date DATE"
      },
      {
        "name": "disposition_action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "disposition_action VARCHAR(50)"
      },
      {
        "name": "disposition_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "disposition_date DATE"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(500)"
      },
      {
        "name": "media_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "media_type VARCHAR(100)"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(100)"
      },
      {
        "name": "is_vital_record",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_vital_record BOOLEAN DEFAULT false"
      },
      {
        "name": "review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review_date DATE"
      },
      {
        "name": "is_obsolete",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_obsolete BOOLEAN DEFAULT false"
      },
      {
        "name": "is_superseded",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_superseded BOOLEAN DEFAULT false"
      },
      {
        "name": "superseded_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "superseded_by UUID REFERENCES records.records(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "closed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "closed_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-retention-schedules",
    "sourceProject": "alfresco",
    "name": "retention_schedules",
    "displayName": "Retention Schedules",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID REFERENCES records.record_categories(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "retention_period_value",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retention_period_value INT"
      },
      {
        "name": "retention_period_unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retention_period_unit VARCHAR(20)"
      },
      {
        "name": "retention_trigger",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retention_trigger VARCHAR(50)"
      },
      {
        "name": "disposition_action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "disposition_action VARCHAR(50)"
      },
      {
        "name": "disposition_instructions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "disposition_instructions TEXT"
      },
      {
        "name": "is_permanent",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_permanent BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-role-permissions",
    "sourceProject": "alfresco",
    "name": "role_permissions",
    "displayName": "Role Permissions",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "role_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role_id UUID REFERENCES auth.roles(id) ON DELETE CASCADE"
      },
      {
        "name": "permission_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "permission_id UUID REFERENCES auth.permissions(id) ON DELETE CASCADE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-roles",
    "sourceProject": "alfresco",
    "name": "roles",
    "displayName": "Roles",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "display_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "display_name VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "is_system",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_system BOOLEAN DEFAULT false"
      },
      {
        "name": "metadata",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "metadata JSONB DEFAULT '{}'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-rules",
    "sourceProject": "alfresco",
    "name": "rules",
    "displayName": "Rules",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "folder_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "folder_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "is_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_enabled BOOLEAN DEFAULT true"
      },
      {
        "name": "triggers",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "triggers JSONB NOT NULL"
      },
      {
        "name": "conditions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "conditions JSONB DEFAULT '[]'"
      },
      {
        "name": "actions",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actions JSONB NOT NULL"
      },
      {
        "name": "is_async",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_async BOOLEAN DEFAULT false"
      },
      {
        "name": "apply_to_children",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "apply_to_children BOOLEAN DEFAULT false"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES auth.users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-sessions",
    "sourceProject": "alfresco",
    "name": "sessions",
    "displayName": "Sessions",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE"
      },
      {
        "name": "token",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "token VARCHAR(500) UNIQUE NOT NULL"
      },
      {
        "name": "refresh_token",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "refresh_token VARCHAR(500)"
      },
      {
        "name": "device_info",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "device_info JSONB"
      },
      {
        "name": "ip_address",
        "type": "INET",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address INET"
      },
      {
        "name": "user_agent",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_agent TEXT"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "refresh_expires_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "refresh_expires_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "last_accessed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "last_accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-site-members",
    "sourceProject": "alfresco",
    "name": "site_members",
    "displayName": "Site Members",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "site_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_id UUID REFERENCES collaboration.sites(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(50) NOT NULL"
      },
      {
        "name": "joined_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-sites",
    "sourceProject": "alfresco",
    "name": "sites",
    "displayName": "Sites",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "short_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "short_name VARCHAR(100) UNIQUE NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "visibility",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'private'",
        "sourceLine": "visibility VARCHAR(20) DEFAULT 'private'"
      },
      {
        "name": "preset",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'site-dashboard'",
        "sourceLine": "preset VARCHAR(50) DEFAULT 'site-dashboard'"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES auth.users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-system-logs",
    "sourceProject": "alfresco",
    "name": "system_logs",
    "displayName": "System Logs",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "level",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "level VARCHAR(20) NOT NULL"
      },
      {
        "name": "logger",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logger VARCHAR(255)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "error_stack",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_stack TEXT"
      },
      {
        "name": "metadata",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-tags",
    "sourceProject": "alfresco",
    "name": "tags",
    "displayName": "Tags",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color VARCHAR(7)"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES auth.users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-tasks",
    "sourceProject": "alfresco",
    "name": "tasks",
    "displayName": "Tasks",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "process_instance_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "process_instance_id UUID REFERENCES workflow.process_instances(id) ON DELETE CASCADE"
      },
      {
        "name": "process_definition_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "process_definition_id UUID REFERENCES workflow.process_definitions(id)"
      },
      {
        "name": "task_definition_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task_definition_key VARCHAR(255)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "assignee_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignee_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "owner_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "candidate_users",
        "type": "UUID[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidate_users UUID[]"
      },
      {
        "name": "candidate_groups",
        "type": "UUID[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidate_groups UUID[]"
      },
      {
        "name": "priority",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "priority INT DEFAULT 50"
      },
      {
        "name": "due_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date TIMESTAMP"
      },
      {
        "name": "follow_up_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "follow_up_date TIMESTAMP"
      },
      {
        "name": "delegation_state",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delegation_state VARCHAR(50)"
      },
      {
        "name": "form_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "form_key VARCHAR(255)"
      },
      {
        "name": "variables",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "variables JSONB DEFAULT '{}'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "claimed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claimed_at TIMESTAMP"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP"
      },
      {
        "name": "duration",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration BIGINT"
      },
      {
        "name": "state",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "state VARCHAR(50) DEFAULT 'active'"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-thumbnails",
    "sourceProject": "alfresco",
    "name": "thumbnails",
    "displayName": "Thumbnails",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "node_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "node_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "mime_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mime_type VARCHAR(255)"
      },
      {
        "name": "content_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content_url TEXT"
      },
      {
        "name": "width",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "width INT"
      },
      {
        "name": "height",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "height INT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-user-groups",
    "sourceProject": "alfresco",
    "name": "user_groups",
    "displayName": "User Groups",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE"
      },
      {
        "name": "group_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "group_id UUID REFERENCES auth.groups(id) ON DELETE CASCADE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-user-roles",
    "sourceProject": "alfresco",
    "name": "user_roles",
    "displayName": "User Roles",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE"
      },
      {
        "name": "role_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role_id UUID REFERENCES auth.roles(id) ON DELETE CASCADE"
      },
      {
        "name": "scope",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scope VARCHAR(255)"
      },
      {
        "name": "scope_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scope_id UUID"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-users",
    "sourceProject": "alfresco",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "username",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "username VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(255)"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(255)"
      },
      {
        "name": "display_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "display_name VARCHAR(255)"
      },
      {
        "name": "avatar_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar_url TEXT"
      },
      {
        "name": "locale",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'en_US'",
        "sourceLine": "locale VARCHAR(10) DEFAULT 'en_US'"
      },
      {
        "name": "timezone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'UTC'",
        "sourceLine": "timezone VARCHAR(50) DEFAULT 'UTC'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "email_verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "email_verified BOOLEAN DEFAULT false"
      },
      {
        "name": "two_factor_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "two_factor_enabled BOOLEAN DEFAULT false"
      },
      {
        "name": "two_factor_secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "two_factor_secret VARCHAR(255)"
      },
      {
        "name": "last_login_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_login_at TIMESTAMP"
      },
      {
        "name": "password_changed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_changed_at TIMESTAMP"
      },
      {
        "name": "locked_until",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locked_until TIMESTAMP"
      },
      {
        "name": "failed_login_attempts",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "failed_login_attempts INT DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "deleted_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deleted_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-versions",
    "sourceProject": "alfresco",
    "name": "versions",
    "displayName": "Versions",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "node_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "node_id UUID REFERENCES content.nodes(id) ON DELETE CASCADE"
      },
      {
        "name": "version_number",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version_number DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "version_label",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version_label VARCHAR(50)"
      },
      {
        "name": "is_major_version",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_major_version BOOLEAN DEFAULT false"
      },
      {
        "name": "comment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comment TEXT"
      },
      {
        "name": "content_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content_url TEXT"
      },
      {
        "name": "content_size",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content_size BIGINT"
      },
      {
        "name": "content_hash",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content_hash VARCHAR(255)"
      },
      {
        "name": "properties",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "properties JSONB DEFAULT '{}'"
      },
      {
        "name": "creator_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creator_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "alfresco-alfresco-ecm-init-scripts-postgres-01-init-database-sql-wiki-pages",
    "sourceProject": "alfresco",
    "name": "wiki_pages",
    "displayName": "Wiki Pages",
    "framework": "SQL",
    "sourceFile": "alfresco-ecm/init-scripts/postgres/01-init-database.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "site_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_id UUID REFERENCES collaboration.sites(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "version",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "version INT DEFAULT 1"
      },
      {
        "name": "author_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author_id UUID REFERENCES auth.users(id)"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT[]"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-agreement-plan",
    "sourceProject": "homeServices_salesforce",
    "name": "AgreementPlan",
    "displayName": "Agreement Plan",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String    // Bronze, Silver, Gold"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "tradeType",
        "type": "TradeType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tradeType     TradeType"
      },
      {
        "name": "monthlyPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyPrice  Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "annualPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annualPrice   Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "visitsIncluded",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "visitsIncluded Int      @default(1)"
      },
      {
        "name": "discountPct",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discountPct   Decimal   @db.Decimal(5, 2) @default(0)"
      },
      {
        "name": "priorityService",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "priorityService Boolean @default(false)"
      },
      {
        "name": "noDiagnosticFee",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "noDiagnosticFee Boolean @default(false)"
      },
      {
        "name": "includedServices",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "includedServices String[]"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "company",
        "type": "Company",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company       Company   @relation(fields: [companyId], references: [id])"
      },
      {
        "name": "companyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId     String"
      },
      {
        "name": "agreements",
        "type": "ServiceAgreement[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agreements    ServiceAgreement[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-agreement-plan",
    "sourceProject": "homeServices_salesforce",
    "name": "AgreementPlan",
    "displayName": "\"Agreement Plan\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT"
      },
      {
        "name": "monthlyPrice",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"monthlyPrice\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "annualPrice",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"annualPrice\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "visitsIncluded",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "\"visitsIncluded\" INTEGER NOT NULL DEFAULT 1"
      },
      {
        "name": "discountPct",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"discountPct\" DECIMAL(5,2) NOT NULL DEFAULT 0"
      },
      {
        "name": "priorityService",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"priorityService\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "noDiagnosticFee",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"noDiagnosticFee\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "includedServices",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"includedServices\" TEXT[]"
      },
      {
        "name": "isActive",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "\"isActive\" BOOLEAN NOT NULL DEFAULT true"
      },
      {
        "name": "companyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"companyId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-ai-result",
    "sourceProject": "homeServices_salesforce",
    "name": "AIResult",
    "displayName": "AI Result",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "feature",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature       String    // diagnostics, optimize-dispatch, optimize-route, etc."
      },
      {
        "name": "model",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model         String    // anthropic/claude-3-5-sonnet-20241022"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId        String?"
      },
      {
        "name": "companyId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId     String?"
      },
      {
        "name": "jobId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId         String?"
      },
      {
        "name": "customerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId    String?"
      },
      {
        "name": "input",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input         Json      // sanitised inputs"
      },
      {
        "name": "output",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output        Json      // parsed model output"
      },
      {
        "name": "durationMs",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "durationMs    Int?"
      },
      {
        "name": "success",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "success       Boolean   @default(true)"
      },
      {
        "name": "errorMessage",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "errorMessage  String?"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-communication",
    "sourceProject": "homeServices_salesforce",
    "name": "Communication",
    "displayName": "Communication",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String            @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "CommunicationType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          CommunicationType"
      },
      {
        "name": "direction",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "direction     String            // inbound, outbound"
      },
      {
        "name": "subject",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject       String?"
      },
      {
        "name": "message",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message       String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"sent\"",
        "sourceLine": "status        String            @default(\"sent\")"
      },
      {
        "name": "sentAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "sentAt        DateTime          @default(now())"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer      Customer          @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId    String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-communication",
    "sourceProject": "homeServices_salesforce",
    "name": "Communication",
    "displayName": "\"Communication\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "direction",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"direction\" TEXT NOT NULL"
      },
      {
        "name": "subject",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"subject\" TEXT"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"message\" TEXT"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'sent'",
        "sourceLine": "\"status\" TEXT NOT NULL DEFAULT 'sent'"
      },
      {
        "name": "sentAt",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "\"sentAt\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "customerId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"customerId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-company",
    "sourceProject": "homeServices_salesforce",
    "name": "Company",
    "displayName": "Company",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "website",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website       String?"
      },
      {
        "name": "logo",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo          String?"
      },
      {
        "name": "timezone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"America/New_York\"",
        "sourceLine": "timezone      String    @default(\"America/New_York\")"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address       String?"
      },
      {
        "name": "city",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city          String?"
      },
      {
        "name": "state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state         String?"
      },
      {
        "name": "zip",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zip           String?"
      },
      {
        "name": "licenseNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "licenseNumber String?"
      },
      {
        "name": "serviceArea",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceArea   String[]  // ZIP codes or city names"
      },
      {
        "name": "users",
        "type": "User[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "users         User[]"
      },
      {
        "name": "customers",
        "type": "Customer[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customers     Customer[]"
      },
      {
        "name": "jobs",
        "type": "Job[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobs          Job[]"
      },
      {
        "name": "trucks",
        "type": "Truck[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trucks        Truck[]"
      },
      {
        "name": "parts",
        "type": "Part[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parts         Part[]"
      },
      {
        "name": "pricebookItems",
        "type": "PricebookItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pricebookItems PricebookItem[]"
      },
      {
        "name": "serviceTypes",
        "type": "ServiceType[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceTypes  ServiceType[]"
      },
      {
        "name": "agreementPlans",
        "type": "AgreementPlan[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agreementPlans AgreementPlan[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-company",
    "sourceProject": "homeServices_salesforce",
    "name": "Company",
    "displayName": "\"Company\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "phone",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"phone\" TEXT"
      },
      {
        "name": "email",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"email\" TEXT"
      },
      {
        "name": "website",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"website\" TEXT"
      },
      {
        "name": "logo",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"logo\" TEXT"
      },
      {
        "name": "timezone",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'America/New_York'",
        "sourceLine": "\"timezone\" TEXT NOT NULL DEFAULT 'America/New_York'"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"address\" TEXT"
      },
      {
        "name": "city",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"city\" TEXT"
      },
      {
        "name": "state",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"state\" TEXT"
      },
      {
        "name": "zip",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"zip\" TEXT"
      },
      {
        "name": "licenseNumber",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"licenseNumber\" TEXT"
      },
      {
        "name": "serviceArea",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"serviceArea\" TEXT[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-customer",
    "sourceProject": "homeServices_salesforce",
    "name": "Customer",
    "displayName": "Customer",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String        @id @default(cuid())"
      },
      {
        "name": "customerNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "customerNumber String       @unique"
      },
      {
        "name": "type",
        "type": "CustomerType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "RESIDENTIAL",
        "sourceLine": "type          CustomerType  @default(RESIDENTIAL)"
      },
      {
        "name": "status",
        "type": "CustomerStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status        CustomerStatus @default(ACTIVE)"
      },
      {
        "name": "firstName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String?"
      },
      {
        "name": "lastName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String?"
      },
      {
        "name": "companyName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyName   String?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "mobile",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mobile        String?"
      },
      {
        "name": "preferredContact",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"phone\"",
        "sourceLine": "preferredContact String?   @default(\"phone\")"
      },
      {
        "name": "billingAddress",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingAddress String?"
      },
      {
        "name": "billingCity",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingCity   String?"
      },
      {
        "name": "billingState",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingState  String?"
      },
      {
        "name": "billingZip",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingZip    String?"
      },
      {
        "name": "referralSource",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referralSource String?"
      },
      {
        "name": "referredBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referredBy    String?"
      },
      {
        "name": "doNotCall",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "doNotCall     Boolean       @default(false)"
      },
      {
        "name": "doNotEmail",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "doNotEmail    Boolean       @default(false)"
      },
      {
        "name": "doNotText",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "doNotText     Boolean       @default(false)"
      },
      {
        "name": "stripeCustomerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeCustomerId String?    // Stripe customer ID for saved payment methods"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "tags",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags          String[]"
      },
      {
        "name": "company",
        "type": "Company",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company       Company       @relation(fields: [companyId], references: [id])"
      },
      {
        "name": "companyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId     String"
      },
      {
        "name": "properties",
        "type": "Property[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "properties    Property[]"
      },
      {
        "name": "jobs",
        "type": "Job[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobs          Job[]"
      },
      {
        "name": "estimates",
        "type": "Estimate[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimates     Estimate[]"
      },
      {
        "name": "invoices",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices      Invoice[]"
      },
      {
        "name": "agreements",
        "type": "ServiceAgreement[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agreements    ServiceAgreement[]"
      },
      {
        "name": "communications",
        "type": "Communication[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "communications Communication[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-customer",
    "sourceProject": "homeServices_salesforce",
    "name": "Customer",
    "displayName": "\"Customer\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "customerNumber",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"customerNumber\" TEXT NOT NULL"
      },
      {
        "name": "firstName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"firstName\" TEXT"
      },
      {
        "name": "lastName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lastName\" TEXT"
      },
      {
        "name": "companyName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"companyName\" TEXT"
      },
      {
        "name": "email",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"email\" TEXT"
      },
      {
        "name": "phone",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"phone\" TEXT"
      },
      {
        "name": "mobile",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"mobile\" TEXT"
      },
      {
        "name": "preferredContact",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'phone'",
        "sourceLine": "\"preferredContact\" TEXT DEFAULT 'phone'"
      },
      {
        "name": "billingAddress",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"billingAddress\" TEXT"
      },
      {
        "name": "billingCity",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"billingCity\" TEXT"
      },
      {
        "name": "billingState",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"billingState\" TEXT"
      },
      {
        "name": "billingZip",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"billingZip\" TEXT"
      },
      {
        "name": "referralSource",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"referralSource\" TEXT"
      },
      {
        "name": "referredBy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"referredBy\" TEXT"
      },
      {
        "name": "doNotCall",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"doNotCall\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "doNotEmail",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"doNotEmail\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "doNotText",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"doNotText\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"tags\" TEXT[]"
      },
      {
        "name": "companyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"companyId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-equipment",
    "sourceProject": "homeServices_salesforce",
    "name": "Equipment",
    "displayName": "Equipment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "EquipmentType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          EquipmentType"
      },
      {
        "name": "brand",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand         String?"
      },
      {
        "name": "model",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model         String?"
      },
      {
        "name": "serialNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serialNumber  String?"
      },
      {
        "name": "installDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "installDate   DateTime?"
      },
      {
        "name": "installedBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "installedBy   String?"
      },
      {
        "name": "warrantyExpires",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warrantyExpires DateTime?"
      },
      {
        "name": "warrantyNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warrantyNotes String?"
      },
      {
        "name": "location",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location      String?   // Basement, Attic, Garage, etc."
      },
      {
        "name": "specs",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specs         Json?     // SEER rating, BTU, tonnage, etc."
      },
      {
        "name": "lastServiceDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastServiceDate DateTime?"
      },
      {
        "name": "nextServiceDue",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nextServiceDue DateTime?"
      },
      {
        "name": "photos",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photos        String[]"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "property",
        "type": "Property",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property      Property  @relation(fields: [propertyId], references: [id])"
      },
      {
        "name": "propertyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyId    String"
      },
      {
        "name": "serviceHistory",
        "type": "ServiceHistory[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceHistory ServiceHistory[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-equipment",
    "sourceProject": "homeServices_salesforce",
    "name": "Equipment",
    "displayName": "\"Equipment\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "brand",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"brand\" TEXT"
      },
      {
        "name": "model",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"model\" TEXT"
      },
      {
        "name": "serialNumber",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"serialNumber\" TEXT"
      },
      {
        "name": "installDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"installDate\" TIMESTAMP(3)"
      },
      {
        "name": "installedBy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"installedBy\" TEXT"
      },
      {
        "name": "warrantyExpires",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"warrantyExpires\" TIMESTAMP(3)"
      },
      {
        "name": "warrantyNotes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"warrantyNotes\" TEXT"
      },
      {
        "name": "location",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"location\" TEXT"
      },
      {
        "name": "specs",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"specs\" JSONB"
      },
      {
        "name": "lastServiceDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lastServiceDate\" TIMESTAMP(3)"
      },
      {
        "name": "nextServiceDue",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"nextServiceDue\" TIMESTAMP(3)"
      },
      {
        "name": "photos",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"photos\" TEXT[]"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "propertyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"propertyId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-estimate",
    "sourceProject": "homeServices_salesforce",
    "name": "Estimate",
    "displayName": "Estimate",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String        @id @default(cuid())"
      },
      {
        "name": "estimateNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "estimateNumber  String        @unique"
      },
      {
        "name": "status",
        "type": "EstimateStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          EstimateStatus @default(DRAFT)"
      },
      {
        "name": "createdDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "createdDate     DateTime      @default(now())"
      },
      {
        "name": "expirationDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expirationDate  DateTime?"
      },
      {
        "name": "approvedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedAt      DateTime?"
      },
      {
        "name": "options",
        "type": "EstimateOption[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "options         EstimateOption[]"
      },
      {
        "name": "selectedOption",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "selectedOption  String?       // good, better, best"
      },
      {
        "name": "subtotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal        Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "taxAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxAmount       Decimal       @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "totalAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount     Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "signatureFile",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signatureFile   String?"
      },
      {
        "name": "signedBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signedBy        String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "terms",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terms           String?"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer      @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "job",
        "type": "Job?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job             Job?          @relation(fields: [jobId], references: [id])"
      },
      {
        "name": "jobId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId           String?"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-estimate",
    "sourceProject": "homeServices_salesforce",
    "name": "Estimate",
    "displayName": "\"Estimate\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "estimateNumber",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"estimateNumber\" TEXT NOT NULL"
      },
      {
        "name": "createdDate",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "\"createdDate\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "expirationDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"expirationDate\" TIMESTAMP(3)"
      },
      {
        "name": "approvedAt",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"approvedAt\" TIMESTAMP(3)"
      },
      {
        "name": "selectedOption",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"selectedOption\" TEXT"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"subtotal\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "taxAmount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"taxAmount\" DECIMAL(10,2) NOT NULL DEFAULT 0"
      },
      {
        "name": "totalAmount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalAmount\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "signatureFile",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"signatureFile\" TEXT"
      },
      {
        "name": "signedBy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"signedBy\" TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"terms\" TEXT"
      },
      {
        "name": "customerId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"customerId\" TEXT NOT NULL"
      },
      {
        "name": "jobId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"jobId\" TEXT"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-estimate-line-item",
    "sourceProject": "homeServices_salesforce",
    "name": "EstimateLineItem",
    "displayName": "Estimate Line Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String"
      },
      {
        "name": "quantity",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity      Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "unitPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice     Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "totalPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalPrice    Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category      String?   // Labor, Parts, Equipment, etc."
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder     Int       @default(0)"
      },
      {
        "name": "isOptional",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isOptional    Boolean   @default(false)"
      },
      {
        "name": "option",
        "type": "EstimateOption",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "option        EstimateOption @relation(fields: [optionId], references: [id])"
      },
      {
        "name": "optionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "optionId      String"
      },
      {
        "name": "pricebookItem",
        "type": "PricebookItem?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pricebookItem PricebookItem? @relation(fields: [pricebookItemId], references: [id])"
      },
      {
        "name": "pricebookItemId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pricebookItemId String?"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-estimate-line-item",
    "sourceProject": "homeServices_salesforce",
    "name": "EstimateLineItem",
    "displayName": "\"Estimate Line Item\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT NOT NULL"
      },
      {
        "name": "quantity",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"quantity\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "unitPrice",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"unitPrice\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "totalPrice",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalPrice\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"category\" TEXT"
      },
      {
        "name": "sortOrder",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"sortOrder\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "isOptional",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"isOptional\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "optionId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"optionId\" TEXT NOT NULL"
      },
      {
        "name": "pricebookItemId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"pricebookItemId\" TEXT"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-estimate-option",
    "sourceProject": "homeServices_salesforce",
    "name": "EstimateOption",
    "displayName": "Estimate Option",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String        @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String        // Good, Better, Best, or custom"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder     Int           @default(0)"
      },
      {
        "name": "subtotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal      Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "taxAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxAmount     Decimal       @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "totalAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount   Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "isRecommended",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRecommended Boolean       @default(false)"
      },
      {
        "name": "estimate",
        "type": "Estimate",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimate      Estimate      @relation(fields: [estimateId], references: [id])"
      },
      {
        "name": "estimateId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimateId    String"
      },
      {
        "name": "lineItems",
        "type": "EstimateLineItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lineItems     EstimateLineItem[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-estimate-option",
    "sourceProject": "homeServices_salesforce",
    "name": "EstimateOption",
    "displayName": "\"Estimate Option\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT"
      },
      {
        "name": "sortOrder",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"sortOrder\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"subtotal\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "taxAmount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"taxAmount\" DECIMAL(10,2) NOT NULL DEFAULT 0"
      },
      {
        "name": "totalAmount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalAmount\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "isRecommended",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"isRecommended\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "estimateId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"estimateId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-technician-timesheet-payroll-exports-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-technician-timesheet-payroll-exports/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-technician-safety-quality-real-time-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-technician-safety-quality-real-time/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-sms-notifications-backend-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-sms-notifications-backend/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-real-time-multi-tech-job-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-real-time-multi-tech-job/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-quickbooks-bidirectional-sync-only-documented-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-quickbooks-bidirectional-sync-only-documented/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-post-job-feedback-nps-ai-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-post-job-feedback-nps-ai/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-parts-auto-replenish-ai-predictive-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-parts-auto-replenish-ai-predictive/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-marketplace-for-sub-contractors-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-marketplace-for-sub-contractors/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-fuel-card-fleet-card-integrations-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-fuel-card-fleet-card-integrations/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-fleet-gps-tracking-despite-trucks-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-fleet-gps-tracking-despite-trucks/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-competitor-pricing-intelligence-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-competitor-pricing-intelligence/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-src-app-api-gap-no-automated-warranty-claim-processing-route-ts-gap-features",
    "sourceProject": "homeServices_salesforce",
    "name": "gap_features",
    "displayName": "\"Gap Features\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/gap-no-automated-warranty-claim-processing/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"slug\" TEXT NOT NULL"
      },
      {
        "name": "section",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"section\" TEXT NOT NULL"
      },
      {
        "name": "label",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"label\" TEXT NOT NULL"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"payload\" JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"result\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-invoice",
    "sourceProject": "homeServices_salesforce",
    "name": "Invoice",
    "displayName": "Invoice",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String        @id @default(cuid())"
      },
      {
        "name": "invoiceNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "invoiceNumber   String        @unique"
      },
      {
        "name": "status",
        "type": "InvoiceStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          InvoiceStatus @default(DRAFT)"
      },
      {
        "name": "issueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "issueDate       DateTime      @default(now())"
      },
      {
        "name": "dueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime"
      },
      {
        "name": "paidDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paidDate        DateTime?"
      },
      {
        "name": "subtotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal        Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "taxRate",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxRate         Decimal       @db.Decimal(5, 4) @default(0)"
      },
      {
        "name": "taxAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxAmount       Decimal       @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "totalAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount     Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "paidAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "paidAmount      Decimal       @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "balanceDue",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "balanceDue      Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "terms",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terms           String?"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer      @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "job",
        "type": "Job?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job             Job?          @relation(fields: [jobId], references: [id])"
      },
      {
        "name": "jobId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId           String?"
      },
      {
        "name": "lineItems",
        "type": "InvoiceLineItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lineItems       InvoiceLineItem[]"
      },
      {
        "name": "payments",
        "type": "Payment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payments        Payment[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-invoice",
    "sourceProject": "homeServices_salesforce",
    "name": "Invoice",
    "displayName": "\"Invoice\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "invoiceNumber",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"invoiceNumber\" TEXT NOT NULL"
      },
      {
        "name": "issueDate",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "\"issueDate\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "dueDate",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"dueDate\" TIMESTAMP(3) NOT NULL"
      },
      {
        "name": "paidDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"paidDate\" TIMESTAMP(3)"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"subtotal\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "taxRate",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"taxRate\" DECIMAL(5,4) NOT NULL DEFAULT 0"
      },
      {
        "name": "taxAmount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"taxAmount\" DECIMAL(10,2) NOT NULL DEFAULT 0"
      },
      {
        "name": "totalAmount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalAmount\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "paidAmount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"paidAmount\" DECIMAL(10,2) NOT NULL DEFAULT 0"
      },
      {
        "name": "balanceDue",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"balanceDue\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"terms\" TEXT"
      },
      {
        "name": "customerId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"customerId\" TEXT NOT NULL"
      },
      {
        "name": "jobId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"jobId\" TEXT"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-invoice-line-item",
    "sourceProject": "homeServices_salesforce",
    "name": "InvoiceLineItem",
    "displayName": "Invoice Line Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String"
      },
      {
        "name": "quantity",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity      Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "unitPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice     Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "totalPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalPrice    Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category      String?   // Labor, Parts, etc."
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder     Int       @default(0)"
      },
      {
        "name": "invoice",
        "type": "Invoice",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice       Invoice   @relation(fields: [invoiceId], references: [id])"
      },
      {
        "name": "invoiceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceId     String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-invoice-line-item",
    "sourceProject": "homeServices_salesforce",
    "name": "InvoiceLineItem",
    "displayName": "\"Invoice Line Item\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT NOT NULL"
      },
      {
        "name": "quantity",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"quantity\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "unitPrice",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"unitPrice\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "totalPrice",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalPrice\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"category\" TEXT"
      },
      {
        "name": "sortOrder",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"sortOrder\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "invoiceId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"invoiceId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-job",
    "sourceProject": "homeServices_salesforce",
    "name": "Job",
    "displayName": "Job",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String      @id @default(cuid())"
      },
      {
        "name": "jobNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "jobNumber     String      @unique"
      },
      {
        "name": "status",
        "type": "JobStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status        JobStatus   @default(PENDING)"
      },
      {
        "name": "priority",
        "type": "Priority",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NORMAL",
        "sourceLine": "priority      Priority    @default(NORMAL)"
      },
      {
        "name": "type",
        "type": "JobType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "SERVICE_CALL",
        "sourceLine": "type          JobType     @default(SERVICE_CALL)"
      },
      {
        "name": "tradeType",
        "type": "TradeType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tradeType     TradeType"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title         String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "customerPO",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerPO    String?     // Customer's PO number"
      },
      {
        "name": "scheduledStart",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledStart DateTime?"
      },
      {
        "name": "scheduledEnd",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledEnd  DateTime?"
      },
      {
        "name": "actualStart",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actualStart   DateTime?"
      },
      {
        "name": "actualEnd",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actualEnd     DateTime?"
      },
      {
        "name": "estimatedDuration",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedDuration Int?    // minutes"
      },
      {
        "name": "timeWindowStart",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeWindowStart String?   // \"8:00 AM\""
      },
      {
        "name": "timeWindowEnd",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeWindowEnd String?     // \"12:00 PM\""
      },
      {
        "name": "propertyId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyId    String?"
      },
      {
        "name": "source",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source        String?     // Phone, Web, Referral, etc."
      },
      {
        "name": "leadId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leadId        String?"
      },
      {
        "name": "estimatedAmount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedAmount Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "actualAmount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actualAmount  Decimal?    @db.Decimal(10, 2)"
      },
      {
        "name": "workPerformed",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "workPerformed String?"
      },
      {
        "name": "customerSignature",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerSignature String?"
      },
      {
        "name": "completedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedAt   DateTime?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "tags",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags          String[]"
      },
      {
        "name": "portalToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "portalToken   String?     @unique"
      },
      {
        "name": "company",
        "type": "Company",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company       Company     @relation(fields: [companyId], references: [id])"
      },
      {
        "name": "companyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId     String"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer      Customer    @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId    String"
      },
      {
        "name": "property",
        "type": "Property?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property      Property?   @relation(fields: [propertyId], references: [id])"
      },
      {
        "name": "serviceType",
        "type": "ServiceType?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceType   ServiceType? @relation(fields: [serviceTypeId], references: [id])"
      },
      {
        "name": "serviceTypeId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceTypeId String?"
      },
      {
        "name": "createdBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdBy     User        @relation(\"CreatedByUser\", fields: [createdById], references: [id])"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById   String"
      },
      {
        "name": "assignments",
        "type": "JobAssignment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignments   JobAssignment[]"
      },
      {
        "name": "timeEntries",
        "type": "TimeEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeEntries   TimeEntry[]"
      },
      {
        "name": "photos",
        "type": "JobPhoto[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photos        JobPhoto[]"
      },
      {
        "name": "partsUsed",
        "type": "JobPart[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partsUsed     JobPart[]"
      },
      {
        "name": "serviceHistory",
        "type": "ServiceHistory[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceHistory ServiceHistory[]"
      },
      {
        "name": "estimates",
        "type": "Estimate[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimates     Estimate[]"
      },
      {
        "name": "invoices",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices      Invoice[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-job",
    "sourceProject": "homeServices_salesforce",
    "name": "Job",
    "displayName": "\"Job\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "jobNumber",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"jobNumber\" TEXT NOT NULL"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"title\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT"
      },
      {
        "name": "customerPO",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"customerPO\" TEXT"
      },
      {
        "name": "scheduledStart",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"scheduledStart\" TIMESTAMP(3)"
      },
      {
        "name": "scheduledEnd",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"scheduledEnd\" TIMESTAMP(3)"
      },
      {
        "name": "actualStart",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"actualStart\" TIMESTAMP(3)"
      },
      {
        "name": "actualEnd",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"actualEnd\" TIMESTAMP(3)"
      },
      {
        "name": "estimatedDuration",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"estimatedDuration\" INTEGER"
      },
      {
        "name": "timeWindowStart",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"timeWindowStart\" TEXT"
      },
      {
        "name": "timeWindowEnd",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"timeWindowEnd\" TEXT"
      },
      {
        "name": "propertyId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"propertyId\" TEXT"
      },
      {
        "name": "source",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"source\" TEXT"
      },
      {
        "name": "leadId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"leadId\" TEXT"
      },
      {
        "name": "estimatedAmount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"estimatedAmount\" DECIMAL(10,2)"
      },
      {
        "name": "actualAmount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"actualAmount\" DECIMAL(10,2)"
      },
      {
        "name": "workPerformed",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"workPerformed\" TEXT"
      },
      {
        "name": "customerSignature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"customerSignature\" TEXT"
      },
      {
        "name": "completedAt",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"completedAt\" TIMESTAMP(3)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"tags\" TEXT[]"
      },
      {
        "name": "companyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"companyId\" TEXT NOT NULL"
      },
      {
        "name": "customerId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"customerId\" TEXT NOT NULL"
      },
      {
        "name": "serviceTypeId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"serviceTypeId\" TEXT"
      },
      {
        "name": "createdById",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"createdById\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-job-assignment",
    "sourceProject": "homeServices_salesforce",
    "name": "JobAssignment",
    "displayName": "Job Assignment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "isPrimary",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPrimary     Boolean   @default(false)"
      },
      {
        "name": "assignedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "assignedAt    DateTime  @default(now())"
      },
      {
        "name": "acceptedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "acceptedAt    DateTime?"
      },
      {
        "name": "declinedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "declinedAt    DateTime?"
      },
      {
        "name": "job",
        "type": "Job",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job           Job       @relation(fields: [jobId], references: [id])"
      },
      {
        "name": "jobId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId         String"
      },
      {
        "name": "technician",
        "type": "Technician",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician    Technician @relation(fields: [technicianId], references: [id])"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId  String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-job-assignment",
    "sourceProject": "homeServices_salesforce",
    "name": "JobAssignment",
    "displayName": "\"Job Assignment\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "isPrimary",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"isPrimary\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "assignedAt",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "\"assignedAt\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "acceptedAt",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"acceptedAt\" TIMESTAMP(3)"
      },
      {
        "name": "declinedAt",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"declinedAt\" TIMESTAMP(3)"
      },
      {
        "name": "jobId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"jobId\" TEXT NOT NULL"
      },
      {
        "name": "technicianId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"technicianId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-job-part",
    "sourceProject": "homeServices_salesforce",
    "name": "JobPart",
    "displayName": "Job Part",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity      Int"
      },
      {
        "name": "unitPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice     Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "totalPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalPrice    Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "markup",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "markup        Decimal?  @db.Decimal(5, 2)"
      },
      {
        "name": "job",
        "type": "Job",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job           Job       @relation(fields: [jobId], references: [id])"
      },
      {
        "name": "jobId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId         String"
      },
      {
        "name": "part",
        "type": "Part",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part          Part      @relation(fields: [partId], references: [id])"
      },
      {
        "name": "partId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partId        String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-job-part",
    "sourceProject": "homeServices_salesforce",
    "name": "JobPart",
    "displayName": "\"Job Part\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"quantity\" INTEGER NOT NULL"
      },
      {
        "name": "unitPrice",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"unitPrice\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "totalPrice",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalPrice\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "markup",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"markup\" DECIMAL(5,2)"
      },
      {
        "name": "jobId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"jobId\" TEXT NOT NULL"
      },
      {
        "name": "partId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"partId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-job-photo",
    "sourceProject": "homeServices_salesforce",
    "name": "JobPhoto",
    "displayName": "Job Photo",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "PhotoType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DURING",
        "sourceLine": "type          PhotoType @default(DURING)"
      },
      {
        "name": "filePath",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filePath      String"
      },
      {
        "name": "caption",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "caption       String?"
      },
      {
        "name": "takenAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "takenAt       DateTime  @default(now())"
      },
      {
        "name": "job",
        "type": "Job",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job           Job       @relation(fields: [jobId], references: [id])"
      },
      {
        "name": "jobId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId         String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-job-photo",
    "sourceProject": "homeServices_salesforce",
    "name": "JobPhoto",
    "displayName": "\"Job Photo\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "filePath",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"filePath\" TEXT NOT NULL"
      },
      {
        "name": "caption",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"caption\" TEXT"
      },
      {
        "name": "takenAt",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "\"takenAt\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "jobId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"jobId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-part",
    "sourceProject": "homeServices_salesforce",
    "name": "Part",
    "displayName": "Part",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "partNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partNumber    String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category      String?"
      },
      {
        "name": "manufacturer",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer  String?"
      },
      {
        "name": "cost",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost          Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "price",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "markup",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "markup        Decimal?  @db.Decimal(5, 2)"
      },
      {
        "name": "quantityOnHand",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantityOnHand Int      @default(0)"
      },
      {
        "name": "reorderLevel",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "reorderLevel  Int       @default(0)"
      },
      {
        "name": "reorderQty",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "reorderQty    Int       @default(0)"
      },
      {
        "name": "warehouseLocation",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warehouseLocation String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "company",
        "type": "Company",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company       Company   @relation(fields: [companyId], references: [id])"
      },
      {
        "name": "companyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId     String"
      },
      {
        "name": "truckStock",
        "type": "TruckStock[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "truckStock    TruckStock[]"
      },
      {
        "name": "jobParts",
        "type": "JobPart[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobParts      JobPart[]"
      },
      {
        "name": "purchaseOrders",
        "type": "PurchaseOrderItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchaseOrders PurchaseOrderItem[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-part",
    "sourceProject": "homeServices_salesforce",
    "name": "Part",
    "displayName": "\"Part\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "partNumber",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"partNumber\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"category\" TEXT"
      },
      {
        "name": "manufacturer",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"manufacturer\" TEXT"
      },
      {
        "name": "cost",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"cost\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"price\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "markup",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"markup\" DECIMAL(5,2)"
      },
      {
        "name": "quantityOnHand",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"quantityOnHand\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "reorderLevel",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"reorderLevel\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "reorderQty",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"reorderQty\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "warehouseLocation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"warehouseLocation\" TEXT"
      },
      {
        "name": "isActive",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "\"isActive\" BOOLEAN NOT NULL DEFAULT true"
      },
      {
        "name": "companyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"companyId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-payment",
    "sourceProject": "homeServices_salesforce",
    "name": "Payment",
    "displayName": "Payment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String        @id @default(cuid())"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount        Decimal       @db.Decimal(10, 2)"
      },
      {
        "name": "method",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method        PaymentMethod"
      },
      {
        "name": "reference",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference     String?       // Check number, last 4 digits, etc."
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "date          DateTime      @default(now())"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "stripePaymentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripePaymentId String?"
      },
      {
        "name": "invoice",
        "type": "Invoice",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice       Invoice       @relation(fields: [invoiceId], references: [id])"
      },
      {
        "name": "invoiceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceId     String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-payment",
    "sourceProject": "homeServices_salesforce",
    "name": "Payment",
    "displayName": "\"Payment\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"amount\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "reference",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"reference\" TEXT"
      },
      {
        "name": "date",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "\"date\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "stripePaymentId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"stripePaymentId\" TEXT"
      },
      {
        "name": "invoiceId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"invoiceId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-pricebook-item",
    "sourceProject": "homeServices_salesforce",
    "name": "PricebookItem",
    "displayName": "Pricebook Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "code",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "code          String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category      String    // Labor, Parts, Equipment, Misc"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          String    // Flat Rate, Per Hour, Per Unit"
      },
      {
        "name": "unitCost",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitCost      Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "unitPrice",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice     Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "laborMinutes",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "laborMinutes  Int?"
      },
      {
        "name": "manufacturer",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer  String?"
      },
      {
        "name": "partNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partNumber    String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "isTaxable",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isTaxable     Boolean   @default(true)"
      },
      {
        "name": "company",
        "type": "Company",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company       Company   @relation(fields: [companyId], references: [id])"
      },
      {
        "name": "companyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId     String"
      },
      {
        "name": "estimateLines",
        "type": "EstimateLineItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimateLines EstimateLineItem[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-pricebook-item",
    "sourceProject": "homeServices_salesforce",
    "name": "PricebookItem",
    "displayName": "\"Pricebook Item\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "code",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"code\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"category\" TEXT NOT NULL"
      },
      {
        "name": "type",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"type\" TEXT NOT NULL"
      },
      {
        "name": "unitCost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"unitCost\" DECIMAL(10,2)"
      },
      {
        "name": "unitPrice",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"unitPrice\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "laborMinutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"laborMinutes\" INTEGER"
      },
      {
        "name": "manufacturer",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"manufacturer\" TEXT"
      },
      {
        "name": "partNumber",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"partNumber\" TEXT"
      },
      {
        "name": "isActive",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "\"isActive\" BOOLEAN NOT NULL DEFAULT true"
      },
      {
        "name": "isTaxable",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "\"isTaxable\" BOOLEAN NOT NULL DEFAULT true"
      },
      {
        "name": "companyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"companyId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-property",
    "sourceProject": "homeServices_salesforce",
    "name": "Property",
    "displayName": "Property",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String?   // \"Main Home\", \"Rental Property\", etc."
      },
      {
        "name": "type",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          String?   // House, Apartment, Office, etc."
      },
      {
        "name": "address",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address       String"
      },
      {
        "name": "address2",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address2      String?"
      },
      {
        "name": "city",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city          String"
      },
      {
        "name": "state",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state         String"
      },
      {
        "name": "zip",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zip           String"
      },
      {
        "name": "gateCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gateCode      String?"
      },
      {
        "name": "accessNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accessNotes   String?"
      },
      {
        "name": "lockboxCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lockboxCode   String?"
      },
      {
        "name": "sqFootage",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sqFootage     Int?"
      },
      {
        "name": "yearBuilt",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "yearBuilt     Int?"
      },
      {
        "name": "stories",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stories       Int?"
      },
      {
        "name": "hasPets",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "hasPets       Boolean   @default(false)"
      },
      {
        "name": "petNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "petNotes      String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "lat",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lat           Decimal?  @db.Decimal(10, 7)"
      },
      {
        "name": "lng",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lng           Decimal?  @db.Decimal(10, 7)"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer      Customer  @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId    String"
      },
      {
        "name": "equipment",
        "type": "Equipment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment     Equipment[]"
      },
      {
        "name": "jobs",
        "type": "Job[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobs          Job[]"
      },
      {
        "name": "serviceHistory",
        "type": "ServiceHistory[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceHistory ServiceHistory[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-property",
    "sourceProject": "homeServices_salesforce",
    "name": "Property",
    "displayName": "\"Property\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT"
      },
      {
        "name": "type",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"type\" TEXT"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"address\" TEXT NOT NULL"
      },
      {
        "name": "address2",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"address2\" TEXT"
      },
      {
        "name": "city",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"city\" TEXT NOT NULL"
      },
      {
        "name": "state",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"state\" TEXT NOT NULL"
      },
      {
        "name": "zip",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"zip\" TEXT NOT NULL"
      },
      {
        "name": "gateCode",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"gateCode\" TEXT"
      },
      {
        "name": "accessNotes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"accessNotes\" TEXT"
      },
      {
        "name": "lockboxCode",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lockboxCode\" TEXT"
      },
      {
        "name": "sqFootage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"sqFootage\" INTEGER"
      },
      {
        "name": "yearBuilt",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"yearBuilt\" INTEGER"
      },
      {
        "name": "stories",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"stories\" INTEGER"
      },
      {
        "name": "hasPets",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"hasPets\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "petNotes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"petNotes\" TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "customerId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"customerId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-purchase-order",
    "sourceProject": "homeServices_salesforce",
    "name": "PurchaseOrder",
    "displayName": "Purchase Order",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String          @id @default(cuid())"
      },
      {
        "name": "poNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "poNumber      String          @unique"
      },
      {
        "name": "status",
        "type": "POStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status        POStatus        @default(DRAFT)"
      },
      {
        "name": "vendorName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendorName    String"
      },
      {
        "name": "vendorContact",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendorContact String?"
      },
      {
        "name": "orderDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "orderDate     DateTime        @default(now())"
      },
      {
        "name": "expectedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expectedDate  DateTime?"
      },
      {
        "name": "receivedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receivedDate  DateTime?"
      },
      {
        "name": "subtotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal      Decimal         @db.Decimal(10, 2)"
      },
      {
        "name": "taxAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxAmount     Decimal         @db.Decimal(10, 2) @default(0)"
      },
      {
        "name": "totalAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount   Decimal         @db.Decimal(10, 2)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "items",
        "type": "PurchaseOrderItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items         PurchaseOrderItem[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-purchase-order",
    "sourceProject": "homeServices_salesforce",
    "name": "PurchaseOrder",
    "displayName": "\"Purchase Order\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "poNumber",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"poNumber\" TEXT NOT NULL"
      },
      {
        "name": "vendorName",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"vendorName\" TEXT NOT NULL"
      },
      {
        "name": "vendorContact",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"vendorContact\" TEXT"
      },
      {
        "name": "orderDate",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "\"orderDate\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "expectedDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"expectedDate\" TIMESTAMP(3)"
      },
      {
        "name": "receivedDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"receivedDate\" TIMESTAMP(3)"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"subtotal\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "taxAmount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"taxAmount\" DECIMAL(10,2) NOT NULL DEFAULT 0"
      },
      {
        "name": "totalAmount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalAmount\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-purchase-order-item",
    "sourceProject": "homeServices_salesforce",
    "name": "PurchaseOrderItem",
    "displayName": "Purchase Order Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity      Int"
      },
      {
        "name": "unitCost",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitCost      Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "totalCost",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalCost     Decimal   @db.Decimal(10, 2)"
      },
      {
        "name": "receivedQty",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "receivedQty   Int       @default(0)"
      },
      {
        "name": "purchaseOrder",
        "type": "PurchaseOrder",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchaseOrder PurchaseOrder @relation(fields: [purchaseOrderId], references: [id])"
      },
      {
        "name": "purchaseOrderId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchaseOrderId String"
      },
      {
        "name": "part",
        "type": "Part",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part          Part      @relation(fields: [partId], references: [id])"
      },
      {
        "name": "partId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partId        String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-purchase-order-item",
    "sourceProject": "homeServices_salesforce",
    "name": "PurchaseOrderItem",
    "displayName": "\"Purchase Order Item\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"quantity\" INTEGER NOT NULL"
      },
      {
        "name": "unitCost",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"unitCost\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "totalCost",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalCost\" DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "receivedQty",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"receivedQty\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "purchaseOrderId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"purchaseOrderId\" TEXT NOT NULL"
      },
      {
        "name": "partId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"partId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-service-agreement",
    "sourceProject": "homeServices_salesforce",
    "name": "ServiceAgreement",
    "displayName": "Service Agreement",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String          @id @default(cuid())"
      },
      {
        "name": "agreementNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "agreementNumber String        @unique"
      },
      {
        "name": "status",
        "type": "AgreementStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status        AgreementStatus @default(ACTIVE)"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate     DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate       DateTime"
      },
      {
        "name": "renewalDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "renewalDate   DateTime?"
      },
      {
        "name": "cancelledDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cancelledDate DateTime?"
      },
      {
        "name": "billingFrequency",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingFrequency String     // monthly, annual"
      },
      {
        "name": "paymentMethod",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentMethod String?"
      },
      {
        "name": "autoRenew",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "autoRenew     Boolean        @default(true)"
      },
      {
        "name": "stripeSubscriptionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripeSubscriptionId String?  // Stripe subscription ID for recurring billing"
      },
      {
        "name": "stripePriceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripePriceId       String?   // Stripe price ID"
      },
      {
        "name": "paymentStatus",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"trial\"",
        "sourceLine": "paymentStatus       String    @default(\"trial\") // trial, active, past_due, cancelled"
      },
      {
        "name": "trialEndsAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trialEndsAt         DateTime? // When trial period ends"
      },
      {
        "name": "nextBillingDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nextBillingDate     DateTime? // Next charge date"
      },
      {
        "name": "lastPaymentDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastPaymentDate     DateTime? // Last successful payment"
      },
      {
        "name": "lastPaymentAmount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastPaymentAmount   Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "visitsUsed",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "visitsUsed    Int            @default(0)"
      },
      {
        "name": "lastVisitDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastVisitDate DateTime?"
      },
      {
        "name": "nextVisitDue",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nextVisitDue  DateTime?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer      Customer       @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId    String"
      },
      {
        "name": "plan",
        "type": "AgreementPlan",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan          AgreementPlan  @relation(fields: [planId], references: [id])"
      },
      {
        "name": "planId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "planId        String"
      },
      {
        "name": "equipment",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment     Json?          // Equipment covered"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-service-agreement",
    "sourceProject": "homeServices_salesforce",
    "name": "ServiceAgreement",
    "displayName": "\"Service Agreement\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "agreementNumber",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"agreementNumber\" TEXT NOT NULL"
      },
      {
        "name": "startDate",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"startDate\" TIMESTAMP(3) NOT NULL"
      },
      {
        "name": "endDate",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"endDate\" TIMESTAMP(3) NOT NULL"
      },
      {
        "name": "renewalDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"renewalDate\" TIMESTAMP(3)"
      },
      {
        "name": "cancelledDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"cancelledDate\" TIMESTAMP(3)"
      },
      {
        "name": "billingFrequency",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"billingFrequency\" TEXT NOT NULL"
      },
      {
        "name": "paymentMethod",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"paymentMethod\" TEXT"
      },
      {
        "name": "autoRenew",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "\"autoRenew\" BOOLEAN NOT NULL DEFAULT true"
      },
      {
        "name": "visitsUsed",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"visitsUsed\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "lastVisitDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lastVisitDate\" TIMESTAMP(3)"
      },
      {
        "name": "nextVisitDue",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"nextVisitDue\" TIMESTAMP(3)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "customerId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"customerId\" TEXT NOT NULL"
      },
      {
        "name": "planId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"planId\" TEXT NOT NULL"
      },
      {
        "name": "equipment",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"equipment\" JSONB"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-service-history",
    "sourceProject": "homeServices_salesforce",
    "name": "ServiceHistory",
    "displayName": "Service History",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "date          DateTime  @default(now())"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type          String    // Repair, Maintenance, Installation"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String"
      },
      {
        "name": "technicianName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianName String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "property",
        "type": "Property",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property      Property  @relation(fields: [propertyId], references: [id])"
      },
      {
        "name": "propertyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyId    String"
      },
      {
        "name": "equipment",
        "type": "Equipment?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment     Equipment? @relation(fields: [equipmentId], references: [id])"
      },
      {
        "name": "equipmentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipmentId   String?"
      },
      {
        "name": "job",
        "type": "Job?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job           Job?      @relation(fields: [jobId], references: [id])"
      },
      {
        "name": "jobId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId         String?"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-service-history",
    "sourceProject": "homeServices_salesforce",
    "name": "ServiceHistory",
    "displayName": "\"Service History\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "date",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "\"date\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "type",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"type\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT NOT NULL"
      },
      {
        "name": "technicianName",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"technicianName\" TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "propertyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"propertyId\" TEXT NOT NULL"
      },
      {
        "name": "equipmentId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"equipmentId\" TEXT"
      },
      {
        "name": "jobId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"jobId\" TEXT"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-service-type",
    "sourceProject": "homeServices_salesforce",
    "name": "ServiceType",
    "displayName": "Service Type",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "code",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "code          String?"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "tradeType",
        "type": "TradeType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tradeType     TradeType"
      },
      {
        "name": "defaultDuration",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defaultDuration Int?    // minutes"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color         String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "company",
        "type": "Company",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company       Company   @relation(fields: [companyId], references: [id])"
      },
      {
        "name": "companyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId     String"
      },
      {
        "name": "jobs",
        "type": "Job[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobs          Job[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-service-type",
    "sourceProject": "homeServices_salesforce",
    "name": "ServiceType",
    "displayName": "\"Service Type\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "code",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"code\" TEXT"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT"
      },
      {
        "name": "defaultDuration",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"defaultDuration\" INTEGER"
      },
      {
        "name": "color",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"color\" TEXT"
      },
      {
        "name": "isActive",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "\"isActive\" BOOLEAN NOT NULL DEFAULT true"
      },
      {
        "name": "companyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"companyId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-technician",
    "sourceProject": "homeServices_salesforce",
    "name": "Technician",
    "displayName": "Technician",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "employeeId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employeeId    String?"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color         String?   // For calendar display"
      },
      {
        "name": "tradeTypes",
        "type": "TradeType[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tradeTypes    TradeType[]"
      },
      {
        "name": "certifications",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certifications String[]"
      },
      {
        "name": "payType",
        "type": "PayType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "HOURLY",
        "sourceLine": "payType       PayType   @default(HOURLY)"
      },
      {
        "name": "hourlyRate",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourlyRate    Decimal?  @db.Decimal(10, 2)"
      },
      {
        "name": "commissionPct",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commissionPct Decimal?  @db.Decimal(5, 2)"
      },
      {
        "name": "status",
        "type": "TechStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "AVAILABLE",
        "sourceLine": "status        TechStatus @default(AVAILABLE)"
      },
      {
        "name": "currentLat",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentLat    Decimal?  @db.Decimal(10, 7)"
      },
      {
        "name": "currentLng",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentLng    Decimal?  @db.Decimal(10, 7)"
      },
      {
        "name": "lastLocationUpdate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastLocationUpdate DateTime?"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user          User      @relation(fields: [userId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId        String    @unique"
      },
      {
        "name": "truck",
        "type": "Truck?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "truck         Truck?    @relation(fields: [truckId], references: [id])"
      },
      {
        "name": "truckId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "truckId       String?"
      },
      {
        "name": "schedules",
        "type": "TechSchedule[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedules     TechSchedule[]"
      },
      {
        "name": "assignments",
        "type": "JobAssignment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignments   JobAssignment[]"
      },
      {
        "name": "timeEntries",
        "type": "TimeEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeEntries   TimeEntry[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-technician",
    "sourceProject": "homeServices_salesforce",
    "name": "Technician",
    "displayName": "\"Technician\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "employeeId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"employeeId\" TEXT"
      },
      {
        "name": "color",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"color\" TEXT"
      },
      {
        "name": "certifications",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"certifications\" TEXT[]"
      },
      {
        "name": "hourlyRate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"hourlyRate\" DECIMAL(10,2)"
      },
      {
        "name": "commissionPct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"commissionPct\" DECIMAL(5,2)"
      },
      {
        "name": "currentLat",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"currentLat\" DECIMAL(10,7)"
      },
      {
        "name": "currentLng",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"currentLng\" DECIMAL(10,7)"
      },
      {
        "name": "lastLocationUpdate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lastLocationUpdate\" TIMESTAMP(3)"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "truckId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"truckId\" TEXT"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-tech-schedule",
    "sourceProject": "homeServices_salesforce",
    "name": "TechSchedule",
    "displayName": "Tech Schedule",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "dayOfWeek",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dayOfWeek     Int       // 0-6 (Sunday-Saturday)"
      },
      {
        "name": "startTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime     String    // HH:MM format"
      },
      {
        "name": "endTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime       String"
      },
      {
        "name": "isWorking",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isWorking     Boolean   @default(true)"
      },
      {
        "name": "technician",
        "type": "Technician",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician    Technician @relation(fields: [technicianId], references: [id])"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId  String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-tech-schedule",
    "sourceProject": "homeServices_salesforce",
    "name": "TechSchedule",
    "displayName": "\"Tech Schedule\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "dayOfWeek",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"dayOfWeek\" INTEGER NOT NULL"
      },
      {
        "name": "startTime",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"startTime\" TEXT NOT NULL"
      },
      {
        "name": "endTime",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"endTime\" TEXT NOT NULL"
      },
      {
        "name": "isWorking",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "\"isWorking\" BOOLEAN NOT NULL DEFAULT true"
      },
      {
        "name": "technicianId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"technicianId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-time-entry",
    "sourceProject": "homeServices_salesforce",
    "name": "TimeEntry",
    "displayName": "Time Entry",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String      @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "TimeEntryType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "WORK",
        "sourceLine": "type          TimeEntryType @default(WORK)"
      },
      {
        "name": "startTime",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime     DateTime"
      },
      {
        "name": "endTime",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime       DateTime?"
      },
      {
        "name": "duration",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration      Int?        // minutes"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "job",
        "type": "Job",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job           Job         @relation(fields: [jobId], references: [id])"
      },
      {
        "name": "jobId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId         String"
      },
      {
        "name": "technician",
        "type": "Technician",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician    Technician  @relation(fields: [technicianId], references: [id])"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId  String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-time-entry",
    "sourceProject": "homeServices_salesforce",
    "name": "TimeEntry",
    "displayName": "\"Time Entry\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "startTime",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"startTime\" TIMESTAMP(3) NOT NULL"
      },
      {
        "name": "endTime",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"endTime\" TIMESTAMP(3)"
      },
      {
        "name": "duration",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"duration\" INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"notes\" TEXT"
      },
      {
        "name": "jobId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"jobId\" TEXT NOT NULL"
      },
      {
        "name": "technicianId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"technicianId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-truck",
    "sourceProject": "homeServices_salesforce",
    "name": "Truck",
    "displayName": "Truck",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String    // \"Truck 1\", \"Van 3\""
      },
      {
        "name": "vehicleId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicleId     String?   // License plate or fleet number"
      },
      {
        "name": "make",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "make          String?"
      },
      {
        "name": "model",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model         String?"
      },
      {
        "name": "year",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year          Int?"
      },
      {
        "name": "vin",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vin           String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "company",
        "type": "Company",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company       Company   @relation(fields: [companyId], references: [id])"
      },
      {
        "name": "companyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId     String"
      },
      {
        "name": "technicians",
        "type": "Technician[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicians   Technician[]"
      },
      {
        "name": "stock",
        "type": "TruckStock[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stock         TruckStock[]"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-truck",
    "sourceProject": "homeServices_salesforce",
    "name": "Truck",
    "displayName": "\"Truck\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "vehicleId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"vehicleId\" TEXT"
      },
      {
        "name": "make",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"make\" TEXT"
      },
      {
        "name": "model",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"model\" TEXT"
      },
      {
        "name": "year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"year\" INTEGER"
      },
      {
        "name": "vin",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"vin\" TEXT"
      },
      {
        "name": "isActive",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "\"isActive\" BOOLEAN NOT NULL DEFAULT true"
      },
      {
        "name": "companyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"companyId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-truck-stock",
    "sourceProject": "homeServices_salesforce",
    "name": "TruckStock",
    "displayName": "Truck Stock",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantity      Int       @default(0)"
      },
      {
        "name": "minQuantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "minQuantity   Int       @default(0)"
      },
      {
        "name": "maxQuantity",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "maxQuantity   Int?"
      },
      {
        "name": "truck",
        "type": "Truck",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "truck         Truck     @relation(fields: [truckId], references: [id])"
      },
      {
        "name": "truckId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "truckId       String"
      },
      {
        "name": "part",
        "type": "Part",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part          Part      @relation(fields: [partId], references: [id])"
      },
      {
        "name": "partId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partId        String"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-truck-stock",
    "sourceProject": "homeServices_salesforce",
    "name": "TruckStock",
    "displayName": "\"Truck Stock\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"quantity\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "minQuantity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"minQuantity\" INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "maxQuantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"maxQuantity\" INTEGER"
      },
      {
        "name": "truckId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"truckId\" TEXT NOT NULL"
      },
      {
        "name": "partId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"partId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-schema-prisma-user",
    "sourceProject": "homeServices_salesforce",
    "name": "User",
    "displayName": "User",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email         String    @unique"
      },
      {
        "name": "password",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password      String"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "role",
        "type": "UserRole",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role          UserRole"
      },
      {
        "name": "avatar",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar        String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "resetToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resetToken              String?"
      },
      {
        "name": "resetTokenExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resetTokenExpiry        DateTime?"
      },
      {
        "name": "emailVerified",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "emailVerified           Boolean   @default(false)"
      },
      {
        "name": "verificationToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verificationToken       String?"
      },
      {
        "name": "verificationTokenExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verificationTokenExpiry DateTime?"
      },
      {
        "name": "pushToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pushToken           String?"
      },
      {
        "name": "pushPlatform",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pushPlatform        String?"
      },
      {
        "name": "pushTokenUpdatedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pushTokenUpdatedAt  DateTime?"
      },
      {
        "name": "company",
        "type": "Company",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company       Company   @relation(fields: [companyId], references: [id])"
      },
      {
        "name": "companyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId     String"
      },
      {
        "name": "technician",
        "type": "Technician?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician    Technician?"
      },
      {
        "name": "createdJobs",
        "type": "Job[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdJobs   Job[]     @relation(\"CreatedByUser\")"
      }
    ]
  },
  {
    "id": "home-services-salesforce-prisma-migrations-20251203123121-init-migration-sql-user",
    "sourceProject": "homeServices_salesforce",
    "name": "User",
    "displayName": "\"User\"",
    "framework": "SQL",
    "sourceFile": "prisma/migrations/20251203123121_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "email",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"email\" TEXT NOT NULL"
      },
      {
        "name": "password",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"password\" TEXT NOT NULL"
      },
      {
        "name": "firstName",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"firstName\" TEXT NOT NULL"
      },
      {
        "name": "lastName",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lastName\" TEXT NOT NULL"
      },
      {
        "name": "phone",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"phone\" TEXT"
      },
      {
        "name": "avatar",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"avatar\" TEXT"
      },
      {
        "name": "isActive",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "\"isActive\" BOOLEAN NOT NULL DEFAULT true"
      },
      {
        "name": "companyId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"companyId\" TEXT NOT NULL"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-communication",
    "sourceProject": "pestControl",
    "name": "Communication",
    "displayName": "Communication",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "type",
        "type": "CommunicationType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            CommunicationType"
      },
      {
        "name": "direction",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "direction       String    // INBOUND or OUTBOUND"
      },
      {
        "name": "subject",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject         String?"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content         String"
      },
      {
        "name": "status",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status          String?"
      },
      {
        "name": "aiHandled",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "aiHandled       Boolean   @default(false)"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer  @relation(fields: [customerId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-configuration",
    "sourceProject": "pestControl",
    "name": "Configuration",
    "displayName": "Configuration",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String    // e.g., \"PRODUCT_CATEGORY\", \"LEAD_SOURCE\", \"PAYMENT_METHOD\""
      },
      {
        "name": "value",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value           String"
      },
      {
        "name": "label",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "label           String"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder       Int       @default(0)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "isDefault",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isDefault       Boolean   @default(false)"
      },
      {
        "name": "metadata",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata        Json?     // Additional data if needed"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-contract",
    "sourceProject": "pestControl",
    "name": "Contract",
    "displayName": "Contract",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "contractNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "contractNumber  String    @unique"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "contractType",
        "type": "ContractType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "RECURRING",
        "sourceLine": "contractType    ContractType @default(RECURRING)"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      },
      {
        "name": "billingFrequency",
        "type": "BillingFrequency",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MONTHLY",
        "sourceLine": "billingFrequency BillingFrequency @default(MONTHLY)"
      },
      {
        "name": "contractValue",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractValue   Float"
      },
      {
        "name": "status",
        "type": "ContractStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status          ContractStatus @default(ACTIVE)"
      },
      {
        "name": "terms",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terms           String?"
      },
      {
        "name": "signedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signedDate      DateTime?"
      },
      {
        "name": "signatureUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signatureUrl    String?"
      },
      {
        "name": "autoRenew",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "autoRenew       Boolean   @default(false)"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer  @relation(fields: [customerId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "serviceOrders",
        "type": "ServiceOrder[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceOrders   ServiceOrder[]"
      },
      {
        "name": "invoices",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices        Invoice[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-customer",
    "sourceProject": "pestControl",
    "name": "Customer",
    "displayName": "Customer",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "companyName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyName     String?"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName       String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName        String"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email           String    @unique"
      },
      {
        "name": "phone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone           String"
      },
      {
        "name": "alternatePhone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alternatePhone  String?"
      },
      {
        "name": "customerType",
        "type": "CustomerType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "RESIDENTIAL",
        "sourceLine": "customerType    CustomerType @default(RESIDENTIAL)"
      },
      {
        "name": "status",
        "type": "CustomerStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status          CustomerStatus @default(ACTIVE)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "referralSource",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referralSource  String?"
      },
      {
        "name": "properties",
        "type": "Property[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "properties      Property[]"
      },
      {
        "name": "contracts",
        "type": "Contract[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contracts       Contract[]"
      },
      {
        "name": "invoices",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices        Invoice[]"
      },
      {
        "name": "leads",
        "type": "Lead[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leads           Lead[]"
      },
      {
        "name": "quotes",
        "type": "Quote[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quotes          Quote[]"
      },
      {
        "name": "communications",
        "type": "Communication[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "communications  Communication[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-follow-up",
    "sourceProject": "pestControl",
    "name": "FollowUp",
    "displayName": "Follow Up",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "leadId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leadId          String?"
      },
      {
        "name": "serviceOrderId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceOrderId  String?"
      },
      {
        "name": "type",
        "type": "FollowUpType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            FollowUpType"
      },
      {
        "name": "dueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime"
      },
      {
        "name": "completedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedDate   DateTime?"
      },
      {
        "name": "status",
        "type": "FollowUpStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          FollowUpStatus @default(PENDING)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "aiGenerated",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "aiGenerated     Boolean   @default(false)"
      },
      {
        "name": "lead",
        "type": "Lead?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead            Lead?     @relation(fields: [leadId], references: [id])"
      },
      {
        "name": "serviceOrder",
        "type": "ServiceOrder?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceOrder    ServiceOrder? @relation(fields: [serviceOrderId], references: [id])"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-inspection",
    "sourceProject": "pestControl",
    "name": "Inspection",
    "displayName": "Inspection",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "leadId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leadId          String?"
      },
      {
        "name": "propertyId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyId      String?"
      },
      {
        "name": "inspectorId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspectorId     String"
      },
      {
        "name": "scheduledDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledDate   DateTime"
      },
      {
        "name": "completedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedDate   DateTime?"
      },
      {
        "name": "status",
        "type": "InspectionStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "SCHEDULED",
        "sourceLine": "status          InspectionStatus @default(SCHEDULED)"
      },
      {
        "name": "findings",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings        Json?     // Pest findings, damage, recommendations"
      },
      {
        "name": "photoUrls",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photoUrls       String[]"
      },
      {
        "name": "reportUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reportUrl       String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "lead",
        "type": "Lead?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead            Lead?     @relation(fields: [leadId], references: [id])"
      },
      {
        "name": "property",
        "type": "Property?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property        Property? @relation(fields: [propertyId], references: [id])"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-invoice",
    "sourceProject": "pestControl",
    "name": "Invoice",
    "displayName": "Invoice",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "contractId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractId      String?"
      },
      {
        "name": "invoiceNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "invoiceNumber   String    @unique"
      },
      {
        "name": "issueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "issueDate       DateTime  @default(now())"
      },
      {
        "name": "dueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime"
      },
      {
        "name": "subtotal",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal        Float"
      },
      {
        "name": "tax",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax             Float     @default(0)"
      },
      {
        "name": "total",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total           Float"
      },
      {
        "name": "amountPaid",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amountPaid      Float     @default(0)"
      },
      {
        "name": "status",
        "type": "InvoiceStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          InvoiceStatus @default(PENDING)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer  @relation(fields: [customerId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "contract",
        "type": "Contract?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract        Contract? @relation(fields: [contractId], references: [id])"
      },
      {
        "name": "lineItems",
        "type": "InvoiceLineItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lineItems       InvoiceLineItem[]"
      },
      {
        "name": "payments",
        "type": "Payment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payments        Payment[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-invoice-line-item",
    "sourceProject": "pestControl",
    "name": "InvoiceLineItem",
    "displayName": "Invoice Line Item",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "invoiceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceId       String"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String"
      },
      {
        "name": "quantity",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity        Float"
      },
      {
        "name": "unitPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice       Float"
      },
      {
        "name": "total",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total           Float"
      },
      {
        "name": "serviceOrderId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceOrderId  String?"
      },
      {
        "name": "invoice",
        "type": "Invoice",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice         Invoice   @relation(fields: [invoiceId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-lead",
    "sourceProject": "pestControl",
    "name": "Lead",
    "displayName": "Lead",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "customerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String?"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName       String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName        String"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email           String?"
      },
      {
        "name": "phone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone           String"
      },
      {
        "name": "companyName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyName     String?"
      },
      {
        "name": "addressLine1",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "addressLine1    String?"
      },
      {
        "name": "city",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city            String?"
      },
      {
        "name": "state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state           String?"
      },
      {
        "name": "zipCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCode         String?"
      },
      {
        "name": "source",
        "type": "LeadSource",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "WEBSITE",
        "sourceLine": "source          LeadSource @default(WEBSITE)"
      },
      {
        "name": "status",
        "type": "LeadStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NEW",
        "sourceLine": "status          LeadStatus @default(NEW)"
      },
      {
        "name": "pestConcerns",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestConcerns    String[]"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "assignedToId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedToId    String?"
      },
      {
        "name": "estimatedValue",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedValue  Float?"
      },
      {
        "name": "customer",
        "type": "Customer?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer? @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "assignedTo",
        "type": "SalesRep?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedTo      SalesRep? @relation(fields: [assignedToId], references: [id])"
      },
      {
        "name": "inspections",
        "type": "Inspection[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspections     Inspection[]"
      },
      {
        "name": "quotes",
        "type": "Quote[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quotes          Quote[]"
      },
      {
        "name": "followUps",
        "type": "FollowUp[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "followUps       FollowUp[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-license",
    "sourceProject": "pestControl",
    "name": "License",
    "displayName": "License",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "type",
        "type": "LicenseType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            LicenseType"
      },
      {
        "name": "licenseNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "licenseNumber   String"
      },
      {
        "name": "issuedBy",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuedBy        String"
      },
      {
        "name": "issuedTo",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuedTo        String"
      },
      {
        "name": "issueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issueDate       DateTime"
      },
      {
        "name": "expiryDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiryDate      DateTime"
      },
      {
        "name": "status",
        "type": "LicenseStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status          LicenseStatus @default(ACTIVE)"
      },
      {
        "name": "documentUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentUrl     String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-password-reset-token",
    "sourceProject": "pestControl",
    "name": "PasswordResetToken",
    "displayName": "Password Reset Token",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id        String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId    String"
      },
      {
        "name": "token",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "token     String   @unique"
      },
      {
        "name": "expiresAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt DateTime"
      },
      {
        "name": "used",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "used      Boolean  @default(false)"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-payment",
    "sourceProject": "pestControl",
    "name": "Payment",
    "displayName": "Payment",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "invoiceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceId       String"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Float"
      },
      {
        "name": "paymentMethod",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentMethod   PaymentMethod"
      },
      {
        "name": "transactionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionId   String?"
      },
      {
        "name": "paymentDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "paymentDate     DateTime  @default(now())"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "invoice",
        "type": "Invoice",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice         Invoice   @relation(fields: [invoiceId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-pest-identification",
    "sourceProject": "pestControl",
    "name": "PestIdentification",
    "displayName": "Pest Identification",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "imageUrl",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl        String"
      },
      {
        "name": "identifiedPest",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "identifiedPest  String?"
      },
      {
        "name": "confidence",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence      Float?"
      },
      {
        "name": "alternativePests",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alternativePests Json?    // Array of alternative identifications"
      },
      {
        "name": "recommendations",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations String[]"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"PENDING\"",
        "sourceLine": "status          String    @default(\"PENDING\")"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-pest-issue",
    "sourceProject": "pestControl",
    "name": "PestIssue",
    "displayName": "Pest Issue",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "propertyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyId      String"
      },
      {
        "name": "pestTypeId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestTypeId      String"
      },
      {
        "name": "severity",
        "type": "Severity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MODERATE",
        "sourceLine": "severity        Severity  @default(MODERATE)"
      },
      {
        "name": "location",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "firstReported",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "firstReported   DateTime  @default(now())"
      },
      {
        "name": "lastObserved",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastObserved    DateTime?"
      },
      {
        "name": "status",
        "type": "IssueStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status          IssueStatus @default(ACTIVE)"
      },
      {
        "name": "photoUrls",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photoUrls       String[]"
      },
      {
        "name": "aiIdentified",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "aiIdentified    Boolean   @default(false)"
      },
      {
        "name": "property",
        "type": "Property",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property        Property  @relation(fields: [propertyId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "pestType",
        "type": "PestType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestType        PestType  @relation(fields: [pestTypeId], references: [id])"
      },
      {
        "name": "treatments",
        "type": "TreatmentRecord[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "treatments      TreatmentRecord[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-pest-type",
    "sourceProject": "pestControl",
    "name": "PestType",
    "displayName": "Pest Type",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name            String    @unique"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "commonTreatments",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commonTreatments String[]"
      },
      {
        "name": "seasonalPeak",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seasonalPeak    String[]"
      },
      {
        "name": "riskLevel",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskLevel       String?"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl        String?"
      },
      {
        "name": "pestIssues",
        "type": "PestIssue[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestIssues      PestIssue[]"
      },
      {
        "name": "treatmentRecommendations",
        "type": "TreatmentRecommendation[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "treatmentRecommendations TreatmentRecommendation[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-product",
    "sourceProject": "pestControl",
    "name": "Product",
    "displayName": "Product",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "sku",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "sku             String    @unique"
      },
      {
        "name": "barcode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "barcode         String?   @unique"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String"
      },
      {
        "name": "manufacturer",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer    String?"
      },
      {
        "name": "activeIngredient",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activeIngredient String?"
      },
      {
        "name": "concentration",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "concentration   String?"
      },
      {
        "name": "epaNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "epaNumber       String?"
      },
      {
        "name": "unitOfMeasure",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitOfMeasure   String"
      },
      {
        "name": "unitCost",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitCost        Float"
      },
      {
        "name": "inStock",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "inStock         Float     @default(0)"
      },
      {
        "name": "reorderLevel",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10",
        "sourceLine": "reorderLevel    Float     @default(10)"
      },
      {
        "name": "safetyDataSheetUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "safetyDataSheetUrl String?"
      },
      {
        "name": "isRestricted",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRestricted    Boolean   @default(false)"
      },
      {
        "name": "treatments",
        "type": "TreatmentRecord[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "treatments      TreatmentRecord[]"
      },
      {
        "name": "productUsages",
        "type": "ProductUsage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productUsages   ProductUsage[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-product-registration",
    "sourceProject": "pestControl",
    "name": "ProductRegistration",
    "displayName": "Product Registration",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "productName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productName     String"
      },
      {
        "name": "epaNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "epaNumber       String"
      },
      {
        "name": "stateRegNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stateRegNumber  String?"
      },
      {
        "name": "state",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state           String"
      },
      {
        "name": "registrationDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "registrationDate DateTime"
      },
      {
        "name": "expiryDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiryDate      DateTime"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"ACTIVE\"",
        "sourceLine": "status          String    @default(\"ACTIVE\")"
      },
      {
        "name": "documentUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentUrl     String?"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-product-usage",
    "sourceProject": "pestControl",
    "name": "ProductUsage",
    "displayName": "Product Usage",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "serviceOrderId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceOrderId  String"
      },
      {
        "name": "productId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productId       String"
      },
      {
        "name": "quantity",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity        Float"
      },
      {
        "name": "unit",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit            String"
      },
      {
        "name": "applicationRate",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "applicationRate String?"
      },
      {
        "name": "areasTreated",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "areasTreated    String[]"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "usedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "usedAt          DateTime  @default(now())"
      },
      {
        "name": "serviceOrder",
        "type": "ServiceOrder",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceOrder    ServiceOrder @relation(fields: [serviceOrderId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "product",
        "type": "Product",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product         Product   @relation(fields: [productId], references: [id])"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-property",
    "sourceProject": "pestControl",
    "name": "Property",
    "displayName": "Property",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "addressLine1",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "addressLine1    String"
      },
      {
        "name": "addressLine2",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "addressLine2    String?"
      },
      {
        "name": "city",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city            String"
      },
      {
        "name": "state",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state           String"
      },
      {
        "name": "zipCode",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCode         String"
      },
      {
        "name": "country",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USA\"",
        "sourceLine": "country         String    @default(\"USA\")"
      },
      {
        "name": "latitude",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latitude        Float?"
      },
      {
        "name": "longitude",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "longitude       Float?"
      },
      {
        "name": "propertyType",
        "type": "PropertyType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "SINGLE_FAMILY",
        "sourceLine": "propertyType    PropertyType @default(SINGLE_FAMILY)"
      },
      {
        "name": "squareFootage",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "squareFootage   Int?"
      },
      {
        "name": "yearBuilt",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "yearBuilt       Int?"
      },
      {
        "name": "accessNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accessNotes     String?"
      },
      {
        "name": "gateCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gateCode        String?"
      },
      {
        "name": "hasPets",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "hasPets         Boolean   @default(false)"
      },
      {
        "name": "petDetails",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "petDetails      String?"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer  @relation(fields: [customerId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "pestIssues",
        "type": "PestIssue[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestIssues      PestIssue[]"
      },
      {
        "name": "services",
        "type": "Service[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services        Service[]"
      },
      {
        "name": "inspections",
        "type": "Inspection[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspections     Inspection[]"
      },
      {
        "name": "serviceOrders",
        "type": "ServiceOrder[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceOrders   ServiceOrder[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-quote",
    "sourceProject": "pestControl",
    "name": "Quote",
    "displayName": "Quote",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "quoteNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "quoteNumber     String    @unique"
      },
      {
        "name": "customerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String?"
      },
      {
        "name": "leadId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leadId          String?"
      },
      {
        "name": "salesRepId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salesRepId      String?"
      },
      {
        "name": "validUntil",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "validUntil      DateTime"
      },
      {
        "name": "subtotal",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal        Float"
      },
      {
        "name": "discount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discount        Float     @default(0)"
      },
      {
        "name": "tax",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax             Float     @default(0)"
      },
      {
        "name": "total",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total           Float"
      },
      {
        "name": "status",
        "type": "QuoteStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          QuoteStatus @default(DRAFT)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "terms",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terms           String?"
      },
      {
        "name": "aiGenerated",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "aiGenerated     Boolean   @default(false)"
      },
      {
        "name": "customer",
        "type": "Customer?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer? @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "lead",
        "type": "Lead?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead            Lead?     @relation(fields: [leadId], references: [id])"
      },
      {
        "name": "salesRep",
        "type": "SalesRep?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salesRep        SalesRep? @relation(fields: [salesRepId], references: [id])"
      },
      {
        "name": "lineItems",
        "type": "QuoteLineItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lineItems       QuoteLineItem[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-quote-line-item",
    "sourceProject": "pestControl",
    "name": "QuoteLineItem",
    "displayName": "Quote Line Item",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "quoteId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quoteId         String"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String"
      },
      {
        "name": "serviceType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceType     String?"
      },
      {
        "name": "quantity",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity        Float"
      },
      {
        "name": "unitPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice       Float"
      },
      {
        "name": "total",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total           Float"
      },
      {
        "name": "frequency",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency       String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "quote",
        "type": "Quote",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quote           Quote     @relation(fields: [quoteId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-route",
    "sourceProject": "pestControl",
    "name": "Route",
    "displayName": "Route",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId    String"
      },
      {
        "name": "stops",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stops           Json      // Array of stops with order"
      },
      {
        "name": "totalDistance",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalDistance   Float?"
      },
      {
        "name": "totalDuration",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalDuration   Int?      // in minutes"
      },
      {
        "name": "optimizedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "optimizedAt     DateTime?"
      },
      {
        "name": "status",
        "type": "RouteStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PLANNED",
        "sourceLine": "status          RouteStatus @default(PLANNED)"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-safety-data-sheet",
    "sourceProject": "pestControl",
    "name": "SafetyDataSheet",
    "displayName": "Safety Data Sheet",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "productName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productName     String"
      },
      {
        "name": "manufacturer",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer    String"
      },
      {
        "name": "revisionDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revisionDate    DateTime"
      },
      {
        "name": "documentUrl",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentUrl     String"
      },
      {
        "name": "hazardClassifications",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hazardClassifications String[]"
      },
      {
        "name": "firstAidMeasures",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstAidMeasures String?"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-sales-rep",
    "sourceProject": "pestControl",
    "name": "SalesRep",
    "displayName": "Sales Rep",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId          String    @unique"
      },
      {
        "name": "employeeId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "employeeId      String    @unique"
      },
      {
        "name": "commissionRate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.1",
        "sourceLine": "commissionRate  Float     @default(0.1)"
      },
      {
        "name": "quota",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quota           Float?"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "leads",
        "type": "Lead[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leads           Lead[]"
      },
      {
        "name": "quotes",
        "type": "Quote[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quotes          Quote[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-seasonal-prediction",
    "sourceProject": "pestControl",
    "name": "SeasonalPrediction",
    "displayName": "Seasonal Prediction",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "region",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region          String"
      },
      {
        "name": "zipCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCode         String?"
      },
      {
        "name": "pestType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestType        String"
      },
      {
        "name": "month",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "month           Int"
      },
      {
        "name": "year",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year            Int"
      },
      {
        "name": "riskLevel",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskLevel       String    // LOW, MODERATE, HIGH, VERY_HIGH"
      },
      {
        "name": "confidence",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence      Float"
      },
      {
        "name": "factors",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "factors         String[]"
      },
      {
        "name": "recommendations",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations String[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-service",
    "sourceProject": "pestControl",
    "name": "Service",
    "displayName": "Service",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "propertyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyId      String"
      },
      {
        "name": "serviceTypeId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceTypeId   String"
      },
      {
        "name": "scheduledDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledDate   DateTime"
      },
      {
        "name": "completedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedDate   DateTime?"
      },
      {
        "name": "status",
        "type": "ServiceStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "SCHEDULED",
        "sourceLine": "status          ServiceStatus @default(SCHEDULED)"
      },
      {
        "name": "technicianId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId    String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "property",
        "type": "Property",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property        Property  @relation(fields: [propertyId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "serviceType",
        "type": "ServiceType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceType     ServiceType @relation(fields: [serviceTypeId], references: [id])"
      },
      {
        "name": "technician",
        "type": "Technician?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician      Technician? @relation(fields: [technicianId], references: [id])"
      },
      {
        "name": "treatments",
        "type": "TreatmentRecord[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "treatments      TreatmentRecord[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-service-order",
    "sourceProject": "pestControl",
    "name": "ServiceOrder",
    "displayName": "Service Order",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "orderNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "orderNumber     String    @unique"
      },
      {
        "name": "propertyId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyId      String"
      },
      {
        "name": "contractId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractId      String?"
      },
      {
        "name": "serviceTypeId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceTypeId   String"
      },
      {
        "name": "technicianId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId    String?"
      },
      {
        "name": "scheduledDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledDate   DateTime"
      },
      {
        "name": "scheduledTimeStart",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledTimeStart String?"
      },
      {
        "name": "scheduledTimeEnd",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledTimeEnd String?"
      },
      {
        "name": "completedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedDate   DateTime?"
      },
      {
        "name": "status",
        "type": "ServiceOrderStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          ServiceOrderStatus @default(PENDING)"
      },
      {
        "name": "priority",
        "type": "Priority",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NORMAL",
        "sourceLine": "priority        Priority  @default(NORMAL)"
      },
      {
        "name": "isRetreatment",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRetreatment   Boolean   @default(false)"
      },
      {
        "name": "originalOrderId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "originalOrderId String?"
      },
      {
        "name": "customerNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerNotes   String?"
      },
      {
        "name": "technicianNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianNotes String?"
      },
      {
        "name": "internalNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "internalNotes   String?"
      },
      {
        "name": "signatureUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signatureUrl    String?"
      },
      {
        "name": "signedBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signedBy        String?"
      },
      {
        "name": "signedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signedAt        DateTime?"
      },
      {
        "name": "photoUrls",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photoUrls       String[]"
      },
      {
        "name": "timeIn",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeIn          DateTime?"
      },
      {
        "name": "timeOut",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeOut         DateTime?"
      },
      {
        "name": "property",
        "type": "Property",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property        Property  @relation(fields: [propertyId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "contract",
        "type": "Contract?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract        Contract? @relation(fields: [contractId], references: [id])"
      },
      {
        "name": "serviceType",
        "type": "ServiceType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceType     ServiceType @relation(fields: [serviceTypeId], references: [id])"
      },
      {
        "name": "technician",
        "type": "Technician?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician      Technician? @relation(fields: [technicianId], references: [id])"
      },
      {
        "name": "productUsages",
        "type": "ProductUsage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productUsages   ProductUsage[]"
      },
      {
        "name": "followUps",
        "type": "FollowUp[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "followUps       FollowUp[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-service-type",
    "sourceProject": "pestControl",
    "name": "ServiceType",
    "displayName": "Service Type",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name            String    @unique"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "category",
        "type": "ServiceCategory",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "GENERAL",
        "sourceLine": "category        ServiceCategory @default(GENERAL)"
      },
      {
        "name": "basePrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "basePrice       Float"
      },
      {
        "name": "duration",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration        Int       // in minutes"
      },
      {
        "name": "isRecurring",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRecurring     Boolean   @default(false)"
      },
      {
        "name": "frequency",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency       String?"
      },
      {
        "name": "services",
        "type": "Service[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services        Service[]"
      },
      {
        "name": "serviceOrders",
        "type": "ServiceOrder[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceOrders   ServiceOrder[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-session",
    "sourceProject": "pestControl",
    "name": "Session",
    "displayName": "Session",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id        String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId    String"
      },
      {
        "name": "token",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "token     String   @unique"
      },
      {
        "name": "expiresAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt DateTime"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-setting",
    "sourceProject": "pestControl",
    "name": "Setting",
    "displayName": "Setting",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "key",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "key             String    @unique"
      },
      {
        "name": "value",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value           String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-technician",
    "sourceProject": "pestControl",
    "name": "Technician",
    "displayName": "Technician",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId          String    @unique"
      },
      {
        "name": "employeeId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "employeeId      String    @unique"
      },
      {
        "name": "licenseNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "licenseNumber   String?"
      },
      {
        "name": "licenseState",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "licenseState    String?"
      },
      {
        "name": "licenseExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "licenseExpiry   DateTime?"
      },
      {
        "name": "certifications",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certifications  String[]"
      },
      {
        "name": "specializations",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specializations String[]"
      },
      {
        "name": "vehicleId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicleId       String?"
      },
      {
        "name": "territoryId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "territoryId     String?"
      },
      {
        "name": "isAvailable",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isAvailable     Boolean   @default(true)"
      },
      {
        "name": "currentLatitude",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentLatitude Float?"
      },
      {
        "name": "currentLongitude",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentLongitude Float?"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "territory",
        "type": "Territory?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "territory       Territory? @relation(fields: [territoryId], references: [id])"
      },
      {
        "name": "services",
        "type": "Service[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services        Service[]"
      },
      {
        "name": "serviceOrders",
        "type": "ServiceOrder[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceOrders   ServiceOrder[]"
      },
      {
        "name": "treatments",
        "type": "TreatmentRecord[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "treatments      TreatmentRecord[]"
      },
      {
        "name": "schedules",
        "type": "TechnicianSchedule[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedules       TechnicianSchedule[]"
      },
      {
        "name": "timeEntries",
        "type": "TimeEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeEntries     TimeEntry[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-technician-schedule",
    "sourceProject": "pestControl",
    "name": "TechnicianSchedule",
    "displayName": "Technician Schedule",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId    String"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "startTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime       String"
      },
      {
        "name": "endTime",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime         String"
      },
      {
        "name": "isAvailable",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isAvailable     Boolean   @default(true)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "technician",
        "type": "Technician",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician      Technician @relation(fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-territory",
    "sourceProject": "pestControl",
    "name": "Territory",
    "displayName": "Territory",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name            String    @unique"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "zipCodes",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCodes        String[]"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color           String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "technicians",
        "type": "Technician[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicians     Technician[]"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-time-entry",
    "sourceProject": "pestControl",
    "name": "TimeEntry",
    "displayName": "Time Entry",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "technicianId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId    String"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "clockIn",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clockIn         DateTime"
      },
      {
        "name": "clockOut",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clockOut        DateTime?"
      },
      {
        "name": "breakMinutes",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "breakMinutes    Int       @default(0)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "status",
        "type": "TimeEntryStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          TimeEntryStatus @default(PENDING)"
      },
      {
        "name": "technician",
        "type": "Technician",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician      Technician @relation(fields: [technicianId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-treatment-recommendation",
    "sourceProject": "pestControl",
    "name": "TreatmentRecommendation",
    "displayName": "Treatment Recommendation",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "pestTypeId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestTypeId      String"
      },
      {
        "name": "severity",
        "type": "Severity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity        Severity"
      },
      {
        "name": "propertyType",
        "type": "PropertyType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyType    PropertyType"
      },
      {
        "name": "season",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season          String"
      },
      {
        "name": "recommendedProducts",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendedProducts String[]"
      },
      {
        "name": "applicationMethods",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "applicationMethods String[]"
      },
      {
        "name": "frequency",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency       String"
      },
      {
        "name": "estimatedCost",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedCost   Float?"
      },
      {
        "name": "effectivenessScore",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effectivenessScore Float?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "pestType",
        "type": "PestType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestType        PestType  @relation(fields: [pestTypeId], references: [id])"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-treatment-record",
    "sourceProject": "pestControl",
    "name": "TreatmentRecord",
    "displayName": "Treatment Record",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "serviceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId       String?"
      },
      {
        "name": "pestIssueId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestIssueId     String?"
      },
      {
        "name": "productId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productId       String"
      },
      {
        "name": "applicationMethod",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "applicationMethod String"
      },
      {
        "name": "areasTreated",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "areasTreated    String[]"
      },
      {
        "name": "quantity",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity        Float"
      },
      {
        "name": "unit",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit            String"
      },
      {
        "name": "dilutionRate",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dilutionRate    String?"
      },
      {
        "name": "targetPests",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "targetPests     String[]"
      },
      {
        "name": "weatherConditions",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weatherConditions String?"
      },
      {
        "name": "temperature",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature     Float?"
      },
      {
        "name": "humidity",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "humidity        Float?"
      },
      {
        "name": "windSpeed",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "windSpeed       Float?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "appliedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "appliedAt       DateTime  @default(now())"
      },
      {
        "name": "appliedById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appliedById     String"
      },
      {
        "name": "service",
        "type": "Service?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service         Service?  @relation(fields: [serviceId], references: [id])"
      },
      {
        "name": "pestIssue",
        "type": "PestIssue?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pestIssue       PestIssue? @relation(fields: [pestIssueId], references: [id])"
      },
      {
        "name": "product",
        "type": "Product",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product         Product   @relation(fields: [productId], references: [id])"
      },
      {
        "name": "appliedBy",
        "type": "Technician",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appliedBy       Technician @relation(fields: [appliedById], references: [id])"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-usage-report",
    "sourceProject": "pestControl",
    "name": "UsageReport",
    "displayName": "Usage Report",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "reportPeriod",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reportPeriod    String    // e.g., \"2024-Q1\""
      },
      {
        "name": "productName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productName     String"
      },
      {
        "name": "epaNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "epaNumber       String?"
      },
      {
        "name": "totalQuantity",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalQuantity   Float"
      },
      {
        "name": "unit",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit            String"
      },
      {
        "name": "applicationCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "applicationCount Int"
      },
      {
        "name": "reportedBy",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reportedBy      String"
      },
      {
        "name": "submittedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submittedAt     DateTime?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"DRAFT\"",
        "sourceLine": "status          String    @default(\"DRAFT\")"
      }
    ]
  },
  {
    "id": "pest-control-backend-prisma-schema-prisma-user",
    "sourceProject": "pestControl",
    "name": "User",
    "displayName": "User",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email         String    @unique"
      },
      {
        "name": "password",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password      String"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "role",
        "type": "UserRole",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TECHNICIAN",
        "sourceLine": "role          UserRole  @default(TECHNICIAN)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "technician",
        "type": "Technician?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician    Technician?"
      },
      {
        "name": "salesRep",
        "type": "SalesRep?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salesRep      SalesRep?"
      },
      {
        "name": "sessions",
        "type": "Session[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessions      Session[]"
      },
      {
        "name": "passwordResetTokens",
        "type": "PasswordResetToken[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passwordResetTokens PasswordResetToken[]"
      }
    ]
  },
  {
    "id": "repair-shop-src-app-api-ai-telemetry-route-ts-ai-call-log",
    "sourceProject": "repairShop",
    "name": "AiCallLog",
    "displayName": "\"Ai Call Log\"",
    "framework": "SQL",
    "sourceFile": "src/app/api/ai-telemetry/route.ts",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "endpoint",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint TEXT NOT NULL"
      },
      {
        "name": "model",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model TEXT"
      },
      {
        "name": "latency_ms",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latency_ms INTEGER"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "error",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error TEXT"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-ai-diagnostic-message",
    "sourceProject": "repairShop",
    "name": "AiDiagnosticMessage",
    "displayName": "Ai Diagnostic Message",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "sessionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId   String"
      },
      {
        "name": "session",
        "type": "AiDiagnosticSession",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session     AiDiagnosticSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "role",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role        String    // 'user' or 'assistant'"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content     String"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-ai-diagnostic-session",
    "sourceProject": "repairShop",
    "name": "AiDiagnosticSession",
    "displayName": "Ai Diagnostic Session",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "ticketId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticketId    String"
      },
      {
        "name": "ticket",
        "type": "RepairTicket",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticket      RepairTicket @relation(fields: [ticketId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "messages",
        "type": "AiDiagnosticMessage[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "messages    AiDiagnosticMessage[]"
      },
      {
        "name": "summary",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "summary     String?"
      },
      {
        "name": "suggestedIssues",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "suggestedIssues String?  // JSON array"
      },
      {
        "name": "suggestedTests",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "suggestedTests  String?  // JSON array"
      },
      {
        "name": "confidence",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence  Float?"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-auto-order-log",
    "sourceProject": "repairShop",
    "name": "AutoOrderLog",
    "displayName": "Auto Order Log",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "partId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partId          String"
      },
      {
        "name": "part",
        "type": "Part",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part            Part      @relation(fields: [partId], references: [id])"
      },
      {
        "name": "triggeredQuantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "triggeredQuantity Int     // Quantity that triggered the order"
      },
      {
        "name": "orderQuantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "orderQuantity   Int       // Quantity ordered"
      },
      {
        "name": "status",
        "type": "AutoOrderStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING_APPROVAL",
        "sourceLine": "status          AutoOrderStatus @default(PENDING_APPROVAL)"
      },
      {
        "name": "approvedById",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedById    String?"
      },
      {
        "name": "approvedBy",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedBy      User?     @relation(\"ApprovedBy\", fields: [approvedById], references: [id])"
      },
      {
        "name": "approvedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedAt      DateTime?"
      },
      {
        "name": "rejectionReason",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rejectionReason String?"
      },
      {
        "name": "order",
        "type": "Order?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order           Order?"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-auto-order-rule",
    "sourceProject": "repairShop",
    "name": "AutoOrderRule",
    "displayName": "Auto Order Rule",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "partId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "partId          String    @unique"
      },
      {
        "name": "part",
        "type": "Part",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part            Part      @relation(fields: [partId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "isEnabled",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isEnabled       Boolean   @default(true)"
      },
      {
        "name": "reorderPoint",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reorderPoint    Int       // When to trigger (uses minQuantity if not set)"
      },
      {
        "name": "reorderQuantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reorderQuantity Int       // How many to order"
      },
      {
        "name": "maxAutoOrderQty",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "maxAutoOrderQty Int?      // Maximum auto-order quantity"
      },
      {
        "name": "preferredVendorId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferredVendorId String?"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-category",
    "sourceProject": "repairShop",
    "name": "Category",
    "displayName": "Category",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name        String    @unique"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "parts",
        "type": "Part[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parts       Part[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-communication-log",
    "sourceProject": "repairShop",
    "name": "CommunicationLog",
    "displayName": "Communication Log",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId  String"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer    Customer  @relation(fields: [customerId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "ticketId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticketId    String?"
      },
      {
        "name": "ticket",
        "type": "RepairTicket?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticket      RepairTicket? @relation(fields: [ticketId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User      @relation(fields: [userId], references: [id])"
      },
      {
        "name": "type",
        "type": "CommunicationType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type        CommunicationType"
      },
      {
        "name": "direction",
        "type": "CommunicationDirection",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "direction   CommunicationDirection"
      },
      {
        "name": "subject",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject     String?"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content     String"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-customer",
    "sourceProject": "repairShop",
    "name": "Customer",
    "displayName": "Customer",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName       String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName        String"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email           String?   @unique"
      },
      {
        "name": "phone",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone           String"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address         String?"
      },
      {
        "name": "city",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city            String?"
      },
      {
        "name": "state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state           String?"
      },
      {
        "name": "zipCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCode         String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "devices",
        "type": "Device[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "devices         Device[]"
      },
      {
        "name": "tickets",
        "type": "RepairTicket[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tickets         RepairTicket[]"
      },
      {
        "name": "communications",
        "type": "CommunicationLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "communications  CommunicationLog[]"
      },
      {
        "name": "sales",
        "type": "Sale[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sales           Sale[]"
      },
      {
        "name": "quotes",
        "type": "Quote[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quotes          Quote[]"
      },
      {
        "name": "warrantyClaims",
        "type": "WarrantyClaim[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warrantyClaims  WarrantyClaim[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-device",
    "sourceProject": "repairShop",
    "name": "Device",
    "displayName": "Device",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer  @relation(fields: [customerId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "deviceType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deviceType      String"
      },
      {
        "name": "brand",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand           String?"
      },
      {
        "name": "model",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model           String?"
      },
      {
        "name": "serialNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serialNumber    String?"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color           String?"
      },
      {
        "name": "condition",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition       String?"
      },
      {
        "name": "accessories",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accessories     String?"
      },
      {
        "name": "password",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password        String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "tickets",
        "type": "RepairTicket[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tickets         RepairTicket[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-order",
    "sourceProject": "repairShop",
    "name": "Order",
    "displayName": "Order",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String      @id @default(cuid())"
      },
      {
        "name": "orderNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "orderNumber String      @unique"
      },
      {
        "name": "vendorId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendorId    String"
      },
      {
        "name": "vendor",
        "type": "Vendor",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor      Vendor      @relation(fields: [vendorId], references: [id])"
      },
      {
        "name": "status",
        "type": "OrderStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status      OrderStatus @default(PENDING)"
      },
      {
        "name": "totalAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount Float"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes       String?"
      },
      {
        "name": "isAutoGenerated",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isAutoGenerated Boolean  @default(false)"
      },
      {
        "name": "autoOrderLogId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "autoOrderLogId  String?  @unique"
      },
      {
        "name": "autoOrderLog",
        "type": "AutoOrderLog?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "autoOrderLog    AutoOrderLog? @relation(fields: [autoOrderLogId], references: [id])"
      },
      {
        "name": "orderDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "orderDate   DateTime    @default(now())"
      },
      {
        "name": "expectedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expectedDate DateTime?"
      },
      {
        "name": "receivedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receivedDate DateTime?"
      },
      {
        "name": "items",
        "type": "OrderItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items       OrderItem[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-order-item",
    "sourceProject": "repairShop",
    "name": "OrderItem",
    "displayName": "Order Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "orderId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "orderId     String"
      },
      {
        "name": "order",
        "type": "Order",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order       Order     @relation(fields: [orderId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "partId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partId      String"
      },
      {
        "name": "part",
        "type": "Part",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part        Part      @relation(fields: [partId], references: [id])"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity    Int"
      },
      {
        "name": "unitPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice   Float"
      },
      {
        "name": "receivedQty",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "receivedQty Int       @default(0)"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-part",
    "sourceProject": "repairShop",
    "name": "Part",
    "displayName": "Part",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "sku",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "sku             String    @unique"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "categoryId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "categoryId      String"
      },
      {
        "name": "category",
        "type": "Category",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        Category  @relation(fields: [categoryId], references: [id])"
      },
      {
        "name": "costPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "costPrice       Float"
      },
      {
        "name": "sellingPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sellingPrice    Float"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantity        Int       @default(0)"
      },
      {
        "name": "minQuantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "minQuantity     Int       @default(5)"
      },
      {
        "name": "location",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location        String?"
      },
      {
        "name": "compatibleWith",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compatibleWith  String[]"
      },
      {
        "name": "vendorId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendorId        String?"
      },
      {
        "name": "vendor",
        "type": "Vendor?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor          Vendor?   @relation(fields: [vendorId], references: [id])"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "ticketParts",
        "type": "TicketPart[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticketParts     TicketPart[]"
      },
      {
        "name": "orderItems",
        "type": "OrderItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "orderItems      OrderItem[]"
      },
      {
        "name": "saleItems",
        "type": "SaleItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "saleItems       SaleItem[]"
      },
      {
        "name": "autoOrderRule",
        "type": "AutoOrderRule?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "autoOrderRule   AutoOrderRule?"
      },
      {
        "name": "autoOrderLogs",
        "type": "AutoOrderLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "autoOrderLogs   AutoOrderLog[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-password-reset-token",
    "sourceProject": "repairShop",
    "name": "PasswordResetToken",
    "displayName": "Password Reset Token",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id        String   @id @default(cuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId    String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "token",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "token     String   @unique"
      },
      {
        "name": "expiresAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt DateTime"
      },
      {
        "name": "usedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "usedAt    DateTime?"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-quote",
    "sourceProject": "repairShop",
    "name": "Quote",
    "displayName": "Quote",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String      @id @default(cuid())"
      },
      {
        "name": "quoteNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "quoteNumber     String      @unique"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer    @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "ticketId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticketId        String?"
      },
      {
        "name": "ticket",
        "type": "RepairTicket?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticket          RepairTicket? @relation(fields: [ticketId], references: [id])"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById     String"
      },
      {
        "name": "createdBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdBy       User        @relation(fields: [createdById], references: [id])"
      },
      {
        "name": "status",
        "type": "QuoteStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          QuoteStatus @default(DRAFT)"
      },
      {
        "name": "subtotal",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal        Float"
      },
      {
        "name": "taxRate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxRate         Float       @default(0)"
      },
      {
        "name": "taxAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxAmount       Float       @default(0)"
      },
      {
        "name": "discount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discount        Float       @default(0)"
      },
      {
        "name": "total",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total           Float"
      },
      {
        "name": "validUntil",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "validUntil      DateTime"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "items",
        "type": "QuoteItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items           QuoteItem[]"
      },
      {
        "name": "approval",
        "type": "QuoteApproval?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approval        QuoteApproval?"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-quote-approval",
    "sourceProject": "repairShop",
    "name": "QuoteApproval",
    "displayName": "Quote Approval",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "quoteId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "quoteId         String    @unique"
      },
      {
        "name": "quote",
        "type": "Quote",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quote           Quote     @relation(fields: [quoteId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "token",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "cuid(",
        "sourceLine": "token           String    @unique @default(cuid())"
      },
      {
        "name": "status",
        "type": "ApprovalStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          ApprovalStatus @default(PENDING)"
      },
      {
        "name": "sentAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sentAt          DateTime?"
      },
      {
        "name": "sentToEmail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sentToEmail     String?"
      },
      {
        "name": "viewedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "viewedAt        DateTime?"
      },
      {
        "name": "respondedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "respondedAt     DateTime?"
      },
      {
        "name": "customerNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerNotes   String?"
      },
      {
        "name": "ipAddress",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ipAddress       String?"
      },
      {
        "name": "expiresAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt       DateTime"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-quote-item",
    "sourceProject": "repairShop",
    "name": "QuoteItem",
    "displayName": "Quote Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "quoteId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quoteId     String"
      },
      {
        "name": "quote",
        "type": "Quote",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quote       Quote     @relation(fields: [quoteId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "itemType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "itemType    String    // 'service' or 'part'"
      },
      {
        "name": "serviceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId   String?"
      },
      {
        "name": "service",
        "type": "Service?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service     Service?  @relation(fields: [serviceId], references: [id])"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity    Int"
      },
      {
        "name": "unitPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice   Float"
      },
      {
        "name": "total",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total       Float"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-repair-ticket",
    "sourceProject": "repairShop",
    "name": "RepairTicket",
    "displayName": "Repair Ticket",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String        @id @default(cuid())"
      },
      {
        "name": "ticketNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "ticketNumber    String        @unique"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer      @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "deviceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deviceId        String?"
      },
      {
        "name": "device",
        "type": "Device?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "device          Device?       @relation(fields: [deviceId], references: [id])"
      },
      {
        "name": "issueDescription",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issueDescription String"
      },
      {
        "name": "diagnosticNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "diagnosticNotes  String?"
      },
      {
        "name": "repairNotes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "repairNotes      String?"
      },
      {
        "name": "status",
        "type": "TicketStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "RECEIVED",
        "sourceLine": "status           TicketStatus  @default(RECEIVED)"
      },
      {
        "name": "priority",
        "type": "Priority",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NORMAL",
        "sourceLine": "priority         Priority      @default(NORMAL)"
      },
      {
        "name": "estimatedCost",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedCost    Float?"
      },
      {
        "name": "actualCost",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actualCost       Float?"
      },
      {
        "name": "laborCost",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "laborCost        Float?"
      },
      {
        "name": "partsCost",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partsCost        Float?"
      },
      {
        "name": "technicianId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technicianId     String?"
      },
      {
        "name": "technician",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician       User?         @relation(\"AssignedTechnician\", fields: [technicianId], references: [id])"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById      String"
      },
      {
        "name": "createdBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdBy        User          @relation(\"CreatedBy\", fields: [createdById], references: [id])"
      },
      {
        "name": "intakeDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "intakeDate       DateTime      @default(now())"
      },
      {
        "name": "estimatedCompletion",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedCompletion DateTime?"
      },
      {
        "name": "completedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedDate    DateTime?"
      },
      {
        "name": "pickupDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickupDate       DateTime?"
      },
      {
        "name": "warrantyStatus",
        "type": "WarrantyStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NONE",
        "sourceLine": "warrantyStatus   WarrantyStatus @default(NONE)"
      },
      {
        "name": "warrantyExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warrantyExpiry   DateTime?"
      },
      {
        "name": "aiDiagnosticSummary",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiDiagnosticSummary String?"
      },
      {
        "name": "estimatedStartDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedStartDate  DateTime?"
      },
      {
        "name": "estimatedDuration",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedDuration   Int?         // in minutes"
      },
      {
        "name": "timelineMilestones",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timelineMilestones  String?      // JSON string of milestones"
      },
      {
        "name": "complexityScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "complexityScore     Int?         // 1-10 scale"
      },
      {
        "name": "partsUsed",
        "type": "TicketPart[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partsUsed        TicketPart[]"
      },
      {
        "name": "statusHistory",
        "type": "TicketStatusHistory[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "statusHistory    TicketStatusHistory[]"
      },
      {
        "name": "communications",
        "type": "CommunicationLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "communications   CommunicationLog[]"
      },
      {
        "name": "quotes",
        "type": "Quote[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quotes           Quote[]"
      },
      {
        "name": "sale",
        "type": "Sale?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sale             Sale?"
      },
      {
        "name": "photos",
        "type": "TicketPhoto[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photos           TicketPhoto[]"
      },
      {
        "name": "warrantyClaims",
        "type": "WarrantyClaim[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warrantyClaims   WarrantyClaim[]"
      },
      {
        "name": "aiDiagnosticSessions",
        "type": "AiDiagnosticSession[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiDiagnosticSessions AiDiagnosticSession[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-sale",
    "sourceProject": "repairShop",
    "name": "Sale",
    "displayName": "Sale",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String      @id @default(cuid())"
      },
      {
        "name": "saleNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "saleNumber      String      @unique"
      },
      {
        "name": "customerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String?"
      },
      {
        "name": "customer",
        "type": "Customer?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer?   @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "ticketId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "ticketId        String?     @unique"
      },
      {
        "name": "ticket",
        "type": "RepairTicket?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticket          RepairTicket? @relation(fields: [ticketId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User        @relation(fields: [userId], references: [id])"
      },
      {
        "name": "subtotal",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal        Float"
      },
      {
        "name": "taxRate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxRate         Float       @default(0)"
      },
      {
        "name": "taxAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxAmount       Float       @default(0)"
      },
      {
        "name": "discount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discount        Float       @default(0)"
      },
      {
        "name": "total",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total           Float"
      },
      {
        "name": "paymentMethod",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentMethod   PaymentMethod"
      },
      {
        "name": "paymentStatus",
        "type": "PaymentStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "paymentStatus   PaymentStatus @default(PENDING)"
      },
      {
        "name": "paymentReference",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentReference String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "items",
        "type": "SaleItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items           SaleItem[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-sale-item",
    "sourceProject": "repairShop",
    "name": "SaleItem",
    "displayName": "Sale Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "saleId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "saleId      String"
      },
      {
        "name": "sale",
        "type": "Sale",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sale        Sale      @relation(fields: [saleId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "itemType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "itemType    String    // 'service', 'part', 'accessory', 'warranty'"
      },
      {
        "name": "partId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partId      String?"
      },
      {
        "name": "part",
        "type": "Part?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part        Part?     @relation(fields: [partId], references: [id])"
      },
      {
        "name": "serviceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceId   String?"
      },
      {
        "name": "service",
        "type": "Service?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service     Service?  @relation(fields: [serviceId], references: [id])"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity    Int"
      },
      {
        "name": "unitPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice   Float"
      },
      {
        "name": "total",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total       Float"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-service",
    "sourceProject": "repairShop",
    "name": "Service",
    "displayName": "Service",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String"
      },
      {
        "name": "basePrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "basePrice       Float"
      },
      {
        "name": "estimatedTime",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedTime   Int?      // in minutes"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "quoteItems",
        "type": "QuoteItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quoteItems      QuoteItem[]"
      },
      {
        "name": "saleItems",
        "type": "SaleItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "saleItems       SaleItem[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-setting",
    "sourceProject": "repairShop",
    "name": "Setting",
    "displayName": "Setting",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "key",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "key         String    @unique"
      },
      {
        "name": "value",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value       String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-ticket-part",
    "sourceProject": "repairShop",
    "name": "TicketPart",
    "displayName": "Ticket Part",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "ticketId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticketId    String"
      },
      {
        "name": "ticket",
        "type": "RepairTicket",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticket      RepairTicket @relation(fields: [ticketId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "partId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "partId      String"
      },
      {
        "name": "part",
        "type": "Part",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part        Part      @relation(fields: [partId], references: [id])"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity    Int"
      },
      {
        "name": "unitPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice   Float"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-ticket-photo",
    "sourceProject": "repairShop",
    "name": "TicketPhoto",
    "displayName": "Ticket Photo",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "ticketId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticketId    String"
      },
      {
        "name": "ticket",
        "type": "RepairTicket",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticket      RepairTicket @relation(fields: [ticketId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "filename",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename    String"
      },
      {
        "name": "originalName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "originalName String"
      },
      {
        "name": "mimeType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mimeType    String"
      },
      {
        "name": "size",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size        Int"
      },
      {
        "name": "path",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "path        String    // relative path in /public/uploads/"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "aiAnalysis",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAnalysis  String?   // AI-generated damage description"
      },
      {
        "name": "uploadedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "uploadedAt  DateTime  @default(now())"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-ticket-status-history",
    "sourceProject": "repairShop",
    "name": "TicketStatusHistory",
    "displayName": "Ticket Status History",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "ticketId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticketId    String"
      },
      {
        "name": "ticket",
        "type": "RepairTicket",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticket      RepairTicket @relation(fields: [ticketId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "fromStatus",
        "type": "TicketStatus?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fromStatus  TicketStatus?"
      },
      {
        "name": "toStatus",
        "type": "TicketStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "toStatus    TicketStatus"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes       String?"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-user",
    "sourceProject": "repairShop",
    "name": "User",
    "displayName": "User",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id            String    @id @default(cuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email         String    @unique"
      },
      {
        "name": "password",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password      String"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "role",
        "type": "UserRole",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TECHNICIAN",
        "sourceLine": "role          UserRole  @default(TECHNICIAN)"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "avatar",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar        String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "emailVerified",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "emailVerified Boolean   @default(false)"
      },
      {
        "name": "emailVerifyToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emailVerifyToken String?"
      },
      {
        "name": "tickets",
        "type": "RepairTicket[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tickets       RepairTicket[] @relation(\"AssignedTechnician\")"
      },
      {
        "name": "createdTickets",
        "type": "RepairTicket[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdTickets RepairTicket[] @relation(\"CreatedBy\")"
      },
      {
        "name": "communications",
        "type": "CommunicationLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "communications CommunicationLog[]"
      },
      {
        "name": "sales",
        "type": "Sale[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sales         Sale[]"
      },
      {
        "name": "quotes",
        "type": "Quote[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quotes        Quote[]"
      },
      {
        "name": "autoOrderApprovals",
        "type": "AutoOrderLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "autoOrderApprovals AutoOrderLog[] @relation(\"ApprovedBy\")"
      },
      {
        "name": "passwordResetTokens",
        "type": "PasswordResetToken[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passwordResetTokens PasswordResetToken[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-vendor",
    "sourceProject": "repairShop",
    "name": "Vendor",
    "displayName": "Vendor",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String    @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "contactName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contactName String?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email       String?"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone       String?"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address     String?"
      },
      {
        "name": "website",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website     String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes       String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive    Boolean   @default(true)"
      },
      {
        "name": "parts",
        "type": "Part[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parts       Part[]"
      },
      {
        "name": "orders",
        "type": "Order[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "orders      Order[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-warranty-claim",
    "sourceProject": "repairShop",
    "name": "WarrantyClaim",
    "displayName": "Warranty Claim",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "claimNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "claimNumber     String    @unique"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "customer",
        "type": "Customer",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer        Customer  @relation(fields: [customerId], references: [id])"
      },
      {
        "name": "ticketId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticketId        String?"
      },
      {
        "name": "ticket",
        "type": "RepairTicket?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticket          RepairTicket? @relation(fields: [ticketId], references: [id])"
      },
      {
        "name": "status",
        "type": "WarrantyClaimStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "SUBMITTED",
        "sourceLine": "status          WarrantyClaimStatus @default(SUBMITTED)"
      },
      {
        "name": "productDescription",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productDescription String"
      },
      {
        "name": "purchaseDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchaseDate    DateTime?"
      },
      {
        "name": "warrantyEndDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warrantyEndDate DateTime?"
      },
      {
        "name": "issueDescription",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issueDescription String"
      },
      {
        "name": "resolution",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution      String?"
      },
      {
        "name": "claimAmount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claimAmount     Float?"
      },
      {
        "name": "approvedAmount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedAmount  Float?"
      },
      {
        "name": "submittedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "submittedAt     DateTime  @default(now())"
      },
      {
        "name": "reviewedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewedAt      DateTime?"
      },
      {
        "name": "resolvedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolvedAt      DateTime?"
      },
      {
        "name": "statusHistory",
        "type": "WarrantyClaimStatusHistory[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "statusHistory   WarrantyClaimStatusHistory[]"
      },
      {
        "name": "documents",
        "type": "WarrantyDocument[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documents       WarrantyDocument[]"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-warranty-claim-status-history",
    "sourceProject": "repairShop",
    "name": "WarrantyClaimStatusHistory",
    "displayName": "Warranty Claim Status History",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "claimId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claimId         String"
      },
      {
        "name": "claim",
        "type": "WarrantyClaim",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claim           WarrantyClaim @relation(fields: [claimId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "fromStatus",
        "type": "WarrantyClaimStatus?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fromStatus      WarrantyClaimStatus?"
      },
      {
        "name": "toStatus",
        "type": "WarrantyClaimStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "toStatus        WarrantyClaimStatus"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "changedBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "changedBy       String?"
      }
    ]
  },
  {
    "id": "repair-shop-prisma-schema-prisma-warranty-document",
    "sourceProject": "repairShop",
    "name": "WarrantyDocument",
    "displayName": "Warranty Document",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "claimId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claimId         String"
      },
      {
        "name": "claim",
        "type": "WarrantyClaim",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claim           WarrantyClaim @relation(fields: [claimId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "filename",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename        String"
      },
      {
        "name": "originalName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "originalName    String"
      },
      {
        "name": "mimeType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mimeType        String"
      },
      {
        "name": "size",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size            Int"
      },
      {
        "name": "path",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "path            String"
      },
      {
        "name": "documentType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentType    String?   // 'receipt', 'photo', 'warranty_card', etc."
      },
      {
        "name": "uploadedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "uploadedAt      DateTime  @default(now())"
      }
    ]
  }
];
