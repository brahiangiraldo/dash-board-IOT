import React from 'react'

import { EmailSendParams } from '../models/EmailSendParams'
import { sendEmail } from '@/helpers/rootServer'
import { apis } from './apis'
import getEmail from '../../helper/getEmail'

const HttpEmailSend = async (resend: EmailSendParams) => {
  const url: string = apis.url_sendmail
  const params = {
    "Correo Electrónico": resend.email,
    "Nombre": resend.name,
    "Teléfono": resend.phone,
    "Asunto": resend.subject,
    "Mensaje": resend.text
  }
  
  const template = () => {
    return (
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Información de Contacto</title>
      </head>
      <body>
      ${
        getEmail({name: resend.name, email:resend.email, params, company: resend.company})
      }
      </body>
      </html>
      `
    )
  } 

  const body = {
    to: sendEmail ?? '',
    subject: resend.subject,
    html: template()
  }

  const request = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({ ...body })
  });
  const response = await request.json();

  return {
    message: response.data?.message,
    status: response.status
  }
}

export default HttpEmailSend