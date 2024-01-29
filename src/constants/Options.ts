export const TICKET_STATUS_OPTIONS = [
  { name: 'All', value: '' },
  {
    name: 'Open',
    value: 'OPEN'
  },
  {
    name: 'Closed',
    value: 'CLOSED'
  },
  {
    name: 'Water Sample',
    value: 'WATER-SAMPLE'
  },
  {
    name: 'Waiting for Parts',
    value: 'PARTS'
  },
  {
    name: 'Decision',
    value: 'DECISION'
  }
]

export const FAULT_OPTIONS = [
  { name: 'Air Filter Server', value: 'air-filter-server' },
  {
    name: 'Ambient RH Sensor Failure',
    value: 'ambient-rh-sensor-failure'
  },
  {
    name: 'Battery Charger Failure',
    value: 'battery-charger-failure'
  },
  {
    name: 'Battery Disconnected',
    value: 'battery-disconnected'
  },
  {
    name: 'Battery Not Charging',
    value: 'battery-not-charging'
  },
  {
    name: 'Battery Voltage Low',
    value: 'Battery Voltage Low'
  }
]

export const SOURCES_OPTIONS = [
  { name: 'CHAT', value: 'chat' },
  { name: 'EMAIL', value: 'email' },
  { name: 'FORM', value: 'form' },
  { name: 'PHONE', value: 'phone' },
  { name: 'SGP', value: 'sgp' },
  { name: 'Field App', value: 'field-app' },
  { name: 'NOC', value: 'noc' },
  { name: 'Site Review', value: 'site-review' },
  { name: 'Python', value: 'python' },
  { name: 'Support Portal', value: 'support-portal' },
  { name: 'Customer Phone', value: 'customer-phone' }
]

export const INDICATED_FAILURES_OPTIONS = [
  { name: 'Acoustic Box - H', value: 'acoustic-box-h' },
  { name: 'Air Filter - F', value: 'air-filter-f' },
  {
    name: 'Battery (E/F/FP) 070-0035-00',
    value: 'battery-(e/f/fp)-070-0035-00'
  },
  { name: 'CAN Cable - G', value: 'can-cable-g' },
  { name: 'Condenser Flowmeter - G', value: 'condenser-flowmeter-g' },
  {
    name: 'Condenser Pump Assmbly',
    value: 'condenser-pump-assembly'
  },
  { name: 'Clocking Flowmeter', value: 'clocking-flowmeter' },
  { name: 'Condenser Supply Hose', value: 'condenser-supply-hose' }
]

export const COUNTRY_OPTIONS = [
  { name: 'All', value: 'all' },
  { name: 'Pakistan', value: 'pakistan' },
  { name: 'South Africa', value: 'south_africa' },
  { name: 'Australia', value: 'Australia' },
  { name: 'United States', value: 'united_states' },
  { name: 'Canada', value: 'canada' },
  { name: 'China', value: 'china' }
]

export const ROLES_OPTIONS = [
  { name: 'Employee', value: 'user' },
  { name: 'Admin', value: 'admin' },
  { name: 'Super User', value: 'superuser' }
]

export const CAUSE_OPTIONS = [
  { name: 'False Positive', value: 'false-positive' },
  { name: 'Firmware Bug', value: 'firmware-bug' },
  { name: 'Physical Damage', value: 'physical-damamge' },
  { name: 'No Failure Present', value: 'no-failure-present' },
  { name: 'Clog', value: 'clog' },
  {
    name: 'Component does not run at setpoint',
    value: 'component-setpoint-failure'
  },
  { name: 'Plumbing Issue', value: 'plumbing-issue' },
  { name: 'Wheel Dropout', value: 'wheel-dropout' }
]

export const RESOLUTIONS_OPTIONS = [
  {
    name: 'Resolved - First Contact Resolution',
    value: 'first-contact-resolution'
  },
  {
    name: 'Resolved - No Filed Service Visit Required',
    value: 'no-visit-required'
  },
  {
    name: 'Repaired - Field Service Visit Completed',
    value: 'visit-completed'
  },
  { name: 'Replaced - New Panel - Filed Service Visit', value: 'new-panel' },
  { name: 'Removed Panel', value: 'removed-panel' },
  {
    name: 'SENT_KNOWLEDGE_DOCUMENT_LINK',
    value: 'sent-knowledge-document-link'
  },
  { name: 'FEATURE_REQUEST_TRACKED', value: 'feature-request-tracked' },
  {
    name: 'Environmental Reasons - No Action Required',
    value: 'environmental-reasons'
  }
]
