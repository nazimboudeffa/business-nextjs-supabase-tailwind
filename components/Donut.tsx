import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function Donut () {

  const state = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']
  }

  return (
    <div className="donut">
      <Chart options={state.options} series={state.series} type="donut" width="380" />
    </div>
  )
}

export default Donut