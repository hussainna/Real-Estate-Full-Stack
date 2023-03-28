import React from 'react'
import './home.css'
import Featured from '../featured/Featured'
import Chart from '../chart/Chart'
import Widget from '../widget/Widget'
import WidgetLg from '../widgetLg/WidgetLg'
function Home() {
  return (
    <div className='home'>
      <Featured/>
      <Chart/>
      <div className="homeWidget">
        <Widget/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home