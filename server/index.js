/* Simple Express email forwarder using nodemailer

Environment variables required:
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- FROM_EMAIL (optional, defaults to SMTP_USER)
- TO_EMAIL (optional, defaults to contact@heyatteq.site)

Run: node server/index.js (or add a script)
*/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT || 587
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const FROM_EMAIL = process.env.FROM_EMAIL || SMTP_USER
const TO_EMAIL = process.env.TO_EMAIL || 'contact@heyatteq.site'

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn('Warning: SMTP credentials not set. The /send endpoint will fallback to error.');
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT == 465, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

app.post('/api/send', async (req, res) => {
  const { name, email, message, to } = req.body || {}
  const dest = to || TO_EMAIL

  if (!name || !email || !message) {
    return res.status(422).json({ error: 'Missing fields' })
  }

  const mail = {
    from: FROM_EMAIL,
    to: dest,
    subject: `Website quote request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
  }

  try {
    const info = await transporter.sendMail(mail)
    console.log('Email sent', info.messageId)
    return res.json({ ok: true })
  } catch (err) {
    console.error('Failed to send email', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

// health check for Render / health probes
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Email server listening on ${port}`))
