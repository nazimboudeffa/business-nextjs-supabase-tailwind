import Stats from '@/components/Stats'
import ChartLine from '@/components/ChartLine'
import Sidenav from '@/components/Sidenav'

function Dashboard () {
      
    return (
        <>
        <div className="grid min-h-screen md:grid-cols-[auto_1fr] justify-center gap-4 overflow-hidden p-4">
            <Sidenav />
            <div className="min-h-screen w-full bg-slate-300">
                <Stats />
                <ChartLine />
            </div>
        </div>
        </>
    )
}

export default Dashboard