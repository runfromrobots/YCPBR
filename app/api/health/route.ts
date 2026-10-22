import { NextResponse } from 'next/server'
import { isSupabaseConfigured } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

// Reports which settings are present, never their values
export function GET() {
  return NextResponse.json({
    signups: isSupabaseConfigured,
    alerts: Boolean(process.env.RESEND_API_KEY && process.env.REGISTRATION_ALERT_TO),
  })
}
