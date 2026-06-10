// functions/api/contact.js
export async function onRequestPost(context) {
  const { request, env } = context
  let body
  try {
    body = await request.json()
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }
  const { name, business, email, phone, message } = body
  if (!name || !business || !email || !message) {
    return new Response('Missing required fields', { status: 400 })
  }
  const emailBody = `
New enquiry from DD Web Solutions
Name:     ${name}
Business: ${business}
Email:    ${email}
Phone:    ${phone || 'Not provided'}
Message:
${message}
  `.trim()
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'DD Web Solutions <onboarding@resend.dev>',
      to: ['ddwebsolutions@hotmail.com'],
      reply_to: email,
      subject: `New enquiry from ${name} — ${business}`,
      text: emailBody,
    }),
  })
  if (!res.ok) {
    return new Response('Email failed', { status: 500 })
  }
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
