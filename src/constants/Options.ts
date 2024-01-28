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
  { name: 'Acoustic Box - H', value: '' },
  { name: 'Air Filter - F', value: '' },
  { name: 'Battery (E/F/FP) 070-0035-00', value: '' },
  { name: 'CAN Cable - G', value: '' },
  { name: 'Condenser Flowmeter - G', value: '' },
  { name: 'Condenser Pump Assmbly, Clocking Flowmeter', value: '' },
  { name: 'Condenser Supply Hose', value: '' }
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
