// functions/api/contact.js
export async function onRequestPost(context) {
  const { request, env } = context
  let body
  try { body = await request.json() } catch { return new Response('Invalid JSON', { status: 400 }) }
  const { name, business, email, phone, message } = body
  if (!name || !business || !email || !message) return new Response('Missing required fields', { status: 400 })
  if (!env.BREVO_API_KEY) return new Response('Email service is not configured', { status: 500 })
  const emailBody = `New enquiry from DD Web Solutions\nName: ${name}\nBusiness: ${business}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage:\n${message}`
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ sender: { name: 'DD Web Solutions', email: 'hello@ddwebsolution.com' }, to: [{ email: 'ddwebsolutions@hotmail.com', name: 'DD Web Solutions' }], replyTo: { email, name }, subject: `New enquiry from ${name} — ${business}`, textContent: emailBody }),
  })
  if (!res.ok) return new Response('Email failed', { status: 500 })
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
