import React from 'react'
import './WidgetLg.css'
import User1 from '../../images/pexels-andrea-piacquadio-712513.jpg'
function WidgetLg() {
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetTr">
                <th className="widgetTh">Customers</th>
                <th className="widgetTh">Date</th>
                <th className="widgetTh">Amount</th>
                <th className="widgetTh">Status</th>
            </tr>
            <tr className="widgetTr">
                <td className="widgetTd">
                    <img src={User1} alt="" className='widgetLgName'/>
                    <span className="widgetLgTdTitle">Alla</span>
                </td>
                <td className='widgetDate'>2 jun 2022</td>
                <td className='widgetAmount'>$220.00</td>
                <td className='widgetStateus'><button className='widgetButton'>Approved</button></td>
            </tr>
            <tr className="widgetTr">
                <td className="widgetTd">
                    <img src={User1} alt="" className='widgetLgName'/>
                    <span className="widgetLgTdTitle">Alla</span>
                </td>
                <td className='widgetDate'>2 jun 2022</td>
                <td className='widgetAmount'>$220.00</td>
                <td className='widgetStateus'><button className='widgetButton'>Approved</button></td>
            </tr>
            <tr className="widgetTr">
                <td className="widgetTd">
                    <img src={User1} alt="" className='widgetLgName'/>
                    <span className="widgetLgTdTitle">Alla</span>
                </td>
                <td className='widgetDate'>2 jun 2022</td>
                <td className='widgetAmount'>$220.00</td>
                <td className='widgetStateus'><button className='widgetButton'>Approved</button></td>
            </tr>
        </table>
    </div>
  )
}

export default WidgetLg