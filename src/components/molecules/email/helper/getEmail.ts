import * as styles from '../emailStyles'

import logo from '@/assets/images/logo.png'
import { EmailProps } from '../EmailProps'

const getEmail = ({
  name,
  email,
  params,
  company
}: EmailProps) => {
  const today = new Date()
  let img:string = logo.src
  if (window) {
    const imgUrl = new URL(logo.src, window.location.href)
    img = imgUrl?.href
  }

  const showData = () => {
    let template = ''
    for (const [key, value] of Object.entries(params ?? {})) {
      template += `<b>${key}:</b> ${value}<br>`
    }

    return template
  }
  
  return (
    `<div style="${styles.email}">
      <div style="${styles.emailBody}">
        <div style="${styles.emailBase} background: '#fff'">
          <div style="${styles.emailLogo}">
            <img src="${img ?? ''}" alt="${company ?? ''}" style="${styles.emailLogoImg}" />
          </div>
        </div>
        <div style="${styles.emailHeader}">
          <p style="${styles.emailHeaderText}">¡Hola! <b>Sr Administrador</b>, se le informa que ha sido enviado un mensaje de contácto a través del sitio web.</p>
        </div>
        ${
          params && (
            `<div style="${styles.emailBase} background: #fff; padding: 10px 0px;">
              <p style="${styles.emailSubtitle} padding: 0px 20px;">Información de contácto:</p>
              <p style="${styles.emailText} padding: 0px 20px;">
              ${showData()}
              </p>
              ${
                (email && name) && (
                  `<p style="${styles.emailText} text-align: center; padding: 0px 20px 20px;">
                  Puedes contactar a ${name} via email, <a href="mailto:${email}" style="color: #ff735c">${email}</a></p>`
                )
              }
            </div>`
          )
        }
        <div style="${styles.emailBase} background: transparent">
          <div style="${styles.emailGreeting}">
            <p style="${styles.emailGreetingText} margin-bottom: 5px">Un saludo,</p>
            <p style="${styles.emailGreetingText} margin: 0px"><b>${company ?? ''}</b></p>
          </div>
        </div>
        <div style="${styles.emailBase} background: transparent">
          <div style="${styles.emailCopy}">
            <hr/>
            <p style="${styles.emailCopyText}">© ${company ?? ''} ${today.getFullYear()} | Derechos Reservados. Tu privacidad es importante para nosotros. No compartiremos ninguno de tus detalles con terceras compañías sin tu previo consentimiento.</p>
          </div>
        </div>
      </div>
    </div>`
  )
}

export default getEmail