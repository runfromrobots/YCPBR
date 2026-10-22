// Emails the organizer about each new sign-up, through Resend's REST API.
// Silently skipped until RESEND_API_KEY and REGISTRATION_ALERT_TO are set.

const RESEND_URL = 'https://api.resend.com/emails'

// The registrant table in Claude finds alerts by this subject prefix
export const ALERT_SUBJECT_PREFIX = 'YCPBR registration:'

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)
}

export async function sendRegistrationAlert(email: string) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.REGISTRATION_ALERT_TO
  if (!apiKey || !to) return

  const when = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

  try {
    const response = await fetch(RESEND_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.REGISTRATION_ALERT_FROM || 'YCPBR <onboarding@resend.dev>',
        to: [to],
        subject: `${ALERT_SUBJECT_PREFIX} ${email}`,
        text: `New sign-up for the Yatesville Creek Paper Boat Race.\n\nEmail: ${email}\nWhen: ${when} (Eastern)\n`,
        html: `<p>New sign-up for the Yatesville Creek Paper Boat Race.</p><p><strong>Email:</strong> ${escapeHtml(email)}<br><strong>When:</strong> ${escapeHtml(when)} (Eastern)</p>`,
      }),
      signal: AbortSignal.timeout(5000),
    })
    if (!response.ok) {
      console.error('[notify] alert email failed:', response.status, await response.text())
    }
  } catch (error) {
    console.error('[notify] alert email failed:', error)
  }
}
