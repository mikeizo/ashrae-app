import sgMail from '@sendgrid/mail'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  if (!body) {
    event.node.res.statusCode = 400
    return send(event)
  }

  const { fullName = '', email = '', message = '', fname } = body
  const regex = /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  // Form validation
  if (fname || fname == '') {
    event.node.res.statusCode = 400
  } else if (!fullName || fullName.length > 30 || fullName.length < 3) {
    event.node.res.statusCode = 400
  } else if (!email || email.length > 50 || !regex.test(email)) {
    event.node.res.statusCode = 400
  } else if (message && message.length > 300) {
    event.node.res.statusCode = 400
  } else {
    sgMail.setApiKey(config.sendGrid)

    const emailMsg = {
      to: 'mtropea55@gmail.com',
      from: 'no-reply@miketropea.com', // Use the email address or domain you verified above
      subject: 'Ashrae Bi-State Contact Form',
      // text: 'lorem ipsum',
      html: `<strong>Name:</strong> ${fullName}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Message:</strong> ${message} `
    }

    await sgMail
      .send(emailMsg)
      .then(() => {
        event.node.res.statusCode = 200
      })
      .catch(() => {
        event.node.res.statusCode = 400
      })
  }

  return send(event)
})
