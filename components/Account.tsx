import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
import { Database } from '../utils/database.types'
type Profiles = Database['public']['Tables']['profiles']['Row']

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<Profiles['username']>(null)
  const [website, setWebsite] = useState<Profiles['website']>(null)
  const [avatar_url, setAvatarUrl] = useState<Profiles['avatar_url']>(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: Profiles['username']
    website: Profiles['website']
    avatar_url: Profiles['avatar_url']
  }) {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <div className="h-screen mx-auto max-w-sm">
        <div className="flex flex-col p-6 rounded shadow bg-white">      
        <div className="form-widget">
          <div className="text-lg mb-3">
            <label htmlFor="email" className="text-black">Email</label>
            <input 
              className="input input-bordered input-primary w-full mb-3"
              id="email" 
              type="text" 
              value={session.user.email} 
              disabled
             />
          </div>
          <div className="text-lg mb-3">
            <label htmlFor="username" className="text-black">Username</label>
            <input
              className="input input-bordered input-primary w-full mb-3"
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="text-lg mb-3">
            <label htmlFor="website" className="text-black">Website</label>
            <input
              className="input input-bordered input-primary w-full mb-3"
              id="website"
              type="url"
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <button
              className="btn btn-primary mb-3"
              onClick={() => updateProfile({ username, website, avatar_url })}
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Update'}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}