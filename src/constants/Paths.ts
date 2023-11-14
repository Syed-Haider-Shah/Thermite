export enum Paths {
  HOME = '/',
  CREATE = `${HOME}create`,
  TICKET = `${HOME}tickets`,
  TICKET_ID = `${TICKET}/[id]`,
  TICKET_CREATE = `${TICKET}/create`,
  CUSTOMER = `${HOME}customers`,
  CUSTOMER_ID = `${CUSTOMER}/[id]`,
  FORM = `${HOME}forms`,
  FORM_ID = `${FORM}/[id]`,
  GUIDE = `${HOME}guides`,
  GUIDE_ID = `${GUIDE}/[id]`,
  SOFTWARE = `${HOME}software`,
  PROFILE = `${HOME}profile`,
  PROFILE_UPDATE = `${PROFILE}/update`
}
