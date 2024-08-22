import React from 'react'

import { EmailProps } from './EmailProps'
import getEmail from './helper/getEmail'

const Email = ({
  name,
  email,
  params,
  company
}: EmailProps) => {
  const template = getEmail({name, email, params, company})  
  return (
    <div dangerouslySetInnerHTML={{__html: template}}></div>
  )
}

export default Email