//import Donut from '../../components/Donut'
import ChartBar from '@/components/ChartBar'
import ChartDonut from '@/components/ChartDonut'
import Navbar from '@/components/Navbar'

function Cryptos() {

  return (
    <>
    <Navbar loggedin />
    <ChartBar />
    <ChartDonut />
    </>
  )
}

export default Cryptos