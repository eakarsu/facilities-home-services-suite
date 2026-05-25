export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AICommercialCleaningOperations', ownership: 'Work Orders source capabilities and workflows', coverage: ['Work Orders', 'Customers', 'Properties'] },
  { name: 'AIHomeRenovationProjectManager', ownership: 'Customers source capabilities and workflows', coverage: ['Scheduling', 'Technicians', 'Estimates'] },
  { name: 'pestControl', ownership: 'Properties source capabilities and workflows', coverage: ['Inspections', 'Inventory', 'Invoices'] },
  { name: 'repairShop', ownership: 'Scheduling source capabilities and workflows', coverage: ['Quality', 'Routes', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Work Orders', value: '84', note: 'Active' },
  { label: 'Customers', value: '61', note: 'Open' },
  { label: 'Properties', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Work Orders operating view', 'Customers operating view', 'Properties operating view', 'Scheduling operating view', 'Technicians operating view', 'Estimates operating view', 'Inspections operating view', 'Inventory operating view'];
export const workflowHighlights = ['Work Orders workflow with records, approvals, audit, and reporting', 'Customers workflow with records, approvals, audit, and reporting', 'Properties workflow with records, approvals, audit, and reporting', 'Scheduling workflow with records, approvals, audit, and reporting', 'Technicians workflow with records, approvals, audit, and reporting'];
