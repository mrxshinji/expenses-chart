import React, { useEffect, useState } from 'react';
import barData from '../data.json';
import Bars from './Bars';

export default function Chart() {
    //receive data
    const datas = barData;
    const totalAmount = datas.reduce((total,value) => total + value.amount, 0)

    // init max height for graph
    const [maxHeight, setMaxHeight] = useState(150) 
    // change bar chart max height based on viewport width
    useEffect(() => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if (vw > 500) {
            setMaxHeight(200)
        } else {
            setMaxHeight(150)
        }
    },[])

    // return Chart()
    return (
        <div id="chart">
            <div id="chart-title">
                <h2>Spending - Last 7 days</h2>
            </div>
            <Bars 
                maxHeight={maxHeight}
                datas={datas}
            />
            <hr className="solid" />

            <div id="summary">
                <div id="summary-content">
                    <p>Total this month</p>
                    <h2>${totalAmount}</h2>
                </div>
                <div id="percentage">
                    <p>2.4%</p>
                    <p>from last month</p>
                </div>
            </div>
        </div>
    )
}
// end of Chart
