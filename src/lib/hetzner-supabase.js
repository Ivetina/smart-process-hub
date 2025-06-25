
import { createClient } from '@supabase/supabase-js'

// Vaš Hetzner Supabase - Docker na VPS-u
const hetznerSupabase = createClient(
  'http://162.55.36.239:54321',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MVc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_CfJ1xVyDia9IwfzRnxYmo'
)

// MyBrainDev API - samo Hetzner
export const mybraindevAPI = {
  async createContact(contactData) {
    try {
      const { data, error } = await hetznerSupabase
        .from('mybraindev_contacts')
        .insert([{
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone || null,
          company: contactData.company || null,
          message: contactData.message,
          source: 'mybraindev.com'
        }])
        .select()

      if (error) {
        console.error('Hetzner Supabase error:', error)
        return { success: false, error: error.message }
      }

      return { success: true, data }
    } catch (error) {
      console.error('Connection error:', error)
      return { success: false, error: 'Problem s konekcijom na bazu podataka' }
    }
  },

  async getContacts() {
    try {
      const { data, error } = await hetznerSupabase
        .from('mybraindev_contacts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Get contacts error:', error)
      return { success: false, error: error.message }
    }
  }
}

export default hetznerSupabase
