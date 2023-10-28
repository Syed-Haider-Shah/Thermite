export enum Paths {
  HOME = '',
  CREATE = `${HOME}/create`,
  TICKET = `${HOME}/tickets`,
  PARENT_TICKET = `${TICKET}/parent`,
  CHILD_TICKET = `${TICKET}/child`,
  PARENT_ID = `${PARENT_TICKET}/[id]`,
  CHILD_ID = `${CHILD_TICKET}/[id]`,
  CUSTOMER = `${HOME}/customers`,
  CUSTOMER_ID = `${CUSTOMER}/[id]`,
  FORM = `${HOME}/forms`,
  FORM_ID = `${FORM}/[id]`,
  GUIDE = `${HOME}/guides`,
  GUIDE_ID = `${GUIDE}/[id]`,
  SOFTWARE = `${HOME}/software`
}
