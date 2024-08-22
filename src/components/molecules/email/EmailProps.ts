export interface EmailProps {
  name?: string
  email?: string
  params?: item
  company?: string
}

interface item {
  [x:string]: string | number | boolean
}