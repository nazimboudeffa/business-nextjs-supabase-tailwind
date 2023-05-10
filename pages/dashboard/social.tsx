import GitHub from '@/components/GitHub'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function Social () {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <GitHub />
    </QueryClientProvider>
    </>
  )
}

export default Social