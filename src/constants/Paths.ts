export enum Paths {
  INDEX = '/',
  HOME = `${INDEX}home`,
  CREATE = `${INDEX}create`,
  TICKET = `${INDEX}tickets`,
  TICKET_ID = `${TICKET}/[id]`,
  TICKET_CREATE = `${TICKET}/create`,
  CUSTOMER = `${INDEX}customers`,
  CUSTOMER_ID = `${CUSTOMER}/[id]`,
  FORM = `${INDEX}forms`,
  FORM_ID = `${FORM}/[id]`,
  GUIDE = `${INDEX}guides`,
  GUIDE_ID = `${GUIDE}/[id]`,
  SOFTWARE = `${INDEX}softwares`,
  PROFILE = `${INDEX}profile`,
  PROFILE_UPDATE = `${PROFILE}/update`,
  EMPLOYEE = `${INDEX}employees`,
  EMPLOYEE_CREATE = `${EMPLOYEE}/create`
}
