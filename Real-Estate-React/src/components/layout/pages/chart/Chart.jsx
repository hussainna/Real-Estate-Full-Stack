import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    "Active User": 5000,
  },
  {
    name: 'Feb',
    "Active User": 3000,
  },
  {
    name: 'Mar',
    "Active User": 8000,
  },
  {
    name: 'Apr',
    "Active User": 5000,
  },
  {
    name: 'May',
    "Active User": 7000,
  },
  {
    name: 'Jun',
    "Active User": 4000,
  },
  {
    name: 'Jul',
    "Active User": 6000,
  },
  {
    name: 'Aug',
    "Active User": 5000,
  },
  {
    name: 'Sep',
    "Active User": 7000,
  },
  {
    name: 'Oct',
    "Active User": 2000,
  },
  {
    name: 'Nov',
    "Active User": 6000,
  },
  {
    name: 'Dec',
    "Active User": 4000,
  },
 
];
function Chart() {
  return (
    <div className='chart'>
        <h3 className="chartTitle">Us er Analyses</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#5550bd'/>
                <Line type='monotone' stroke='#5550bd' dataKey='Active User'/>
                <Tooltip/>
                <CartesianGrid strokeDasharray='5 5' stroke='#e0dfdf'/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart